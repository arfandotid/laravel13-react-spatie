<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Attributes\Table;

#[Table('provinsi')]
#[Fillable(['kode', 'nama'])]
class Provinsi extends Model
{
    //
}
