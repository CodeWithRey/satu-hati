<?php

namespace Database\Factories;

use App\Models\Post;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Comment>
 */
class CommentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'body' => fake()->sentences(rand(3,5), true),
            'post_id' => function (){
                $existingPostId = Post::pluck('id')->toArray();
                return $this->faker->randomElement($existingPostId);
            },
            'user_id' => function (){
                $existingUserId = User::pluck('id')->toArray();
                return $this->faker->randomElement($existingUserId);
            },
        ];
    }
}
