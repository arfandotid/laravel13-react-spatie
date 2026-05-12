<?php

use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'role:pelanggan'])->group(function () {
    Route::get('/dashboard', [App\Http\Controllers\Pelanggan\DashboardController::class, 'index'])->name('dashboard');
});
