# Global State Management & Data Fetching

## 1. Penjelasan Redux
Redux ada;ah library JavaScript yang digunakan untuk mengelola state aplikasi dalam aplikasi web. Redux digunakan untuk menyimpan dan mengatur state aplikasi secara terpusat, sehingga memudahkan pengelolaan state dan komunikasi antara komponen-komponen aplikasi. Redux membantu mengatasi masalah kompleksitas dalam pengelolaan state pada aplikasi yang besar dengan menyediakan cara yang terstruktur dan terpusat untuk mengelola state.

## 2. Komponen Redux
Konsep utama redux:
* **Store**: Objek pusat yang menyimpan seluruh state aplikasi. Berfungsi sebagai "single source of truth" untuk state.
* **Actions**: Objek yang menggambarkan perubahan yang ingin dilakukan pada state. Mereka harus memiliki type yang mendefinisikan jenis perubahan yang akan dilakukan.
* **Reducers**: Fungsi-fungsi yang mengatur cara state di dalam store akan diperbarui berdasarkan action yang diterima.
* **Dispatch**: Metode yang digunakan untuk mengirimkan action ke store.
* **Subscribe**: Metode yang memungkinkan komponen untuk mendaftar dan mendengarkan perubahan pada state dalam store.

## 3. Redux Thunk
Redux Thunk adalah middleware yang digunakan bersama dengan Redux untuk mengelola pemanggilan AJAX dan actions asinkron lainnya dalam aplikasi Redux. Ini memungkinkan kita untuk membuat action Redux yang tidak hanya mengembalikan objek actions, tetapi juga dapat berisi pemanggilan fungsi asinkron. Redux Thunk sangat berguna saat kita perlu melakukan pemanggilan API atau action asinkrons lainnya sebelum memperbarui state dalam store Redux.