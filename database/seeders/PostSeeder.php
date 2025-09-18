<?php

namespace Database\Seeders;

use App\Models\Post;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Ensure we have users before creating posts
        $userCount = User::count();
        if ($userCount == 0) {
            $this->command->warn('No users found. Please run UserSeeder first.');
            return;
        }

        // Create posts with varied distribution
        // More recent posts to simulate active community
        Post::factory()->count(80)->create([
            'created_at' => fake()->dateTimeBetween('-30 days', 'now'),
            'updated_at' => fake()->dateTimeBetween('-30 days', 'now'),
        ]);

        // Older posts for community history
        Post::factory()->count(40)->create([
            'created_at' => fake()->dateTimeBetween('-6 months', '-1 month'),
            'updated_at' => fake()->dateTimeBetween('-6 months', '-1 month'),
        ]);

        // Some very recent active discussions
        Post::factory()->count(30)->create([
            'created_at' => fake()->dateTimeBetween('-7 days', 'now'),
            'updated_at' => fake()->dateTimeBetween('-7 days', 'now'),
        ]);
    }
}
