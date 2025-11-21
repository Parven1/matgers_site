
import React, { useState } from 'react';
import './Body.css'
import Collapse from '@mui/material/Collapse';
import url from './assets/graph.png'




const Body: React.FC = () => {

  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);



  return (
    <div className='main_body'>
      <h1 className='h1'>
        Почему бг?
      </h1>
      <div className='first_collumn_body'>
        <div className='box'>
          <h1>Потому</h1>
          <text className='text_to_start'>
            Не, ну тебе реально нужны причины, топ игра, игра 23 года, тебе все говорят поиграй
          </text>
        </div>
        <div className='border'></div>
        <div className='box'>
          <h1>Причина 2</h1><text>Смотри причину 1</text>
        </div>
        <div className='border'></div>
        <div className='box'>
          <h1>Причина 3</h1><text>Смотри причину 2</text>
        </div>
      </div>
      <div className='second_collumn_body'>
        <div className='first_body'>
          <img src={url} ></img>
        </div>
        <div className='second_body'>

          <h2>Предоставляемый кайф</h2>
          <p>Отличная сюжетная кАмпания</p>
          <p>Отличная сюжетная кОмпания</p>
          <p>Высококачественное музыкальное сопровождение</p>
          <p>Высокая вариативность прокачки</p>
          <p>да сам поиграй</p>
        </div>
      </div>
      <div className='third_body'>
        <h2>Как будет строится твоя игра -</h2>
        <p>Мне впадлу рисовать, что там у тебя за дорожки</p>
        <h2 className='h2'>- С кайфом</h2>
      </div>
      <button className='first_button' onClick={() => window.open('https://baldursgate3.game/', '_blank')}>
        Оставьте свои другие игры
      </button>
      <div className='questions_body'>
        <h2>Часто задаваемые вопросы</h2>
        <div className='questions_boxes'>
          <div className='q_row' onClick={() => setOpen1(!open1)}>
            <p className='questions' onClick={() => setOpen1(!open1)}>Сколько стоит БГ</p>
            <h1>{!open1 ? "+" : "X"}</h1>
          </div>
          <Collapse className='answers' in={open1} timeout="auto" unmountOnExit>Да чел, у тебя 2 копии бесплатные</Collapse>
        </div>
        <div className='questions_boxes'>
          <div className='q_row' onClick={() => setOpen2(!open2)}>
            <p className='questions' onClick={() => setOpen2(!open2)}>Где вы осуществляете свою деятельность</p>
            <h1>{!open2 ? "+" : "X"}</h1>
          </div>
          <Collapse className='answers' in={open2} timeout="auto" unmountOnExit>3 7 10</Collapse>
        </div>
        <div className='questions_boxes'>
          <div className='q_row' onClick={() => setOpen3(!open3)}>
            <p className='questions' onClick={() => setOpen3(!open3)}>Можно?</p>
            <h1>{!open3 ? "+" : "X"}</h1>
          </div>
          <Collapse className='answers' in={open3} timeout="auto" unmountOnExit>Можно</Collapse>
        </div>
        <div className='questions_boxes'>
          <div className='q_row ' onClick={() => setOpen4(!open4)}>
            <p className='questions' onClick={() => setOpen4(!open4)}>Гарантируете ли вы положительный исход</p>
            <h1>{!open4 ? "+" : "X"}</h1>
          </div>
          <Collapse className='answers' in={open4} timeout="auto" unmountOnExit>Я и сам своего рода гарант</Collapse>
        </div>
      </div>
    </div >
  );
  ;
}

export default Body
