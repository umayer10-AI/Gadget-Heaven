import React from 'react';

const Footer = () => {
    return (
        <div className='bg-base-200 pt-10 mt-10'>
            <div className='text-center space-y-2'>
                <h2 className='text-2xl font-bold'>Gadget Heaven</h2>
                <p>Leading the way in cutting-edge technology and innovation.</p>
            </div>
            <hr className='text-gray-600 max-w-[80%] mx-auto mt-5'/>
            <footer className="footer justify-center gap-20 sm:footer-horizontal text-base-content p-10">
  
            <nav>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
            </footer>
        </div>
    );
};

export default Footer;