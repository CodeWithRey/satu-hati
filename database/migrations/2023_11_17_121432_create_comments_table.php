<?php

use App\Models\Post;
use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('comments', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            $table->foreignId('user_id')->constrained(
                table: 'users',
                column: 'id',
                indexName: 'comments_user_id',
            )->cascadeOnDelete();

            $table->foreignId('post_id')->constrained(
                table: 'posts',
                column: 'id',
                indexName: 'comments_post_id'
            )->cascadeOnDelete();

            $table->text('body');
            $table->boolean('is_expert');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('comments');
    }
};
