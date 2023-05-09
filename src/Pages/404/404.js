import './404.css';
import { BsArrowRight } from 'react-icons/bs';
import photo from '../../images/backgroung/404Bg.jpg';
import { useNavigate } from 'react-router-dom';

export function NotFound() {
  const navigate = useNavigate();
  return (
    <div className='notFound'>
      <div className='error-text'>
        <h1>404</h1>
        <p>We are sorry, but the page you requested was not found</p>
        <button
          onClick={() => {
            navigate('/');
          }}
        >
          Back To Home
          <BsArrowRight style={{ marginLeft: '5px' }} color='#CDA274' />
        </button>
      </div>
      <div className='error-img'>
        <img src={photo} alt='error'></img>
      </div>
    </div>
  );
}
