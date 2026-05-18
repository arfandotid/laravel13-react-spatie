<?php

namespace App\Http\Controllers\Tukang;

use App\Http\Controllers\Controller;
use App\Models\Spesialis;
use App\Models\SpesialisTukang;
use Auth;
use Illuminate\Http\Request;
use Inertia\Inertia;

class KeahlianController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $tukang = Auth::user()->tukang;

        $keahlian = SpesialisTukang::query()
            ->with(['tukang', 'spesialis'])
            ->when(request()->q, function ($query) {
                $query->where('harga_per_hari', 'like', '%' . request()->q . '%')
                    ->orWhereHas('spesialis', function ($query) {
                        $query->where('nama', 'like', '%' . request()->q . '%');
                    });
            })
            ->where('tukang_id', $tukang->id)
            ->orderBy('id', 'desc')
            ->paginate(5)
            ->withQueryString();

        // Master spesialis
        $spesialis = Spesialis::query()->orderBy('nama', 'asc')->get();

        return Inertia::render('Tukang/Keahlian/Index', compact('keahlian', 'tukang', 'spesialis'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'spesialis_id' => 'required|exists:spesialis,id',
            'harga_per_hari' => 'required|numeric|min:1000',
        ]);

        $tukang = Auth::user()->tukang;

        if (!$tukang) {
            return back()->with('error', 'Data tukang tidak ditemukan');
        }

        try {
            SpesialisTukang::updateOrCreate([
                'tukang_id' => $tukang->id,
                'spesialis_id' => $request->spesialis_id,
            ], [
                'harga_per_hari' => $request->harga_per_hari,
            ]);
    
            return back()->with('success', 'Data berhasil disimpan');
        } catch (\Exception $e) {
            return back()->with('error', $e->getMessage());
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'spesialis_id' => 'required|exists:spesialis,id',
            'harga_per_hari' => 'required|numeric|min:0',
        ]);

        try {
            $keahlian = SpesialisTukang::findOrFail($id);

            $keahlian->update([
                'spesialis_id' => $request->spesialis_id,
                'harga_per_hari' => $request->harga_per_hari,
            ]);
            return back()->with('success', 'Data berhasil diupdate');
        } catch (\Exception $e) {
            return back()->with('error', $e->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $keahlian = SpesialisTukang::findOrFail($id);
        $keahlian->delete();

        return back()->with('success', 'Keahlian berhasil dihapus');
    }
}
