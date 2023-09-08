<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateConsecutivosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('consecutivos', function (Blueprint $table) {
            $table->id();
            $table->string('prefijo');
            $table->integer('consecutivo_inicial');
            $table->integer('consecutivo_final');
            $table->integer('consecutivo_actual');
            $table->enum('tipo', ['entrada', 'salida']);
            $table->enum('estado', ['activo', 'inactivo']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('consecutivos');
    }
}
