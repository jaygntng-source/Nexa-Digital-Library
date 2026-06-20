// ============================================
// NEXA DIGITAL LIBRARY - Full JavaScript
// Created by Fikri
// ============================================

// --- DATA BUKU (40+ buku) ---
const BOOKS_DATA = [
    { id: 1, judul: "Python Mastery", penulis: "Andi Wijaya", kategori: "Pemrograman", tahun: 2023, rating: 4.8, cover: "🐍", sinopsis: "Panduan lengkap Python dari dasar hingga mahir.", isi: "Python adalah bahasa pemrograman yang mudah dipelajari..." },
    { id: 2, judul: "AI Revolution", penulis: "Dr. Sarah Chen", kategori: "Teknologi", tahun: 2024, rating: 4.9, cover: "🤖", sinopsis: "Dampak AI pada masa depan manusia.", isi: "Kecerdasan buatan mengubah cara kita hidup..." },
    { id: 3, judul: "Quantum Physics", penulis: "Prof. Brian Cox", kategori: "Fisika", tahun: 2022, rating: 4.7, cover: "⚛️", sinopsis: "Memahami alam semesta melalui fisika kuantum.", isi: "Fisika kuantum membuka pintu ke realitas baru..." },
    { id: 4, judul: "The Art of Coding", penulis: "Fikri Creative", kategori: "Pemrograman", tahun: 2024, rating: 4.9, cover: "💻", sinopsis: "Seni menulis kode yang elegan dan efisien.", isi: "Kode yang baik adalah karya seni..." },
    { id: 5, judul: "Data Science Handbook", penulis: "Jake Thompson", kategori: "Sains", tahun: 2023, rating: 4.6, cover: "📊", sinopsis: "Panduan praktis data science untuk pemula.", isi: "Data adalah minyak baru di era digital..." },
    { id: 6, judul: "Web 3.0 Unlocked", penulis: "Maya Patel", kategori: "Teknologi", tahun: 2024, rating: 4.8, cover: "🌐", sinopsis: "Jelajahi masa depan internet terdesentralisasi.", isi: "Web 3.0 membawa kontrol kembali ke pengguna..." },
    { id: 7, judul: "Calculus Made Easy", penulis: "Silvanus P.", kategori: "Matematika", tahun: 2020, rating: 4.5, cover: "∫", sinopsis: "Kalkulus yang mudah dipahami semua orang.", isi: "Kalkulus sebenarnya tidak sesulit yang dibayangkan..." },
    { id: 8, judul: "The Gene Code", penulis: "Dr. Francis Collins", kategori: "Biologi", tahun: 2021, rating: 4.7, cover: "🧬", sinopsis: "Perjalanan penemuan kode genetik manusia.", isi: "DNA adalah cetak biru kehidupan..." },
    { id: 9, judul: "Atomic Habits", penulis: "James Clear", kategori: "Psikologi", tahun: 2019, rating: 4.9, cover: "🔥", sinopsis: "Strategi membangun kebiasaan kecil yang berdampak besar.", isi: "Perubahan besar dimulai dari langkah kecil..." },
    { id: 10, judul: "Dune", penulis: "Frank Herbert", kategori: "Novel", tahun: 1965, rating: 4.8, cover: "🏜️", sinopsis: "Epik sci-fi tentang planet gurun Arrakis.", isi: "Di padang pasir Arrakis, rempah adalah segalanya..." },
    { id: 11, judul: "Sapiens", penulis: "Yuval Noah Harari", kategori: "Sejarah", tahun: 2014, rating: 4.7, cover: "🧠", sinopsis: "Sejarah singkat umat manusia.", isi: "Manusia telah mengubah dunia secara fundamental..." },
    { id: 12, judul: "The Lean Startup", penulis: "Eric Ries", kategori: "Bisnis", tahun: 2011, rating: 4.6, cover: "🚀", sinopsis: "Metodologi inovatif untuk startup modern.", isi: "Gagal cepat, belajar cepat, sukses lebih cepat..." },
    { id: 13, judul: "Chemistry 101", penulis: "Dr. Lisa Kim", kategori: "Kimia", tahun: 2022, rating: 4.4, cover: "🧪", sinopsis: "Dasar-dasar kimia dengan pendekatan visual.", isi: "Kimia adalah ilmu tentang materi dan transformasinya..." },
    { id: 14, judul: "The Psychology of Money", penulis: "Morgan Housel", kategori: "Psikologi", tahun: 2020, rating: 4.8, cover: "💰", sinopsis: "Memahami perilaku manusia terhadap uang.", isi: "Uang lebih tentang perilaku daripada angka..." },
    { id: 15, judul: "The Alchemist", penulis: "Paulo Coelho", kategori: "Novel", tahun: 1988, rating: 4.7, cover: "✨", sinopsis: "Perjalanan spiritual seorang gembala mencari harta.", isi: "Saat kau menginginkan sesuatu, seluruh alam semesta..." },
    { id: 16, judul: "Deep Learning", penulis: "Ian Goodfellow", kategori: "Pemrograman", tahun: 2016, rating: 4.9, cover: "🧠", sinopsis: "Buku panduan deep learning paling komprehensif.", isi: "Deep learning membawa AI ke level berikutnya..." },
    { id: 17, judul: "Space Odyssey", penulis: "Arthur C. Clarke", kategori: "Sains", tahun: 1968, rating: 4.6, cover: "🚀", sinopsis: "Perjalanan luar angkasa penuh misteri.", isi: "Di luar angkasa, tidak ada yang mendengar teriakanmu..." },
    { id: 18, judul: "The 7 Habits", penulis: "Stephen Covey", kategori: "Psikologi", tahun: 1989, rating: 4.7, cover: "📈", sinopsis: "Tujuh kebiasaan efektif untuk sukses.", isi: "Kebiasaan membentuk karakter, karakter menentukan nasib..." },
    { id: 19, judul: "Elon Musk", penulis: "Ashlee Vance", kategori: "Bisnis", tahun: 2015, rating: 4.6, cover: "🧑‍🚀", sinopsis: "Biografi visioner di balik Tesla dan SpaceX.", isi: "Elon Musk hidup di masa depan..." },
    { id: 20, judul: "The Great Gatsby", penulis: "F. Scott Fitzgerald", kategori: "Novel", tahun: 1925, rating: 4.5, cover: "🥂", sinopsis: "Kisah cinta dan ambisi di era Jazz.", isi: "Di masa muda, kita sering mengejar mimpi yang salah..." },
    { id: 21, judul: "Biology of Belief", penulis: "Dr. Bruce Lipton", kategori: "Biologi", tahun: 2005, rating: 4.6, cover: "🧫", sinopsis: "Bagaimana keyakinan mempengaruhi biologi tubuh.", isi: "Pikiran kita mampu menyembuhkan tubuh..." },
    { id: 22, judul: "Code: The Hidden Language", penulis: "Charles Petzold", kategori: "Teknologi", tahun: 1999, rating: 4.7, cover: "🔌", sinopsis: "Memahami dasar-dasar komputer dan kode.", isi: "Komputer adalah mesin logika yang canggih..." },
    { id: 23, judul: "Statistics for Data Science", penulis: "Dr. Emily Fox", kategori: "Matematika", tahun: 2023, rating: 4.5, cover: "📈", sinopsis: "Statistika praktis untuk data scientist.", isi: "Data tanpa statistik hanyalah angka kosong..." },
    { id: 24, judul: "The Selfish Gene", penulis: "Richard Dawkins", kategori: "Biologi", tahun: 1976, rating: 4.8, cover: "🧬", sinopsis: "Teori evolusi dari perspektif gen.", isi: "Kita adalah mesin survival yang dibuat oleh gen..." },
    { id: 25, judul: "Clean Code", penulis: "Robert C. Martin", kategori: "Pemrograman", tahun: 2008, rating: 4.9, cover: "🧹", sinopsis: "Panduan menulis kode yang bersih dan terstruktur.", isi: "Kode yang baik adalah kode yang mudah dibaca..." },
    { id: 26, judul: "The Art of War", penulis: "Sun Tzu", kategori: "Sejarah", tahun: 500, rating: 4.7, cover: "⚔️", sinopsis: "Strategi militer klasik yang masih relevan.", isi: "Kenali dirimu, kenali musuhmu..." },
    { id: 27, judul: "Invisible Women", penulis: "Caroline Criado Perez", kategori: "Pendidikan", tahun: 2019, rating: 4.8, cover: "👩", sinopsis: "Bias gender dalam data dan desain dunia.", isi: "Dunia dirancang oleh dan untuk laki-laki..." },
    { id: 28, judul: "The Power of Now", penulis: "Eckhart Tolle", kategori: "Psikologi", tahun: 1997, rating: 4.6, cover: "🧘", sinopsis: "Kekuatan hidup di saat ini.", isi: "Saat ini adalah satu-satunya waktu yang ada..." },
    { id: 29, judul: "The Four", penulis: "Scott Galloway", kategori: "Bisnis", tahun: 2017, rating: 4.5, cover: "🏢", sinopsis: "Analisis Google, Apple, Facebook, dan Amazon.", isi: "Empat raksasa teknologi menguasai dunia..." },
    { id: 30, judul: "Fahrenheit 451", penulis: "Ray Bradbury", kategori: "Novel", tahun: 1953, rating: 4.6, cover: "🔥", sinopsis: "Dunia di mana buku dibakar dan pengetahuan hilang.", isi: "Di mana ada api, di situ ada penghancuran..." },
    { id: 31, judul: "The Martian", penulis: "Andy Weir", kategori: "Sains", tahun: 2014, rating: 4.8, cover: "🔴", sinopsis: "Kisah seorang astronot yang terdampar di Mars.", isi: "Saya akan bertahan hidup, apapun yang terjadi..." },
    { id: 32, judul: "Coding Interview", penulis: "Gayle Laakmann", kategori: "Pemrograman", tahun: 2015, rating: 4.7, cover: "💼", sinopsis: "Persiapan wawancara coding di perusahaan besar.", isi: "Wawancara coding menguji cara berpikir, bukan hafalan..." },
    { id: 33, judul: "The Origin of Species", penulis: "Charles Darwin", kategori: "Biologi", tahun: 1859, rating: 4.7, cover: "🌿", sinopsis: "Teori evolusi yang mengubah dunia.", isi: "Kehidupan berkembang melalui seleksi alam..." },
    { id: 34, judul: "Thinking, Fast and Slow", penulis: "Daniel Kahneman", kategori: "Psikologi", tahun: 2011, rating: 4.8, cover: "🧠", sinopsis: "Dua sistem berpikir yang mempengaruhi keputusan.", isi: "Manusia sering salah dalam menilai probabilitas..." },
    { id: 35, judul: "Zero to One", penulis: "Peter Thiel", kategori: "Bisnis", tahun: 2014, rating: 4.6, cover: "1️⃣", sinopsis: "Membangun masa depan dengan inovasi dari nol.", isi: "Masa depan dibangun oleh mereka yang berani..." },
    { id: 36, judul: "The Silent Patient", penulis: "Alex Michaelides", kategori: "Novel", tahun: 2019, rating: 4.7, cover: "🔇", sinopsis: "Misteri seorang pasien yang tiba-tiba berhenti bicara.", isi: "Kadang diam lebih berbicara dari seribu kata..." },
    { id: 37, judul: "The Universe in a Nutshell", penulis: "Stephen Hawking", kategori: "Fisika", tahun: 2001, rating: 4.8, cover: "🌌", sinopsis: "Memahami alam semesta dengan cara sederhana.", isi: "Semesta lebih aneh dari yang kita bayangkan..." },
    { id: 38, judul: "The Lean Product Playbook", penulis: "Dan Olsen", kategori: "Bisnis", tahun: 2015, rating: 4.5, cover: "📋", sinopsis: "Strategi produk yang sukses dengan pendekatan lean.", isi: "Produk yang baik lahir dari pemahaman pengguna..." },
    { id: 39, judul: "The Body Keeps the Score", penulis: "Bessel van der Kolk", kategori: "Psikologi", tahun: 2014, rating: 4.9, cover: "🧠", sinopsis: "Bagaimana trauma mempengaruhi tubuh dan pikiran.", isi: "Tubuh menyimpan memori yang tak terlupakan..." },
    { id: 40, judul: "The Almanack of Naval Ravikant", penulis: "Eric Jorgenson", kategori: "Bisnis", tahun: 2020, rating: 4.7, cover: "🧘", sinopsis: "Kebijaksanaan tentang kekayaan dan kebahagiaan.", isi: "Kekayaan adalah permainan yang bisa dimenangkan..." },
    { id: 41, judul: "Project Hail Mary", penulis: "Andy Weir", kategori: "Sains", tahun: 2021, rating: 4.9, cover: "🚀", sinopsis: "Misi luar angkasa untuk menyelamatkan umat manusia.", isi: "Sains adalah senjata terbaik kita melawan kepunahan..." },
    { id: 42, judul: "The Design of Everyday Things", penulis: "Don Norman", kategori: "Teknologi", tahun: 1988, rating: 4.6, cover: "🎨", sinopsis: "Prinsip desain yang mempengaruhi kehidupan sehari-hari.", isi: "Desain yang baik adalah desain yang tidak terasa..." },
    { id: 43, judul: "The Joy of X", penulis: "Steven Strogatz", kategori: "Matematika", tahun: 2012, rating: 4.5, cover: "❌", sinopsis: "Perjalanan menyenangkan memahami matematika.", isi: "Matematika adalah bahasa alam semesta..." },
    { id: 44, judul: "The Sixth Extinction", penulis: "Elizabeth Kolbert", kategori: "Biologi", tahun: 2014, rating: 4.7, cover: "🌍", sinopsis: "Kepunahan massal keenam yang terjadi saat ini.", isi: "Manusia adalah penyebab utama kepunahan modern..." },
];

