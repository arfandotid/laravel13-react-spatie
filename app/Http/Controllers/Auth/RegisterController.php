<?php

namespace App\Http\Controllers\Auth;

use App\Models\Pelanggan;
use App\Models\Tukang;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Spatie\Permission\Models\Role;

class RegisterController extends Controller
{
    public function index()
    {
        return Inertia::render('Auth/Register');
    }

    public function store(Request $request)
    {
        $request->validate([
            'tipe' => 'required|in:tukang,pelanggan',
            'name' => 'required|string|min:2|max:255',
            'email' => 'required|email|string|max:255',
            'username' => 'required|string|min:3|max:255',
            'password' => 'required|string|min:8|max:255',
            'password_confirmation' => 'required|same:password'
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'username' => $request->username,
            'password' => Hash::make($request->password),
        ]);

        if($request->tipe == 'tukang') {
            $tukangRole = Role::find(2);
            $user->assignRole($tukangRole);

            // create tukang
            Tukang::create([
                'nama' => $request->name,
                'user_id' => $user->id,
            ]);
        }else {
            $pelangganRole = Role::find(3);
            $user->assignRole($pelangganRole);

            // create pelanggan
            Pelanggan::create([
                'nama' => $request->name,
                'user_id' => $user->id,
            ]);
        }

        return redirect()->to('/login')->with('success', 'Registrasi berhasil, silahkan login!');
    }
}