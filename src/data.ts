export interface Official {
  id: string;
  name: string;
  role: string;
  image: string;
  phone?: string;
  bio?: string;
  workDays?: string;
}

export interface NewsArticle {
  id: string;
  date: string;
  rawDate: string;
  title: string;
  summary: string;
  content: string;
  image: string;
  category: string;
  author: string;
  readTime: string;
}

export interface UmkmProduct {
  id: string;
  title: string;
  category: 'Kerajinan' | 'Kuliner' | 'Pertanian';
  price: string;
  rating: number;
  image: string;
  description: string;
  seller: string;
  whatsapp: string;
  features: string[];
}

export interface FoundationProgram {
  id: string;
  title: string;
  category: 'Pendidikan' | 'Budaya';
  icon: string;
  image: string;
  description: string;
  fullDetails: string;
  activities: string[];
  gallery?: string[];
}

export const VILLAGE_OFFICIALS: Official[] = [
  {
    id: 'dukuh',
    name: 'Bapak Haris Yuwana',
    role: 'Kepala Dusun (Dukuh)',
    image: '/dukuh.JPG',
    phone: '-',
    bio: 'Memimpin Dusun Gatak sejak tahun 2018 dengan komitmen memperkuat ekonomi warga, melestarikan tradisi gotong royong, dan membangun transparansi pemerintahan dusun.',
    workDays: 'Senin - Jumat (08:00 - 15:00 WIB)'
  },
  {
    id: 'rt01',
    name: 'Bapak Sukardi',
    role: 'Ketua RT 01',
    image: '/rt1.JPG',
    phone: '-',
    bio: 'Mengkoordinasikan kegiatan lingkungan RT 01, keamanan pos ronda, serta layanan administrasi administrasi warga RT 01.',
    workDays: 'Setiap Hari (Sesuai Janji Temu)'
  },
  {
    id: 'rt02',
    name: 'Bapak Ma`ruf',
    role: 'Ketua RT 02',
    image: '/rt2.jpg',
    phone: '-',
    bio: 'Mengayomi kegiatan Dasawisma, PKK, dan kesejahteraan ibu & anak di lingkungan RT 02 Dusun Gatak.',
    workDays: 'Senin - Sabtu'
  },
  {
    id: 'rw09',
    name: 'Bapak Sungkono',
    role: 'Ketua RW 09',
    image: '/rw09.jpg',
    phone: '-',
    bio: 'Penggerak pemuda dusun dalam kegiatan olahraga, inovasi digital UMKM.',
    workDays: 'Setiap Akhir Pekan & Kegiatan Malam'
  },
  {
    id: 'rw10',
    name: 'Bapak Endro Widyanto',
    role: 'Ketua RW 10',
    image: '/rw10.jpg',
    phone: '-',
    bio: 'Penggerak aksi hijau pemuda, fasilitator digitalisasi UMKM, dan pendorong potensi lokal dusun.',
    workDays: 'Setiap Akhir Pekan & Kegiatan Malam'
  },
  {
    id: 'margomulyo',
    name: 'Bapak Gunawan',
    role: 'Ketua Yayasan Margomulyo',
    image: '/ketua-margomulyo.jpg',
    phone: '-',
    bio: 'Merawat tradisi Srandul, menggerakkan pemuda dusun, dan membumikan budaya lokal.',
    workDays: 'Setiap Akhir Pekan & Kegiatan Malam'
  }
];

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: 'kerja-bakti',
    date: '30 Jul 2026',
    rawDate: '2026-7-30',
    title: 'Bazar Pemuda Dusun Gatak untuk Nata Asta #3',
    summary: 'Pemuda dan pemudi Dusun Gatak bergotong royong melaksanakan Bazar untuk pengumpulan dana guna menyelenggarakan acara Nata Asta #3.',
    content: `Persiapan acara Nata Asta #3 tahun ini disambut dengan penuh semangat oleh segenap pemuda dan pemudi Dusun Gatak. Pada hari Minggu pagi, ratusan masyarakat dusun dari anak-anak, orang tua, hingga para sesepuh berkumpul di lapangan utama dusun untuk memeriahkan acara bazar amal.

Dengan penuh antusias, para pemuda bahu-membahu mendirikan tenda, menata stan, dan menjajakan aneka makanan, produk kerajinan, hingga barang preloved layak pakai. Kegiatan gotong royong menggelar bazar ini diinisiasi sebagai upaya pengumpulan dana untuk menyelenggarakan perhelatan akbar Nata Asta #3, sekaligus sebagai wadah untuk menjaga kekompakan dan kreativitas pemuda.

Bapak Haris Yuwana selaku Kepala Dusun menyampaikan apresiasi yang setinggi-tingginya kepada seluruh lapisan masyarakat yang hadir mendukung. "Kegiatan gotong royong dalam bentuk bazar seperti ini tidak hanya sekadar ajang pengumpulan dana, tetapi juga mempererat silaturahmi dan memupuk rasa bangga terhadap potensi pemuda-pemudi dusun tercinta," tuturnya saat memberikan sambutan pada pembukaan bazar.

Setelah rangkaian acara bazar selesai dan berjalan sukses, para pemuda panitia beserta warga yang hadir menikmati hidangan tradisional berupa nasi tumpeng dan es kelapa muda yang telah disiapkan oleh ibu-ibu PKK Dusun Gatak di area sekitar stan.`,
    image: '/bazar1.JPG',
    category: 'Kegiatan Desa',
    author: 'Tim Redaksi Dusun',
    readTime: '4 menit baca'
  },
  {
    id: 'nata-asta',
    date: '05 Sep 2026',
    rawDate: '2026-9-05',
    title: 'Nata Asta #3: Bukan Sekadar Malam Perayaan',
    summary: 'Pemuda dan pemudi Dusun Gatak bergotong royong menyelenggarakan acara Nata Asta #3.',
    content: `Setiap bulan Agustus, suasana Desa Gatak berubah. Jalanan, lapangan, hingga ruang-ruang berkumpul warga dipenuhi semangat perayaan kemerdekaan. Namun bagi masyarakat Gatak, perayaan tidak berhenti pada perlombaan dan upacara. Selama tiga tahun terakhir, sebuah panggung bernama Nata Asta hadir menjadi penutup rangkaian perayaan sekaligus ruang bagi warga untuk berkumpul, menikmati seni, dan merayakan kemerdekaan bersama.
Tahun ini, Nata Asta kembali hadir untuk ketiga kalinya, digelar pada 5 September 2026 di Lapangan Rumput SMA Muhammadiyah 1 Prambanan. Bukan hanya sebagai acara tahunan, tetapi sebagai sebuah tradisi yang perlahan tumbuh bersama masyarakat Desa Gatak.

Tiga Tahun Nata Asta

Nata Asta lahir dari kekosongan yang terasa menyesakkan, saat kegiatan Agustusan sempat terhenti akibat pandemi COVID-19. Pemuda-pemudi RT 1 dan RT 2 Dusun Gatak pun berkumpul dan menyatukan tekad untuk menghidupkannya kembali. Salah satu penggagasnya, Bagas, kemudian diamanahi menjadi Ketua Panitia Nata Asta 1 & 2.
"Kita memberi nama Nata Asta karena ingin tampil beda. Nama ini diambil dari bahasa Sansekerta yang artinya saling gotong royong, saling membantu, dan bersama-sama menjadi satu untuk mencapai satu tujuan. Bisa dikatakan juga artinya 'menata tangan'," jelas Bagas.
Filosofi itu terus diwariskan hingga tahun ketiga, saat tongkat kepanitiaan berpindah ke Arul. Jika dua tahun pertama menjadi fondasi kebangkitan acara Agustusan di Gatak, tahun ini panitia memilih tampil lebih fokus dan matang lewat satu keputusan besar: menjadikan kesenian tradisional Srandul yang pernah tampil di Keraton Yogyakarta sebelum vakum akibat gempa sebagai jantung dari seluruh rangkaian acara. Keputusan itu pun terwujud: Nata Asta #3 sukses dilaksanakan secara meriah.
"Kita pilih satu hal yang benar-benar punya nilai, yaitu Srandul. Ini warisan kesenian yang dikembangkan di Gatak yang jarang ditemukan di tempat lain dengan kolaborasi seni dengan mahasiswa ISI agar adanya sentuhan modern.Kalau kita nggak yang mengangkat, siapa lagi?" ujar Arul.

Seni sebagai Ruang Pertemuan

Salah satu hal yang membuat Nata Asta tahun ini menarik adalah hadirnya kolaborasi seniman lintas usia. Panggung tidak hanya menjadi tempat pertunjukan, tetapi juga ruang pertemuan antargenerasi.
Keroncong Modern tampil menghadirkan musik berakar tradisional dengan sentuhan yang lebih dekat dengan selera masa kini. Sementara itu, kolaborasi Srandul Margomulyo x Pemuda GatakYK memperlihatkan bagaimana kesenian dan kreativitas anak muda bisa bertemu dalam satu panggung. Agar Serandul tak lagi terkesan "jadul", tata panggung, musik pengiring, hingga koreografi dikemas ulang bersama Institut Seni Indonesia (ISI), yang turut memberi sentuhan artistik sekaligus membuka ruang belajar bagi pemuda-pemudi lokal.

Bukan Hanya Tentang Panggung

Di balik panggung dan pertunjukan, Nata Asta juga menjadi gambaran tentang bagaimana sebuah perayaan dapat dibangun secara bersama-sama. Pemuda, masyarakat, pelaku seni, hingga mahasiswa KKN Universitas Negeri Yogyakarta ikut mengambil bagian, mulai dari tugas teknis kepanitiaan hingga mencari ide-ide baru. Dukungan tokoh masyarakat seperti Ketua Yayasan Margomulyo bersama jajaran Ketua RT 1, RT 2, RW 9, dan RW 10 juga menjadi payung yang mengarahkan langkah pemuda tetap selaras dengan struktur sosial setempat.
Kehadiran masyarakat dalam acara ini menunjukkan bahwa perayaan kemerdekaan tidak selalu harus berlangsung dalam bentuk seremonial. Berkumpul, berbagi ruang, menikmati pertunjukan, dan saling berinteraksi juga menjadi cara sederhana untuk merawat kebersamaan.
Tahun ini, Tim KKN-M 33838 UNY menghadirkan Ecosnap, sebuah program peduli lingkungan berupa Free Photobooth & Cetak Foto: pengunjung cukup menukarkan lima botol plastik bekas untuk berfoto dan membawa pulang cetakannya..
Ecosnap menegaskan bahwa merayakan kemerdekaan dan menjaga lingkungan bisa berjalan beriringan. Setiap botol yang dikumpulkan menjadi bagian kecil dari perayaan besar cara pengunjung ikut ambil bagian, bukan sekadar menonton dari pinggir lapangan. Sesuatu yang sederhana ini pun menjadi salah satu titik yang paling dinanti, karena memberi pengunjung bukti fisik bahwa mereka pernah menjadi bagian dari malam itu.

Nata Asta sebagai Tradisi

Tiga tahun mungkin belum cukup untuk menyebut sebuah kegiatan sebagai tradisi yang telah mengakar. Namun, keberadaan Nata Asta selama tiga tahun berturut-turut menunjukkan bahwa sebuah perayaan dapat tumbuh menjadi sesuatu yang lebih besar ketika masyarakat ikut memilikinya.
Dari seni, kebersamaan, hingga keterlibatan generasi muda, Nata Asta #3 menjadi bukti bahwa Desa Gatak punya caranya sendiri dalam merayakan kemerdekaan bukan lewat seremoni semata, melainkan lewat panggung yang dibangun bersama, dari tangan-tangan yang saling menata. Dan selama semangat itu terus dijaga, cerita Nata Asta hampir pasti akan berlanjut di tahun-tahun berikutnya.

`,
    image: '/nataasta1.jpeg',
    category: 'Kegiatan Desa',
    author: 'Tim KKN-M UNY Dusun Gatak 2026',
    readTime: '8 menit baca'
  },
  {
    id: 'ecosnap',
    date: '5 Sep 2026',
    rawDate: '2026-9-05',
    title: 'ECOSNAP: Menyulap Sampah Menjadi Estetika melalui Photobooth di NATA ASTA',
    summary: 'Pemuda dan pemudi Dusun Gatak bergotong royong melaksanakan Bazar untuk pengumpulan dana guna menyelenggarakan acara Nata Asta #3.',
    content: `Keseruan malam perayaan NATA ASTA pada 5 September 2026 di lapangan rumput SMA Muhammadiyah 1 Prambanan menyisakan banyak cerita menarik. Di tengah meriahnya alunan keroncong modern dan pertunjukan seni tradisional Srandul Margomulyo kolaborasi bersama Pemuda Gatakyk, ada satu sudut yang berhasil mencuri perhatian banyak pasang mata: sebuah photobooth estetik bernama ECOSNAP yang sekilas tampak seperti instalasi seni profesional, tetapi nyatanya menyimpan pesan lingkungan yang kuat.

    Berbeda dari photobooth pada umumnya yang menggunakan properti pabrikan atau plastik sekali pakai, spot foto ECOSNAP ini menggunakan hasil karya tangan dari kelompok KKN Universitas Negeri Yogyakarta (UNY). Menariknya, material utama yang digunakan berasal dari berbagai barang-barang bekas dan sampah anorganik rumah tangga.

Bahan-bahan yang kerap berujung di tempat pembuangan akhir seperti kardus bekas, sendok plastik, kancing baju (benik), sedotan, hingga tutup botol plastik, berhasil disulap menjadi elemen dekorasi yang menarik. Detail dari hiasan-hiasannya pun dikerjakan dengan sangat teliti. Bunga-bunga dekorasi dirangkai menggunakan kombinasi sendok plastik, potongan kardus, dan benik sebagai pusat mahkotanya. Sementara itu, tipografi atau huruf-huruf pada area photobooth dibentuk dari struktur kardus yang dilapisi menggunakan sedotan dan tutup botol plastik dengan berbagai warna. Tidak hanya berhenti pada dekorasi utama, kelompok KKN juga mengolah tutup botol plastik menjadi gantungan kunci (keychain) cantik yang dipamerkan di area samping instalasi ECOSNAP.

Langkah kreatif ini bukan sekadar ajang unjuk kebolehan merangkai barang bekas, melainkan sebuah bentuk kampanye edukasi lingkungan yang dikemas populer. Pesan utama yang ingin disampaikan sangat jelas, yaitu sampah plastik yang selama ini menjadi salah satu persoalan lingkungan karena sulit terurai, sebenarnya masih dapat dimanfaatkan kembali dan diolah menjadi benda baru yang memiliki nilai guna maupun nilai estetika melalui konsep upcycling. 

Pemilihan photobooth sebagai media edukasi didasarkan pada sifatnya yang dekat dengan aktivitas masyarakat dan dapat menarik perhatian berbagai kelompok usia. Pesan mengenai pemanfaatan kembali barang bekas kemudian disampaikan melalui dekorasi yang dapat dilihat dan digunakan secara langsung oleh pengunjung. Dengan cara tersebut, edukasi mengenai pengelolaan sampah dapat dikemas dalam kegiatan yang bersifat rekreatif dan interaktif.

Melalui sentuhan kreativitas dari tim KKN, barang bekas tidak harus berakhir menjadi polutan, melainkan bisa dialihfungsikan menjadi karya bernilai estetika dan fungsional. Ini adalah bukti nyata bahwa pengelolaan sampah tidak selalu identik dengan hal yang kotor atau membosankan.

Respons pengunjung malam itu menunjukkan tingginya antusiasme terhadap ECOSNAP. Area ECOSNAP ramai didatangi oleh pengunjung. Berbagai kalangan usia, mulai dari anak-anak, remaja, hingga orang tua, tampak antusias mengantre untuk mengabadikan momen. Memanfaatkan momentum antrean tersebut, mahasiswa KKN turun langsung membagikan pamflet edukasi mengenai pengolahan sampah kepada para pengunjung. Pembagian pamflet tersebut menjadi pelengkap pesan lingkungan yang disampaikan melalui dekorasi ECOSNAP, sehingga pengunjung tidak hanya melihat pemanfaatan barang bekas secara langsung, tetapi juga memperoleh informasi mengenai pengelolaan sampah. Daya tarik instalasi ini bahkan memancing rasa penasaran dari kelompok KKN desa-desa tetangga yang turut hadir meramaikan acara dan berfoto bersama.

Untuk memastikan kualitas hasil foto yang maksimal bagi warga, kelompok KKN berkolaborasi dengan salah satu vendor photobooth, Tarunika Photobooth, yang bertugas mengoperasikan kamera dan percetakan foto di lokasi. Kolaborasi ini menyelaraskan dekorasi daur ulang ECOSNAP karya mahasiswa dengan layanan profesional, sehingga menghadirkan fasilitas hiburan yang tak hanya menghibur, tetapi juga memberi pesan edukatif yang berkesan bagi warga Gatak dan sekitarnya. Langkah kecil memilah dan mengolah sampah ternyata mampu menciptakan ruang interaksi yang hangat sekaligus ramah lingkungan.
`,
    image: '/ecosnap.jpeg',
    category: 'Program Kerja KKN',
    author: 'Tim KKN-M UNY Dusun Gatak 2026',
    readTime: '6 menit baca'
  }
];

