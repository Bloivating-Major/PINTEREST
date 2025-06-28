import './App.css'
import LeftBar from './components/leftBar/LeftBar'
import TopBar from './components/topBar/TopBar'
import Gallery from './components/gallery/Gallery'


const App = () => {
  return (
    <main className='app'>
      <LeftBar />
      <section className='content'>
        <TopBar/>
        <Gallery />
      </section>
    </main>
  )
}

export default App