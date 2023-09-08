<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Precio extends Model
{
    protected $fillable = [
        'referencia_id','valor', 
    ];

    public function referencia()
    {
        return $this->belongsTo('App\Referencia');
    }
}
