<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Inventario extends Model
{
     /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'cantidad','referencia_id',
    ];

}
