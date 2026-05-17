<?php

use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'role:pelanggan'])->group(function () {
    Route::get('/dashboard', [App\Http\Controllers\Pelanggan\DashboardController::class, 'index'])->name('dashboard');
    
    // Informasi Akun
    Route::get('/informasi-akun', [App\Http\Controllers\Pelanggan\InformasiAkunController::class, 'index'])->name('informasi-akun.index');
    Route::put('/informasi-akun', [App\Http\Controllers\Pelanggan\InformasiAkunController::class, 'update'])->name('informasi-akun.update');
});
