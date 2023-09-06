class Product {
    constructor(no, name, category, image, freshness, desc, price) {
        this.no = no,
        this.name = name,
        this.category = category,
        this.image = image,
        this.freshness = freshness,
        this.desc = desc,
        this.price = price
    }

    data() {
        const product = {
            ProductName: this.name,
            ProductCategory: this.category,
            ProductImage: this.image,
            ProductFreshness: this.freshness,
            AdditionalDescription: this.desc,
            ProductPrice: this.price
        }
        return product;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const products = [];

    const submitButton = document.getElementById('submit-btn');
    submitButton.disabled = true;   
    
    const productForm = document.getElementById('product-form');
    const search = document.getElementById('search');
    const deleteButton = document.getElementById('delete-btn');
    const searchButton = document.getElementById('search-btn');
    
    // Add the new product to the array
    function addNewProduct(event) {
        event.preventDefault();

        const form = event.target;
        const selectedFreshness = [...form.elements["productFreshnessRadio"]].find(radio => radio.checked);
        
        const product = new Product(
            products.length+1,
            form.productName.value,
            form.category.value,
            form.image.value,
            selectedFreshness.value,
            form.addDesc.value,
            parseFloat(form.price.value)
        );
        products.push(product);
        addProductRowTable(product);
        
        form.reset();
        submitButton.disabled=true;
    }

    // Handling when a product is added to the table
    function addProductRowTable(product) {
        const tableBody = document.querySelector('tbody');

        const row = document.createElement('tr');
        const columns = ['no', 'name', 'category', 'image','freshness', 'desc', 'price'];

        columns.forEach((columnName) => {
            const column = document.createElement('td');
            column.textContent = product[columnName];
            row.appendChild(column);
        });
        
        tableBody.appendChild(row);
    }

    // Handling when a product is deleted
    function handleDeleteProduct() {
        if (products.length === 0) return;

        products.pop();

        const tableBody = document.querySelector('tbody');
        const rows = tableBody.getElementsByTagName('tr');

        if (rows.length > 0) {
            tableBody.removeChild(rows[rows.length - 1]);
        }
    }

    // Handle changed fields
    function handleChangeField(event) {  
        const target = event.target;
        let isFormValid = true;

        if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA'){
            const name = target.name;
            const value = target.value;

            if (name === 'productName') {
                if (value.length > 25 || /[/@#{}]/.test(value)) {
                    isFormValid = false;
                }
            }

            if (name === 'price') {
                if (value <= 0 || isNaN(value)) {
                    isFormValid = false;
                } 
            }

            target.classList.toggle('error-field', !isFormValid);
        }

        // Check all the fields is filled
        const formFields = Array.from(event.currentTarget.querySelectorAll('[name]'));
        const allFieldsValid = formFields.every(field => field.value !== '') && isFormValid;

        submitButton.disabled = !allFieldsValid;
    }

    // Add new product to array
    productForm.addEventListener('submit', addNewProduct);
    productForm.addEventListener('change', handleChangeField);

    // Delete button action
    deleteButton.addEventListener('click', handleDeleteProduct);

    // Search button action
    searchButton.addEventListener('click', function() {
        const foundProduct = products.find(product => product.name === search.value);

        alert(JSON.stringify(foundProduct ? foundProduct.data() : "Product not found", null, 2));
        search.value='';
    });
})
