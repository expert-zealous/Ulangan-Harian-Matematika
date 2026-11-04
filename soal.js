// Paket A - Persamaan dan Pertidaksamaan Satu Variabel
const daftarSoal = [
    {
        text: "Nilai x yang memenuhi persamaan 3(x - 2) = x + 8 adalah...",
        options: ["5", "7", "9", "11"],
        answer: "7",
        minTime: 60
    },
    {
        text: "Himpunan penyelesaian dari pertidaksamaan 2x - 5 < 4x + 3 untuk x bilangan bulat jika digambarkan pada garis bilangan adalah...",
        options: [
            "Garis bilangan dengan bulatan kosong di -4 dan panah ke arah kanan",
            "Garis bilangan dengan bulatan kosong di -4 dan panah ke arah kiri",
            "Garis bilangan dengan bulatan hitam di 4 dan panah ke arah kanan",
            "Garis bilangan dengan bulatan kosong di 4 dan panah ke arah kiri",
        minTime: 75
        ],
        answer: "Garis bilangan dengan bulatan kosong di -4 dan panah ke arah kanan"
    },
    {
        text: "Jika (1/2)x + 4 = (2/3)x - 1, maka nilai dari x + 5 adalah...",
        options: ["30", "35", "40", "45"],
        answer: "35",
        minTime: 90
    },
    {
        text: "Tabungan milik Rian di bank adalah Rp150.000,00 lebih banyak dari tabungan Susi. Jika jumlah tabungan mereka berdua adalah Rp750.000,00, model matematika yang tepat untuk menghitung besar tabungan Susi (s) adalah...",
        options: [
            "2s - 150.000 = 750.000",
            "2s + 150.000 = 750.000",
            "s + 150.000 = 750.000",
            "2s + 750.000 = 150.000"
        ],
        answer: "2s + 150.000 = 750.000",
        minTime: 120
    },
    {
        text: "Umur seorang ayah sekarang adalah 3 kali umur anaknya. Selisih umur mereka adalah 26 tahun. Umur anak tersebut 5 tahun yang akan datang adalah...",
        options: ["13 tahun", "18 tahun", "34 tahun", "39 tahun"],
        answer: "18 tahun",
        minTime: 135
    },
    {
        text: "Andi ingin membeli beberapa buah buku tulis. Harga satu buku tulis adalah Rp4.500,00. Ia membayar dengan selembar uang Rp50.000,00 and menerima kembalian tidak kurang dari Rp5.000,00. Jika banyak buku yang dibeli adalah b, model pertidaksamaan yang benar adalah...",
        options: [
            "4.500b + 5.000 ≤ 50.000",
            "4.500b + 5.000 ≥ 50.000",
            "50.000 - 4.500b ≥ 5.000",
            "50.000 - 4.500b ≤ 5.000"
        ],
        answer: "50.000 - 4.500b ≥ 5.000",
        minTime: 120
    },
    {
        text: "Seorang siswa dinyatakan lulus jika rata-rata dari tiga kali ujian matematika minimal 70. Nilai ujian pertama dan kedua Desi berturut-turut adalah 64 dan 72. Nilai minimum yang harus diperoleh Desi pada ujian ketiga agar dinyatakan lulus adalah...",
        options: ["72", "74", "76", "78"],
        answer: "74",
        minTime: 150
    },
    {
        text: "Sebuah kebun berbentuk persegi panjang memiliki ukuran panjang (2x + 5) meter dan lebar (x + 2) meter. Jika keliling kebun tersebut tidak lebih dari 56 meter, maka panjang maksimum kebun yang mungkin adalah...",
        options: ["7 meter", "9 meter", "19 meter", "21 meter"],
        answer: "21 meter",
        minTime: 90
    },
    {
        text: "Jumlah dari tiga bilangan bulat ganjil berurutan kurang dari atau sama dengan 45. Jika bilangan ganjil pertama dimisalkan sebagai n, grafik penyelesaian nilai n terkecil yang membatasi batas atas kelompok bilangan tersebut pada garis bilangan adalah...",
        options: [
            "Bulatan hitam di angka 13 dengan panah ke kiri",
            "Bulatan kosong di angka 13 dengan panah ke kanan",
            "Bulatan hitam di angka 11 dengan panah ke kiri",
            "Bulatan kosong di angka 11 dengan panah ke kanan"
        ],
        answer: "Bulatan hitam di angka 11 dengan panah ke kiri",
        minTime: 180
    },
    {
        text: "Perusahaan taksi 'Aman' memberlakukan tarif awal Rp10.000,00 dan tarif per kilometer sebesar Rp4.000,00. Seseorang memiliki uang Rp66.000,00 untuk membayar taksi tersebut. Jarak maksimum (k) dalam kilometer yang dapat ditempuh orang tersebut tanpa kekurangan uang adalah...",
        options: ["13 km", "14 km", "15 km", "16 km"],
        answer: "14 km",
        minTime: 195
    }
];
