// Paket B - Persamaan dan Pertidaksamaan Satu Variabel
const daftarSoal = [
    {
        text: "Nilai y yang memenuhi persamaan 4(y - 3) = y + 9 adalah...",
        image: "",
        options: ["5", "6", "7", "8"],
        answer: "7",
        minTime: 60
    },
    {
        text: "Himpunan penyelesaian dari pertidaksamaan 3x - 2 < 6x + 10 untuk x bilangan bulat jika digambarkan pada garis bilangan adalah...",
        image: "",
        options: [
            "Garis bilangan dengan bulatan kosong di -4 dan panah ke arah kiri",
            "Garis bilangan dengan bulatan kosong di -4 dan panah ke arah kanan",
            "Garis bilangan dengan bulatan hitam di 4 dan panah ke arah kiri",
            "Garis bilangan dengan bulatan kosong di 4 dan panah ke arah kanan"
        ],
        answer: "Garis bilangan dengan bulatan kosong di -4 dan panah ke arah kanan",
        minTime: 75
    },
    {
        text: "Jika (1/3)x + 5 = (3/4)x - 5, maka nilai dari x + 2 adalah...",
        image: "",
        options: ["24", "26", "28", "30"],
        answer: "26",
        minTime: 90
    },
    {
        text: "Uang saku harian milik Budi adalah Rp20.000,00 lebih sedikit dari uang saku Candra. Jika jumlah uang saku mereka berdua adalah Rp90.000,00, model matematika yang tepat untuk menghitung besar uang saku Candra (c) adalah...",
        image: "",
        options: [
            "2c - 20.000 = 90.000",
            "2c + 20.000 = 90.000",
            "c - 20.000 = 90.000",
            "2c + 90.000 = 20.000"
        ],
        answer: "2c - 20.000 = 90.000",
        minTime: 120
    },
    {
        text: "Umur seorang ibu sekarang adalah 4 kali umur anaknya. Selisih umur mereka adalah 27 tahun. Umur anak tersebut 3 tahun yang akan datang adalah...",
        image: "",
        options: ["9 tahun", "12 tahun", "36 tahun", "39 tahun"],
        answer: "12 tahun",
        minTime: 135
    },
    {
        text: "Citra ingin membeli beberapa buah es krim kotak. Harga satu kotak es krim adalah Rp6.000,00. Ia membayar dengan selembar uang Rp100.000,00 dan menerima kembalian tidak kurang dari Rp16.000,00. Jika banyak es krim yang dibeli adalah x, model pertidaksamaan yang benar adalah...",
        image: "",
        options: [
            "100.000 - 6.000x ≥ 16.000",
            "100.000 - 6.000x ≤ 16.000",
            "6.000x + 16.000 ≤ 100.000",
            "6.000x + 16.000 ≥ 100.000"
        ],
        answer: "100.000 - 6.000x ≥ 16.000",
        minTime: 120
    },
    {
        text: "Untuk mendapatkan predikat A, rata-rata nilai dari tiga tugas harus minimal 85. Nilai tugas pertama dan kedua Fandi adalah 82 dan 80. Nilai minimum yang harus diperoleh Fandi pada tugas ketiga agar mendapat predikat A adalah...",
        image: "",
        options: ["90", "91", "93", "95"],
        answer: "93",
        minTime: 150
    },
    {
        text: "Sebuah papan berbentuk persegi panjang memiliki ukuran panjang (3x + 2) cm dan lebar (x + 4) cm. Jika keliling papan tersebut tidak lebih dari 76 cm, maka panjang maksimum papan yang mungkin adalah...",
        image: "",
        options: ["8 cm", "12 cm", "23 cm", "26 cm"],
        answer: "26 cm",
        minTime: 180
    },
    {
        text: "Jumlah dari tiga bilangan bulat genap berurutan kurang dari atau sama dengan 54. Jika bilangan genap pertama dimisalkan sebagai m, grafik penyelesaian nilai m terkecil yang membatasi batas atas kelompok bilangan tersebut pada garis bilangan adalah...",
        image: "",
        options: [
            "Bulatan kosong di angka 16 dengan panah ke kiri",
            "Bulatan hitam di angka 16 dengan panah ke kiri",
            "Bulatan kosong di angka 18 dengan panah ke kanan",
            "Bulatan hitam di angka 18 dengan panah ke kiri"
        ],
        answer: "Bulatan hitam di angka 16 dengan panah ke kiri",
        minTime: 210
    },
    {
        text: "Layanan pengiriman barang 'Kilat' menetapkan biaya beban dasar Rp15.000,00 ditambah biaya per kg sebesar Rp5.000,00. Siska memiliki anggaran maksimal Rp80.000,00 untuk mengirim paket. Berat maksimum paket (p) dalam kg yang dapat dikirim Siska adalah...",
        image: "",
        options: ["11 kg", "12 kg", "13 kg", "14 kg"],
        answer: "13 kg",
        minTime: 195
    }
];
