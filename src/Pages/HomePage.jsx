import Main from '../components/Main'
import Hero from '../components/Hero/Hero'
import Specials from '../components/Specials/Specials'
import HeroImage from '../assets/img/restauranfood.webp'

const heroData = {
  title: 'Little Lemon',
  subtitle: 'Chicago',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  button: {
    link: '/booking',
    text: 'Reserve Tabel'
  },
  image: {
    src: HeroImage,
    alt: 'image of food on mane screen'
  }
}

const HomePage = () => {
  return (
    <Main>
      <Hero
        title={heroData.title}
        subtitle={heroData.subtitle}
        text={heroData.text}
        button={heroData.button}
        image={heroData.image}
      />
      <Specials />
    </Main>
  )
}

export default HomePage
