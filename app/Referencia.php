<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Referencia extends Model
{
    protected $fillable = [
        'codigo','nombre', 
        'descripcion','producto_id','peso',
        'tamano',
    ];
}
