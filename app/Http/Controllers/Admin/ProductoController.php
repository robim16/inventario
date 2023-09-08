<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Marca;
use App\Subcategoria;
use App\Producto;
use Illuminate\Support\Facades\Log;

class ProductoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $productos = Producto::with(['marca:id,nombre', 'subcategoria:id,nombre'])
            ->orderBy('created_at')->get();

        return view('admin.productos.index', compact('productos'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $marcas = Marca::orderBy('nombre')->get();

        $subcategorias = Subcategoria::orderBy('nombre')->get();

        return view('admin.productos.create', compact('marcas', 'subcategorias'));
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

            $producto = Producto::create($request->all());

            session()->flash('message', ['success', ("Se ha creado el producto")]);
    
            return redirect()->back();
        } catch (\Exception $e) {
            
            return $e;
            
            Log::debug('Ha ocurrido un error.Error: '.json_encode($e));
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
    public function edit(Producto $producto)
    {
        $marcas = Marca::orderBy('nombre')->get();

        $subcategorias = Subcategoria::orderBy('nombre')->get();

        $producto->load(['marca', 'subcategoria']);

        return view('admin.productos.edit', compact('producto', 'marcas', 'subcategorias'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Producto $producto)
    {
        try {
            
            $producto = $producto->update($request->all());
    
            session()->flash('message', ['success', ("Se ha editado el producto")]);
    
            return redirect()->back();

        } catch (\Exception $e) {
            Log::debug('Ha ocurrido un error.Error: '.json_encode($e));
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Producto $producto)
    {
        try {

            $producto->delete();

            session()->flash('message', ['success', ("Se ha eliminado la producto")]);

            return redirect()->route('productos.index');

        } catch (\Exception $e) {
            return $e;

            session()->flash('message', ['warning', ("ha ocurrido un error")]);
        }
    }


    public function getProductos()
    {
        $productos = Producto::with('marca:id,nombre')->orderBy('id')->get();

        return Response()->json($productos);
    }
}
