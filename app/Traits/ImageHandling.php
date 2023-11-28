<?php

namespace App\Traits;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

trait ImageHandling
{
    public function uploadImage(UploadedFile $image, $pathImage): string
    {
        $imageName = time() . hexdec(uniqid()) . '.' . $image->extension();
        $storeImage = $image->storeAs($pathImage, $imageName, 'public');
        $imagePath = Storage::url($storeImage);

        return $imagePath;
    }
}
