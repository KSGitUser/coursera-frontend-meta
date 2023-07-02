import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import BookingPage from './Pages/BookingPage'
import Header from './components/Header'
import Footer from './components/Footer'

const typography = {
  regular: function () {
    return {
      fontFamily: "'Karla', sans-serif",
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: '16px',
      lineHeight: '19px',
      color: '#495E57'
    }
  },
  leadText: function () {
    return {
      ...typography.regular(),
      fontWeight: '500',
      fontSize: '18px',
      lineHeight: '21px',
      color: 'black'
    }
  }
}

// 2. Extend the theme with new layer styles
const theme = extendTheme({
  fonts: {
    body: typography.regular()
  },
  components: {
    Heading: {
      variants: {
        leadText: typography.leadText
      }
    }
  }
})
console.log('typography.leadText =>', typography.leadText())
console.log('theme =>', theme)

function App () {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Header> </Header>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/booking' element={<BookingPage />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </ChakraProvider>
  )
}

export default App
