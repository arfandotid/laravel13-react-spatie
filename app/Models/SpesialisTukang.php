<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Attributes\Table;

#[Table(name: 'spesialis_tukang', timestamps: false)]
#[Fillable(['tukang_id', 'spesialis_id', 'harga_per_hari'])]
class SpesialisTukang extends Model
{
    public function tukang()
    {
        return $this->belongsTo(Tukang::class);
    }

    public function spesialis()
    {
        return $this->belongsTo(Spesialis::class);
    }
}
