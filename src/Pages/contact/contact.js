import './contact.css';
import { HiOutlineMail } from 'react-icons/hi';
import { BsTelephone } from 'react-icons/bs';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';

export function Contact() {
  return (
    <div className='contact'>
      <div className='contact-header'>
        <h1>Contact Us</h1>
      </div>
      <div className='contact-content'>
        <div className='contact-form'>
          <div className='contact-form-info'>
            <div className='icons'>
              <p>
                <span className='icon'>
                  <BsTelephone />
                </span>
                <a href='tel:+38599 31 50 511'>
                  Ivana Bogović: + 385 99 31 50 511
                </a>
              </p>
              <p>
                <span className='icon'>
                  <BsTelephone />
                </span>
                <a href='tel:+385 98 774 610'>Mate Tokić: + 385 98 774 610</a>
              </p>
              <p>
                <span className='icon'>
                  <BsTelephone />
                </span>
                <a href='tel:+ 385 1 2385 441'> Ured: + 385 1 2385 441</a>
              </p>
              <p>
                <span className='icon'>
                  <HiOutlineMail />
                </span>
                <a href='info@milifedesign.com'>info@milifedesign.com</a>
              </p>
            </div>
            <div className='contact-smedias'>
              <ul>
                <li>
                  <a href='https://www.facebook.com/milifedesign.hr/'>
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a href='https://www.instagram.com/mi_life_design/'>
                    <FaInstagram />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='map'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11125.978435200957!2d15.7115597!3d45.8013519!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765cd0bccd348b9%3A0xa48d7e988773e21f!2sMi%20Life%20Design%20j.d.o.o.!5e0!3m2!1sen!2shr!4v1683638837290!5m2!1sen!2shr'
            title='map'
            style={{
              frameborder: '0',
              allowfullscreen: '',
              ariaHidden: 'false',
              tabindex: '0',
              width: '120vmin',
              height: '60vmin',
            }}
          ></iframe>
        </div>
      </div>
    </div>
  );
}
