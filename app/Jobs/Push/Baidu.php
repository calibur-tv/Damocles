<?php

namespace App\Jobs\Push;

use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;

class Baidu implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $url;
    protected $type;
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($url, $type = 'site')
    {
        $this->url = $url;
        $this->type = $type;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        if (config('app.env') !== 'production')
        {
            return;
        }

        $type = in_array($this->type, ['urls', 'update', 'del']) ? $this->type : 'urls';
        $api = 'http://data.zz.baidu.com/' . $type . '?site=https://www.calibur.tv&token=' . config('website.push_baidu_token');

        $ch = curl_init();
        curl_setopt_array($ch, array(
            CURLOPT_URL => $api,
            CURLOPT_POST => true,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_POSTFIELDS => config('website.url') . $this->url,
            CURLOPT_HTTPHEADER => array('Content-Type: text/plain'),
        ));
        curl_exec($ch);
    }
}
