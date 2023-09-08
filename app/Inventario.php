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


    public function referencia()
    {
        return $this->belongsTo('App\Referencia');
    }

    public function movimientos()
    {
        return $this->hasMany('App\Movimiento');
    }

}
