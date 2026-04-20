<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;
use App\Models\Setting;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Traits\FileUploadTrait;
use Illuminate\Http\RedirectResponse;
use Illuminate\Routing\Controllers\Middleware;
use Illuminate\Routing\Controllers\HasMiddleware;

class SettingController extends Controller implements HasMiddleware
{
    use FileUploadTrait;

    public static function middleware()
    {
        return [
            new Middleware(['permission:settings.index'], only: ['index']),
            new Middleware(['permission:settings.update'], only: ['update', 'deleteLogo']),
        ];
    }

    public function index()
    {
        // setting hanya 1 data
        $setting = Setting::first();

        // return inertia
        return Inertia::render('Settings/Index', compact('setting'));
    }

    public function update(Request $request)
    {
        // setting hanya 1 data
        $setting = Setting::firstOrFail();

        // set validation
        $request->validate([
            'app_name'  => 'required|string',
            'app_logo'  => 'nullable',
        ]);

        $data = $request->only([
            'app_name',
            'app_logo',
        ]);

        // upload logo desa jika ada
        if ($request->hasFile('app_logo')) {

            // hapus logo lama
            if ($setting->app_logo) {
                $this->deleteFile($setting->app_logo);
            }

            // simpan logo baru
            $data['app_logo'] = $this->uploadFile($request, 'app_logo', 'uploads/settings/logo');
        } else {
            // jika tidak ada file baru, tetap gunakan logo lama
            $data['app_logo'] = $setting->app_logo;
        }

        // update setting
        $setting->update($data);

        // kembali ke halaman setting
        return redirect()->to('/settings')->with('success', 'Setting updated successfully.');
    }

    public function deleteLogo()
    {
        // setting hanya 1 data
        $setting = Setting::firstOrFail();

        // hapus logo desa jika ada
        if ($setting->app_logo) {
            $path  = 'uploads/settings/logo/';
            $this->deleteFile($path . $setting->app_logo);
        }

        // update setting dengan logo kosong
        $setting->update([
            'app_logo' => null,
        ]);

        // kembali ke halaman setting
        return redirect()->to('/settings')->with('success', 'Logo aplikasi berhasil dihapus.');
    }
}
