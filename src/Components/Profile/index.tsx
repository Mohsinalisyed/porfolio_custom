import React from 'react'
import './style.scss'

const Profile=()=>{

   
    return (
        <div className='main-profile'>
            <div className='profile'>
                <h1>Profile</h1>
                 <div className='profile-content'>
                 <div className='profile-img'>
                 <img src='img/myimg.jpg' className='img-fluid img-set' alt=''/>
                 </div>
                    <h4>Name:<br/><span>Mohsin Ali Syed</span></h4>
                    <h4>Email: <br/><span>shahmohsin873@gmail.com</span></h4>
                    <h4>Phone:<br/><span>+923085153201</span></h4>
                    <h4>Address:<br/><span>Gulberg Green Islamabad</span></h4>
                    <h4>Cnic:<br/><span>61101-7731767-1</span></h4>
                    <h4>Dob:<br/><span>05-Dec-1999</span></h4>
                 </div>
                
            </div>
            </div>
    )
}
export default Profile