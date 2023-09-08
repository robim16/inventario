<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;
use OwenIt\Auditing\Contracts\Auditable;

class Referencia extends Model implements Auditable
{
    use SoftDeletes;
    use \OwenIt\Auditing\Auditable;


    protected $fillable = [
        'codigo','codigo_barras','nombre', 
        'descripcion','producto_id', 'tamano','peso', 'modelo'

    ];
    

    public function producto()
    {
        return $this->belongsTo('App\Producto');
    }


    public function precios()
    {
        return $this->hasMany('App\Precio');
    }


    public function inventario()
    {
        return $this->hasOne('App\Inventario');
    }


    /**
     * Obtener todas las imágenes de las referencias.
     */
    public function imagenes()
    {
        return $this->morphMany('App\Image', 'imageable');
    }
}

