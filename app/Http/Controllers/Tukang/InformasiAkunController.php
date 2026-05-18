<?php

namespace App\Http\Controllers\Tukang;

use App\Http\Controllers\Controller;
use App\Models\Kabupaten;
use App\Models\Kecamatan;
use App\Models\Provinsi;
use App\Models\User;
use App\Traits\FileUploadTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class InformasiAkunController extends Controller
{
    use FileUploadTrait;
    public function index()
    {
        $tukang = Auth::user()->tukang;
        $provinsi = Provinsi::all();
        $kabupaten = Kabupaten::all();
        $kecamatan = Kecamatan::all();

        return Inertia::render("Tukang/InformasiAkun/Index", compact(
            "tukang",
            "provinsi",
            "kabupaten",
            "kecamatan"
        ));
    }

    public function update(Request $request)
    {
        $request->validate([
            'nama' => 'required',
            'no_hp' => 'required|numeric',
            'kode_provinsi' => 'required',
            'kode_kabupaten' => 'required',
            'kode_kecamatan' => 'required',
            'dokumen_pendukung' => 'nullable|file|max:2048|mimes:pdf,jpg,png',
            'nama_bank' => 'required',
            'no_rekening' => 'required|numeric',
        ]);

        $user_id = Auth::user()->id;
        $user = User::with('tukang')->findOrFail($user_id);

        $data = [
            'nama' => $request->nama,
            'no_hp' => $request->no_hp,
            'kode_provinsi' => $request->kode_provinsi,
            'kode_kabupaten' => $request->kode_kabupaten,
            'kode_kecamatan' => $request->kode_kecamatan,
            'nama_bank' => $request->nama_bank,
            'no_rekening' => $request->no_rekening,
        ];

       if ($request->hasFile('dokumen_pendukung')) {
            $data['dokumen_pendukung'] = $this->uploadFile($request, 'dokumen_pendukung', 'uploads/dokumen-tukang');
        }

        $user->tukang->update($data);

        return redirect()->to("/tukang/informasi-akun")->with("success", "Informasi akun berhasil diupdate");
    }
}
