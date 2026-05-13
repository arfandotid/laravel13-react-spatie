<?php

namespace Database\Seeders;

use DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SpesialisTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('spesialis')->insert([
            ['nama' => 'Tukang Kayu'],
            ['nama' => 'Tukang Bangunan'],
            ['nama' => 'Tukang Cat'],
            ['nama' => 'Tukang Ledeng'],
            ['nama' => 'Tukang Listrik'],
            ['nama' => 'Tukang Las'],
            ['nama' => 'Tukang AC'],
            ['nama' => 'Tukang Kunci'],
        ]);
    }
}
