<?php

namespace Database\Seeders;

use App\Models\PostImage;
use App\Models\Post;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PostImageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $posts = Post::all();

        if ($posts->count() == 0) {
            $this->command->warn('No posts found. Please run PostSeeder first.');
            return;
        }

        // Add images to about 30% of posts to make it realistic
        $postsWithImages = $posts->random(intval($posts->count() * 0.3));

        foreach ($postsWithImages as $post) {
            // Some posts can have multiple images (1-3 images per post)
            $imageCount = $this->getImageCount();

            for ($i = 0; $i < $imageCount; $i++) {
                PostImage::create([
                    'post_id' => $post->id,
                    'path' => $this->getAppropriateImagePath($post),
                    'created_at' => $post->created_at,
                    'updated_at' => $post->created_at,
                ]);
            }
        }

        $this->command->info('Post images created successfully!');
    }

    /**
     * Get number of images for a post (weighted distribution)
     */
    private function getImageCount(): int
    {
        $rand = rand(1, 100);

        if ($rand <= 70) {
            return 1; // 70% chance: 1 image
        } elseif ($rand <= 90) {
            return 2; // 20% chance: 2 images
        } else {
            return 3; // 10% chance: 3 images
        }
    }

    /**
     * Get appropriate image path based on post content
     */
    private function getAppropriateImagePath($post): string
    {
        $title = strtolower($post->title);
        $description = strtolower($post->description);

        // Match images to post content themes
        if (str_contains($title, 'self-care') || str_contains($description, 'self-care')) {
            $images = [
                'storage/images/posts/self-care-tips-3.jpg',
                'storage/images/posts/peaceful-nature-17.jpg',
                'storage/images/posts/mindfulness-meditation-8.jpg',
                'storage/images/posts/self-love-reminders-15.jpg',
            ];
        } elseif (str_contains($title, 'healing') || str_contains($description, 'healing')) {
            $images = [
                'storage/images/posts/healing-quotes-1.jpg',
                'storage/images/posts/recovery-journey-6.jpg',
                'storage/images/posts/hope-healing-11.jpg',
                'storage/images/posts/recovery-milestones-14.jpg',
            ];
        } elseif (str_contains($title, 'terapi') || str_contains($description, 'terapi') || str_contains($title, 'therapy')) {
            $images = [
                'storage/images/posts/therapeutic-activities-7.jpg',
                'storage/images/posts/counseling-resources-12.jpg',
                'storage/images/posts/mental-health-awareness-5.jpg',
            ];
        } elseif (str_contains($title, 'support') || str_contains($description, 'support') || str_contains($title, 'komunitas')) {
            $images = [
                'storage/images/posts/support-community-4.jpg',
                'storage/images/posts/community-support-20.jpg',
                'storage/images/posts/support-groups-13.jpg',
            ];
        } elseif (str_contains($title, 'legal') || str_contains($description, 'legal') || str_contains($title, 'hukum')) {
            $images = [
                'storage/images/posts/survivor-strength-10.jpg',
                'storage/images/posts/empowerment-19.jpg',
            ];
        } else {
            // Default inspirational images
            $images = [
                'storage/images/posts/inspirational-quotes-2.jpg',
                'storage/images/posts/positive-affirmations-9.jpg',
                'storage/images/posts/hope-healing-11.jpg',
                'storage/images/posts/survivor-strength-10.jpg',
                'storage/images/posts/coping-strategies-16.jpg',
                'storage/images/posts/comfort-zones-18.jpg',
            ];
        }

        return $images[array_rand($images)];
    }
}
