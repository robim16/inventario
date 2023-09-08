<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEntradaReferenciaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('entrada_referencia', function (Blueprint $table) {
            $table->id();
            $table->integer('cantidad');
            $table->decimal('valor_unitario', 10, 2);
            $table->decimal('total_referencia', 10, 2);
            $table->unsignedBigInteger('entrada_id');
            $table->foreign('entrada_id')->references('id')->on('entradas')->onDelete('cascade');
            $table->unsignedBigInteger('referencia_id');
            $table->foreign('referencia_id')->references('id')->on('referencias')->onDelete('cascade');
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
        Schema::dropIfExists('entrada_referencia');
    }
}
