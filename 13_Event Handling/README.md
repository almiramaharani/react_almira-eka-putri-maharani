# Event Handling

# 1. Pengertian State pada React
"state" pada React merupakan objek JavaScript yang digunakan untuk menyimpan dan mengelola data yang dapat berubah dari waktu ke waktu dalam komponen React. Dengan penggunaan "state", kita dapat membuat komponen lebih responsif dan dinamis, sehingga komponen dapat merender ulang dan menampilkan informasi yang berubah ketika ada interaksi atau perubahan data.

# 2. Poin penting mengenai state
a. **Komponen react yang memiliki state**: Hanya komponen Class yang dapat memiliki state dalam react.<br>
b. **Inisialisasi State**: Kita biasanya menginisialisasi state dalam constructor komponen Class. Contoh:
```
class MyComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }
}
```
c. **Mengubah State**: Kita dapat mengubah nilai state menggunakan `this.setState()`. Contoh:
```
this.setState({ count: this.state.count + 1 });
```
d. **State bersifat asinkron**: Perubahan state tidak selalu terjadi secara langsung. React menggunakan beberapa perubahan state dan memprosesnya secara bersamaan untuk meningkatkan kinerja.<br>
e. **State adalah immutable**: State merupakan immutable karena kita harus selalu menggunakan `this.setState` atau `useState` untuk mengubah state. Ini membantu React memantau perubahan state dan melakukan pembaruan yang diperlukan.

# 3. Perbedaan Statefull dan Stateless
Statefull dan stateless adalah dua konsep yang sering digunakan untuk menggambarkan bagaimana suatu sistem/komponen berinteraksi dengan menyimpan informasi.
**Statefull**: <br>
* Menggunakan state: komponen statefull memiliki kemampuan untuk menyimpan dan mengelola informasi (state). Contoh: komponen kelas dalam React yang menggunakan `this.state` atau komponen yang menggunakan state dalam pengembangan berbasis server.
* Komponen statefull memiliki variabel atau objek internal yang dapat berubah selama siklus hidupnya.
* Contoh: Sebuah form yang menyimpan nilai yang telah diisi oleh pengguna

**Stateless**: <br>
* Tidak menggunakan state: komponen stateless tidak menyimpan informasi tentang keadaan mereka sendiri di antara interaksi. Setiap interaksi dianggap mandiri dan tidak memiliki pengetahuan tentang interaksi sebelumnya.
* Jika informasi diperlukan, sistem stateless akan mengandalkan keadaan eksternal atau input yang diberikan saat ini, tanpa mengingat informasi dari interaksi lainnya.
* Contoh: Sebuah komponen fungsi dalam React yang hanya menerima prop sebagi input dan tidak menyimpan data internal
