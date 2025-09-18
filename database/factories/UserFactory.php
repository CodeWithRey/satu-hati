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
        $indonesianNames = [
            'Sari Wulandari',
            'Dewi Anggraini',
            'Putri Maharani',
            'Indira Sari',
            'Maya Cahyani',
            'Rina Permata',
            'Lestari Widodo',
            'Fitri Handayani',
            'Anisa Rahman',
            'Dina Kusuma',
            'Andi Wijaya',
            'Budi Santoso',
            'Eko Prasetyo',
            'Fajar Nugroho',
            'Hendra Saputra',
            'Rizki Firmansyah',
            'Yoga Pratama',
            'Dedi Kurniawan',
            'Agus Setiawan',
            'Wahyu Hidayat'
        ];

        $supportiveSummaries = [
            'Saya percaya pada kekuatan berbagi cerita. Di sini saya merasa aman untuk menjadi diri sendiri.',
            'Bergabung di komunitas ini membantu saya memahami bahwa saya tidak sendirian dalam perjalanan pemulihan.',
            'Saya ingin menciptakan ruang yang aman bagi sesama survivor untuk berbagi dan mendukung satu sama lain.',
            'Setiap cerita yang dibagikan di sini adalah langkah berani menuju penyembuhan.',
            'Saya belajar bahwa pemulihan adalah proses, dan komunitas ini memberikan dukungan yang saya butuhkan.',
            'Di sini saya menemukan kekuatan dan harapan baru setelah masa-masa sulit.',
            'Saya berkomitmen untuk menjadi pendengar yang baik dan memberikan dukungan kepada sesama.',
            'Komunitas ini mengajarkan saya tentang resiliensi dan kekuatan manusia.',
            'Saya ingin membantu orang lain menemukan jalan menuju pemulihan seperti yang saya alami.',
            'Berbagi pengalaman di sini membantu saya merasa lebih kuat dan tidak sendirian.',
        ];

        return [
            'email' => fake()->unique()->safeEmail(),
            'email_verified_at' => now(),
            'password' => static::$password ??= Hash::make('password'),
            'remember_token' => Str::random(10),
            'full_name' => $this->faker->randomElement($indonesianNames),
            'summary' => $this->faker->randomElement($supportiveSummaries),
            'age' => fake()->numberBetween(18, 45),
            'birthday' => fake()->dateTimeBetween('-45 years', '-18 years')->format('Y-m-d'),
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
