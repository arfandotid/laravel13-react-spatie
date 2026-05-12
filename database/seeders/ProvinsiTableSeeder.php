<?php

namespace Database\Seeders;

use DB;
use Illuminate\Support\Facades\File;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProvinsiTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $csvFile = database_path('seeders/csv/provinsi.csv');

        if (!File::exists($csvFile)) {
            $this->command->error("File CSV tidak ditemukan: {$csvFile}");
            return;
        }

        $data = array_map('str_getcsv', file($csvFile));
        $insertData = [];

        foreach ($data as $row) {
            $id   = isset($row[0]) ? trim($row[0]) : null;
            $name = isset($row[1]) ? trim($row[1]) : null;

            if ($id && $name) {
                $insertData[] = [
                    'kode'   => $id,
                    'nama' => $name,
                ];
            }
        }

        // Masukkan dengan batch 1000 menggunakan upsert (agar semua baris masuk)
        foreach (array_chunk($insertData, 1000) as $batch) {
            DB::table('provinsi')->upsert(
                $batch,
                ['kode'],       // kolom unik untuk update kalau sudah ada
                ['nama']      // kolom yang diupdate jika duplikat
            );
        }

        $this->command->info("Seeder provinsi selesai. Total data diproses: " . count($insertData));
    }
}
