<?php

namespace Database\Seeders;

use DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PelangganTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('pelanggan')->insert([
            [
                'nama' => 'Pelanggan',
                'alamat' => 'Ciampea',
                'kode_provinsi' => '32',
                'kode_kabupaten' => '32.01',
                'kode_kecamatan' => '32.01.15',
                'latitude' => '-6.55656565',
                'longitude' => '106.55656565',
                'user_id' => '3',
            ],
        ]);
    }
}
