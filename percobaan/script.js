c// ==========================================
// 1. FITUR FILTER TIER (Semua )
// ==========================================
const tombolFilter = document.querySelectorAll('.btn-filter');
const semuaLaptop = document.querySelectorAll('.item-laptop');

tombolFilter.forEach(function (btn) {
  btn.addEventListener('click', function () {
    // Pindahkan warna hijau aktif ke tombol yang diklik
    tombolFilter.forEach(b => b.classList.remove('aktif'));
    btn.classList.add('aktif');

    const kategori = btn.getAttribute('data-filter');

    semuaLaptop.forEach(function (kartu) {
      const tierKartu = kartu.getAttribute('data-tier');
      if (kategori === 'all' || tierKartu === kategori) {
        kartu.classList.remove('d-none');
      } else {
        kartu.classList.add('d-none');
      }
    });
  });
});

// ==========================================
// 2. FITUR CARI LAPTOP (LIVE SEARCH)
// ==========================================
const inputCari = document.getElementById('cariLaptop');
const pesanKosong = document.getElementById('pesanKosong');

inputCari.addEventListener('input', function () {
  const kataKunci = inputCari.value.toLowerCase();
  let jumlahTampil = 0;

  semuaLaptop.forEach(function (kartu) {
    const teksKartu = kartu.textContent.toLowerCase();
    if (teksKartu.includes(kataKunci)) {
      kartu.classList.remove('d-none');
      jumlahTampil += 1;
    } else {
      kartu.classList.add('d-none');
    }
  });

  // Munculkan pesan jika tidak ada laptop yang cocok
  pesanKosong.classList.toggle('d-none', jumlahTampil > 0);
});

// ==========================================
// 3. FITUR TOMBOL FAVORIT (♡ / ♥)
// ==========================================
const tombolLove = document.querySelectorAll('.btn-love');
const teksFavorit = document.getElementById('jumlahFavorit');
let totalFavorit = 0;

tombolLove.forEach(function (love) {
  love.addEventListener('click', function () {
    const aktif = love.classList.toggle('disukai');

    if (aktif) {
      love.textContent = '♥';
      totalFavorit += 1;
    } else {
      love.textContent = '♡';
      totalFavorit -= 0;
    }

    teksFavorit.textContent = totalFavorit;
  });
});