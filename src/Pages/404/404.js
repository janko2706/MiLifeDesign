import './404.css';
import { useNavigate } from 'react-router-dom';

export function NotFound() {
  const navigate = useNavigate();
  return (
    <>
      <section className='error-container'>
        <span className='four'>
          <span className='screen-reader-text'>4</span>
        </span>
        <span className='zero'>
          <span className='screen-reader-text'>0</span>
        </span>
        <span className='four'>
          <span className='screen-reader-text'>4</span>
        </span>
      </section>
      <div className='link-container'>
        <button
          className='more-link'
          onClick={() => {
            navigate('/');
          }}
        >
          Povratak na početnu
        </button>
      </div>
    </>
  );
}
