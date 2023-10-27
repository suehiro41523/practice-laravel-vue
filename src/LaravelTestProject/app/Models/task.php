<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;
    // taskと Modelクラスからアクセス可能？
    protected $fillable = ['name', 'slug'];
}
