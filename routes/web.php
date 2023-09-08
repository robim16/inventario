<?php

use App\Http\Controllers\Admin\EntradaController;
use App\Http\Controllers\Admin\MarcaController;
// use App\Http\Controllers\Admin\ProductoController;
// use App\Http\Controllers\Admin\ReferenciaController;
use App\Http\Controllers\Admin\SubcategoriaController;
// use App\Http\Controllers\Admin\UserController;
// use App\Http\Controllers\Admin\RolController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');


Route::namespace('Admin')->group(function () {
    
    Route::prefix('admin')->group(function () {

        Route::get('/', 'AdminController@index')->name('admin');
       
        Route::resource('/categorias', CategoriaController::class);


        Route::get('/subcategorias/json', [SubcategoriaController::class, 'getSubcategorias']);

        Route::resource('/subcategorias', SubcategoriaController::class);


        Route::get('/marcas/json', [MarcaController::class, 'getMarcas']);

        Route::resource('/marcas', MarcaController::class);


        Route::get('/productos/json', 'ProductoController@getProductos');

        Route::resource('/productos', ProductoController::class);

        

        // Route::get('/referencias/validate', [ReferenciaController::class, 'validate_name']);
        Route::get('/referencias/validate', 'ReferenciaController@validate_name');

        Route::resource('/referencias', 'ReferenciaController');


        Route::resource('/roles', RolController::class);

        Route::resource('/usuarios', UserController::class);

        // Route::resource('/entradas', EntradaController::class);

        Route::get('/entradas', [EntradaController::class, 'index'])->name('entradas.index');

        Route::get('/entradas/create', [EntradaController::class, 'create'])->name('entradas.create');


        Route::get('logs', [\Rap2hpoutre\LaravelLogViewer\LogViewerController::class, 'index']);

       
    });

});