// --- STATE ---
let books = [...BOOKS_DATA];
let favorites = JSON.parse(localStorage.getItem('nexa_favorites')) || [];
let currentlyReading = JSON.parse(localStorage.getItem('nexa_reading')) || null;
let xpPoints = parseInt(localStorage.getItem('nexa_xp')) || 0;
let booksRead = parseInt(localStorage.getItem('nexa_booksRead')) || 0;
let readingHistory = JSON.parse(localStorage.getItem('nexa_history')) || [];
let darkMode = localStorage.getItem('nexa_theme') === 'dark' ? true : false;
let currentPage = 'home';
let currentBookId = null;
let readerFontSize = 18;
let readerTheme = 'dark';

// --- INIT ---
document.addEventListener('DOMContentLoaded', () => {
    // Set theme
    if (darkMode) document.documentElement.setAttribute('data-theme', 'dark');
    else document.documentElement.removeAttribute('data-theme');
    
    // Loading
    setTimeout(() => {
        document.getElementById('loading').classList.add('hide');
    }, 1200);
    
    // Render all
    renderStats();
    renderFeaturedBooks();
    renderAllBooks();
    renderCategories();
    renderFavorites();
    renderProfile();
    renderAdminBooks();
    renderCurrentlyReading();
    
    // Events
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);
    document.getElementById('hamburger').addEventListener('click', toggleMobileMenu);
    
    // Nav links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.dataset.page;
            navigateTo(page);
        });
    });
    
    // FAB
    window.addEventListener('scroll', () => {
        const fab = document.getElementById('fab');
        if (window.scrollY > 400) fab.classList.add('visible');
        else fab.classList.remove('visible');
    });
});

