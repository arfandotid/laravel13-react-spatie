<?php

namespace App\Http\Controllers\Admin\Wilayah;

use App\Http\Controllers\Controller;
use App\Models\Provinsi;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProvinsiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $provinsi = Provinsi::query()
            ->when(request()->q, function ($query) {
                $query->where('nama', 'like', '%' . request()->q . '%')
                    ->orWhere('kode', 'like', '%' . request()->q . '%');
            })
            ->orderBy('id', 'desc')
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('Admin/Wilayah/Provinsi/Index', compact('provinsi'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'kode' => 'required|unique:provinsi,kode',
            'nama' => 'required'
        ]);

        Provinsi::create([
            'kode' => $request->kode,
            'nama' => $request->nama
        ]);

        return redirect()->route('admin.provinsi.index')->with('success', 'Data berhasil ditambahkan');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'kode' => 'required|unique:provinsi,kode,' . $id,
            'nama' => 'required'
        ]);

        Provinsi::findOrFail($id)->update([
            'kode' => $request->kode,
            'nama' => $request->nama
        ]);

        return redirect()->route('admin.provinsi.index')->with('success', 'Data berhasil diubah');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $provinsi = Provinsi::findOrFail($id);
        $provinsi->delete();

        return redirect()->route('admin.provinsi.index')->with('success', 'Data berhasil dihapus');
    }
}
