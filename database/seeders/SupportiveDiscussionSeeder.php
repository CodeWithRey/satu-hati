<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Post;
use App\Models\Comment;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SupportiveDiscussionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = User::all();
        if ($users->count() < 5) {
            $this->command->warn('Need at least 5 users. Please run UserSeeder first.');
            return;
        }

        // Create supportive discussion threads
        $discussionTopics = [
            [
                'title' => 'Daily Check-in Thread: Bagaimana perasaan kalian hari ini?',
                'description' => 'Hey everyone! 🌟

Ini adalah daily check-in thread untuk kita semua. Sometimes it helps to just acknowledge bagaimana kita feeling hari ini, whether it\'s good or challenging.

Kalian bisa share:
- Mood hari ini (scale 1-10)
- Hal yang membuat grateful
- Challenge yang sedang dihadapi
- Small win atau achievement
- Atau just say hi! 👋

No pressure untuk elaborate, even just emoji pun okay. Yang penting kita tahu bahwa ada community yang care.

Aku mulai dulu ya:
Mood: 7/10 - feeling hopeful today
Grateful: untuk secangkir kopi pagi yang hangat dan komunitas supportive ini
Challenge: masih struggle dengan sleep pattern
Small win: berhasil finish artikel yang udah lama pending

How about you? Share kalau kalian comfortable ya! 💙

#DailyCheckIn #CommunitySupport #MoodTracker #SafeSpace',
                'is_anonymous' => false,
            ],
            [
                'title' => 'Self-Care Sunday: Apa self-care routine kalian?',
                'description' => 'Happy Sunday everyone! 🌸

Hari ini aku mau nanya tentang self-care routine kalian. Healing journey itu exhausting, jadi penting banget untuk take care of ourselves.

Self-care bukan cuma about bubble bath atau spa (although those are nice too!). It can be:
- Setting boundaries
- Saying no to things yang drain energy
- Eating nutritious food
- Getting enough sleep
- Move your body in ways yang feel good
- Connect dengan nature
- Journal atau creative expression
- Meditation atau mindfulness practice

**Aku pengen tahu:**
- Apa self-care activity favorit kalian?
- Daily routine yang help maintain mental health?
- Self-care hack yang mungkin unconventional tapi effective?
- Struggle dalam maintain self-care routine?

**Self-care reminder:**
- Self-care is not selfish
- Start small - even 5 minutes counts
- Consistency > perfection
- What works for others might not work for you, dan itu okay

Share self-care tips kalian dong! Siapa tahu bisa inspire yang lain 💕

#SelfCare #SelfCareSunday #MentalHealth #Healing #Wellness',
                'is_anonymous' => false,
            ],
            [
                'title' => 'Book Recommendations: Buku yang Membantu dalam Healing Journey',
                'description' => 'Halo book lovers! 📚

Thread ini untuk sharing book recommendations yang helpful dalam healing journey. Buku bisa jadi companion yang powerful dalam proses recovery.

**Categories:**
- Trauma & healing
- Self-help & personal development
- Memoirs & survivor stories
- Fiction yang empowering
- Spirituality & mindfulness

**Beberapa yang aku recommend:**

📖 **"The Body Keeps the Score" by Bessel van der Kolk**
Must-read tentang how trauma affects the body. Heavy tapi very informative.

📖 **"Daring Greatly" by Brené Brown**
About vulnerability, shame, dan courage. Eye-opening banget.

📖 **"My Story" by Elizabeth Smart**
Memoir yang powerful tentang survival dan recovery.

📖 **"The Gifts of Imperfection" by Brené Brown**
Gentle approach tentang self-compassion.

📖 **Indonesian books:**
- "Luka yang Tak Kunjung Sembuh" (various authors)
- "Perempuan Berkalung Sorban" by Abidah El Khalieqy

**Reading tips for survivors:**
- Okay untuk skip parts yang triggering
- Take breaks when needed
- Discuss dengan terapis if helpful
- Join reading buddy system

Apa book recommendations kalian? Share di comment ya!

#BookRecommendations #Healing #Reading #Recovery #SelfHelp',
                'is_anonymous' => false,
            ]
        ];

        foreach ($discussionTopics as $topicData) {
            $post = Post::create([
                'user_id' => $users->random()->id,
                'title' => $topicData['title'],
                'description' => $topicData['description'],
                'is_anonymous' => $topicData['is_anonymous'],
                'created_at' => fake()->dateTimeBetween('-7 days', '-1 day'),
                'updated_at' => fake()->dateTimeBetween('-7 days', '-1 day'),
            ]);

            // Add engaging comments to these discussion posts
            $this->addEngagingComments($post, $users);
        }

        $this->command->info('Supportive discussion threads created successfully!');
    }

    private function addEngagingComments($post, $users)
    {
        $engagingResponses = [
            // Daily check-in responses
            [
                'Mood: 6/10 hari ini. Grateful untuk sunshine dan playlist musik yang mood booster. Challenge: anxiety before meeting nanti. Small win: berhasil bangun pagi dan workout 15 menit! 💪',
                'Thank you for creating space ini! Mood: 8/10 - surprisingly good day. Grateful untuk support system yang amazing. No major challenge today, just taking it easy 😊',
                'Mood: 5/10 - neutral day. Grateful untuk hot tea dan buku bagus. Challenge: masih processing emotions dari therapy session kemarin. Small win: actually showed up for myself today 🌱',
                'Appreciate thread ini! Mood: 7/10. Grateful untuk weekend yang peaceful. Challenge: upcoming work week anxiety. Small win: completed art project yang udah lama pending! 🎨',
            ],
            // Self-care responses
            [
                'Self-care favorit: morning walk dengan podcast or music! Simple tapi effective banget untuk clear the mind. Daily routine: meditation 10 menit every morning 🧘‍♀️',
                'Unconventional self-care: cleaning & organizing space. Somehow therapeutic untuk anxiety aku. Daily routine: gratitude journaling before bed ✍️',
                'Self-care hack: setting phone ke airplane mode for 1 hour setiap hari. Game changer untuk mental peace! Struggle: consistency, especially di busy days 📱',
                'Dancing di kamar sambil blast musik! Sounds silly tapi really helps release stress dan reconnect dengan body. Self-care = whatever makes you feel more like yourself 💃',
            ],
            // Book recommendations responses
            [
                'Trauma-informed yoga books juga helpful! "Trauma-Sensitive Yoga" by David Emerson. Gentle approach untuk reconnect dengan body after trauma 🧘‍♀️',
                '"Untamed" by Glennon Doyle changed my perspective tentang living authentically. Very empowering! Fiction recommendation: "Educated" by Tara Westover - memoir yang incredible 📚',
                'Local author recommendation: "Gadis Pantai" untuk historical perspective. Poetry juga healing - Rupi Kaur\'s "Milk and Honey" resonates banget 🌊',
                'Reading buddy system idea bagus banget! Anyone interested untuk start book club virtual? Bisa discuss safe space dan support each other through challenging reads 👥',
            ]
        ];

        // Determine response type based on post title
        $responseIndex = 0;
        if (str_contains($post->title, 'Daily Check-in')) {
            $responseIndex = 0;
        } elseif (str_contains($post->title, 'Self-Care')) {
            $responseIndex = 1;
        } elseif (str_contains($post->title, 'Book')) {
            $responseIndex = 2;
        }

        $responses = $engagingResponses[$responseIndex] ?? $engagingResponses[0];

        // Add 4-6 engaging comments
        $commentCount = rand(4, 6);
        for ($i = 0; $i < $commentCount && $i < count($responses); $i++) {
            $comment = Comment::create([
                'body' => $responses[$i],
                'post_id' => $post->id,
                'user_id' => $users->random()->id,
                'parent_comment_id' => null,
                'created_at' => $post->created_at->addHours(rand(1, 24)),
                'updated_at' => $post->created_at->addHours(rand(1, 24)),
            ]);

            // Add some replies to comments (30% chance)
            if (rand(1, 100) <= 30) {
                $replyResponses = [
                    'Thanks for sharing! Aku juga mau coba approach ini 💙',
                    'Relate banget dengan experience kamu. Sending virtual hug! 🤗',
                    'Appreciate openness kamu. It helps me feel less alone ✨',
                    'This is so inspiring! Thank you for reminder ini 🌟',
                    'Same struggle here. We got this together! 💪',
                ];

                Comment::create([
                    'body' => $replyResponses[array_rand($replyResponses)],
                    'post_id' => $post->id,
                    'user_id' => $users->random()->id,
                    'parent_comment_id' => $comment->id,
                    'created_at' => $comment->created_at->addHours(rand(1, 12)),
                    'updated_at' => $comment->created_at->addHours(rand(1, 12)),
                ]);
            }
        }
    }
}