// --- NAVIGATION ---
function navigateTo(page) {
    currentPage = page;
    // Hide all pages
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    // Show target
    const target = document.getElementById(`page-${page}`);
    if (target) target.classList.add('active');
    
    // Update nav links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.toggle('active', link.dataset.page === page);
    });
    
    // Close mobile menu
    document.getElementById('navLinks').classList.remove('open');
    
    // Render specific content
    if (page === 'library') renderAllBooks();
    if (page === 'favorites') renderFavorites();
    if (page === 'profile') renderProfile();
    if (page === 'admin') renderAdminBooks();
    if (page === 'categories') renderCategories();
}

function toggleMobileMenu() {
    document.getElementById('navLinks').classList.toggle('open');
}

function toggleTheme() {
    darkMode = !darkMode;
    if (darkMode) {
        document.documentElement.setAttribute('data-theme', 'dark');
        document.getElementById('themeToggle').innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        document.documentElement.removeAttribute('data-theme');
        document.getElementById('themeToggle').innerHTML = '<i class="fas fa-moon"></i>';
    }
    localStorage.setItem('nexa_theme', darkMode ? 'dark' : 'light');
}

// --- STATS ---
function renderStats() {
    const categories = new Set(books.map(b => b.kategori));
    document.getElementById('totalBooks').textContent = books.length;
    document.getElementById('totalCategories').textContent = categories.size;
    document.getElementById('totalReaders').textContent = booksRead + 42;
    document.getElementById('favoriteBooks').textContent = favorites.length;
}

