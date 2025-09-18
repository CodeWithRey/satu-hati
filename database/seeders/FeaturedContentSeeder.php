<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Post;
use App\Models\Comment;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class FeaturedContentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Get admin or first user
        $adminUser = User::where('email', 'admin@satuhati.com')->first() ?? User::first();

        if (!$adminUser) {
            $this->command->warn('No users found. Please run UserSeeder first.');
            return;
        }

        // Create featured informational posts
        $featuredPosts = [
            [
                'title' => 'Selamat Datang di Komunitas Satu Hati - Panduan untuk Member Baru',
                'description' => 'Halo dan selamat datang di komunitas Satu Hati! 🤗

Kami sangat senang kamu bergabung dengan keluarga besar survivor dan supporter di sini. Komunitas ini diciptakan sebagai safe space untuk sharing, healing, dan saling mendukung.

**Aturan Komunitas:**
- Hormati privasi dan cerita setiap member
- Gunakan bahasa yang supportive dan non-judgmental
- Jaga kerahasiaan informasi pribadi yang dibagikan
- Report konten yang inappropriate kepada admin
- Remember: healing journey setiap orang berbeda

**Tips untuk New Member:**
- Tidak ada pressure untuk share cerita jika belum ready
- Gunakan fitur anonymous posting jika lebih nyaman
- Join group discussion dan support thread
- Manfaatkan resource yang tersedia di komunitas

**Resource Bantuan:**
- Hotline Crisis: 021-7270-0372 (24/7)
- LBH Perempuan: 021-8765432
- Rifka Annisa: 0274-880-500

Kamu tidak sendirian dalam perjalanan ini. We are here for you! 💙

#Welcome #CommunityGuidelines #SafeSpace #Support',
                'is_anonymous' => false,
                'created_at' => now()->subDays(30),
            ],
            [
                'title' => 'Resource: Daftar Psikolog dan Terapis yang Trauma-Informed di Indonesia',
                'description' => 'Thread ini berisi informasi psikolog dan terapis yang memiliki pengalaman dalam menangani trauma, khususnya sexual trauma. Semua professional yang listed sudah verified dan recommended by survivors.

**Jakarta:**
- Dr. Sarah Wijaya, M.Psi - Trauma & PTSD Specialist
  📍 RS Pondok Indah, Jakarta Selatan
  📞 021-7659-8888

- Psikolog Dinda Paramita, M.Psi
  📍 Klinik Jiwa Sehat, Menteng
  📞 021-3456-7890

**Bandung:**
- Dr. Rika Sari, Sp.KJ - Psychiatrist
  📍 RS Hasan Sadikin
  📞 022-8765-4321

**Surabaya:**
- Psikolog Maya Chen, M.Psi
  📍 Klinik Psikologi Harmoni
  📞 031-2345-6789

**Online Therapy:**
- BetterHelp Indonesia
- Riliv
- Klikdokter Psychology

**Tips Memilih Terapis:**
- Cari yang punya pengalaman dengan trauma
- Pastikan kamu merasa comfortable dengan approach mereka
- Jangan ragu untuk ganti terapis jika tidak cocok
- Ask about sliding scale fees jika budget terbatas

Feel free to add recommendation di comment section!

#Resources #Therapy #ProfessionalHelp #TraumaInformed',
                'is_anonymous' => false,
                'created_at' => now()->subDays(25),
            ],
            [
                'title' => 'Coping Strategies: Techniques yang Membantu Saat Panic Attack',
                'description' => 'Panic attack adalah salah satu symptom yang sering dialami survivor. Sharing beberapa techniques yang proven helpful berdasarkan pengalaman pribadi dan research.

**Grounding Techniques:**

🔸 **5-4-3-2-1 Method:**
- 5 hal yang bisa kamu lihat
- 4 hal yang bisa kamu sentuh
- 3 hal yang bisa kamu dengar
- 2 hal yang bisa kamu cium
- 1 hal yang bisa kamu rasa

🔸 **Box Breathing:**
- Tarik napas 4 detik
- Tahan 4 detik
- Buang napas 4 detik
- Tahan 4 detik
- Repeat

🔸 **Cold Water Technique:**
- Cuci muka dengan air dingin
- Pegang ice cube
- Minum air dingin perlahan

🔸 **Progressive Muscle Relaxation:**
- Tegang dan lepas otot mulai dari kaki
- Focus pada sensation perbedaan tegang vs relax
- Move up through your body

**Emergency Kit Ideas:**
- Essential oil (lavender/peppermint)
- Stress ball atau fidget toy
- Playlist musik yang calming
- Photos atau notes yang grounding
- Emergency contact numbers

**When to Seek Help:**
- Panic attack makin frequent
- Interfere dengan daily activities
- Accompanied by suicidal thoughts

Remember: panic attack temporary, kamu strong enough to get through this! 💪

Share coping strategies kalian di comment ya!

#CopingStrategies #PanicAttack #MentalHealth #SelfCare',
                'is_anonymous' => false,
                'created_at' => now()->subDays(20),
            ],
            [
                'title' => 'Legal Rights: Yang Perlu Diketahui Survivor tentang Proses Hukum',
                'description' => 'Banyak survivor yang confused tentang hak-hak legal mereka. Thread ini membahas informasi basic yang perlu diketahui. *Disclaimer: ini bukan legal advice, selalu konsultasi dengan lawyer untuk kasus spesifik.*

**Hak-hak Survivor:**
- Hak untuk melapor tanpa time limit tertentu
- Hak untuk didampingi saat pemeriksaan
- Hak atas perlindungan identitas
- Hak untuk menolak rekonstruksi
- Hak atas visum et repertum gratis

**Proses Pelaporan:**
1. **Immediate Steps:**
   - Preservasi evidence (jangan mandi/ganti baju dulu)
   - Medical examination & visum
   - Report ke polisi dalam 24-48 jam

2. **Investigation Process:**
   - BAP (Berita Acara Pemeriksaan)
   - Pengumpulan saksi dan evidence
   - Possible confrontation (bisa ditolak)

3. **Court Process:**
   - Dakwaan oleh jaksa
   - Persidangan (bisa minta closed court)
   - Vonis

**Support Available:**
- LBH (Lembaga Bantuan Hukum) - gratis
- Komnas Perempuan
- WCC (Women Crisis Center) di berbagai kota
- Pendampingan psikologis selama proses

**Important Notes:**
- Tidak ada kewajiban untuk lanjut ke pengadilan
- Bisa withdraw laporan (meski ada consequences)
- Mediasi NOT recommended untuk sexual assault
- Evidence digital (chat, foto) sangat penting

**Preparing for Legal Process:**
- Document everything
- Keep original evidence safe
- Prepare support system
- Consider therapy untuk cope dengan stress

Questions? Drop di comment atau DM admin untuk referral ke legal aid.

#LegalRights #Justice #Survivor #LegalAid',
                'is_anonymous' => false,
                'created_at' => now()->subDays(15),
            ]
        ];

        foreach ($featuredPosts as $postData) {
            $post = Post::create([
                'user_id' => $adminUser->id,
                'title' => $postData['title'],
                'description' => $postData['description'],
                'is_anonymous' => $postData['is_anonymous'],
                'created_at' => $postData['created_at'],
                'updated_at' => $postData['created_at'],
            ]);

            // Add some supportive comments to these featured posts
            $this->addSupportiveComments($post);
        }

        $this->command->info('Featured content created successfully!');
    }

    private function addSupportiveComments($post)
    {
        $users = User::all();
        if ($users->count() < 3) return;

        $supportiveComments = [
            'Terima kasih admin untuk informasi yang sangat helpful ini! 🙏',
            'Thread ini sangat bermanfaat. Bookmarked! ✨',
            'Information yang sangat needed. Thanks for sharing.',
            'Sangat appreciate effort admin untuk compile info ini.',
            'This is exactly what I needed. Thank you so much! 💙',
            'Great resource! Akan aku share ke teman yang mungkin butuh.',
            'Admin keren banget! Info seperti ini very valuable.',
            'Thanks for creating safe space dan providing guidance.',
            'Komunitas ini amazing karena ada admin yang care seperti ini.',
            'Helpful banget! Semoga makin banyak survivor yang terbantu.',
        ];

        // Add 3-5 comments per featured post
        $commentCount = rand(3, 5);
        for ($i = 0; $i < $commentCount; $i++) {
            Comment::create([
                'body' => $supportiveComments[array_rand($supportiveComments)],
                'post_id' => $post->id,
                'user_id' => $users->random()->id,
                'parent_comment_id' => null,
                'created_at' => $post->created_at->addHours(rand(1, 48)),
                'updated_at' => $post->created_at->addHours(rand(1, 48)),
            ]);
        }
    }
}
