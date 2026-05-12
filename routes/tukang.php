<?php

use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'role:tukang'])
    ->prefix('tukang')
    ->name('tukang.')
    ->group(function () {
        Route::get('/dashboard', [App\Http\Controllers\Tukang\DashboardController::class, 'index'])->name('dashboard');
});
