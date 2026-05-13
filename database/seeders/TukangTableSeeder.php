<?php

namespace Database\Seeders;

use DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TukangTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('tukang')->insert([
            [
                'nama' => 'Tukang',
                'kode_provinsi' => '32',
                'kode_kabupaten' => '32.01',
                'kode_kecamatan' => '32.01.15',
                'is_verified' => 1,
                'user_id' => '2',
            ],
        ]);
    }
}
