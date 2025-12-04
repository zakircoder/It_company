import React from "react";
import footerlogo from "../assets/images/footerImg.png";
import { Link } from "react-router";
import { LuMail } from "react-icons/lu";


const Footer = () => {
  return (
    <>
      <footer id="footer" className="bg-[#131022] pt-[72px] pb-[163px]">
        <div className="container">
          <div id="footer-row" className="flex justify-between">
            <div className="footer-col-1">
              {/* ----------- img */}
              <Link to={"/"}>
                <img src={footerlogo} alt="footerLogo" />
              </Link>
              {/* ------------ description */}
              <div className="w-[416px] mt-[24px] mb-[40px]">
                <p className="text-[14px] font-normal font-main   text-[#fff]">
                  Proin ipsum pharetra, senectus eget scelerisque varius pretium
                  platea velit. Lacus, eget eu vitae nullam proin turpis etiam
                  mi sit. Non feugiat feugiat egestas nulla nec. Arcu tempus,
                  eget elementum dolor ullamcorper sodales ultrices eros.
                </p>
              </div>
              {/* ------------- email */}
              <div>
                <h3 className="text-[14px] font-semibold font-main   text-[#fff]">Subscribe to our newsletter</h3>
                <div className="w-[416px] pl-[16px] mt-[8px] rounded-[6px] flex items-center justify-between border border-[#fff]">                            
                    <LuMail className="text-[20px] text-[#ffffffab] pr-[8px] "  />
                    <input className="w-[64%] py-[11px] border-none outline-none text-[14px] font-normal font-main text-[#ffffffab]" type="text" placeholder="Your Email"/>                   
                <button className="text-[14px] font-semibold font-main text-[#fff] bg-[#6366F1] py-[11px] px-[28px] rounded-r-[6px]">Subscribe</button></div>
              </div>
            </div>
            <div className="footer-col-2">
              <div>
                <ul>
                  <li><Link to={'/'} className="text-[16px] font-semibold font-main     text-[#fff]"    >Home</Link></li>
                  <li><Link to={'/'} className="text-[16px] font-semibold font-main     text-[#fff]"    >Services</Link></li>
                  <li><Link to={'/'}  className="text-[16px] font-semibold font-main     text-[#fff]"   >Case Studies</Link></li>
                  <li><Link to={'/'}  className="text-[16px] font-semibold font-main     text-[#fff]"   >About Us</Link></li>
                  <li><Link to={'/'}  className="text-[16px] font-semibold font-main     text-[#fff]"   >News & Insights</Link></li>
                </ul>
              </div>
                <div className="mt-[40px]">
                <ul>
                  <li><Link to={'/'}  className="text-[16px] font-semibold  font-main    text-[#fff]"   >Terms & Conditions</Link></li>
                  <li><Link to={'/'}  className="text-[16px] font-semibold font-main     text-[#fff]"   >Privacy Policy</Link></li>
                </ul>
              </div>
            </div>

            <div className="footer-col-3">
                <ul>
                  <li><Link to={'/'} className="text-[16px]  font-main  font-semibold text-[#fff]"    >Home</Link></li>
                  <li><Link to={'/'} className="text-[16px]  font-main  font-semibold text-[#fff]"    >Services</Link></li>
                  <li><Link to={'/'}  className="text-[16px] font-main   font-semibold text-[#fff]"   >Case Studies</Link></li>
                  <li><Link to={'/'}  className="text-[16px] font-main   font-semibold text-[#fff]"   >About Us</Link></li>
                  <li><Link to={'/'}  className="text-[16px] font-main   font-semibold text-[#fff]"   >News & Insights</Link></li>
                </ul>

            </div>

            <div className="footer-col-4">
              <h3 className="text-[16px] font-semibold font-main text-[#fff]">Contact Us</h3>
              <a target="_blank" className="text-[16px] font-semibold font-main text-[#6366F1] underline"  href="">example@gmail.com</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
