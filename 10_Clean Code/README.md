# Clean Code

## 1. Clean Code
Clean code merupakan sebuah konsep pengembangan software yang mengacu pada penulisan kode yang mudah dibaca, dimengerti, dan dapat dimaintain. Tujuannya adalah agar kode yang dibuat lebih mudah dipahami oleh developer lain, mengurangi bug, dan mempermudah perubahan atau perbaikan kode. Beberapa prinsip yang diterapkan, diantaranya:
* Variabel, function, dan class memiliki penamaan yang deskriptif
* Komentar digunakan untuk menjelaskan kegunaan potongan kode, bukan apa yang dilakukan kode tersebut
* Menghindari duplikasi
* Funtion harus singkat dan fokus pada satu tugas
* Menggunakan format penulisan kode yang konsisten
* Kode harus mudah diuji
* Menggunakan struktur data yang tepat <br>
dsb

## 2. KISS Principle
KISS merupakan singkatan dari "Keep It So Simple", dimana prinsip desain yang menganjurkan bahwa solusi atau desain yang paling baik adalah yang paling sederhana dan mudah dimengerti.
* **Sederhana**: Kode harus sederhana, tidak rumit daripada yang diperlukan untuk memenuhi tujuan yang diinginkan
* **Mudah Dimengerti**: Kode harus mudah dimengerti oleh siapapun yang melihatnya, termasuk orang yang tidak terlibat dalam pembuatannya untuk memudahkan kolaborasi, pengujian, dan pemeliharaan
* **Effisien**: Kode harus dapat efisien dalam hal penggunaan sumber daya, waktu, dan usaha
* **Mudah Dipelihara**: Kode yang yang mudah dipelihara karena memiliki sedikit komponen yang berinteraksi
* **Sedikit Bug**: Kode yang lebih sederhana cenderung memiliki lebih sedikit bug karena memiliki lebih sedikit komponen yang mungkin menjadi sumber masalah

## 3. SOLID Principle
SOLID adalah sebuah akronim yang merangkum lima prinsip desain berorientasi objek yang penting dalam software development. Berikut penjelasan singkat dari masing-masing prinsip SOLID:
* **a. Single Responsibility Principle** <br>
Prinsip yang menyatakan bahwa sebuah kelas seharusnya hanya memiliki satu alasan untuk berubah dan hanya bertanggung jawab atas satu fungsionalitas.
* **b. Open/Closed Principle** <br>
Prinsip yang menyatakan bahwa sebuah entitas, seperti kelas, modul, dll seharusnya dapat diperluas tanpa mengubah kode yang ada. Kode yang sudah ada harus tertutup untuk modifikasi, tetapi terbuka untuk perluasan.
* **c. Liskov Substitution Principle** <br>
Prinsip yang menyatakan bahwa objek dari kelas turunan harus dapat digunakan sebagai pengganti objek kelas induk tanpa mengganggu properti yang sudah ditetapkan.
* **d. Interface Segregation Principle** <br>
Prinsip yang menyatakan bahwa sebuah interface seharusnya hanya memiliki metode-metode yang relevan untuk kelas-kelas yang digunakan.
* **e. Dependency Inversion Principle** <br>
Prinsip yang menyatakan bahwa kelas-kelas tingkat tinggi seharusnya tidak tergantung pada kelas-kelas tingkat rendah. Keduanya seharusnya bergantung pada abstraksi.