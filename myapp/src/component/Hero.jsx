import React from 'react'
import './Hero.css'
import Title from './Title'
import { useNavigate } from 'react-router-dom'

export default function Hero() {
    const nav = useNavigate();
  return (
    <div>
        <section>
            <div className='hero'>
                <div className='container'>
                    <div className="row">
                        <Title subtitle= 'WELCOME TO SKILLSPHERE' title = 'Best Job Finding Website'/> 
                        <p> Welcome to SkillSphere, where your professional journey takes center stage. In the vast expanse of the job market, SkillSphere serves as your guiding constellation, illuminating the path to career excellence. At SkillSphere, we understand that your skills are the building blocks of success. </p>
                        <div className="button">
                            <button className='primary-btn' onClick={()=>nav('/getstarted')}> 
                            GET STARTED NOW
                            <i className='fa fa-long-arrow-alt-right'></i>
                            </button>
                            <button > 
                            VIEW JOBS
                            <i className='fa fa-long-arrow-alt-right'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    <div className="marigin"></div>
    </div>
  )
}
