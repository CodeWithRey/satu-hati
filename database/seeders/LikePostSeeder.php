<?php

namespace Database\Seeders;

use App\Models\LikePost;
use App\Models\Post;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class LikePostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $posts = Post::all();
        $users = User::all();

        if ($posts->count() == 0 || $users->count() == 0) {
            $this->command->warn('No posts or users found. Please run PostSeeder and UserSeeder first.');
            return;
        }

        // Create likes for posts with realistic distribution
        foreach ($posts as $post) {
            // Random number of likes per post (0-15 likes, weighted towards fewer likes)
            $likeCount = $this->getWeightedLikeCount();

            // Get random users to like this post (avoid duplicates)
            $likingUsers = $users->random(min($likeCount, $users->count()));

            foreach ($likingUsers as $user) {
                // Avoid self-likes and duplicate likes
                if ($user->id !== $post->user_id) {
                    LikePost::firstOrCreate([
                        'user_id' => $user->id,
                        'post_id' => $post->id,
                    ], [
                        'created_at' => fake()->dateTimeBetween($post->created_at, 'now'),
                        'updated_at' => fake()->dateTimeBetween($post->created_at, 'now'),
                    ]);
                }
            }
        }

        $this->command->info('Post likes created successfully!');
    }

    /**
     * Get weighted like count (more posts have fewer likes, some have many)
     */
    private function getWeightedLikeCount(): int
    {
        $rand = rand(1, 100);

        if ($rand <= 30) {
            return rand(0, 2); // 30% chance: 0-2 likes
        } elseif ($rand <= 60) {
            return rand(3, 6); // 30% chance: 3-6 likes
        } elseif ($rand <= 85) {
            return rand(7, 10); // 25% chance: 7-10 likes
        } else {
            return rand(11, 15); // 15% chance: 11-15 likes (popular posts)
        }
    }
}
