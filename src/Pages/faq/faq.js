import './faq.css';
import pQuestion from '../../Assets/Pictures/Projekt5/5.webp';
import eQuestion from '../../Assets/Pictures/Projekt1/Blueish.png';
import { IoIosArrowForward } from 'react-icons/io';
import { useState } from 'react';
import { QandAAll, QandAProjects } from './questions';

const Question = (props) => {
  const [showQuestion, setShowQuestion] = useState(false);
  return (
    <div className='ep-q'>
      <p
        className='q-title'
        onClick={() => {
          setShowQuestion(!showQuestion);
        }}
      >
        {props.question} <IoIosArrowForward />
      </p>

      {showQuestion ? <p className='q-content'>{props.answer}</p> : null}
    </div>
  );
};

export function Faq() {
  return (
    <div className='faq'>
      <div className='faq-header'>
        <h1>FAQ's</h1>
      </div>
      <h1 className='faq-title'>Every Question Answered</h1>
      <div className='e-question'>
        <div className='ep-questions'>
          {QandAAll.map((item, idx) => {
            return <Question question={item.question} answer={item.answer} />;
          })}
        </div>
        <div className='ep-q-img'>
          <img src={eQuestion} alt='everyquestion'></img>
        </div>
      </div>

      <h1 className='faq-title'>Project related questions</h1>
      <div className='p-question'>
        <div className='ep-q-img'>
          <img src={pQuestion} alt='projectquestion'></img>
        </div>
        <div className='ep-questions'>
          {QandAProjects.map((item, idx) => {
            return <Question question={item.question} answer={item.answer} />;
          })}
        </div>
      </div>
    </div>
  );
}
