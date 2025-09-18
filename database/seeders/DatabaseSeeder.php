<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        $this->call([
            RoleSeeder::class,
            GenderSeeder::class,
            UserSeeder::class,
            PostSeeder::class,
            CommentSeeder::class,
            FeaturedContentSeeder::class,
            SupportiveDiscussionSeeder::class,
            // Image and interaction seeders
            ImageDirectorySeeder::class,
            PostImageSeeder::class,
            CommentImageSeeder::class,
            LikePostSeeder::class,
            LikeCommentSeeder::class,
            InteractiveContentSeeder::class, // Add highly interactive content last
        ]);
    }
}
