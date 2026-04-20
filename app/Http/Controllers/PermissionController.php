<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Spatie\Permission\Models\Permission;
use Illuminate\Routing\Controllers\Middleware;
use Illuminate\Routing\Controllers\HasMiddleware;

class PermissionController extends Controller implements HasMiddleware
{
    public static function middleware()
    {
        return [
            new Middleware(['permission:permissions.index'], only: ['index']),
            new Middleware(['permission:permissions.create'], only: ['create', 'store']),
            new Middleware(['permission:permissions.edit'], only: ['edit', 'update']),
            new Middleware(['permission:permissions.delete'], only: ['destroy']),
        ];
    }

    public function index()
    {
        $permissions = Permission::query()
            ->when(request()->q, function ($permissions) {
                $permissions->where('name', 'like', '%' . request()->q . '%');
            })
            ->latest()
            ->paginate(5)
            ->withQueryString();

        $permissions->appends(['q' => request()->q]);

        return Inertia::render('Permissions/Index', compact('permissions'));
    }

    public function create()
    {
        return Inertia::render('Permissions/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|unique:permissions,name',
        ]);

        Permission::create([
            'name' => $request->name,
        ]);

        return redirect()->to('/permissions')->with('success', 'Permission created successfully.');
    }

    public function edit(Permission $permission)
    {
        return Inertia::render('Permissions/Edit', compact('permission'));
    }

    public function update(Request $request, Permission $permission)
    {
        $request->validate([
            'name' => 'required|unique:permissions,name,' . $permission->id,
        ]);

        $permission->update([
            'name' => $request->name,
        ]);

        return redirect()->to('/permissions')->with('success', 'Permission updated successfully.');
    }

    public function destroy(Permission $permission)
    {
        $permission->delete();

        return redirect()->to('/permissions')->with('success', 'Permission deleted successfully.');
    }
}
