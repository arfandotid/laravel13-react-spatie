<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Attributes\Table;

#[Table('pelanggan')]
#[Fillable([
    'nama',
    'alamat',
    'kode_provinsi',
    'kode_kabupaten',
    'kode_kecamatan',
    'latitude',
    'longitude',
    'nama_bank',
    'no_rekening',
    'user_id',
])]

class Pelanggan extends Model
{
    //
}
