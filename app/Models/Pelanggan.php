<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Attributes\Table;

#[Table('pelanggan')]
#[Fillable([
    'nama',
    'no_hp',
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
    public function kabupaten()
    {
        return $this->belongsTo(Kabupaten::class, 'kode_provinsi', 'kode');
    }

    public function kecamatan()
    {
        return $this->belongsTo(Kecamatan::class, 'kode_kecamatan', 'kode');
    }

    public function provinsi()
    {
        return $this->belongsTo(Provinsi::class, 'kode_provinsi', 'kode');
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
