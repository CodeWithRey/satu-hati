<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class CommentImage extends Model
{
    use HasFactory;

    protected $fillable = [
        'path',
        'comment_id'
    ];

    public function comment(): BelongsTo
    {
        return $this->belongsTo(Comment::class);
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