// --- FEATURED BOOKS ---
function renderFeaturedBooks() {
    const featured = [...books].sort((a,b) => b.rating - a.rating).slice(0, 6);
    const container = document.getElementById('featuredBooks');
    container.innerHTML = featured.map(book => createBookCard(book)).join('');
}

// --- ALL BOOKS ---
function renderAllBooks() {
    const container = document.getElementById('allBooks');
    container.innerHTML = books.map(book => createBookCard(book)).join('');
}

// --- BOOK CARD ---
function createBookCard(book) {
    const isFavorite = favorites.includes(book.id);
    return `
        <div class="book-card" onclick="openDetail(${book.id})">
            <button class="favorite-btn ${isFavorite ? 'active' : ''}" onclick="event.stopPropagation(); toggleFavorite(${book.id})">
                <i class="fas fa-heart"></i>
            </button>
            <div class="book-cover">
                <div class="cover-text">${book.cover}<br>${book.judul.substring(0, 12)}</div>
            </div>
            <h3>${book.judul}</h3>
            <p class="author">${book.penulis}</p>
            <div class="meta">
                <span>${book.kategori}</span>
                <span class="rating"><i class="fas fa-star"></i> ${book.rating}</span>
            </div>
        </div>
    `;
}

// --- FILTER BOOKS ---
function filterBooks() {
    const search = document.getElementById('searchInput').value.toLowerCase();
    const category = document.getElementById('categoryFilter').value;
    const sort = document.getElementById('sortFilter').value;
    
    let filtered = books.filter(b => {
        const matchSearch = b.judul.toLowerCase().includes(search) || b.penulis.toLowerCase().includes(search);
        const matchCategory = category === 'all' || b.kategori === category;
        return matchSearch && matchCategory;
    });
    
    if (sort === 'newest') filtered.sort((a,b) => b.tahun - a.tahun);
    else if (sort === 'popular') filtered.sort((a,b) => b.rating - a.rating);
    else if (sort === 'rating') filtered.sort((a,b) => b.rating - a.rating);
    
    const container = document.getElementById('allBooks');
    container.innerHTML = filtered.map(book => createBookCard(book)).join('');
}

