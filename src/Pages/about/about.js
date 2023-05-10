import './about.css';
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import officeJpeg from '../../Assets/Pictures/office.jpeg';
import sofaJpg from '../../Assets/Pictures/sofa-bg.jpg';
import { useNavigate } from 'react-router-dom';

const Section = (props) => {
  const navigate = useNavigate();
  return (
    <section className='sectionAbout' key={props.magicNumber}>
      <div className='con '>
        {props.magicNumber === 0 && (
          <div className='concept-img'>
            <img src={props.imgSrc} alt='concept'></img>
          </div>
        )}
        <div className='c-text'>
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <button
            style={{ cursor: 'pointer' }}
            onClick={() => {
              navigate(`${props.buttonRoute}`);
            }}
          >
            {props.buttonText}
            <BsArrowRight style={{ color: '#CDA274', marginLeft: '3%' }} />
          </button>
        </div>
        {props.magicNumber !== 0 && (
          <div className='concept-img'>
            <img src={props.imgSrc} alt='concept'></img>
          </div>
        )}
      </div>
    </section>
  );
};

export function About() {
  const aboutSections = [
    {
      title: 'Općenito',
      text: 'Mi Life Design je tvrtka posvećena interijeru i eksterijeru dizajn svih stambenih prostora. Kreativni dvojac Ivana Bogović i Mate Tokić vodi tim stručnjaka iz područja dizajna, arhitekture i graditeljstva, što našim klijentima omogućuje da dobiti sveobuhvatnu uslugu tijekom implementacije projekti.',
      buttonText: 'Kontakt',
      buttonRoute: '/contact',
      imgSrc: officeJpeg,
    },
    {
      title: 'Projekti',
      text: 'Iza našeg dugogodišnjeg rada stoje brojni projekti u Hrvatskoj i inozemstvu. Nastojeći stvarati što originalnije i jedinstvenije projekte što je više moguće.',
      buttonText: 'Projekti',
      buttonRoute: '/projects',
      imgSrc: sofaJpg,
    },
  ];

  return (
    <div className='about'>
      <div className='about-header'>
        <h1>O nama</h1>
      </div>

      <div className='about-concept'>
        {aboutSections.map((item, idx) => {
          return (
            <Section
              key={idx}
              magicNumber={idx}
              imgSrc={item.imgSrc}
              title={item.title}
              text={item.text}
              buttonRoute={item.buttonRoute}
              buttonText={item.buttonText}
            />
          );
        })}
      </div>
    </div>
  );
}
