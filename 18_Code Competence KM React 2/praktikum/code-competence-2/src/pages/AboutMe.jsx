import FemaleAvatar from '../assets/female-avatar-removebg.png';
import Navbar from '../components/Navbar';
import "./style.css";

export default function AboutMe() {
    
    return (
        <>
            <Navbar/>
            <div className='about-container-bg'>
                <h1 className='text-center' style={{color: 'white'}}>About Me</h1>
                <div className='d-md-flex justify-content-center flex-sm-col pt-sm-2'>
                    <div>
                        <img id='avatar' src={FemaleAvatar} alt="Female Avatar"  />
                    </div>
                    <div className='d-flex align-content-center justify-content-center flex-wrap greet-container'>
                        <div className='row' style={{ width: '150%', height: '60%'}}>
                            <div>
                                <h2 className='pb-2'>So, who am I?</h2>
                                <p>
                                    My name Almira Eka Putri Maharani, but you can call me Almira. I'm an undergraduate student at the <br/>
                                    Faculty of Computer Science, Universitas Indonesia, majoring in Computer Science. 
                                </p>
                                <p>
                                    I have an interest in technology industry, especially digital product development.These days, I 
                                    spent my days with <br/> designing, prototyping, and also developing some projects. 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}