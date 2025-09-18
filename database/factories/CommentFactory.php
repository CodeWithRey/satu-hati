<?php

namespace Database\Factories;

use App\Models\Post;
use App\Models\User;
use App\Models\Comment;
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
        $supportiveComments = [
            'Terima kasih sudah berani berbagi cerita. You are so brave! 💪',
            'Peluk virtual untuk kamu. Kamu tidak sendirian dalam perjalanan ini. 🤗',
            'Aku sangat bangga dengan progress yang sudah kamu buat. Keep going!',
            'Cerita kamu menginspirasi aku untuk terus berjuang juga. Thank you for sharing.',
            'You are stronger than you know. Semangat terus ya! ✨',
            'Healing memang tidak mudah, tapi kamu sudah di jalan yang benar. Proud of you!',
            'Aku relate banget dengan yang kamu rasakan. We got this together! 💙',
            'Terima kasih sudah remind aku bahwa it\'s okay to take time. Self-compassion is key.',
            'Virtual hug untuk kamu. Bad days don\'t last, but strong people do. 🌈',
            'Kamu sudah sangat berani sampai di titik ini. Progress kamu luar biasa!',
            'Makasih sudah sharing tips yang helpful. Aku akan coba juga.',
            'Sending love dan positive energy untuk healing journey kamu. 💕',
            'Kata-kata kamu memberikan aku hope di hari yang sulit ini. Thank you.',
            'You deserve all the love dan support in the world. Keep shining! ⭐',
            'Aku admire courage kamu untuk speak up. You are making a difference.',
            'Reminder: healing is not linear, dan itu totally okay. Take your time.',
            'Kamu adalah inspiration buat survivor lainnya. Thank you for being brave.',
            'I see you, I hear you, dan I believe you. You matter. 💜',
            'Professional help memang game changer ya. Proud of you for taking that step.',
            'Komunitas ini lucky banget punya member seperti kamu. Stay strong!',
            'Boundary setting emang susah di awal, tapi it gets easier with practice.',
            'Self-care tips kamu very helpful. Aku akan implement juga.',
            'Thank you for normalize talking about mental health. It matters.',
            'Your healing journey inspire aku untuk prioritize mental health juga.',
            'Sending strength untuk hari-hari sulit yang mungkin masih akan datang.',
            'Kamu sudah sejauh ini, dan aku yakin kamu bisa terus maju. Fighting!',
            'Terapi emang investment terbaik untuk diri kita ya. Worth every penny.',
            'Thanks for sharing resource yang helpful. Community support is everything.',
            'You are not defined by what happened to you. You are so much more.',
            'Grateful banget ada platform seperti ini untuk saling support.',
        ];

        $encouragingReplies = [
            'Setuju banget! Self-compassion adalah kunci utama dalam healing.',
            'Iya, time memang healer terbaik. Patience dengan diri sendiri itu penting.',
            'Thank you for reminder ini. Sometimes kita lupa untuk appreciate small wins.',
            'Bener banget, support system yang tepat itu life-changing.',
            'Aku juga feel the same way. Sharing experiences really helps.',
            'Tips yang bagus! Aku akan coba implement di daily routine aku.',
            'Exactly! Boundary setting adalah skill yang harus terus dipelajari.',
            'Thank you for normalize struggle yang kita alami. It means a lot.',
            'Iya, professional help really makes difference ya. Game changer banget.',
            'Community like this adalah safe haven untuk kita semua.',
            'Setuju, healing journey memang unique untuk setiap orang.',
            'Thanks for being so supportive. Energy kamu contagious!',
            'Aku relate banget dengan experience kamu. We are not alone.',
            'Benar sekali, self-care bukan luxury tapi necessity.',
            'Appreciate banget positive vibes yang selalu kamu bawa ke sini.',
            'Iya, take one day at a time itu approach yang paling sustainable.',
            'Thank you for always being encouraging. You are amazing!',
            'Setuju, progress sekecil apapun tetap worth celebrating.',
            'Bener, trauma doesn\'t define us. We are survivors, not victims.',
            'Thanks for sharing wisdom yang sangat helpful ini.',
        ];

        $commentBodies = array_merge($supportiveComments, $encouragingReplies);

        return [
            'body' => $this->faker->randomElement($commentBodies),
            'post_id' => function () {
                $existingPostId = Post::pluck('id')->toArray();
                return $this->faker->randomElement($existingPostId);
            },
            'user_id' => function () {
                $existingUserId = User::pluck('id')->toArray();
                return $this->faker->randomElement($existingUserId);
            },
            'parent_comment_id' => null, // Will be set separately for replies
        ];
    }

    /**
     * Create a reply to an existing comment
     */
    public function reply()
    {
        return $this->state(function (array $attributes) {
            $parentComment = Comment::inRandomOrder()->first();
            return [
                'parent_comment_id' => $parentComment ? $parentComment->id : null,
                'post_id' => $parentComment ? $parentComment->post_id : $attributes['post_id'],
            ];
        });
    }
}
