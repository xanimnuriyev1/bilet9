import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Hero1 from '../../assets/images/person1.jpg'
import Hero2 from '../../assets/images/person2.jpg'
import Hero3 from '../../assets/images/person3.jpg'
import Hero1No from '../../assets/images/hero1-notext.jpg'
import Hero2No from '../../assets/images/hero2-notext.jpg'

const HomeEnd = () => {
    return (
        <section>
            <div className='Leadership'>
                <h1>OUR LEADERSHIP</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing <br /> elit. Cumque fuga quod, aspernatur.</p>
            </div>
            <div className='PersonCart'>
                <div className='PersonC'>
                    <img className='HeroImg' src={Hero1} alt="" />
                    <p>MINING EXPERT</p>
                    <p>Lorem ipsum,amet  adipisicing <br /> elit. Ipsam dolores tempore totam <br /> est dicta expedita!</p>
                    <div className='Icons'>
                        <p className='Icon'><FaFacebookF /></p>
                        <p className='Icon'><FaTwitter /></p>
                        <p className='Icon'><FaInstagram /></p>
                    </div>
                </div>
                <div className='PersonC'>
                    <img className='HeroImg' src={Hero2} alt="" />
                    <p>PROJECT MANAGER</p>
                    <p>Lorem ipsum,amet  adipisicing <br /> elit. Ipsam dolores tempore totam <br /> est dicta expedita!</p>
                    <div className='Icons'>
                        <p className='Icon'><FaFacebookF /></p>
                        <p className='Icon'><FaTwitter /></p>
                        <p className='Icon'><FaInstagram /></p>
                    </div>
                </div>
                <div className='PersonC'>
                    <img className='HeroImg' src={Hero3} alt="" />
                    <p>ENGINEER</p>
                    <p>Lorem ipsum,amet  adipisicing <br /> elit. Ipsam dolores tempore totam <br /> est dicta expedita!</p>
                    <div className='Icons'>
                        <p className='Icon'><FaFacebookF /></p>
                        <p className='Icon'><FaTwitter /></p>
                        <p className='Icon'><FaInstagram /></p>
                    </div>
                </div>
            </div>
            <div className='OURSec'>
                <h1>OUR BLOG</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing <br /> elit. Cumque fuga quod, aspernatur.</p>
            </div>
            <div className='Ourcarts'>
                <div className='OurCart'>
                    <img className='Hero1No' src={Hero1No} alt="" />
                    <h1 className='OurHead'>How to Invest In Investing Company</h1>
                    <p className='date'>JANUARY 18, 2019 BY JAMES COOPER</p>
                    <p className='Lorem'>Lorem ipsum dolor sit, amet consectetur adipisicing <br /> elit. Accusamus distinctio in deserunt quo nam iusto <br /> aliquid, modi placeat quibusdam molestiae temporibus?</p>
                </div>
                <div className='OurCart'>
                    <img className='Hero1No' src={Hero2No} alt="" />
                    <h1 className='OurHead'>How to Invest In Investing Company</h1>
                    <p className='date'>JANUARY 18, 2019 BY JAMES COOPER</p>
                    <p className='Lorem'>Lorem ipsum dolor sit, amet consectetur adipisicing <br /> elit. Accusamus distinctio in deserunt quo nam iusto <br /> aliquid, modi placeat quibusdam molestiae temporibus?</p>
                </div>
            </div>
        </section>
    )
}

export default HomeEnd
