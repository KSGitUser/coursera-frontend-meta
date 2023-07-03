import Image from '../Image/Image'
import style from './heroStyle.module.scss'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'

const Hero = ({ title, subtitle, text, button, image }) => {
  return (
    <section className={style.hero}>
      <div className='container '>
        <div className={style.heroContentWrapper}>
          <h1 className={style.heroTitle}>{title}</h1>
          <h2 className='color--white'>{subtitle}</h2>
          <p className='lead-text color--white'>
            {text}
          </p>
        </div>
        {button && <Link to={button.link}><Button className={style.heroButton}>{button.text}</Button></Link>}
        <div className={style.heroImageWrapper}>
          {image && <Image className={style.heroImage} src={image.src} alt={image.alt} />}
        </div>
      </div>
    </section>
  )
}

export default Hero
