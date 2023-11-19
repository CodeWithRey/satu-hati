<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => fake()->sentence(rand(5,10)),
            'is_anonymous' => fake()->boolean(),
            'description' => fake()->sentences(rand(7,12), true),
            'user_id' => function () {
                $existingUsersId = User::pluck('id')->toArray();
                return fake()->randomElement($existingUsersId);
            },
        ];
    }
}
