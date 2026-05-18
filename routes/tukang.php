<?php

use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'role:tukang'])
    ->prefix('tukang')
    ->name('tukang.')
    ->group(function () {
        Route::get('/dashboard', [App\Http\Controllers\Tukang\DashboardController::class, 'index'])->name('dashboard');

        // informasi akun
        Route::get('/informasi-akun', [App\Http\Controllers\Tukang\InformasiAkunController::class, 'index'])->name('informasi-akun.index');
        Route::put('/informasi-akun', [App\Http\Controllers\Tukang\InformasiAkunController::class, 'update'])->name('informasi-akun.update');

        // keahlian
        Route::resource('keahlian', App\Http\Controllers\Tukang\KeahlianController::class);
});
