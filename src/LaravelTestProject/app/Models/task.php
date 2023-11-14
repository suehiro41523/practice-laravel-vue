<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;
    // 数あるデータの中からどのデータが書き換え可能なのか。idは書き換え不可
    protected $fillable = ['name', 'content'];
}