// --- CATEGORIES ---
function renderCategories() {
    const cats = [...new Set(books.map(b => b.kategori))];
    const icons = {
        'Pemrograman': '💻', 'Teknologi': '🔧', 'Sains': '🔬', 
        'Fisika': '⚛️', 'Biologi': '🧬', 'Kimia': '🧪',
        'Sejarah': '📜', 'Novel': '📚', 'Pendidikan': '🎓',
        'Psikologi': '🧠', 'Bisnis': '💼', 'Matematika': '📐'
    };
    const container = document.getElementById('categoriesGrid');
    container.innerHTML = cats.map(cat => `
        <div class="category-card" onclick="filterByCategory('${cat}')">
            <i>${icons[cat] || '📖'}</i>
            <h4>${cat}</h4>
            <p style="color:var(--text2);font-size:0.8rem;">${books.filter(b => b.kategori === cat).length} buku</p>
        </div>
    `).join('');
}

function filterByCategory(cat) {
    navigateTo('library');
    document.getElementById('categoryFilter').value = cat;
    filterBooks();
}

// --- FAVORITES ---
function toggleFavorite(id) {
    const index = favorites.indexOf(id);
    if (index > -1) favorites.splice(index, 1);
    else favorites.push(id);
    localStorage.setItem('nexa_favorites', JSON.stringify(favorites));
    renderFavorites();
    renderStats();
    renderAllBooks();
    renderFeaturedBooks();
}

