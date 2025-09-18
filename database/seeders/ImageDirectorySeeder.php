<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File;

class ImageDirectorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create image directories in storage/app/public (accessible via /storage symlink)
        $postImageDir = storage_path('app/public/images/posts');
        $commentImageDir = storage_path('app/public/images/comments');

        if (!File::exists($postImageDir)) {
            File::makeDirectory($postImageDir, 0755, true);
        }

        if (!File::exists($commentImageDir)) {
            File::makeDirectory($commentImageDir, 0755, true);
        }

        // Create placeholder post images
        $postImages = [
            'healing-quotes-1.jpg' => 'Inspirational healing quotes image',
            'inspirational-quotes-2.jpg' => 'Motivational quotes for survivors',
            'self-care-tips-3.jpg' => 'Self-care activities and tips visual',
            'support-community-4.jpg' => 'Community support illustration',
            'mental-health-awareness-5.jpg' => 'Mental health awareness graphic',
            'recovery-journey-6.jpg' => 'Recovery journey milestones',
            'therapeutic-activities-7.jpg' => 'Therapeutic activities guide',
            'mindfulness-meditation-8.jpg' => 'Mindfulness and meditation image',
            'positive-affirmations-9.jpg' => 'Positive affirmations visual',
            'survivor-strength-10.jpg' => 'Survivor strength and courage',
            'hope-healing-11.jpg' => 'Hope and healing imagery',
            'counseling-resources-12.jpg' => 'Counseling and therapy resources',
            'support-groups-13.jpg' => 'Support group meeting image',
            'recovery-milestones-14.jpg' => 'Recovery milestone celebration',
            'self-love-reminders-15.jpg' => 'Self-love and acceptance',
            'coping-strategies-16.jpg' => 'Healthy coping strategies',
            'peaceful-nature-17.jpg' => 'Peaceful nature scene',
            'comfort-zones-18.jpg' => 'Comfort and safe spaces',
            'empowerment-19.jpg' => 'Empowerment and strength',
            'community-support-20.jpg' => 'Community coming together',
        ];

        foreach ($postImages as $filename => $description) {
            $filePath = $postImageDir . '/' . $filename;
            if (!File::exists($filePath)) {
                File::put($filePath . '.placeholder', "Placeholder for {$filename}: {$description}");
            }
        }

        // Create placeholder comment images
        $commentImages = [
            'virtual-hug-1.jpg' => 'Virtual hug illustration',
            'sending-love-2.jpg' => 'Sending love and support',
            'support-emoji-3.jpg' => 'Supportive emoji collection',
            'encouraging-meme-4.jpg' => 'Encouraging meme or illustration',
            'heart-emoji-5.jpg' => 'Heart emoji variations',
            'solidarity-6.jpg' => 'Solidarity and unity image',
            'positive-vibes-7.jpg' => 'Positive vibes illustration',
            'comfort-gif-8.gif' => 'Comforting animated image',
            'care-bear-hug-9.jpg' => 'Caring hug illustration',
            'rainbow-hope-10.jpg' => 'Rainbow hope symbol',
            'flowers-support-11.jpg' => 'Supportive flowers image',
            'sunshine-smile-12.jpg' => 'Sunshine and smile',
            'peaceful-image-13.jpg' => 'Peaceful calming image',
            'strength-symbol-14.jpg' => 'Strength symbol or icon',
            'butterfly-transformation-15.jpg' => 'Butterfly transformation',
        ];

        foreach ($commentImages as $filename => $description) {
            $filePath = $commentImageDir . '/' . $filename;
            if (!File::exists($filePath)) {
                File::put($filePath . '.placeholder', "Placeholder for {$filename}: {$description}");
            }
        }

        $this->command->info('Image directories and placeholder files created successfully!');
        $this->command->info('Note: Replace .placeholder files with actual images for production use.');
    }
}
