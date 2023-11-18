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
        Schema::create('like_posts', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            $table->foreignUuid('user_id')->constrained(
                table: 'users',
                column: 'id',
                indexName: 'like_posts_user_id'
            )->cascadeOnDelete();

            $table->foreignUuid('post_id')->constrained(
                table: 'posts',
                column: 'id',
                indexName: 'like_posts_post_id'
            )->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('like_posts');
    }
};