function renderFavorites() {
    const container = document.getElementById('favoritesGrid');
    const favBooks = books.filter(b => favorites.includes(b.id));
    if (favBooks.length === 0) {
        container.innerHTML = `<p style="color:var(--text2);text-align:center;padding:40px;">Belum ada buku favorit. Mulai tambahkan! 💖</p>`;
        return;
    }
    container.innerHTML = favBooks.map(book => createBookCard(book)).join('');
}

// --- DETAIL ---
function openDetail(id) {
    currentBookId = id;
    const book = books.find(b => b.id === id);
    if (!book) return;
    
    const isFavorite = favorites.includes(id);
    const isReading = currentlyReading === id;
    
    document.getElementById('detailContent').innerHTML = `
        <div style="display:grid;grid-template-columns:200px 1fr;gap:24px;">
            <div style="background:var(--gradient);border-radius:16px;padding:20px;text-align:center;aspect-ratio:3/4;display:flex;flex-direction:column;justify-content:center;">
                <div style="font-size:4rem;">${book.cover}</div>
                <div style="font-weight:700;margin-top:10px;">${book.judul}</div>
            </div>
            <div>
                <h2>${book.judul}</h2>
                <p style="color:var(--text2);">${book.penulis} • ${book.tahun}</p>
                <p style="color:var(--text2);margin:8px 0;"><span style="background:var(--glass);padding:4px 12px;border-radius:20px;">${book.kategori}</span></p>
                <div style="color:#f9ca24;font-size:1.2rem;margin:8px 0;">${'⭐'.repeat(Math.round(book.rating))} ${book.rating}</div>
                <p style="margin:12px 0;line-height:1.7;">${book.sinopsis}</p>
                <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:16px;">
                    <button class="btn-primary" onclick="startReading(${book.id})"><i class="fas fa-book-open"></i> Baca Sekarang</button>
                    <button class="btn-secondary" onclick="toggleFavorite(${book.id});openDetail(${book.id})">
                        <i class="fas fa-heart ${isFavorite ? 'active' : ''}"></i> ${isFavorite ? 'Hapus Favorit' : 'Tambah Favorit'}
                    </button>
                    <button class="btn-secondary" onclick="startQuiz(${book.id})"><i class="fas fa-question-circle"></i> Quiz</button>
                </div>
                ${isReading ? '<p style="color:#00b894;margin-top:10px;">📖 Sedang dibaca</p>' : ''}
            </div>
        </div>
    `;
    
    document.getElementById('detailOverlay').classList.add('active');
}

function closeDetail() {
    document.getElementById('detailOverlay').classList.remove('active');
}

// --- READING MODE ---
function startReading(id) {
    const book = books.find(b => b.id === id);
    if (!book) return;
    
    currentlyReading = id;
    localStorage.setItem('nexa_reading', JSON.stringify(id));
    
    document.getElementById('readerTitle').textContent = book.judul;
    document.getElementById('readerBody').innerHTML = book.isi + ' '.repeat(200) + '... (lanjutan konten)';
    document.getElementById('readerProgress').textContent = '0';
    document.getElementById('readerProgressFill').style.width = '0%';
    
    document.getElementById('readerOverlay').classList.add('active');
    closeDetail();
    renderCurrentlyReading();
}

function closeReader() {
    document.getElementById('readerOverlay').classList.remove('active');
}

function changeFontSize(delta) {
    readerFontSize = Math.max(12, Math.min(32, readerFontSize + delta));
    document.getElementById('readerBody').style.fontSize = readerFontSize + 'px';
}

