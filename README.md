<p align="center"><a href="https://www.satuhati.site" target="_blank"><img src="https://raw.githubusercontent.com/CodeWithRey/satu-hati/master/public/assets/images/logo-no-text.png" width="400" alt="Satu Hati Logo"></a></p>

<h1 align="center"><b>Satu Hati - Bersama Lawan Pelecehan Seksual</b></h1>

Proyek SatuHati merupakan sebuah platform website yang bertujuan untuk mengatasi perbedaan perlakuan dan stigma yang sering muncul dalam penanganan pelecehan seksual, baik terhadap perempuan maupun laki-laki. Dengan fokus pada peningkatan kesadaran masyarakat, tujuan utama kami adalah menghilangkan stigma terkait sanksi sosial yang cenderung lebih berdampak kepada perempuan.

## Tim C523-PS026

- S103YB442 – [Reynaldi Rizky Pratama](https://github.com/CodeWithRey) - Universitas Dinamika
- F244YB063 – [Marcellino Julian Gozal](https://github.com/marcellinojg) - Universitas Kristen Petra
- F129XB116 – [Junia Vitasari](https://github.com/Junia0806) - Politeknik Negeri Jember
- F129YB126 – [Arfan Astaraja](https://github.com/arfan0509) - Politeknik Negeri Jember
- F525XB312 – [Vicka Rizqia](https://github.com/fikaakif31) - Politeknik Negeri Banyuwangi

## Dokumen
- [Project Brief](https://drive.google.com/file/d/10cG5AGD0HxkLZ_tnxqQfyGSXos70uuWW/view?usp=sharing)
- [Working Doc](https://docs.google.com/document/d/1yoLhm5aWCRcNhTVl3EtTIR7lssv51m0g81M9T2mQo_A)
- [User Guide](https://drive.google.com/file/d/18hm3B0_AvFsl3RpuRLiHuImNf5BiyKUq/view)
- [Slide Presentasi](https://www.canva.com/design/DAF2xqg-uyM/raYMYC651Q5XHpfHW3S1rg/edit)
- [Video Presentasi](https://www.youtube.com/watch?v=EAymPVOEpuM)
- [Video Demo Aplikasi](https://www.youtube.com/watch?v=oVFswb0BQKM)

## Resources
<span><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/768px-HTML5_logo_and_wordmark.svg.png" width="150" alt="Logo HTML"></span>
<span><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" width="150" alt="Logo Javascript"></span>
<a href="https://www.php.net/" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png" width="150" alt="Logo PHP"></a>
<a href="https://laravel.com/" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1969px-Laravel.svg.png" width="150" alt="Logo Laravel"></a>
<a href="https://tailwindcss.com/" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/512px-Tailwind_CSS_Logo.svg.png?20230715030042" width="200" alt="Logo TailwindCSS"></a>

## Instalasi / Cara menjalankan di lokal
1. Clone proyek
```bash
  git clone https://github.com/CodeWithRey/satu-hati.git
```
2. Jalankan composer update
```bash
  composer update
```
3. Instal library menggunakan npm
```bash
  npm install
```
4. Setup database mySQL di local
5. Copy + Paste .env.example lalu rename menjadi .env
6. Generate `APP_KEY` pada file .env dengan
```bash
  php artisan key:generate
```
8. Konfigurasi `DB_DATABASE` `DB_USERNAME` `DB_PASSWORD` di file .env
9. Jalankan seeder database
```bash
  php artisan migrate:fresh --seed
```
9. Buat link storage ke public directory
```bash
  php artisan storage:link
```
10. Jalankan node runtime
```bash
  npm run dev
```
11. Jalankan proyek Laravel
```bash
  php artisan serve
```
