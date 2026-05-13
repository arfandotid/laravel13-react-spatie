<?php

namespace App\Http\Controllers\Admin\Master;

use App\Http\Controllers\Controller;
use App\Models\Spesialis;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SpesialisController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $spesialis = Spesialis::query()
            ->when(request()->q, function ($spesialis) {
                $spesialis->where('nama', 'like', '%' . request()->q . '%');
            })
            ->orderBy('id','desc')
            ->paginate(5)
            ->withQueryString();

        $spesialis->appends(['q' => request()->q]);

        return Inertia::render('Admin/Master/Spesialis/Index', compact('spesialis'));
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
