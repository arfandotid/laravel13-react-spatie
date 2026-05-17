<?php

namespace App\Http\Controllers\Pelanggan;

use App\Http\Controllers\Controller;
use App\Models\Kabupaten;
use App\Models\Kecamatan;
use App\Models\Provinsi;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class InformasiAkunController extends Controller
{
    public function index()
    {
        $pelanggan = Auth::user()->pelanggan;
        $provinsi = Provinsi::all();
        $kabupaten = Kabupaten::all();
        $kecamatan = Kecamatan::all();

        return Inertia::render("Pelanggan/InformasiAkun/Index", compact(
            "pelanggan",
            "provinsi",
            "kabupaten",
            "kecamatan"
        ));
    }

    public function update(Request $request)
    {
        $request->validate([
            'nama' => 'required',
            'kode_provinsi' => 'required',
            'kode_kabupaten' => 'required',
            'kode_kecamatan' => 'required',
            'alamat' => 'required',
            'nama_bank' => 'required',
            'no_rekening' => 'required|numeric',
            'latitude' => 'required|numeric',
            'longitude' => 'required|numeric',
        ]);
    
        $user_id = Auth::user()->id;
        $user = User::with('pelanggan')->findOrFail($user_id);
        
        $data = [
            'nama' => $request->nama,
            'kode_provinsi' => $request->kode_provinsi,
            'kode_kabupaten' => $request->kode_kabupaten,
            'kode_kecamatan' => $request->kode_kecamatan,
            'alamat' => $request->alamat,
            'nama_bank' => $request->nama_bank,
            'no_rekening' => $request->no_rekening,
            'latitude' => $request->latitude,
            'longitude' => $request->longitude,
        ];

        $user->pelanggan->update($data);

        return redirect()->to("/informasi-akun")->with("success", "Informasi akun berhasil diupdate");
    }
}
