<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Cliente extends Model
{
    protected $fillable = [
        'nombres', 'apellidos', 'identificacion', 'razon_social', 'telefono',
        'direccion', 'email'
    ];
}
