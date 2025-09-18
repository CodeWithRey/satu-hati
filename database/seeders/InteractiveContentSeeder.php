<?php

namespace Database\Seeders;

use App\Models\Post;
use App\Models\Comment;
use App\Models\PostImage;
use App\Models\CommentImage;
use App\Models\LikePost;
use App\Models\LikeComment;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class InteractiveContentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create highly interactive posts with multiple images and lots of engagement
        $this->createPopularPosts();

        // Create posts with image galleries
        $this->createImageGalleryPosts();

        // Create comments with reaction images
        $this->createReactionComments();

        $this->command->info('Interactive content created successfully!');
    }

    private function createPopularPosts()
    {
        $users = User::all();
        if ($users->count() < 5) return;

        $popularPostData = [
            [
                'title' => 'Sharing Progress: 6 Bulan Healing Journey Aku',
                'description' => 'Hai semua! 🌟

Aku mau share milestone penting dalam healing journey aku. Hari ini tepat 6 bulan sejak aku mulai terapi dan aktif di komunitas ini.

**Progress yang aku rasakan:**
✅ Panic attack berkurang drastis dari daily jadi weekly
✅ Bisa tidur nyenyak tanpa nightmare
✅ Mulai bisa trust orang lain lagi
✅ Self-confidence slowly coming back
✅ Tidak blame diri sendiri lagi

**Hal yang membantu:**
- Therapy rutin setiap 2 minggu
- Support dari komunitas ini (thank you all! 💙)
- Journaling every morning
- Mindfulness meditation
- Olahraga ringan (yoga & jalan pagi)

I know everyone\'s journey is different, dan 6 bulan ini feels like 6 years sometimes. Tapi looking back, aku amazed dengan seberapa far I\'ve come.

**Untuk yang sedang di awal journey:**
Progress itu tidak linear. Ada hari yang terrible, ada hari yang amazing. Yang penting adalah kita tetap moving forward, even if it\'s baby steps.

Sharing some photos dari journey aku - before vs now, dan beberapa quotes yang selalu remind aku untuk keep going.

Much love untuk kalian semua! 💕

#HealingJourney #Progress #6MonthsStrong #Recovery #Gratitude',
                'images' => ['storage/images/posts/recovery-journey-6.jpg', 'storage/images/posts/recovery-milestones-14.jpg', 'storage/images/posts/hope-healing-11.jpg'],
                'like_count' => 25,
            ],
            [
                'title' => 'Resource Sharing: Aplikasi yang Membantu Mental Health Aku',
                'description' => 'Halo! Mau share beberapa apps yang really helpful untuk mental health management. Semuanya aku udah coba dan proven works for me! 📱

**Meditation & Mindfulness:**
🧘‍♀️ Headspace - guided meditation, ada program khusus untuk anxiety
🌸 Calm - sleep stories yang amazing, nature sounds
🙏 Insight Timer - free meditation library yang huge

**Mood Tracking:**
📊 Daylio - simple mood tracker dengan customizable activities
📝 Journey - journaling app dengan reminder
📈 Sanvello - mood tracking + coping tools

**Crisis Support:**
🆘 Crisis Text Line - 24/7 support via text
📞 BetterHelp - online therapy (ada Indonesia)
🏥 Hospital Finder - nearest emergency mental health services

**Self-Care Reminders:**
💧 Plant Nanny - drink water reminder (cute!)
😴 Sleep Cycle - sleep tracking
🏃‍♀️ 7 Minute Workout - quick exercise

**Screenshots dan review details ada di gambar-gambar!**

Yang udah pernah coba apps ini? Share experience kalian dong! Ada recommendations lain?

Stay strong, tech can be our ally dalam healing journey! 💪✨

#MentalHealthApps #Resources #Technology #SelfCare #Recovery',
                'images' => ['storage/images/posts/mental-health-awareness-5.jpg', 'storage/images/posts/therapeutic-activities-7.jpg', 'storage/images/posts/coping-strategies-16.jpg'],
                'like_count' => 18,
            ]
        ];

        foreach ($popularPostData as $postData) {
            $post = Post::create([
                'user_id' => $users->random()->id,
                'title' => $postData['title'],
                'description' => $postData['description'],
                'is_anonymous' => false,
                'created_at' => fake()->dateTimeBetween('-2 weeks', '-1 week'),
                'updated_at' => fake()->dateTimeBetween('-2 weeks', '-1 week'),
            ]);

            // Add multiple images
            foreach ($postData['images'] as $imagePath) {
                PostImage::create([
                    'post_id' => $post->id,
                    'path' => 'storage/images/posts/' . $imagePath,
                    'created_at' => $post->created_at,
                    'updated_at' => $post->created_at,
                ]);
            }

            // Add many likes
            $likingUsers = $users->random(min($postData['like_count'], $users->count()));
            foreach ($likingUsers as $user) {
                if ($user->id !== $post->user_id) {
                    LikePost::firstOrCreate([
                        'user_id' => $user->id,
                        'post_id' => $post->id,
                    ]);
                }
            }

            // Add supportive comments
            $this->addEngagedComments($post, $users);
        }
    }

    private function createImageGalleryPosts()
    {
        $users = User::all();
        if ($users->count() < 3) return;

        $galleryPost = Post::create([
            'user_id' => $users->random()->id,
            'title' => 'Self-Care Ideas: Visual Guide untuk Hari-hari Sulit',
            'description' => 'Sharing visual self-care guide yang aku buat! 🌈

Kadang saat kita lagi down, susah banget untuk think of self-care activities. Jadi aku buat visual reminder yang bisa di-save dan dilihat kapan aja.

**Swipe untuk lihat:**
1. Morning self-care routine
2. Midday energy boosters
3. Evening wind-down activities
4. Emergency self-care untuk panic moments
5. Weekly self-care planning template

Feel free to save dan modify sesuai kebutuhan kalian! Yang penting adalah finding what works for YOU.

Self-care bukan selfish. Kita deserve to take care of ourselves. 💙

#SelfCare #VisualGuide #MentalHealth #SelfLove #Resources',
            'is_anonymous' => false,
            'created_at' => fake()->dateTimeBetween('-5 days', '-3 days'),
            'updated_at' => fake()->dateTimeBetween('-5 days', '-3 days'),
        ]);

        // Add multiple self-care related images
        $selfCareImages = [
            'self-care-tips-3.jpg',
            'mindfulness-meditation-8.jpg',
            'peaceful-nature-17.jpg',
            'self-love-reminders-15.jpg',
            'coping-strategies-16.jpg'
        ];

        foreach ($selfCareImages as $image) {
            PostImage::create([
                'post_id' => $galleryPost->id,
                'path' => 'storage/images/posts/' . $image,
                'created_at' => $galleryPost->created_at,
                'updated_at' => $galleryPost->created_at,
            ]);
        }

        // Add likes and comments
        $likingUsers = $users->random(min(15, $users->count()));
        foreach ($likingUsers as $user) {
            if ($user->id !== $galleryPost->user_id) {
                LikePost::firstOrCreate([
                    'user_id' => $user->id,
                    'post_id' => $galleryPost->id,
                ]);
            }
        }

        $this->addEngagedComments($galleryPost, $users);
    }

    private function createReactionComments()
    {
        $posts = Post::latest()->take(10)->get();
        $users = User::all();

        if ($posts->count() == 0 || $users->count() < 3) return;

        $reactionComments = [
            [
                'body' => 'OMG this is exactly what I needed today! 😭💙 Bookmarking this post!',
                'image' => 'heart-emoji-5.jpg'
            ],
            [
                'body' => 'Sending you the biggest virtual hug! 🤗 Your strength inspires me every day.',
                'image' => 'virtual-hug-1.jpg'
            ],
            [
                'body' => 'Thank you for sharing this! 🌟 Screenshot semua untuk reminder.',
                'image' => 'support-emoji-3.jpg'
            ],
            [
                'body' => 'THIS! So much this! 👏 Everyone needs to see this post.',
                'image' => 'encouraging-meme-4.jpg'
            ],
            [
                'body' => 'Crying happy tears right now 🌈 Your progress gives me hope!',
                'image' => 'rainbow-hope-10.jpg'
            ]
        ];

        foreach ($posts as $post) {
            // Add 2-3 reaction comments with images
            $selectedReactions = collect($reactionComments)->random(rand(2, 3));

            foreach ($selectedReactions as $reaction) {
                $comment = Comment::create([
                    'body' => $reaction['body'],
                    'post_id' => $post->id,
                    'user_id' => $users->random()->id,
                    'parent_comment_id' => null,
                    'created_at' => $post->created_at->addHours(rand(1, 48)),
                    'updated_at' => $post->created_at->addHours(rand(1, 48)),
                ]);

                // Add image to comment
                CommentImage::create([
                    'comment_id' => $comment->id,
                    'path' => 'storage/images/comments/' . $reaction['image'],
                    'created_at' => $comment->created_at,
                    'updated_at' => $comment->created_at,
                ]);

                // Add likes to reaction comments
                $commentLikes = $users->random(rand(3, 8));
                foreach ($commentLikes as $user) {
                    if ($user->id !== $comment->user_id) {
                        LikeComment::firstOrCreate([
                            'user_id' => $user->id,
                            'comment_id' => $comment->id,
                        ]);
                    }
                }
            }
        }
    }

    private function addEngagedComments($post, $users)
    {
        $engagedComments = [
            'Terima kasih untuk sharing ini! Really needed this reminder today 💙',
            'Your journey inspires me so much. Keep going strong! ✨',
            'Saved this post! Gonna try some of these tips. Thank you! 🙏',
            'This is beautiful! Thanks for being so open and helpful 🌟',
            'Love this so much! Community like this is everything 💕',
            'Your strength is amazing. Proud of how far you\'ve come! 👏',
            'This gives me hope untuk my own journey. Thank you 🌈',
            'Exactly what my heart needed to hear today. Grateful 🤗'
        ];

        // Add 5-8 engaged comments
        $commentCount = rand(5, 8);
        for ($i = 0; $i < $commentCount; $i++) {
            $comment = Comment::create([
                'body' => $engagedComments[array_rand($engagedComments)],
                'post_id' => $post->id,
                'user_id' => $users->random()->id,
                'parent_comment_id' => null,
                'created_at' => $post->created_at->addHours(rand(1, 72)),
                'updated_at' => $post->created_at->addHours(rand(1, 72)),
            ]);

            // Some comments get likes
            if (rand(1, 100) <= 60) {
                $commentLikes = $users->random(rand(1, 5));
                foreach ($commentLikes as $user) {
                    if ($user->id !== $comment->user_id) {
                        LikeComment::firstOrCreate([
                            'user_id' => $user->id,
                            'comment_id' => $comment->id,
                        ]);
                    }
                }
            }
        }
    }
}
