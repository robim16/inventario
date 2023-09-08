<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'identificacion','nombres','apellidos',
        'direccion','email','telefono','password', 'role_id', 'slug'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];


    /**
     * @var array
     */
    protected $rules = [
        'imagen'  =>  'required|file|image|mimes:jpeg,png,gif,jpg,webm|max:2048'
    ];

    public function movimientos()
    {
        return $this->hasMany('App\Movimiento');
    }

    public function role()
    {
        return $this->belongsTo('App\Role');
    }

    public function permisos()
    {
        return $this->belongsToMany('App\Permiso');
    }

    /**
     * Obtener todas las imágenes de las referencias.
     */
    public function imagen()
    {
        return $this->morphOne('App\Image', 'imageable');
    }


    public static function boot () {

        parent::boot();


        static::creating(function(User $user) {

            try {

                
                $slug = \Str::slug($user->nombres. " " . $user->apellidos);
                    
                $count = static::whereRaw("slug RLIKE '^{$slug}(-[0-9]+)?$'")->count();
                
                $user->slug = $count ? "{$slug}-{$count}" : $slug;

            } catch (\Exception $e) {
               Log::debug('Error creando el slug del usuario.Error: '.json_encode($e));
            }
            
        });


        static::created(function(User $user) {

            try {
                
              
                $validator = Validator::make(request()->all(), $user->rules);

                DB::beginTransaction();

    
                if (request()->file('imagen')) {
                    
                    $file = request()->file('imagen');

        
                    $fileName = 'imagen-'.time().'.'.$file->getClientOriginalExtension();
        
                    $path = Storage::disk('public')->put("imagenes/users/$user->id/$fileName", $file);
                   
        
                    $user->imagen()->create(['url' => $path]);
                    
                }
    
              

                DB::commit();
                
            } catch (\Exception $e) {

                Log::debug('Error creando el usuario.Error: '.json_encode($e));
                DB::rollBack();
            }
			
		});


       
		static::saving(function(User $user) {
			
			if( ! \App::runningInConsole() ) {

                try {
                   
                    $validator = Validator::make(request()->all(), $user->rules);

                    DB::beginTransaction();

        
                    if (request()->file('imagen')) {
                        
                        $file = request()->file('imagen');

            
                        $fileName = 'imagen-'.time().'.'.$file->getClientOriginalExtension();
            
                        $path = Storage::disk('public')->put("imagenes/users/$user->id/$fileName", $file);
                    
            
                        $user->imagen()->create(['url' => $path]);


                        $imagen = Image::where('imageable_type','App\User')
                            ->where('ñ_id', $user->id)->first();

                        if ($imagen != '') {
                
                            Storage::disk('public')->delete($imagen->url);
                            $imagen->delete();
                        }
                        
                    }
    

                    DB::commit();
                    
                } catch (\Exception $e) {
                    Log::debug('Error editando el usuario.Error: '.json_encode($e));
                    DB::rollBack();
                }

			}
		});
    }
}
