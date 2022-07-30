<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Producto extends Model
{
    protected $fillable = [
        'codigo','nombre', 
        'descripcion', 'subcategoria_id', 'marca_id',
    ];

    public function subcategoria()
    {
        return $this->belongsTo('App\Subcategoria');
    }
}
