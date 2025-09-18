<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Role;
use App\Models\Gender;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create admin user
        $adminRole = Role::where('name', 'admin')->first();
        $femaleGender = Gender::where('name', 'Perempuan')->first();

        if ($adminRole) {
            User::factory()->create([
                'full_name' => 'Admin Satu Hati',
                'email' => 'admin@satuhati.com',
                'role_id' => $adminRole->id,
                'gender_id' => $femaleGender ? $femaleGender->id : Gender::first()->id,
                'summary' => 'Administrator platform Satu Hati. Berkomitmen untuk menciptakan ruang aman bagi para survivor.',
                'age' => 30,
            ]);
        }

        // Create counselor/therapist users
        $counselorRole = Role::where('name', 'counselor')->orWhere('name', 'terapis')->first();
        if ($counselorRole) {
            User::factory()->count(5)->create([
                'role_id' => $counselorRole->id,
            ]);
        }

        // Create regular users (survivors and supporters)
        $userRole = Role::where('name', 'user')->orWhere('name', 'member')->first();
        if ($userRole) {
            User::factory()->count(45)->create([
                'role_id' => $userRole->id,
            ]);
        } else {
            // If no specific roles, create general users
            User::factory()->count(45)->create();
        }
    }
}
