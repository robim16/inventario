<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use OwenIt\Auditing\Contracts\Auditable;
use Illuminate\Database\Eloquent\SoftDeletes;

class Producto extends Model implements Auditable
{
    
    use SoftDeletes;
    use \OwenIt\Auditing\Auditable;

    protected $fillable = [
        'codigo','nombre', 
        'descripcion', 'subcategoria_id', 'marca_id', 'codigo_barras',
    ];

    public function subcategoria()
    {
        return $this->belongsTo('App\Subcategoria');
    }

    public function marca()
    {
        return $this->belongsTo('App\Marca');
    }

    public function referencias()
    {
        return $this->hasMany('App\Referencia');
    }
}
