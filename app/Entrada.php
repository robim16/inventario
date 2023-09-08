<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Entrada extends Model
{
    protected $fillable = [
        'prefijo', 'consecutivo', 'proveedore_id', 'total'
    ];
}
