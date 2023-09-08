<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Proveedore extends Model
{
    protected $fillable = [
        'nombres', 'apellidos', 'identificacion', 'razon_social', 'telefono',
        'direccion', 'email'
    ];
}
