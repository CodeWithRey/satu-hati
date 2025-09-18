<?php

namespace Database\Factories;

use App\Models\Post;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\PostImage>
 */
class PostImageFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        // Create supportive/inspirational image paths for forum posts
        // Using storage paths that are accessible via /storage symlink
        $supportiveImages = [
            'storage/images/posts/healing-quotes-1.jpg',
            'storage/images/posts/inspirational-quotes-2.jpg',
            'storage/images/posts/self-care-tips-3.jpg',
            'storage/images/posts/support-community-4.jpg',
            'storage/images/posts/mental-health-awareness-5.jpg',
            'storage/images/posts/recovery-journey-6.jpg',
            'storage/images/posts/therapeutic-activities-7.jpg',
            'storage/images/posts/mindfulness-meditation-8.jpg',
            'storage/images/posts/positive-affirmations-9.jpg',
            'storage/images/posts/survivor-strength-10.jpg',
            'storage/images/posts/hope-healing-11.jpg',
            'storage/images/posts/counseling-resources-12.jpg',
            'storage/images/posts/support-groups-13.jpg',
            'storage/images/posts/recovery-milestones-14.jpg',
            'storage/images/posts/self-love-reminders-15.jpg',
            'storage/images/posts/coping-strategies-16.jpg',
            'storage/images/posts/peaceful-nature-17.jpg',
            'storage/images/posts/comfort-zones-18.jpg',
            'storage/images/posts/empowerment-19.jpg',
            'storage/images/posts/community-support-20.jpg',
        ];

        return [
            'path' => $this->faker->randomElement($supportiveImages),
            'post_id' => function () {
                $existingPostId = Post::pluck('id')->toArray();
                return $this->faker->randomElement($existingPostId);
            },
        ];
    }
}
