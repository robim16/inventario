<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Movimiento extends Model
{
    protected $fillable = [
        'inventario_id','tipo_movimiento', 
        'cantidad', 'user_id', 'inventario_anterior',
        'inventario_nuevo', 'fecha'
    ];

    public function inventario()
    {
        return $this->belongsTo('App\Inventario');
    }

    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
