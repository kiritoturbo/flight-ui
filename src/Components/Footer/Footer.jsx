import {  AiFillFacebook } from 'react-icons/ai';
import '../../main.css'
import Logo from '../../Assets/logo.png'
import { BsInstagram, BsPrinter, BsTwitter } from 'react-icons/bs';

function Footer() {
    return ( 
        <div className="footer">

            <div className="sectionContainer container grid">
                <div className="gridOne">
                    <div className="logoDiv">
                        <img src={Logo} alt="" className='Logo'/>
                    </div>

                    <p>Your mind should be stronger than your feelings,fly!</p>
                    <div className="socialIcon flex">
                        <AiFillFacebook className='icon'/>
                        <BsTwitter className='icon'/>
                        <BsInstagram className='icon'/>
                        <BsPrinter className='icon'/>
                    </div>
                </div>

                <div className="footerLinks">
                    <span className="linkTitle">Information</span>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Explore</a>
                    </li>
                    <li>
                        <a href="#">Flight Status</a>
                    </li>
                    <li>
                        <a href="#">Travel</a>
                    </li>
                    <li>
                        <a href="#">Check In</a>
                    </li>
                    <li>
                        <a href="#">Manage your booking</a>
                    </li>
                    <li>
                        <a href="#">Home</a>
                    </li>

                </div>

                <div className="footerLinks">
                    <span className="linkTitle">Information</span>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Explore</a>
                    </li>
                    <li>
                        <a href="#">Flight Status</a>
                    </li>
                    <li>
                        <a href="#">Travel</a>
                    </li>
                    <li>
                        <a href="#">Check In</a>
                    </li>
                    <li>
                        <a href="#">Manage your booking</a>
                    </li>
                    <li>
                        <a href="#">Home</a>
                    </li>

                </div>

                <div className="footerLinks">
                    <span className="linkTitle">Information</span>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Explore</a>
                    </li>
                    <li>
                        <a href="#">Flight Status</a>
                    </li>
                    <li>
                        <a href="#">Travel</a>
                    </li>
                    <li>
                        <a href="#">Check In</a>
                    </li>
                    <li>
                        <a href="#">Manage your booking</a>
                    </li>
                    <li>
                        <a href="#">Home</a>
                    </li>

                </div>
            </div>


            <div className="copyRightDiv flex">
                <p>Courtesy Design | Developed by <a href="#" target='_blank'> Truong</a></p>
            </div>


        </div>
     );
}

export default Footer;