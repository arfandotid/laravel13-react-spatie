<?php

namespace App\Http\Controllers\Admin\Wilayah;

use App\Http\Controllers\Controller;
use App\Models\Kabupaten;
use Illuminate\Http\Request;
use Inertia\Inertia;

class KabupatenController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $kabupaten = Kabupaten::query()
            ->when(request()->q, function ($query) {
                $query->where('nama', 'like', '%' . request()->q . '%')
                    ->orWhere('kode', 'like', '%' . request()->q . '%');
            })
            ->orderBy('id', 'desc')
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('Admin/Wilayah/Kabupaten/Index', compact('kabupaten'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'kode' => 'required|unique:kabupaten,kode',
            'nama' => 'required'
        ]);

        Kabupaten::create([
            'kode' => $request->kode,
            'nama' => $request->nama
        ]);

        return redirect()->route('admin.kabupaten.index')->with('success', 'Data berhasil ditambahkan');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'kode' => 'required|unique:kabupaten,kode,' . $id,
            'nama' => 'required'
        ]);

        Kabupaten::findOrFail($id)->update([
            'kode' => $request->kode,
            'nama' => $request->nama
        ]);

        return redirect()->route('admin.kabupaten.index')->with('success', 'Data berhasil diubah');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $kabupaten = Kabupaten::findOrFail($id);
        $kabupaten->delete();

        return redirect()->route('admin.kabupaten.index')->with('success', 'Data berhasil dihapus');
    }
}
