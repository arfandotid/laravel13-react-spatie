<?php

namespace App\Traits;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

trait FileUploadTrait
{
    public function uploadFile(Request $request, $inputName, $path)
    {
        if ($request->hasFile($inputName)) {
            $file = $request->{$inputName};
            $ext =  $file->getClientOriginalExtension();
            $fileName = uniqid() . '.' . $ext;

            $file->move(public_path($path), $fileName);

            return $fileName;
        }
    }

    public function uploadMultipleFiles(Request $request, $inputName, $path)
    {
        $filePaths = [];
        if ($request->hasFile($inputName)) {
            $files = $request->{$inputName};

            foreach ($files as $file) {
                $ext =  $file->getClientOriginalExtension();
                $fileName = uniqid() . '.' . $ext;

                $file->move(public_path($path), $fileName);

                $filePaths[] = $fileName;
            }

            return $filePaths;
        }
    }

    public function updateFile(Request $request, $inputName, $path, $oldPath = null)
    {
        if ($request->hasFile($inputName)) {
            if (File::exists(public_path($oldPath))) {
                File::delete(public_path($oldPath));
            }
            $file = $request->{$inputName};
            $ext =  $file->getClientOriginalExtension();
            $fileName = 'media_' . uniqid() . '.' . $ext;

            $file->move(public_path($path), $fileName);

            return $fileName;
        }
    }

    public function deleteFile(string $path)
    {
        if (File::exists(public_path($path))) {
            File::delete(public_path($path));
        }
    }
}
