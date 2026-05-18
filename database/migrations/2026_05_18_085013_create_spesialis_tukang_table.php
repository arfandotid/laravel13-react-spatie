<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('spesialis_tukang', function (Blueprint $table) {
            $table->id();
            $table->foreignId('tukang_id')->constrained('tukang')->cascadeOnDelete();
            $table->foreignId('spesialis_id')->constrained('spesialis')->cascadeOnDelete();
            $table->integer('harga_per_hari');

            $table->unique(['tukang_id', 'spesialis_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('spesialis_tukang');
    }
};
