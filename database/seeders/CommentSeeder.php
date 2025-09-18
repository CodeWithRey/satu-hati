<?php

namespace Database\Seeders;

use App\Models\Comment;
use App\Models\Post;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CommentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Ensure we have posts and users before creating comments
        $postCount = Post::count();
        $userCount = User::count();

        if ($postCount == 0 || $userCount == 0) {
            $this->command->warn('No posts or users found. Please run PostSeeder and UserSeeder first.');
            return;
        }

        // Create initial comments on posts
        Comment::factory()->count(300)->create([
            'created_at' => fake()->dateTimeBetween('-6 months', 'now'),
            'updated_at' => fake()->dateTimeBetween('-6 months', 'now'),
        ]);

        // Create replies to existing comments (30% of total comments)
        $existingComments = Comment::whereNull('parent_comment_id')->get();

        if ($existingComments->count() > 0) {
            Comment::factory()->count(90)->reply()->create([
                'created_at' => fake()->dateTimeBetween('-6 months', 'now'),
                'updated_at' => fake()->dateTimeBetween('-6 months', 'now'),
            ]);
        }

        // Create more recent comments for active discussions
        Comment::factory()->count(150)->create([
            'created_at' => fake()->dateTimeBetween('-30 days', 'now'),
            'updated_at' => fake()->dateTimeBetween('-30 days', 'now'),
        ]);

        // Create some very recent replies
        if (Comment::whereNull('parent_comment_id')->count() > 0) {
            Comment::factory()->count(60)->reply()->create([
                'created_at' => fake()->dateTimeBetween('-7 days', 'now'),
                'updated_at' => fake()->dateTimeBetween('-7 days', 'now'),
            ]);
        }
    }
}
