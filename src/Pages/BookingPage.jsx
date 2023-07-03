import Main from '../components/Main'
import Hero from '../components/Hero/Hero'
import BookingHeroImg from '../assets/img/reserve-table-hero-image.avif'

const bookingData = {
  title: 'Reserve a table',
  image: {
    src: BookingHeroImg,
    alt: 'image of food on mane screen'
  }
}

const BookingPage = () => {
  return (
    <Main>
      <Hero
        title={bookingData.title}
        subtitle={bookingData.subtitle}
        text={bookingData.text}
        button={bookingData.button}
        image={bookingData.image}
      />
    </Main>
  )
}

export default BookingPage
