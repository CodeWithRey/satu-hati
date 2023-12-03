<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class PostImage extends Model
{
    use HasFactory;

    protected $fillable = [
        'path',
        'post_id'
    ];

    public function post(): BelongsTo
    {
        return $this->belongsTo(Post::class);
    }

    public function checkImages($url)
    {
        $imagePath = public_path($url);
        if ($imagePath) {
            if (file_exists($imagePath)) {
                return unlink($imagePath);
            }
        }
    }
}
