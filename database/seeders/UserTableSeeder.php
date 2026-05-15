<?php

namespace Database\Seeders;

use App\Models\Pelanggan;
use App\Models\Tukang;
use App\Models\User;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // ADMIN
        $admin = User::create([
            'name'      => 'Administrator',
            'email'     => 'admin@gmail.com',
            'username'  => 'admin',
            'password'  => bcrypt('password'),
        ]);

        // role admin
        $adminRole = Role::find(1);

        // semua permission untuk admin
        $permissions = Permission::all();
        $adminRole->syncPermissions($permissions);

        // assign role admin ke user
        $admin->assignRole($adminRole);


        // TUKANG
        $tukang = User::create([
            'name'      => 'Tukang',
            'email'     => 'tukang@gmail.com',
            'username'  => 'tukang',
            'password'  => bcrypt('password'),
        ]);

        $tukangRole = Role::find(2);

        // assign role saja, tanpa permission
        $tukang->assignRole($tukangRole);

        // create tukang
        Tukang::create([
            'nama' => $tukang->name,
            'user_id' => $tukang->id,
        ]);

        // PELANGGAN
        $pelanggan = User::create([
            'name'      => 'Pelanggan',
            'email'     => 'pelanggan@gmail.com',
            'username'  => 'pelanggan',
            'password'  => bcrypt('password'),
        ]);

        $pelangganRole = Role::find(3);

        // assign role saja, tanpa permission
        $pelanggan->assignRole($pelangganRole);

        // create pelanggan
        Pelanggan::create([
            'nama' => $pelanggan->name,
            'user_id' => $pelanggan->id,
        ]);
    }
}
