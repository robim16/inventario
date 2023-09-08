<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateReferenciaSalidaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('referencia_salida', function (Blueprint $table) {
            $table->id();
            $table->integer('cantidad');
            $table->decimal('valor_unitario', 10, 2);
            $table->decimal('total_referencia', 10, 2);
            $table->unsignedBigInteger('referencia_id');
            $table->foreign('referencia_id')->references('id')->on('referencias')->onDelete('cascade');
            $table->unsignedBigInteger('salida_id');
            $table->foreign('salida_id')->references('id')->on('salidas')->onDelete('cascade');
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
        Schema::dropIfExists('referencia_salida');
    }
}
