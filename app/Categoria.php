<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Categoria extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'codigo','nombre','descripcion',
    ];

    public function subcategorias()
    {
        return $this->hasMany('App\Subcategoria');
    }

}
