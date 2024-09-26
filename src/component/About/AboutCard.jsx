import React from 'react'
import Title from '../Title'
import {homeAbout} from '../../dummydata'
import AWrapper from './AWrapper'
import './About.css'

export default function AboutCard() {
  return (
    <div>
        <section className='aboutHome'>
            <div className='container flexSB'>
                <div className="left row">
                    <img src="./images/aboutUs.jpg" alt="" />
                </div>
                <div className="right row">
                    <Title subtitle='FIND JOBS' title="Benefits"/>
                    <div className="items">
                        {homeAbout.map((val)=>(
                            <div className="item flexSB">
                                <div className="img">
                                    <img src={val.cover} alt="" />
                                </div>
                                <div className="text">
                                    <h2>{val.title}</h2>
                                    <p>{val.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </section>
        <AWrapper/>
    </div>
  )
}
