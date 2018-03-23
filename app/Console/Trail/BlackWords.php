<?php

/**
 * Created by PhpStorm.
 * User: yuistack
 * Date: 2018/1/2
 * Time: 下午8:49
 */

namespace App\Console\Trail;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Redis;

class BlackWords extends Command
{
    protected $filename = 'words.txt';

    protected $cacheKey = 'blackwords';
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'BlackWords';
    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'write black words';
    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $path = base_path() . '/storage/app/' . $this->filename;
        $data = Redis::LRANGE($this->cacheKey, 0, -1);

        if (empty($data))
        {
            $keys = $this->readKeysFromFile($path);
            Redis::RPUSH($this->cacheKey, $keys);
        }
        else
        {
            $this->syncWordsFromCache($data, $path);
        }

        $resTrie = trie_filter_new();
        $fp = fopen($path, 'r');
        if ( ! $fp)
        {
            return;
        }

        while ( ! feof($fp))
        {
            $word = fgets($fp, 1024);
            if ( ! empty($word))
            {
                trie_filter_store($resTrie, $word);
            }
        }

        trie_filter_save($resTrie,  base_path() . '/app/Http/Services/Trial/' . 'blackword.tree');
        return;
    }

    protected function readKeysFromFile($path)
    {
        if (!file_exists($path))
        {
            return [];
        }

        $fp = fopen($path, 'r');
        $words = [];
        while( ! feof($fp))
        {
            if ($line = rtrim(fgets($fp))) {
                $words[] = $line;
            }
        }
        fclose($fp);

        return $words;
    }

    protected function syncWordsFromCache($keys, $path)
    {
        $fp = fopen($path, 'w');

        if ( ! $fp)
        {
            return;
        }

        foreach ($keys as $v)
        {
            fwrite($fp, "$v\r\n");
        }
        fclose($fp);
    }
}