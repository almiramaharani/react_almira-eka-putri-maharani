# CSS

## 1. Pengertian CSS
CSS (Cascading Style Sheets) merupakan bahasa pemrograman yang berfungsi untuk menghias halaman website dengan mengatur background, lebar, tinggi, dan lain sebagainya,serta mengatur posisi elemen pada website.

## 2. Menghubungkan CSS dengan HTML
Untuk menambahkan file CSS ke html terdapat 3 cara, yaitu:

- **External CSS**: Membuat file CSS terpisah dan dihubungkan ke dokumen HTML menggunakan elemen \<link\>. Contoh:
    ```
    Pada halaman HTML: 
    <head>
        <title>Contoh External Stylesheet</title>
        <link rel="stylesheet" href="style.css">
    </head>

    Pada halaman CSS:
    h1 {
        color: green;
    }```

- **Internal CSS**: Menulis kode CSS di dalam elemen \<style\>  yang berada di dalam elemen \<head\> dokumen HTML. Contoh:

    ```
    <head>
        <title>Contoh Internal Stylesheet</title>
        <style>
            h1 {
                color: red;
            }
            p {
                font-size: 18px;
            }
        </style>
    </head>```

- **Inline CSS**: Melibahtkan penulisan CSS langsung di dalam elemen HTML yang bersangkutan. Contoh:
```
<h1 style="color: blue;">Ini adalah judul dengan warna biru</h1>
```

## 3. Pengertian CSS Selector
CSS Selector merupakan pola yang digunakan untuk memilih element pada halaman web yang ingin diberi gaya atau diubah tampilannya. Beberapa contoh selector yang umum digunakan:

- Selector elemen: memilih elemen berdasarkan nama elemen
- Selector kelas: memilih elemen berdasarkan kelas yang diberikan
- Selector ID: memilih elemen berdasarkan ID yang diberikan
- Selector atribut: memilih elemen berdasarkan atribut dan nilainya


## Halaman Landing Page
<img src='screenshot/Landing%20Page%201.png'>
<img src='screenshot/Landing%20Page%202.png'>