function toggleReaderTheme() {
    const body = document.getElementById('readerBody');
    const isDark = body.style.color === '#1a1a2e';
    body.style.color = isDark ? 'var(--text)' : '#1a1a2e';
    body.style.backgroundColor = isDark ? 'transparent' : '#f0f2f5';
}

// Update reading progress on scroll
document.addEventListener('scroll', () => {
    const readerContent = document.querySelector('.reader-content');
    if (!readerContent) return;
    const scrollTop = readerContent.scrollTop;
    const scrollHeight = readerContent.scrollHeight - readerContent.clientHeight;
    const progress = scrollHeight > 0 ? Math.round((scrollTop / scrollHeight) * 100) : 0;
    document.getElementById('readerProgress').textContent = progress;
    document.getElementById('readerProgressFill').style.width = progress + '%';
});

// --- QUIZ ---
function startQuiz(id) {
    const book = books.find(b => b.id === id);
    if (!book) return;
    
    const questions = [
        { q: `Apa judul buku yang sedang kamu baca?`, options: [book.judul, 'Buku Lain', 'Tidak Tahu', 'Lupa'], correct: 0 },
        { q: `Siapa penulis buku ini?`, options: [book.penulis, 'Penulis Lain', 'Tidak Tahu', 'Lupa'], correct: 0 },
        { q: `Buku ini berada di kategori apa?`, options: [book.kategori, 'Kategori Lain', 'Tidak Tahu', 'Lupa'], correct: 0 },
        { q: `Apa tema utama dari buku ini?`, options: ['Pendidikan', 'Teknologi', 'Sains', book.kategori], correct: 3 },
        { q: `Apa pesan moral dari buku ini?`, options: ['Belajar', 'Bertahan', 'Berkembang', 'Semua benar'], correct: 3 },
    ];
    
    let currentQ = 0;
    let score = 0;
    
    function renderQuestion() {
        if (currentQ >= questions.length) {
            // Result
            const earned = score * 5;
            xpPoints += earned;
            localStorage.setItem('nexa_xp', xpPoints);
            
            document.getElementById('quizContent').innerHTML = `
                <div style="text-align:center;padding:20px;">
                    <div style="font-size:4rem;">${score >= 4 ? '🏆' : '📚'}</div>
                    <h3>Skor: ${score}/${questions.length}</h3>
                    <p>XP +${earned}</p>
                    <p style="color:var(--text2);">${score >= 4 ? 'Hebat! Kamu paham banget!' : 'Terus belajar ya!'}</p>
                    <button class="btn-primary" onclick="closeQuiz()" style="margin-top:16px;">Tutup</button>
                </div>
            `;
            return;
        }
        
        const q = questions[currentQ];
        document.getElementById('quizContent').innerHTML = `
            <h3>Pertanyaan ${currentQ + 1}/${questions.length}</h3>
            <p style="margin:16px 0;">${q.q}</p>
            ${q.options.map((opt, i) => `
                <button class="quiz-option" onclick="answerQuiz(${i}, ${q.correct})">${opt}</button>
            `).join('')}
        `;
    }
    
    window.answerQuiz = function(selected, correct) {
        const buttons = document.querySelectorAll('.quiz-option');
        buttons.forEach((btn, i) => {
            btn.disabled = true;
            if (i === correct) btn.classList.add('correct');
            if (i === selected && selected !== correct) btn.classList.add('wrong');
        });
        if (selected === correct) score++;
        currentQ++;
        setTimeout(renderQuestion, 1000);
    };
    
    window.closeQuiz = function() {
        document.getElementById('quizOverlay').classList.remove('active');
    };
    
    document.getElementById('quizOverlay').classList.add('active');
    renderQuestion();
}

