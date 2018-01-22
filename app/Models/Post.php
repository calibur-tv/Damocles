<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $fillable = [
        'title',            // 帖子标题，只有 1 楼才有标题,
        'content',          // 帖子内容，富文本
        'user_id',          // 帖子作者的 id
        'bangumi_id',       // 帖子所属番剧的 id
        'parent_id',        // 如果帖子不是 1 楼，则 parent_id 是一楼的 id，否则就是 0
        'comment_count',    // 如果是 1 楼，就是回帖数量，否则就是回复数量
        'like_count',       // 喜欢或点赞的数量
        'target_user_id',   // 回复的用户id
        'desc',             // content 的纯文本，最多 200 个字
        'state',            // 帖子状态，0 待审，1 用户删除，2 楼主删除, 3 系统审核通过，4 人工审核中，5 系统删除，6 审核员删除，7 审核员通过
        'view_count',       // 帖子的阅读数
        'floor_count',      // 楼层数
    ];
}
