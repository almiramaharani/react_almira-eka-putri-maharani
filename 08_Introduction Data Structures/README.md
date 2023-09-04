# Introduction Data Structures

## 1. Pengertian Data Structures
Struktur data merupakan cara kita mengorganisir dan menyimpan data agar dapat diakses dan dikelola dengan efisien. Struktur data adalah kumpulan nilai data dan fungsi atau operasi yang dapat diterapkan pada data tersebut. Dengan menggunakan struktur data, kita dapat mengelola data secara lebih mudah dengan berbagai cara.

## 2. Operasi Data Structure
a. Read<br>
Operasi data yang memungkinkan kita untuk mendapatkan nilai dari suatu indeks dalam struktur data.

b. Insert<br>
Operasi data yang memungkinkan kita untuk menyisipkan elemen di indeks tertentu atau di akhir dalam suatu struktur data.

c. Search<br>
Operasi data dimana kita dapat mencari nilai tertentu dalam sebuah struktur data menggunakan metode tertentu tergantung pada struktur data yang digunakan.

d. Delete<br>
Operasi yang memungkinkan kita untuk menghapus elemen dari sebuah struktur data dan memindahkan lokasi elemen lainnya.

Untuk mengukur kecepata operasi, kita perlu menghitung banyak langkah atau steps yang diperlukan untuk sebuah operasi, bukan dihitung dari lama waktu yang dibutuhkan untuk suatu operasi. Hal ini dikarenakan lama waktu dapat dipengaruhi oleh environment tiap device yang berbeda-beda. 
## 3. Contoh Data Structures di Javascript

*** a. Array ***
Array adalah kumpulan nilai yang diindeks berdasarkan posisinya. Ini adalah struktur data yang sederhana dan memungkinkan kita untuk menyimpan beberapa jenis data dalam satu variabel. Contoh:
```
let numbers = [1,2,3,4,5];
let fruits = ["apple","banana","orange"];
```

***b. Set***
Set adalah kumpulan nilai unik tanpa urutan tertentu. Unik disini berarti nilai yang ada di dalam set merupakan nilai yang tidak mungkin duplikat satu sama lain. Contoh:
```
let setNumber = new Set([1,2,3,4,4]);
console.log(setNumber);  // [1,2,3,4]
```

## Screenshot table account
<img src="./screenshot/Account Table.png"/>

## Screenshot table product
<img src="./screenshot/Product Table.png"/>

## Screenshot data results found
<img src="./screenshot/Account Found Result.png"/>
<img src="./screenshot/Product found result.png"/>

## Screenshot data not found
<img src="./screenshot/Account not found alert.png"/>
<img src="./screenshot/Product not found alert.png"/>