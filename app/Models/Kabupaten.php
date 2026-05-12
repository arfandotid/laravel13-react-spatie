<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Attributes\Table;

#[Table('kabupaten')]
#[Fillable(['kode', 'nama'])]

class Kabupaten extends Model
{
    //
}
