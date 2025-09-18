<?php

namespace Database\Seeders;

use App\Models\LikeComment;
use App\Models\Comment;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class LikeCommentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $comments = Comment::all();
        $users = User::all();

        if ($comments->count() == 0 || $users->count() == 0) {
            $this->command->warn('No comments or users found. Please run CommentSeeder and UserSeeder first.');
            return;
        }

        // Create likes for comments with realistic distribution
        foreach ($comments as $comment) {
            // Random number of likes per comment (0-8 likes, weighted towards fewer likes)
            $likeCount = $this->getWeightedLikeCount();

            // Get random users to like this comment (avoid duplicates)
            $likingUsers = $users->random(min($likeCount, $users->count()));

            foreach ($likingUsers as $user) {
                // Avoid self-likes and duplicate likes
                if ($user->id !== $comment->user_id) {
                    LikeComment::firstOrCreate([
                        'user_id' => $user->id,
                        'comment_id' => $comment->id,
                    ], [
                        'created_at' => fake()->dateTimeBetween($comment->created_at, 'now'),
                        'updated_at' => fake()->dateTimeBetween($comment->created_at, 'now'),
                    ]);
                }
            }
        }

        $this->command->info('Comment likes created successfully!');
    }

    /**
     * Get weighted like count for comments (generally fewer than posts)
     */
    private function getWeightedLikeCount(): int
    {
        $rand = rand(1, 100);

        if ($rand <= 40) {
            return rand(0, 1); // 40% chance: 0-1 likes
        } elseif ($rand <= 70) {
            return rand(2, 3); // 30% chance: 2-3 likes
        } elseif ($rand <= 90) {
            return rand(4, 5); // 20% chance: 4-5 likes
        } else {
            return rand(6, 8); // 10% chance: 6-8 likes (very popular comments)
        }
    }
}
