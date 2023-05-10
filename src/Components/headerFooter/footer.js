import { FaInstagram, FaFacebookF } from 'react-icons/fa';
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
          <p>
            <a href='tel:+38599 31 50 511'>Ivana Bogović: + 385 99 31 50 511</a>
          </p>
          <p>
            <a href='tel:+385 98 774 610'>Mate Tokić: + 385 98 774 610</a>
          </p>
          <p>
            <a href='tel:+ 385 1 2385 441'> Ured: + 385 1 2385 441</a>
          </p>
        </section>
      </div>
      <div className='terms'>
        <ul>
          <ol>
            <Link className='innerTermsLink' to={`/terms`}>
              &bull; Terms & Conditions
            </Link>
          </ol>
          <ol>
            <Link className='innerTermsLink' to={`/privacy-policy`}>
              &bull; Privacy Policy
            </Link>
          </ol>
          <ol>
            <Link className='innerTermsLink' to={`/cookies-policy`}>
              &bull; Cookies Policy
            </Link>
          </ol>
          <ol>
            <Link className='innerTermsLink' to={`/faq`}>
              &bull; FAQ
            </Link>
          </ol>
        </ul>
      </div>
      <div className='f-copyright'>
        <p>
          Copyright © MI Life Design | Designed by{' '}
          <a
            href='https://janovacoolstranica.com/'
            rel='noreferrer'
            target='_blank'
            style={{
              color: 'black',
            }}
          >
            Jan
          </a>
        </p>
      </div>
    </div>
  );
}
