import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer footer-center p-4 bg-black/30 text-white/80">
            <div>
                <p>Copyright © 2024 - All right reserved by <Link className='font-medium' to='/'>Study With Anis</Link></p>
            </div>
        </footer>
    );
};

export default Footer;