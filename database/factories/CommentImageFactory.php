<?php

namespace Database\Factories;

use App\Models\Comment;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\CommentImage>
 */
class CommentImageFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        // Create supportive/reaction image paths for comments
        // Using storage paths that are accessible via /storage symlink
        $commentImages = [
            'storage/images/comments/virtual-hug-1.jpg',
            'storage/images/comments/sending-love-2.jpg',
            'storage/images/comments/support-emoji-3.jpg',
            'storage/images/comments/encouraging-meme-4.jpg',
            'storage/images/comments/heart-emoji-5.jpg',
            'storage/images/comments/solidarity-6.jpg',
            'storage/images/comments/positive-vibes-7.jpg',
            'storage/images/comments/comfort-gif-8.gif',
            'storage/images/comments/care-bear-hug-9.jpg',
            'storage/images/comments/rainbow-hope-10.jpg',
            'storage/images/comments/flowers-support-11.jpg',
            'storage/images/comments/sunshine-smile-12.jpg',
            'storage/images/comments/peaceful-image-13.jpg',
            'storage/images/comments/strength-symbol-14.jpg',
            'storage/images/comments/butterfly-transformation-15.jpg',
        ];

        return [
            'path' => $this->faker->randomElement($commentImages),
            'comment_id' => function () {
                $existingCommentId = Comment::pluck('id')->toArray();
                return $this->faker->randomElement($existingCommentId);
            },
        ];
    }
}
