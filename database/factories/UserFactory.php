<?php

namespace Database\Factories;

use App\Models\Gender;
use App\Models\Role;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    protected static ?string $password;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'email' => fake()->unique()->safeEmail(),
            'email_verified_at' => now(),
            'password' => static::$password ??= Hash::make('password'),
            'remember_token' => Str::random(10),
            'full_name' => fake()->name(),
            'summary' => fake()->sentences(rand(10, 20), true),
            'age' => fake()->numberBetween(15, 45),
            'birthday' => fake()->date(),
            'gender_id' => function () {
                $existingGenderIds = Gender::pluck('id')->toArray();
                return $this->faker->randomElement($existingGenderIds);
            },
            'role_id' => function () {
                $existingRoleIds = Role::pluck('id')->toArray();
                return $this->faker->randomElement($existingRoleIds);
            },
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     */
    public function unverified(): static
    {
        return $this->state(fn(array $attributes) => [
            'email_verified_at' => null,
        ]);
    }
}
