import { FaInstagram, FaFacebookF, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './footer.css';

export function Footer() {
  return (
    <div className='footer'>
      <div className='f-info'>
        <section className='f-social-medias'>
          <div className='f-logo-text'>
            <Link style={{ display: 'flex' }} to='/'>
              <div className='f-text'>
                <p>MI Life Design</p>
              </div>
            </Link>
          </div>
          <div className='f-about-text'>
            <p>Inspire Living</p>
          </div>
          <div className='f-smedia'>
            <ul>
              <li>
                <a href='https://www.facebook.com/'>
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href='https://www.instagram.com/'>
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href='https://www.linkedin.com/'>
                  <FaLinkedin />
                </a>
              </li>
            </ul>
          </div>
        </section>
        <section className='f-pages'>
          <p>Linkovi</p>
          <ul>
            <li>
              <Link to={`/about`}>O nama</Link>
            </li>
            <li>
              <Link to={`/projects`}>Projekti</Link>
            </li>
            <li>
              <Link to={`/contact`}>Kontakt</Link>
            </li>
            <li>
              <Link to={`/services`}>Usluge</Link>
            </li>
          </ul>
        </section>
        <section className='f-contact'>
          <p>Kontakt</p>
          <p> Perkovčeva 12, 10430, Samobor</p>
          <p>
            <a href='mailto: contact@interno.com'>info@milifedesign.com</a>
          </p>
          <p>099 315 0511</p>
        </section>
      </div>
      <div className='terms'>
        <ul>
          <ol>
            <Link to={`/terms`}>&bull; Terms & Conditions</Link>
          </ol>
          <ol>
            <Link to={`/privacy-policy`}>&bull; Privacy Policy</Link>
          </ol>
          <ol>
            <Link to={`/cookies-policy`}>&bull; Cookies Policy</Link>
          </ol>
          <ol>
            <Link to={`/faq`}>&bull; FAQ</Link>
          </ol>
        </ul>
      </div>
      <div className='f-copyright'>
        <p>Copyright © MI Life Design | Designed by Jan</p>
      </div>
    </div>
  );
}
