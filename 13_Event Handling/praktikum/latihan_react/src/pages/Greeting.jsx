import { Component } from "react";

const article = {
    title: {  
        id: "Buat Product",  
        en: "Create Product" 
    },
    description: {
        id: "Di bawah ini adalah contoh formulir yang dibuat seluruhnya dengan kontrol formulir Bootstrap. Setiap grup formulir yang diperlukan memiliki status validasi yang dapat dipicu dengan mencoba mengirimkan formulir tanpa menyelesaikannya.",
        en: "Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it."
    },
    buttonText: {
        id: "Ubah Bahasa",
        en: "Change Language"
    }
};

class Greeting extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentLanguage: 'en',
        }
    }

    handleChangeLanguage = () => {
        const newLanguage = this.state.currentLanguage === 'en' ? 'id' : 'en';
        this.setState({ currentLanguage: newLanguage }); 
    }

    
    render() {
        const { currentLanguage } = this.state;
        const title = article.title[currentLanguage];
        const description = article.description[currentLanguage];
        const buttonText = article.buttonText[currentLanguage];
        return(
            <>
                <h2 style={ {paddingTop: "10px"} }>{title}</h2>
                <p style={ {padding: "0 25%"} }>{description}</p>
                <button type='button' className="btn btn-primary btn-block mt-3" onClick={this.handleChangeLanguage}>{buttonText}</button>
            </>
        )
    }
}
export default Greeting;

