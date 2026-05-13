<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Attributes\Table;

#[Table('tukang')]
#[Fillable([
    'nama',
    'kode_provinsi',
    'kode_kabupaten',
    'kode_kecamatan',
    'dokumen_pendukung',
    'is_verified',
    'nama_bank',
    'no_rekening',
    'user_id',
])]
class Tukang extends Model
{
    //
}
