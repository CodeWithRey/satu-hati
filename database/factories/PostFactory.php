<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $postTitles = [
            'Berbagi Pengalaman: Langkah Pertama Menuju Pemulihan',
            'Bagaimana Cara Memulai Proses Healing?',
            'Dukungan Keluarga dalam Proses Pemulihan',
            'Tips Menjaga Kesehatan Mental Setelah Trauma',
            'Pentingnya Mencari Bantuan Profesional',
            'Membangun Kembali Rasa Percaya Diri',
            'Cara Menghadapi Flashback dan Anxiety',
            'Komunitas Support Group di Indonesia',
            'Belajar Memaafkan Diri Sendiri',
            'Kembali Percaya pada Diri Sendiri',
            'Pentingnya Self-Care dalam Pemulihan',
            'Bagaimana Cara Bicara dengan Terapis?',
            'Mengatasi Stigma dari Lingkungan Sekitar',
            'Membangun Boundary yang Sehat',
            'Berbagi Cerita Tanpa Merasa Bersalah',
            'Mencari Kekuatan dalam Kebersamaan',
            'Langkah-langkah Kecil Menuju Kesembuhan',
            'Pentingnya Mencintai Diri Sendiri',
            'Bagaimana Cara Melaporkan Kasus?',
            'Dukungan Hukum untuk Survivor'
        ];

        $postDescriptions = [
            'Hai teman-teman, saya ingin berbagi pengalaman tentang perjalanan pemulihan saya. Awalnya saya merasa sangat terpuruk dan tidak tahu harus mulai dari mana. Tapi dengan dukungan keluarga dan terapi, saya mulai bisa bangkit perlahan. Saya tahu setiap orang punya timeline yang berbeda, tapi saya ingin kalian tahu bahwa ada harapan.',

            'Sudah beberapa bulan sejak kejadian itu, dan saya masih struggle dengan anxiety dan mood swing. Apakah ada yang punya tips untuk coping mechanism yang efektif? Saya sudah coba meditasi dan olahraga ringan, tapi masih sering merasa overwhelmed.',

            'Saya bersyukur punya keluarga yang supportive. Mama selalu mengingatkan saya bahwa ini bukan salah saya, dan Papa bahkan ikut terapi keluarga bersama saya. Dukungan mereka sangat berarti dalam proses healing saya. Kalau ada yang keluarganya belum bisa memahami, jangan menyerah ya.',

            'Setelah kejadian traumatis, saya sempat mengabaikan kesehatan mental saya. Tapi sekarang saya belajar pentingnya self-care dan menjaga mental health. Routine sederhana seperti journaling, tidur cukup, dan berbicara dengan orang terpercaya sangat membantu.',

            'Buat teman-teman yang masih ragu untuk seek professional help, saya ingin share pengalaman saya dengan psikolog. Awalnya saya takut dan malu, tapi ternyata having someone who understands trauma really helps. Terapis tidak akan judge kita, mereka ada untuk membantu kita heal.',

            'Perjalanan membangun kembali self-confidence setelah trauma memang tidak mudah. Saya mulai dengan hal-hal kecil seperti dress up untuk diri sendiri, belajar hal baru yang saya suka, dan merayakan setiap small achievement. Progress mungkin lambat, tapi setiap langkah kecil itu berarti.',

            'Flashback dan anxiety attack masih sering saya alami. Yang membantu saya adalah grounding technique: fokus pada 5 hal yang bisa dilihat, 4 yang bisa didengar, 3 yang bisa disentuh, 2 yang bisa dicium, 1 yang bisa dirasa. Breathing exercise juga sangat helpful.',

            'Saya sedang mencari informasi tentang support group di Jakarta atau sekitarnya. Rasanya lebih nyaman berbagi dengan orang-orang yang punya pengalaman serupa. Kalau ada yang tahu komunitas yang aman dan supportive, boleh share di comment ya.',

            'Salah satu hal tersulit dalam healing journey adalah belajar memaafkan diri sendiri. Saya sering blame myself, merasa "kenapa saya tidak bisa prevent it" atau "kenapa saya tidak fight back". Tapi therapy mengajarkan saya bahwa survivor guilt itu normal, dan healing starts with self-compassion.',

            'Trust issues setelah trauma itu real banget. Saya bahkan sempat tidak percaya sama orang terdekat. Tapi dengan therapy dan dukungan orang-orang baik di sekitar saya, perlahan saya belajar trust again. It takes time, dan itu okay.',

            'Self-care bukan cuma about spa day atau shopping. Untuk saya, self-care adalah set boundaries, say no when needed, validate my own feelings, dan tidak push myself too hard. Sometimes, istirahat adalah bentuk self-care yang paling kita butuhkan.',

            'First time ke terapis memang nerve-wracking. Tips dari saya: tulis dulu apa yang ingin disampaikan, jangan worry tentang crying (it\'s totally normal), dan ingat bahwa terapis bound by confidentiality. You\'re brave for taking this step.',

            'Stigma dari lingkungan sekitar memang menyakitkan. Ada yang bilang "sudah lah, lupain aja" atau "jangan dipikirkan terus". But healing doesn\'t work that way. Kita perlu surround ourselves dengan orang-orang yang understand dan support recovery journey kita.',

            'Belajar set boundaries adalah skill yang sangat penting. Saya belajar untuk tidak guilty ketika bilang "tidak", tidak feel obligated untuk explain everything ke orang lain, dan prioritize my own comfort dan safety. Boundaries protect our energy and peace.',

            'Sharing story is empowering, tapi juga emotionally draining. Saya belajar untuk choose carefully siapa yang saya percayai dengan cerita saya, dan tidak feel pressure untuk tell everyone. Your story belongs to you, dan you decide who deserves to hear it.',

            'Di komunitas ini saya menemukan strength yang tidak saya tahu saya miliki. Mendengar stories dari survivor lain memberikan saya hope dan reminder bahwa I\'m not alone in this journey. Together, we heal dan support each other.',

            'Recovery bukan linear process. Ada hari yang baik, ada hari yang sangat sulit. Saya belajar untuk tidak hard on myself di bad days, dan celebrate small victories di good days. Setiap langkah kecil toward healing itu precious dan valid.',

            'Learning to love myself again after trauma is ongoing process. Saya mulai dengan positive affirmations, treat myself with kindness, dan tidak compare my healing journey dengan orang lain. You deserve love, especially from yourself.',

            'Untuk teman-teman yang masih bingung tentang legal process, saya ingin share bahwa ada banyak lembaga yang bisa help. LBH, Komnas Perempuan, dan banyak NGO lain yang provide legal aid for survivors. You have rights, dan you deserve justice.',

            'Legal support untuk survivor di Indonesia sudah semakin baik, meski masih banyak yang perlu diperbaiki. Ada lawyer-lawyer yang khusus handle kasus kekerasan seksual dan understand trauma-informed approach. Jangan takut untuk seek legal justice kalau kalian ready.'
        ];

        return [
            'title' => $this->faker->randomElement($postTitles),
            'is_anonymous' => $this->faker->boolean(30), // 30% chance untuk anonymous
            'description' => $this->faker->randomElement($postDescriptions),
            'user_id' => function () {
                $existingUsersId = User::pluck('id')->toArray();
                return fake()->randomElement($existingUsersId);
            },
        ];
    }
}
