<?php

use App\Models\Comment;
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
        Schema::create('like_comments', function (Blueprint $table) {
            $table->id();
            $table->foreignUuid('user_id')->constrained(
                table: 'users',
                column: 'id',
                indexName: 'like_comments_user_id',
            )->cascadeOnDelete();
            $table->foreignUuid('comment_id')->constrained(
                table: 'comments',
                column: 'id',
                indexName: 'like_comments_comment_id',
            )->cascadeOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('like_comments');
    }
};
