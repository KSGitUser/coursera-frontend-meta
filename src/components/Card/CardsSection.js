import React from 'react'
// import FullScreenSection from '../FullScreenSection'
import { Box } from '@chakra-ui/react'
import Card from './Card'

const cards = [
  {
    title: 'Greek Salad',
    description:
      'Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️',
    getImageSrc: () => require('../../assets/img/greek salad.webp')
  },
  {
    title: 'Bruchetta',
    description:
      'A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land 🔥️',
    getImageSrc: () => require('../../assets/img/bruchetta.webp')
  },
  {
    title: 'Lemon Desert',
    description:
      'A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income',
    getImageSrc: () => require('../../assets/img/lemon dessert.webp')
  }
]

const CardsSection = () => {
  return (
    <Box
      alignItems='flex-start'
      spacing={8}
      my='48px'
    >
      <Box
        display='grid'
        justifyContent='center'
        gridTemplateColumns={[
          'repeat(1,minmax(0,1fr))',
          'repeat(1,minmax(0,277px))',
          'repeat(3,minmax(0,1fr))'
        ]}
        gridGap={8}
      >
        {cards.map((card) => (
          <Card
            key={card.title}
            title={card.title}
            description={card.description}
            imageSrc={card.getImageSrc()}
          />
        ))}
      </Box>
    </Box>
  )
}

export default CardsSection
