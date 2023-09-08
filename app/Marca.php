<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Marca extends Model
{
    use SoftDeletes;
    
    protected $fillable = [
        'codigo','nombre', 'descripcion',
    ];


    public function productos()
    {
        return $this->hasMany('App\Producto');
    }
}
