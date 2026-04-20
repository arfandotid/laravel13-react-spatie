<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Illuminate\Routing\Controllers\Middleware;
use Illuminate\Routing\Controllers\HasMiddleware;

class RoleController extends Controller implements HasMiddleware
{
    public static function middleware()
    {
        return [
            new Middleware(['permission:roles.index'], only: ['index']),
            new Middleware(['permission:roles.create'], only: ['create', 'store']),
            new Middleware(['permission:roles.edit'], only: ['edit', 'update']),
            new Middleware(['permission:roles.delete'], only: ['destroy']),
        ];
    }

    public function index()
    {
        $roles = Role::query()
            ->when(request()->q, function ($roles) {
                $roles->where('name', 'like', '%' . request()->q . '%');
            })
            ->withCount('permissions')
            ->latest()
            ->paginate(5)
            ->withQueryString();

        $roles->appends(['q' => request()->q]);

        return Inertia::render('Roles/Index', compact('roles'));
    }

    public function create()
    {
        $permissions = Permission::select('id', 'name')->orderBy('name')->get();
        return Inertia::render('Roles/Create', compact('permissions'));
    }
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|unique:roles,name',
            'permissions' => 'nullable|array',
            'permissions.*' => 'exists:permissions,id',
        ]);

        // create role
        $role = Role::create([
            'name' => $request->name,
        ]);

        // assign permissions
        if ($request->permissions) {
            $role->syncPermissions($request->permissions);
        }

        return redirect()->to('/roles')->with('success', 'Role created successfully.');
    }

    public function edit(Role $role)
    {
        $role->load('permissions');
        $permissions = Permission::select('id', 'name')->orderBy('name')->get();
        $rolePermissions = $role->permissions->pluck('id');

        return Inertia::render('Roles/Edit', compact('role', 'permissions', 'rolePermissions'));
    }

    public function update(Request $request, Role $role)
    {
        $request->validate([
            'name' => 'required|unique:roles,name,' . $role->id,
            'permissions' => 'nullable|array',
            'permissions.*' => 'exists:permissions,id',
        ]);

        // update role
        $role->update([
            'name' => $request->name,
        ]);

        // sync permissions
        $role->syncPermissions($request->permissions ?? []);

        return redirect()->to('/roles')->with('success', 'Role updated successfully.');
    }

    public function destroy(Role $role)
    {
        $role->delete();

        return redirect()->to('/roles')->with('success', 'Role deleted successfully.');
    }
}
