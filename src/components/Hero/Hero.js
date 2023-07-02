import Image from '../Image/Image'
import HeroImage from '../../assets/img/restauranfood.webp'
import style from './heroStyle.module.scss'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className={style.hero}>
      <div className='container '>
        <div className={style.heroContentWrapper}>
          <h1 className={style.heroTitle}>Little Lemon</h1>
          <h2 className='color--white'>Chicago</h2>
          <p className='lead-text color--white'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <Link to='/booking'><Button className={style.heroButton}>Reserve Tabel</Button></Link>
        <div className={style.heroImageWrapper}>
          <Image className={style.heroImage} src={HeroImage} alt='image of food on mane screen' />
        </div>
      </div>
    </section>
  )
}

export default Hero
