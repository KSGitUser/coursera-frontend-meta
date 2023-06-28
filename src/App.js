import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Hero from './components/Hero/Hero'
import Specials from './components/Specials/Specials'

function App () {
  return (
    <>
      <Header> </Header>
      <Main>
        <Hero />
        <Specials />
      </Main>
      <Footer />
    </>
  )
}

export default App
