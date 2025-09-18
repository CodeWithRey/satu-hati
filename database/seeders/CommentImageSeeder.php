<?php

namespace Database\Seeders;

use App\Models\CommentImage;
use App\Models\Comment;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CommentImageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $comments = Comment::all();

        if ($comments->count() == 0) {
            $this->command->warn('No comments found. Please run CommentSeeder first.');
            return;
        }

        // Add images to about 15% of comments (less than posts to keep it realistic)
        $commentsWithImages = $comments->random(intval($comments->count() * 0.15));

        foreach ($commentsWithImages as $comment) {
            // Comments usually have just 1 image
            CommentImage::create([
                'comment_id' => $comment->id,
                'path' => $this->getAppropriateCommentImage($comment),
                'created_at' => $comment->created_at,
                'updated_at' => $comment->created_at,
            ]);
        }

        $this->command->info('Comment images created successfully!');
    }

    /**
     * Get appropriate image for comment based on content
     */
    private function getAppropriateCommentImage($comment): string
    {
        $body = strtolower($comment->body);

        // Match images to comment sentiment
        if (str_contains($body, 'hug') || str_contains($body, 'peluk')) {
            $images = [
                'storage/images/comments/virtual-hug-1.jpg',
                'storage/images/comments/care-bear-hug-9.jpg',
            ];
        } elseif (str_contains($body, 'love') || str_contains($body, 'sending')) {
            $images = [
                'storage/images/comments/sending-love-2.jpg',
                'storage/images/comments/heart-emoji-5.jpg',
                'storage/images/comments/positive-vibes-7.jpg',
            ];
        } elseif (str_contains($body, 'support') || str_contains($body, 'strength')) {
            $images = [
                'storage/images/comments/solidarity-6.jpg',
                'storage/images/comments/strength-symbol-14.jpg',
                'storage/images/comments/support-emoji-3.jpg',
            ];
        } elseif (str_contains($body, 'hope') || str_contains($body, 'rainbow') || str_contains($body, 'progress')) {
            $images = [
                'storage/images/comments/rainbow-hope-10.jpg',
                'storage/images/comments/butterfly-transformation-15.jpg',
                'storage/images/comments/sunshine-smile-12.jpg',
            ];
        } elseif (str_contains($body, 'thank') || str_contains($body, 'appreciate') || str_contains($body, 'grateful')) {
            $images = [
                'storage/images/comments/flowers-support-11.jpg',
                'storage/images/comments/peaceful-image-13.jpg',
            ];
        } else {
            // Default supportive/encouraging images
            $images = [
                'storage/images/comments/encouraging-meme-4.jpg',
                'storage/images/comments/comfort-gif-8.gif',
                'storage/images/comments/positive-vibes-7.jpg',
                'storage/images/comments/support-emoji-3.jpg',
                'storage/images/comments/heart-emoji-5.jpg',
            ];
        }

        return $images[array_rand($images)];
    }
}
