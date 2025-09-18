<?php

namespace Database\Factories;

use App\Models\Post;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\LikePost>
 */
class LikePostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id' => function () {
                $existingUserId = User::pluck('id')->toArray();
                return $this->faker->randomElement($existingUserId);
            },
            'post_id' => function () {
                $existingPostId = Post::pluck('id')->toArray();
                return $this->faker->randomElement($existingPostId);
            },
        ];
    }
}
