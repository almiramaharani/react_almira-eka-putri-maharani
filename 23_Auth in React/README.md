# Authentication in React

## 1. Perbedaan Autentikasi dan Otorisasi
Autentikasi dan Otorisasi adalah dua konsep yang berkaitan, tetapi berbeda dalam konteks keamanan informasi dan sistem.
- Autentikasi adalah proses verifikasi identitas pengguna yang menentukan apakah pengguna tersebut adalah orang yang memiliki hak untuk masuk. Contoh: proses login menggunakan nama pengguna dan password.
- Otorisasi adalah proses menentukan apa yang diizinkan oleh pengguna yang telah terautentikasi. Hal ini bertujuan untuk membatasi akses pengguna ke sumber daya atau fungsi tertentu berdasarkan peran yang dimiliki.

## 2. State Management
React menyediakan berbagai cara untuk mengelola status aplikasi, dan salah satu yang umum digunakan untuk autentikasi adalah React Context API atau manajemen status dengan Redux. State management ini memungkinkan Anda untuk menyimpan informasi autentikasi pengguna seperti token akses atau data profil pengguna dan membuatnya dapat diakses di seluruh komponen aplikasi. Dengan cara ini, Anda dapat dengan mudah menentukan apakah pengguna sudah login atau belum, dan menampilkan tampilan yang sesuai.

## 3. Interaksi dengan Backend
Autentikasi di React tidak hanya tentang mengelola informasi pengguna di sisi klien, tetapi juga tentang berinteraksi dengan backend server atau layanan autentikasi pihak ketiga. Ini melibatkan proses seperti mengirim permintaan login atau pendaftaran ke server, menerima respons, dan mengelola token autentikasi yang diberikan oleh server. Penting untuk memahami bagaimana berkomunikasi dengan backend untuk memvalidasi kredensial pengguna dan mengelola sesi pengguna dengan benar.