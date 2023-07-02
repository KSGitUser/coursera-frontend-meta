import { Heading, HStack, Image, Text, VStack, AspectRatio } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import variables from '../../assets/style/variables.scss'

const Card = ({ title, description, imageSrc }) => {
  return (
    <>
      <VStack
        bg={variables.colorLightGray}
        color='gray'
        borderTopLeftRadius='16px'
        borderTopRightRadius='16px'
        _hover={{
          transform: 'scale(1.01)',
          boxShadow: '8px 8px 10px 0px rgba(0,0,0,0.75)'
        }}
      >
        <AspectRatio width='100%' maxW='592px' ratio={3 / 2}>
          <Image
            src={imageSrc}
            borderTopLeftRadius='16px'
            borderTopRightRadius='16px'
            objectFit='cover'
            alt={`image for ${title} card`}
            sx={{
              transition: 'all 0.3s'
            }}
          />
        </AspectRatio>
        <VStack spacing={4} p={4} align='start' height='100%'>
          <Heading variant='leadText' color='black' fontSize='18px'>{title}</Heading>
          <Text flexGrow='1'>{description}</Text>
          <HStack spacing={2} color='black'>
            <Text fontWeight='bold' color='#333333'>Order a delivery</Text><FontAwesomeIcon icon={faMotorcycle} size='1x' />
          </HStack>
        </VStack>
      </VStack>

    </>

  )
}

export default Card
