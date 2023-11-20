import React from 'react'
import aboutImage from './about-image.png'
import logo from '../../assets/logg.svg'
import FlexContainer from '../../Components/FlexibleContainer'
import WhiteDivider from '../../Components/WhiteWave/WhiteWave.styled'
import coldWater from './cold-water.jpg'
import joga from './joga.jpg'
import ContactForm from '../../Components/ContactForm/ContactForm.styled'

const About = ({className}) => {
  const teamData = [
    {
      name: 'Joanne Amyes',
      img: require('./team/Joanne.png'),
      desc: 'Start Small and Build Up Incrementally— Don’t bite off more than you can chew. While it may be tempting to jump into the Full Primary Series, as a newbie to Ashtanga Yoga, I’d recommend that you start off with just the Sun Salutations.'
    },
    {
      name: 'Mikyla Grant',
      img: require('./team/Mikyla.png'),
      desc: 'Start Small and Build Up Incrementally— Don’t bite off more than you can chew. While it may be tempting to jump into the Full Primary Series, as a newbie to Ashtanga Yoga, I’d recommend that you start off with just the Sun Salutations.'
    },
    {
      name: 'Sara Scott',
      img: require('./team/Sara.png'),
      desc: 'Start Small and Build Up Incrementally— Don’t bite off more than you can chew. While it may be tempting to jump into the Full Primary Series, as a newbie to Ashtanga Yoga, I’d recommend that you start off with just the Sun Salutations.'
    },
    {
      name: 'Cherie Summers-Wight',
      img: require('./team/Cherie.png'),
      desc: 'Start Small and Build Up Incrementally— Don’t bite off more than you can chew. While it may be tempting to jump into the Full Primary Series, as a newbie to Ashtanga Yoga, I’d recommend that you start off with just the Sun Salutations.'
    },
  ]
  return (
    <main className={className}>
      <FlexContainer>
        <div className="about">

          <img src={aboutImage} alt="owner" style={{borderRadius: '10px'}}/>

          <div className="about-desc">
            <h2>Lisa Meeham</h2>
            <p>There are four Vedas; Rigveda, Samaveda, Yajurveda, Atharvaveda. They are said to be sruti, heard – of divine revelation (as opposed to smriti, remembered). They contain the foundational understanding of the sanatana dharma.</p>
          </div>

          
            <img src={logo} style={{width: '360px'}} className='logo' alt="logo" />
        
        </div>
      </FlexContainer>

      <div className="about-poster">
        <WhiteDivider className='pos-absolute'/>

        <div style={{background: `url(${coldWater})`, backgroundSize: 'cover', backgroundPosition: "50% 65%"}} className="cold-water">
          <div className="mask one">
            <h1>Cold Water Therapy</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mini</p>
          </div>
        </div>
        
        <div style={{background: `url(${joga})`, backgroundSize: 'cover'}} className="joga">
          <div className="mask two">
            <h1>Yoga</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mini</p>
          </div>
        </div>
      </div>

      <FlexContainer>
      <h2>Our Team</h2>
        <div className="team">
          
          {teamData.map((item, key) => {
            return (
              <div className="item" key={key}>
                <img src={item.img} alt="" />
                <h2>{item.name}</h2>
                <p>{item.desc}</p>
              </div>
            )
          })}
        </div>
      </FlexContainer>
    
      <ContactForm />
    </main>
  )
}

export default About
