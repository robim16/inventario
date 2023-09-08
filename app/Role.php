<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use OwenIt\Auditing\Contracts\Auditable;

class Role extends Model implements Auditable
{

    use SoftDeletes;
    use \OwenIt\Auditing\Auditable;

    protected $fillable = [
        'codigo','nombre', 
        'descripcion', 
    ];

    public function users()
    {
        return $this->hasOne('App\User');
    }

    public function permisos()
    {
        return $this->belongsToMany('App\Permiso');
    }
}
