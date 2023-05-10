import './home.css';
import './homeResponsive.css';
import { ImagesApi } from '../../Components/ImagesApi/ImagesApi.js';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import { IoIosArrowForward } from 'react-icons/io';
import services from '../servicesPage/services.json';
import thoughts from './peopleThoughts.json';
import CountUp from 'react-countup';
import customer1 from '../../images/home/customer.jpg';

export function Home() {
  const FeaturedProjects = [
    {
      image: ImagesApi[1].pictures[3],
      name: ImagesApi[1].name,
      info: ImagesApi[1].about.info,
    },
    {
      image: ImagesApi[2].pictures[3],
      name: ImagesApi[2].name,
      info: ImagesApi[2].about.info,
    },
    {
      image: ImagesApi[3].pictures[3],
      name: ImagesApi[3].name,
      info: ImagesApi[3].about.info,
    },
    {
      image: ImagesApi[5].pictures[3],
      name: ImagesApi[5].name,
      info: ImagesApi[5].about.info,
    },
  ];
  return (
    <div className='home'>
      <div
        className='homeNews'
        style={{
          backgroundImage: `url(${ImagesApi[1].pictures[3]})`,
          backgroundAttachment: 'fixed',
        }}
      >
        <div className='featureContentCont'>
          <div className='coverForBG'> </div>
          <h2>
            MI <span className='x-sign'>Life Design</span>
          </h2>
          <h1>Inspire Living</h1>

          <Link to='/about'>
            <button>
              O nama
              <BsArrowRight style={{ marginLeft: '13%', color: '#CDA274' }} />
            </button>
          </Link>
        </div>
      </div>
      <div className='homeOther'>
        <div className='homePlans'>
          {services.services.map((s, ind) => {
            return (
              <div className='homePlan' key={ind}>
                <h2>{s.service_name}</h2>
                <p>{s.service_content}</p>
                <Link to={`/project-details`}>
                  <button>
                    Saznaj
                    <BsArrowRight
                      style={{ marginLeft: '4%', color: 'black' }}
                    />
                  </button>
                </Link>
              </div>
            );
          })}
        </div>
        <div className='homeAboutUs'>
          <div className='hp-subtext'>
            <h1>We Create The Art Of Stylish Living</h1>
            <p>
              Mi Life Design is a company dedicated to interior and exterior
              design of all living spaces. The creative duo Ivana Bogović and
              Mate Tokić lead a team of experts in the field of design,
              architecture and construction, which enables our clients to
              receive a comprehensive service during the implementation of
              projects.
            </p>
            <div className='callUs'>
              <Link to={`/contact`}>
                <button>
                  O nama
                  <BsArrowRight
                    style={{ marginLeft: '2%', color: '#CDA274' }}
                  />
                </button>
              </Link>
            </div>
          </div>
          <div
            className='hp-img'
            style={{
              backgroundImage: `url(${ImagesApi[6].pictures[8]})`,
            }}
          ></div>
        </div>

        <div className='people-thoughts'>
          <h1>Sto musterije kazu o nama?</h1>
          <div className='people'>
            {thoughts.people.map((req, ind) => {
              return (
                <div className='person' key={ind}>
                  <div className='person-title'>
                    <div>
                      <img src={customer1} alt='customer'></img>
                    </div>
                    <p>
                      {req.fullname}
                      <br />
                      <span>{req.country}</span>
                    </p>
                  </div>
                  <p className='thought'>{req.thoughts}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className='home-experience'>
          <div className='h-years'>
            <CountUp className='h-year num' duration={4} end={10} />
            <p>Godina Iskustva</p>
          </div>
          <div className='h-s-project'>
            <CountUp duration={4} className='h-sp num' end={30} />
            <p>Uspjesnih projekta</p>
          </div>
          <div className='h-customers'>
            <CountUp duration={4} className='h-cust num' end={30} />
            <p>Zadovoljnih musterija</p>
          </div>
        </div>
        <div className='homeProjects'>
          <h1>Projekti</h1>
          <div className='hp-list'>
            {FeaturedProjects.map((item, idx) => {
              return (
                <div className='hp-project' key={idx}>
                  <div className='hp-pro-img'>
                    <img src={item.image} alt='project'></img>
                  </div>
                  <div className='hp-pro-detail'>
                    <div className='hp-pro-info'>
                      <p className='hp-prj-title'>{item.name}</p>
                      <p className='hp-prj-path'>{item.info}</p>
                    </div>
                    <div className='hp-pro-btn'>
                      <Link to={`/project-details`}>
                        <button>
                          <IoIosArrowForward />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
