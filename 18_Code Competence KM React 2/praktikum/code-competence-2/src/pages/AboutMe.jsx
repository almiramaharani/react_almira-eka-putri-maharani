import FemaleAvatar from '../assets/female-avatar.jpg';
import Navbar from '../components/Navbar';
import "./style.css";

export default function AboutMe() {
    
    return (
        <>
            <Navbar/>
            <div className='d-md-flex justify-content-center flex-sm-col pt-sm-2'>
                <div>
                    <img id='avatar' src={FemaleAvatar} alt="Female Avatar"  />
                </div>
                <div className='d-flex align-content-center justify-content-center flex-wrap greet-container'>
                    <div className='row' style={{ width: '150%', height: '60%'}}>
                        <div>
                            <h2 className='pb-2'>So, who am I?</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br/>incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud <br/> exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in <br/> reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}