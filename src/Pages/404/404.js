import './404.css';

export function NotFound() {
  return (
    <div className='notFound'>
      <h1>404</h1>
      {/* <div className='error-text'>
     
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
      </div> */}
    </div>
  );
}
