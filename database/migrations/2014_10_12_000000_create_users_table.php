<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('first_name');
            $table->string('last_name');
            $table->foreignId('gender_id')->constrained(
                table: 'genders',
                column: 'id',
                indexName: 'users_gender_id'
            )->cascadeOnDelete();
            $table->integer('age')->nullable();
            $table->date('birthday')->nullable();
            $table->string('profile_picture_path')->nullable();
            $table->foreignId('role_id')->constrained(
                table: 'roles',
                column: 'id',
                indexName: 'users_role_id'
            )->cascadeOnDelete();
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
