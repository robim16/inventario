<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Producto;
use App\Referencia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

class ReferenciaController extends Controller
{

        /**
     * Create a new controller instance.
     *
     * @return void
     */
        public function __construct()
        {
            $this->middleware('auth');
        }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $referencias = Referencia::with(['producto', 'imagenes:id,url,imageable_id'])->get();

        return view('admin.referencias.index', compact('referencias'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $productos = Producto::orderBy('nombre')->get();

        return view('admin.referencias.create', compact('productos'));
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


            $validation = $request->validate([
                'imagen'  =>  'required|file|image|mimes:jpeg,png,gif,jpg,webm|max:2048'
            ]);



            $validate = $validation['imagen'];

            DB::beginTransaction();

            $referencia = Referencia::create($request->all());

        

            $paths = [];

            $files = $request->file('imagen');

            //  dd($files);

            foreach ($files as $file)
            {
                $fileName = 'imagen-'.time().'.'.$file->getClientOriginalExtension();

                

                $paths[] = Storage::disk('public')->put("imagenes/referencias/$referencia->nombre/$fileName", $file);
            }


            $referencia->imagenes()->createMany(array_map(function ($path) {
                return ['url' => $path];
            }, $paths));
            
            DB::commit();

            session()->flash('message', ['success', ("Se ha creado la referencia")]);

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
    public function edit(Referencia $referencia)
    {
        return view('admin.referencias.edit', compact('referencia'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Referencia $referencia)
    {
        try {

            $validation = $request->validate([
                'imagen'  =>  'required|file|image|mimes:jpeg,png,gif,jpg,webp|max:2048'
            ]);
    
    
    
            $validate = $validation['imagen'];
    
            DB::beginTransaction();
    
           
            
            $updated = $referencia->update($request->all());
    
            $paths = [];
    
            $files = $request->file('imagen');
    
            //  dd($files);
    
            foreach ($files as $file)
            {
                $fileName = 'imagen-'.time().'.'.$file->getClientOriginalExtension();
    
                $paths[] = Storage::disk('public')->put("imagenes/referencias/$referencia->nombre/$fileName", $file);
            }
    
    
            $referencia->imagenes()->createMany(array_map(function ($path) {
                return ['url' => $path];
            }, $paths));

            
            DB::commit();

            session()->flash('message', ['success', ("Se ha editado el referencia")]);
            
            return redirect()->back();

        } catch (\Exception $e) {
            Log::debug('Ha ocurrido un error.Error: '.json_encode($e));
            DB::rollBack();

        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Referencia $referencia)
    {
        try {

            $referencia->delete();

            session()->flash('message', ['success', ("Se ha eliminado la referencia")]);

            return redirect()->route('referencias.index');

        } catch (\Exception $e) {
            return $e;

            session()->flash('message', ['warning', ("ha ocurrido un error")]);
        }
    }


    public function validate_name(Request $request)
    {

        $nombre = $request->nombre;

        $modelo = $request->modelo;


        $referencias = Referencia::whereRaw("nombre LIKE '%$nombre'")
        ->whereRaw("modelo LIKE '%$modelo'")
        ->get();

        
        return Response()->json($referencias);
    }
}
