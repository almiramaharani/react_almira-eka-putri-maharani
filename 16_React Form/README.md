# React Form

## 1. Controlled Component
Dalam React, komponen dibagi menjadi dua jenis berdasarkan cara mereka mengelola data dan interaksi dengan HTML, yaitu **controlled & uncontrolled** component.<br><br>
**Controlled Component**: Nilai input dan perilaku input sepenuhnya dikendalikan oleh state React. Karakteristik:
    * State-Drive: Menggunakan state React untuk menyimpan dan mengendalikan nilai elemen input.
    * Perubahan nilai terkini: Setiap kali pengguna berinteraksi dengan elemen input, seperti mengetik pada input field, perubahan nilai tersebut diarahkan ke state komponen melalui event handler
    Contoh:
    ```
    import React, { useState } from 'react';

    function ControlledComponent() {
        const [inputValue, setInputValue] = useState('');

        const handleChange = (e) => {
            setInputValue(e.target.value);
        };

        return (
            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
            />
        );
    }
    ```
## 2. Uncontrolled Component
**Uncontrolled Component**: Nilai input tidak dikendalikan oleh state React dan dikelola oleh DOM asli. Karakteristik:
    * DOM-Driven: Nilai elemen input diatur dan diakses langsung melalui DOM, sehingga dapat menggunakan ref untuk mengakses elemen input tersebut dan mendapatkan atau mengatur nilai input tanpa harus memperbarui state React
    * Nilai tidak terkini: React tidak melacak perubahan nilai input dalam uncontrolled component, sehingga, jika ingin mendapatkan nilai input, kita mengambilnya langsung dari elemen HTML menggunakan ref
    Contoh:
    ```
    import React, { useRef } from 'react';

    function ControlledComponent() {
        const inputRef = useRef(null);

        const handleSubmit = (e) => {
            e.preventDefault();
            console.log(`Nilai input: ${inputRef.current.value}`);
        };

        return (
            <form onSubmit={handleSubmit}>
                <input type="text" ref={inputRef}/>
                <button type="submit">Submit</button>
            </form>
        );
    }
    ```

## 3. Macam-Macam Form di React
* **Formulir Text**: formulir dasar yang memungkinkan pengguna memasukkan text.
```
<label>
    Nama:
    <input type="text" name="name" />
</label>
``` 
* **Formulir Textarea**: Formulir ini digunakan untuk mengumpulkan teks yang lebih panjang, seperti komentar atau pesan.
```
<label>
    Komentar:
    <br />
    <textarea name="comment" rows="4" cols="50" />
</label>
```
* **Formulir Email**: formulir yang memungkinkan pengguna memasukkan alamat email.
 ```
<label>
    Email:
    <input type="email" name="email" />
</label>
 ```
 * **Formulir Kata Sandi**: formulir yang digunakan untuk mengumpulkan kata santu dari pengguna.
 ```
 <label>
    Kata Sandi:
    <input type="password" name="password" />
</label>
 ```
 * **Formulir Checkbox**: formulir ini memungkinkan pengguna untuk memilih satu atau beberapa opsi dengan kotak centang.
 ```
<label>
    Pilih bahasa yang Anda kuasai:
    <br />
    <input type="checkbox" name="english" /> Bahasa Inggris
    <br />
    <input type="checkbox" name="spanish" /> Bahasa Spanyol
    <br />
    <input type="checkbox" name="french" /> Bahasa Prancis
</label>
 ```
* **Formulir Radio Button**: formulir ini memungkinkan pengguna untuk memilih satu opsi dari beberapa opsi yang ada menggunakan tombol radio. 
```
<label>
    Pilih jenis kelamin:
    <br />
    <input type="radio" name="gender" value="pria" /> Pria
    <br />
    <input type="radio" name="gender" value="wanita" /> Wanita
</label>
```
