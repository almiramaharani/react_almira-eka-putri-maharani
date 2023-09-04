class Account {
    constructor(no, fname, lname, uname, email, gender, addr1, addr2, nationality, language) {
        this.no = no;
        this.fname = fname;
        this.lname = lname;
        this.uname = uname;
        this.email = email;
        this.gender = gender;
        this.addr1 = addr1;
        this.addr2 = addr2;
        this.nationality = nationality;
        this.language = language;
    }

    data() {
        const data = {
            FirstName: this.fname,
            LastName: this.lname,
            Username: this.uname,
            Email: this.email,
            Gender: this.gender,
            Address: this.addr1,
            Address2: this.addr2,
            Nationality: this.nationality,
            LanguageSpoken: this.language
        };

        return data;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const fname = document.getElementById("fname");
    const lname = document.getElementById("lname");
    const uname = document.getElementById("username");
    const email = document.getElementById("email");
    const genderRadio = document.getElementsByName("genderRadio");
    const addr = document.getElementById("address");
    const addr2 = document.getElementById("address2");
    const nationality = document.getElementById("category");
    const languageRadio = document.getElementsByName("languageRadio");
    const accForm = document.getElementById("account-form");
    const search = document.getElementById("search");

    const users = []; // Array to store all accounts

    const submitButton = document.getElementById('submit-btn');
    const deleteButton = document.getElementById('delete-btn');
    const searchButton = document.getElementById("search-btn");

    // Validate all fields
    submitButton.disabled = true;

    function updateButtonStatus(){
        const isFilled = (
            fname.value !== "" &&
            lname.value !== "" &&
            uname.value !== "" &&
            email.value !== "" &&
            Array.from(genderRadio).some(input => input.checked) &&
            addr.value !== "" &&
            nationality.value !== "" &&
            Array.from(languageRadio).some(input => input.checked)
        );
        
        submitButton.disabled = !isFilled;
    }
    [fname, lname, uname, email, addr, nationality].forEach(field => {
        field.addEventListener("input", updateButtonStatus);
    });
    
    genderRadio.forEach(radio => {
        radio.addEventListener("change", updateButtonStatus);
    });
    
    languageRadio.forEach(radio => {
        radio.addEventListener("change", updateButtonStatus);
    });
    
    // Add new account to array
    accForm.addEventListener("submit", function(event) {
        event.preventDefault();
        let selectedGender = [...genderRadio].find(radio => radio.checked);
        let selectedLanguage = [...languageRadio].find(radio => radio.checked);

        const user = new Account(
            users.length+1,
            fname.value,
            lname.value,
            uname.value,
            email.value,
            selectedGender.value,
            addr.value,
            addr2.value,
            nationality.value,
            selectedLanguage.value
        );
        users.push(user);
        displayUsers();
        console.log(users);

        accForm.reset();
    });

    // Delete button action
    deleteButton.addEventListener('click', function() {
        users.pop();
        displayUsers();
    });

    function displayUsers() {
        const tableBody = document.querySelector("tbody");
        tableBody.innerHTML = "";

        users.forEach((user, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${user.no}</td>
                <td>${user.fname}</td>
                <td>${user.lname}</td>
                <td>${user.uname}</td>
                <td>${user.email}</td>
                <td>${user.gender}</td>
                <td>${user.addr1}</td>
                <td>${user.addr2}</td>
                <td>${user.nationality}</td>
                <td>${user.language}</td>
            `;
            tableBody.appendChild(row);
        });
    };

    // Search button action
    searchButton.addEventListener('click', function() {
        const foundAcc = users.find(user => user.uname === search.value);

        alert(JSON.stringify(foundAcc ? foundAcc.data() : "Account not found", null, 2));
        search.value='';
    });
});