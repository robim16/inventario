<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Role;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $usuarios = User::with('role:id,nombre')->get();

        return view('admin.usuarios.index', compact('usuarios'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $roles = Role::all(['id', 'nombre']);

        return view('admin.usuarios.create', compact('roles'));

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {


            // $validation = $request->validate([
            //     'imagen'  =>  'required|file|image|mimes:jpeg,png,gif,jpg,webm|max:2048'
            // ]);


            // $validate = $validation['imagen'];

            DB::beginTransaction();

            $request->merge([
                'password' => Hash::make($request->password)
            ]);

            $user = User::create($request->all());


            // $file = $request->file('imagen');

            
            // $fileName = 'imagen-'.time().'.'.$file->getClientOriginalExtension();

            // $path = Storage::disk('public')->put("imagenes/users/$user->id/$fileName", $file);
            

            // $user->imagen()->create(['url' => $path]);
            
            DB::commit();

            session()->flash('message', ['success', ("Se ha creado el usuario")]);

            return redirect()->back();

        } catch (\Exception $e) {

            Log::debug('Ha ocurrido un error.Error: '.json_encode($e));
            
            DB::rollBack();

            return $e;
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(User $usuario)
    {
        $roles = Role::all(['id', 'nombre']);

        return view('admin.usuarios.edit', compact('usuario', 'roles'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $usuario)
    {
        try {

            if ($request->password != $usuario->password) {
                $request->merge([
                    'password' => Hash::make($request->password)
                ]);
            }
         
            $usuario = $usuario->update($request->all());
            
            session()->flash('message', ['success', ("Se ha editado el usuario")]);
            
            return redirect()->back();

        } catch (\Exception $e) {

            Log::debug('Ha ocurrido un error editando el usuario.Error: '.json_encode($e));
            return $e;
        }
        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
