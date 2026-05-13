<?php
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'role:admin'])
    ->prefix('admin')
    ->name('admin.')
    ->group(function () {
    // route dashboard
    Route::get('/dashboard', [App\Http\Controllers\Admin\DashboardController::class, 'index'])->name('dashboard');

    // route settings
    Route::get('/settings', [App\Http\Controllers\Admin\SettingController::class, 'index'])->name('settings.index');
    Route::put('/settings', [App\Http\Controllers\Admin\SettingController::class, 'update'])->name('settings.update');
    Route::delete('/settings/delete-logo', [App\Http\Controllers\Admin\SettingController::class, 'deleteLogo'])->name('settings.delete-logo');

    // route resource untuk permission
    Route::resource('/permissions', App\Http\Controllers\Admin\PermissionController::class);

    // route resource untuk role
    Route::resource('/roles', App\Http\Controllers\Admin\RoleController::class);

    // route resource untuk user
    Route::resource('/users', App\Http\Controllers\Admin\UserController::class);

    // route resource untuk spesialis
    Route::resource('/spesialis', App\Http\Controllers\Admin\Master\SpesialisController::class);

    // route resource untuk tukang
    Route::resource('/tukang', App\Http\Controllers\Admin\Master\TukangController::class);
    
    // route resource untuk pelanggan
    Route::resource('/pelanggan', App\Http\Controllers\Admin\Master\PelangganController::class);
});