// --- PROFILE ---
function renderProfile() {
    document.getElementById('profileName').textContent = 'Pembaca Nexa';
    document.getElementById('booksRead').textContent = booksRead;
    document.getElementById('xpPoints').textContent = xpPoints;
    const level = Math.floor(xpPoints / 50) + 1;
    document.getElementById('levelUser').textContent = level;
    
    // Badges
    const badges = [];
    if (booksRead >= 1) badges.push('Pembaca Pemula');
    if (booksRead >= 5) badges.push('Rajin Membaca');
    if (booksRead >= 10) badges.push('Master Buku');
    if (booksRead >= 20) badges.push('Ilmuwan Muda');
    if (xpPoints >= 100) badges.push('Elite Reader');
    
    document.getElementById('profileBadges').innerHTML = badges.map(b => 
        `<span class="badge">${b}</span>`
    ).join('');
}

// --- CURRENTLY READING ---
function renderCurrentlyReading() {
    const container = document.getElementById('currentlyReading');
    if (!currentlyReading) {
        container.innerHTML = '<p style="color:var(--text2);">Belum ada buku yang sedang dibaca.</p>';
        return;
    }
    const book = books.find(b => b.id === currentlyReading);
    if (!book) {
        container.innerHTML = '<p style="color:var(--text2);">Buku tidak ditemukan.</p>';
        return;
    }
    container.innerHTML = `
        <div style="display:flex;gap:16px;align-items:center;padding:12px;background:var(--glass);border-radius:12px;">
            <div style="font-size:3rem;">${book.cover}</div>
            <div>
                <h4>${book.judul}</h4>
                <p style="color:var(--text2);">${book.penulis}</p>
                <button class="btn-primary" onclick="startReading(${book.id})" style="padding:8px 20px;font-size:0.85rem;">Lanjutkan</button>
            </div>
        </div>
    `;
}

// --- ADMIN ---
function renderAdminBooks() {
    const container = document.getElementById('adminBooks');
    container.innerHTML = books.map((b, i) => `
        <div class="admin-book-item">
            <span>${b.cover} ${b.judul} (${b.kategori})</span>
            <div class="actions">
                <button onclick="editBook(${i})"><i class="fas fa-edit"></i></button>
                <button onclick="deleteBook(${i})"><i class="fas fa-trash"></i></button>
            </div>
        </div>
    `).join('');
}

function showAddBookForm() {
    const title = prompt('Judul buku:');
    if (!title) return;
    const author = prompt('Penulis:');
    const category = prompt('Kategori:');
    const year = parseInt(prompt('Tahun:'));
    const rating = parseFloat(prompt('Rating (1-5):'));
    const cover = prompt('Emoji cover:');
    const synopsis = prompt('Sinopsis:');
    
    if (title && author && category && year && rating && cover) {
        const newBook = {
            id: Math.max(...books.map(b => b.id)) + 1,
            judul: title,
            penulis: author,
            kategori: category,
            tahun: year,
            rating: rating,
            cover: cover,
            sinopsis: synopsis || 'Sinopsis belum tersedia.',
            isi: 'Konten buku ini sedang dalam pengembangan.'
        };
        books.push(newBook);
        renderAllBooks();
        renderAdminBooks();
        renderStats();
        renderCategories();
        alert('✅ Buku berhasil ditambahkan!');
    }
}

function editBook(index) {
    const book = books[index];
    if (!book) return;
    const newTitle = prompt('Judul baru:', book.judul);
    if (newTitle) book.judul = newTitle;
    const newAuthor = prompt('Penulis baru:', book.penulis);
    if (newAuthor) book.penulis = newAuthor;
    renderAdminBooks();
    renderAllBooks();
}

function deleteBook(index) {
    if (confirm(`Yakin hapus "${books[index].judul}"?`)) {
        books.splice(index, 1);
        renderAdminBooks();
        renderAllBooks();
        renderStats();
        renderCategories();
    }
}

// --- SCROLL TOP ---
function scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --- POPULATE CATEGORY FILTER ---
document.addEventListener('DOMContentLoaded', () => {
    const select = document.getElementById('categoryFilter');
    const cats = [...new Set(books.map(b => b.kategori))];
    cats.forEach(cat => {
        const opt = document.createElement('option');
        opt.value = cat;
        opt.textContent = cat;
        select.appendChild(opt);
    });
});