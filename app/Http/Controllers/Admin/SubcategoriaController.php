<?php

namespace App\Http\Controllers\Admin;

use App\Categoria;
use App\Http\Controllers\Controller;
use App\Subcategoria;
use Illuminate\Http\Request;

class SubcategoriaController extends Controller
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
        $subcategorias = Subcategoria::with('categoria:id,nombre')->orderBy('created_at')->get();

        return view('admin.subcategorias.index', compact('subcategorias'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $categorias = Categoria::orderBy('nombre')->get();

        return view('admin.subcategorias.create', compact('categorias'));   
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // dd($request);
        $subcategoria = Subcategoria::create($request->all());

        session()->flash('message', ['success', ("Se ha creado la subcategoría")]);

        return redirect()->back();
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
    public function edit(Subcategoria $subcategoria)
    {
        $categorias = Categoria::orderBy('nombre')->get();

        return view('admin.subcategorias.edit', compact('subcategoria', 'categorias'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Subcategoria $subcategoria)
    {
        $subcategoria = $subcategoria->update($request->all());

        session()->flash('message', ['success', ("Se ha editado la subcategoría")]);

        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Subcategoria $subcategoria)
    {
        try {

            $subcategoria->delete();

            session()->flash('message', ['success', ("Se ha eliminado la subcategoría")]);

            return redirect()->route('subcategorias.index');

        } catch (\Exception $e) {
            return $e;

            session()->flash('message', ['warning', ("ha ocurrido un error")]);
        }
    }


    public function getSubcategorias()
    {
        $subcategorias = Subcategoria::orderBy('id')->get();

        return Response()->json($subcategorias);
    }
}
