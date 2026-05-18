<?php

namespace App\Http\Controllers\Admin\Master;

use App\Http\Controllers\Controller;
use App\Models\Pelanggan;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PelangganController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $pelanggan = User::query()
            ->role('pelanggan')
            ->with(['pelanggan', 'pelanggan.provinsi', 'pelanggan.kabupaten', 'pelanggan.kecamatan'])
            ->when(request()->q, function ($pelanggan) {
                $pelanggan->where('name', 'like', '%' . request()->q . '%')
                    ->orWhere('email', 'like', '%' . request()->q . '%')
                    ->orWhereHas('pelanggan', function ($pelanggan) {
                        $pelanggan->where('no_hp', 'like', '%' . request()->q . '%')
                            ->orWhere('nama', 'like', '%' . request()->q . '%')
                            ->orWhere('alamat', 'like', '%' . request()->q . '%')
                            ->orWhere('nama_bank', 'like', '%' . request()->q . '%')
                            ->orWhere('no_rekening', 'like', '%' . request()->q . '%')
                            ->orWhereHas('provinsi', function($provinsi) {
                                $provinsi->where('nama', 'like', '%' . request()->q . '%');
                            })
                            ->orWhereHas('kabupaten', function($kabupaten) {
                                $kabupaten->where('nama', 'like', '%' . request()->q . '%');
                            })
                            ->orWhereHas('kecamatan', function($kecamatan) {
                                $kecamatan->where('nama', 'like', '%' . request()->q . '%');
                            });
                    });
            })
            ->orderBy('id', 'desc')
            ->paginate(5)
            ->withQueryString();

        $pelanggan->appends(['q' => request()->q]);

        return Inertia::render('Admin/Master/Pelanggan/Index', compact('pelanggan'));
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
        //
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
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
