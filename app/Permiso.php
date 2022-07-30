<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Permiso extends Model
{
    protected $fillable = [
        'codigo','descripcion', 
    ];
}