export const UMKM_PRODUCTS: UmkmProduct[] = [
  {
    id: 'jamu',
    title: 'Jamu Bu Slamet',
    category: 'Kuliner',
    price: 'Rp 10.000+',
    rating: 4.7,
    image: '/jamuslamet.png',
    description: 'Rempah lokal pilihan hasil bumi Dusun Gatak yang diracik dan diolah secara tradisional oleh Bu Slamet, menghasilkan Jamu dengan khasiat mantap dan cita rasa otentik yang menyegarkan badan.',
    seller: 'Jamu Tradisional Bu Slamet',
    whatsapp: '-',
    features: [
      '100% Bahan Herbal Murni Tanpa Campuran',
      'Petik Merah Dari Kebun Sendiri',
      'Tersedia Bubuk Halus dan Siap Minum',
      'Kemasan Kemasan Khusus Menjaga Aroma'
    ]
  }
];

export const FOUNDATION_PROGRAMS: FoundationProgram[] = [
  {
    id: 'tk-gatak',
    title: 'Taman Kanak-Kanak (TK) Margomulyo',
    category: 'Pendidikan',
    icon: 'school',
    image: '/tkmargomulyo.jpeg',
    description: 'Program pendidikan usia dini yang berfokus pada pembentukan karakter dasar, kreativitas, dan kesiapan kognitif anak-anak Dusun Gatak. Kami menyediakan fasilitas yang aman dan tenaga pengajar yang berdedikasi.',
    fullDetails: 'Yayasan Dusun Gatak mendirikan TK ini untuk memastikan setiap anak di desa memiliki akses pendidikan anak usia dini yang berkualitas, ramah anak, dan berbasis kearifan lokal. Pembelajaran menggabungkan stimulasi motorik, pengenalan lingkungan alam desa, serta penanaman budi pekerti gotong royong.',
    activities: [
      'Kelas Kebudayaan',
      'Pengenalan Tanaman & Kebun Edukasi',
      'Pendidikan Karakter & Budi Pekerti',
      'Pemeriksaan Kesehatan Anak Berkala'
    ]
  },
  {
    id: 'kesenian-srandul',
    title: 'Kesenian Srandul',
    category: 'Budaya',
    icon: 'theater_comedy',
    image: '/srandul-yayasan.JPG',
    description: 'Upaya pelestarian kesenian tradisional Srandul melalui pelatihan rutin bagi generasi muda. Program ini bertujuan menjaga identitas lokal dan memperkenalkan kekayaan budaya Dusun Gatak kepada khalayak luas.',
    fullDetails: 'Srandul merupakan kesenian dramatari rakyat khas daerah yang memadukan dialog humor spiritual, tarian naratif, dan musik gamelan tradisional. Yayasan secara rutin menyelenggarakan latihan terbuka di Balai Dusun setiap Sabtu malam dan mengikutsertakan seniman muda dalam festival budaya daerah.',
    activities: [
      'Latihan Rutin Tari & Musik Srandul Setiap Selasa Malam',
      'Workshop Pembuatan Kostum & Topeng Tradisional',
      'Pementasan Malam Merti Dusun & Hari Besar',
      'Dokumentasi & Arsip Cerita Rakyat Gatak'
    ]
  }
];
