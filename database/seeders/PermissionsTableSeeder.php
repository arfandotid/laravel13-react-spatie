<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;

class PermissionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //permission dashboard
        Permission::create(['name' => 'dashboard.index', 'guard_name' => 'web']);

        //permission users
        Permission::create(['name' => 'users.index', 'guard_name' => 'web']);
        Permission::create(['name' => 'users.create', 'guard_name' => 'web']);
        Permission::create(['name' => 'users.edit', 'guard_name' => 'web']);
        Permission::create(['name' => 'users.delete', 'guard_name' => 'web']);

        //permission roles
        Permission::create(['name' => 'roles.index', 'guard_name' => 'web']);
        Permission::create(['name' => 'roles.create', 'guard_name' => 'web']);
        Permission::create(['name' => 'roles.edit', 'guard_name' => 'web']);
        Permission::create(['name' => 'roles.delete', 'guard_name' => 'web']);

        //permission permissions
        Permission::create(['name' => 'permissions.index', 'guard_name' => 'web']);
        Permission::create(['name' => 'permissions.create', 'guard_name' => 'web']);
        Permission::create(['name' => 'permissions.edit', 'guard_name' => 'web']);
        Permission::create(['name' => 'permissions.delete', 'guard_name' => 'web']);

        //permission settings
        Permission::create(['name' => 'settings.index', 'guard_name' => 'web']);
        Permission::create(['name' => 'settings.update', 'guard_name' => 'web']);

        //permission spesialis
        Permission::create(['name' => 'spesialis.index', 'guard_name' => 'web']);
        Permission::create(['name' => 'spesialis.create', 'guard_name' => 'web']);
        Permission::create(['name' => 'spesialis.edit', 'guard_name' => 'web']);
        Permission::create(['name' => 'spesialis.delete', 'guard_name' => 'web']);

        //permission pelanggan
        Permission::create(['name' => 'pelanggan.index', 'guard_name' => 'web']);
        Permission::create(['name' => 'pelanggan.edit', 'guard_name' => 'web']);
        Permission::create(['name' => 'pelanggan.delete', 'guard_name' => 'web']);

        //permission tukang
        Permission::create(['name' => 'tukang.index', 'guard_name' => 'web']);
        Permission::create(['name' => 'tukang.edit', 'guard_name' => 'web']);
        Permission::create(['name' => 'tukang.delete', 'guard_name' => 'web']);

        //permission order
        Permission::create(['name' => 'provinsi.index', 'guard_name' => 'web']);
        Permission::create(['name' => 'provinsi.create', 'guard_name' => 'web']);
        Permission::create(['name' => 'provinsi.edit', 'guard_name' => 'web']);
        Permission::create(['name' => 'provinsi.delete', 'guard_name' => 'web']);

        Permission::create(['name' => 'kabupaten.index', 'guard_name' => 'web']);
        Permission::create(['name' => 'kabupaten.create', 'guard_name' => 'web']);
        Permission::create(['name' => 'kabupaten.edit', 'guard_name' => 'web']);
        Permission::create(['name' => 'kabupaten.delete', 'guard_name' => 'web']);

        Permission::create(['name' => 'kecamatan.index', 'guard_name' => 'web']);
        Permission::create(['name' => 'kecamatan.create', 'guard_name' => 'web']);
        Permission::create(['name' => 'kecamatan.edit', 'guard_name' => 'web']);
        Permission::create(['name' => 'kecamatan.delete', 'guard_name' => 'web']);
    }
}
