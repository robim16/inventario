<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Precio extends Model
{
    protected $fillable = [
        'referencia_id','valor', 
    ];
}
