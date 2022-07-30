<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Subcategoria extends Model
{
    protected $fillable = [
        'codigo','nombre', 
        'descripcion', 'categoria_id', 
    ];

    public function categoria()
    {
        return $this->belongsTo('App\Categoria');
    }

    public function productos()
    {
        return $this->hasMany('App\Producto');
    }
}
