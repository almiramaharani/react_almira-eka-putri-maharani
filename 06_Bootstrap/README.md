# Bootstrap

## 1. Pengertian Bootstrap
Bootstrap merupakan source framework terbuka yang digunakan untuk pengemmbangan web yang responsif. <br>Bootstrap memiliki sistem grid yang memungkinkan penggunanya untuk dengan mudah mengatur tata letak halaman menggunakan rows dan columns. Bootstrap menyediakan berbagai komponen UI siap pakai seperti tombol, jumbotron, card, form, navbar, dan lain sebagainya. Selain itu, bootstrap juga menyertakan beberapa plugin JavaScript siap pakai, seperti modal, carousel, collapse, dan lainnya.

## 2. Integrasi Bootstrap
Untuk mengintegrasikan Bootstrap ke dalam proyek terdapat 2 cara, yaitu
- Cara manual mengunduh file bootstrap dan menyimpannya di lokal tempat proyek berada. Kemudian kita hanya perlu memanggilnya di file html.
- Cara online dengan menggunakan CDN, sehingga kita hanya perlu memasukkan tautan berkas CSS Bootstrap ke dalam html menggunakan \<link\>

## 3. Komponen Bootstrap
Bootstrap menyediakan komponen UI siap pakai yang memudahkan pengembangan web responsif. Beberapa contohnya adalah<br><br>
**a. Button**<br>
Tombol yang dapat diubah gaya dan ukurannya dengan mudah.<br>
Contoh:
```
<button class="btn btn-primary">Tombol Utama</button>
```

**b. Navbar**<br>
Navigasi responsif dengan opsi dropdown.<br>
Contoh:
```
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Logo</a>
  <!-- Menu navigasi -->
</nav>
```

**c. Form**<br>
Input, area teks, checkbox, radio, dropdown, dan elemen formulir lainnya dengan gaya yang konsisten.<br>
Contoh:
```
<form>
  <div class="form-group">
    <label for="nama">Nama</label>
    <input type="text" class="form-control" id="nama" placeholder="Masukkan Nama">
  </div>
  <!-- Elemen formulir lainnya -->
  <button type="submit" class="btn btn-primary">Kirim</button>
</form>
```

## Halaman Landing Page
<img src='./screenshot/Landing Page.png'>
## Halaman Create Product
<img src='./screenshot/Create Product.png'>
## Halaman Create Account
<img src='./screenshot/Create Account.png'>