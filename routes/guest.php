<?php

use Illuminate\Support\Facades\Route;

Route::middleware(['guest'])->group(function () {
    Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
    Route::get('/about', [App\Http\Controllers\AboutController::class, 'index'])->name('about');
});