import React from 'react'
import css from './Footer.module.css'
import Logo from '../../assets/logo.png'
import {
    InboxIcon,PhoneIcon,LoginIcon,
    LocationMarkerIcon,UsersIcon,LinkIcon
} from '@heroicons/react/outline';

const Footer = () => {
  return (
    <div>
      <div className={css.cFooterWrapper}>
        <hr/>
        <div className={css.cFooter}>
            <div className={css.logo}>
                <img src={Logo} alt="" />
                <span>AH-Store</span>
            </div>
            <div className={css.block}>
                <div className={css.detail}>
                    <span>Contact Us</span>
                    <span className={css.pngLine}>
                        <LocationMarkerIcon className={css.icon}/>
                        <span>111 north avenue Orlando,Ma 320001</span>
                    </span>

                    <span className={css.pngLine}>
                        <PhoneIcon className={css.icon}/>
                        <a href="tel:+212600000000">+2126.00.00.00.00</a>
                    </span>

                    <span className={css.pngLine}>
                        {" "}
                        <InboxIcon className={css.icon}/>
                        <a href="mailto:support@amazon.ma">support@amazon.ma</a>                        
                    </span>
                </div>
            </div>
            <div className={css.block}>
                <div className={css.detail}>
                    <span>Account</span>
                    <span className={css.pngLine}>
                        <LoginIcon className={css.icon}/>
                        Sign In
                    </span>
                </div>
            </div>

            <div className={css.block}>
                <div className={css.detail}>
                    <span>Company</span>
                    <span className={css.pngLine}>
                        <UsersIcon className={css.icon}/>
                        <a href="/about">
                            <p>About Us</p>
                        </a>
                    </span>
                </div>
            </div>
            <div className={css.block}>
                <div className={css.detail}>
                    <span>Resources</span>
                    <span className={css.pngLine}>
                        <LinkIcon className={css.icon}/>
                        <p>Safety Privacy & Terms</p>
                    </span>
                </div>
            </div>
             
        </div>
        <div className={css.copyRight}>
                <span>Copyright c2023 by AH store,Ine,</span>
                <span>All rights reserved.</span>
            </div>
      </div>
    </div>
  )
}

export default Footer
