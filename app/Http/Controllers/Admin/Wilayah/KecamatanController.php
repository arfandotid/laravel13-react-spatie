<?php

namespace App\Http\Controllers\Admin\Wilayah;

use App\Http\Controllers\Controller;
use App\Models\Kecamatan;
use Illuminate\Http\Request;
use Inertia\Inertia;

class KecamatanController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $kecamatan = Kecamatan::query()
            ->when(request()->q, function ($query) {
                $query->where('nama', 'like', '%' . request()->q . '%')
                    ->orWhere('kode', 'like', '%' . request()->q . '%');
            })
            ->orderBy('id', 'desc')
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('Admin/Wilayah/Kecamatan/Index', compact('kecamatan'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'kode' => 'required|unique:kecamatan,kode',
            'nama' => 'required'
        ]);

        Kecamatan::create([
            'kode' => $request->kode,
            'nama' => $request->nama
        ]);

        return redirect()->route('admin.kecamatan.index')->with('success', 'Data berhasil ditambahkan');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'kode' => 'required|unique:kecamatan,kode,' . $id,
            'nama' => 'required'
        ]);

        Kecamatan::findOrFail($id)->update([
            'kode' => $request->kode,
            'nama' => $request->nama
        ]);

        return redirect()->route('admin.kecamatan.index')->with('success', 'Data berhasil diubah');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $kecamatan = Kecamatan::findOrFail($id);
        $kecamatan->delete();

        return redirect()->route('admin.kecamatan.index')->with('success', 'Data berhasil dihapus');
    }
}
