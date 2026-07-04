import './App.css'
import CladeCard from './components/clade-card/clade-card'
import Clade from '/src/assets/data/clades.json'

function App() {

  return (
    <>
      <h1>Clade Map</h1>
      <CladeCard title={Clade.title} description={Clade.description} img={Clade.img} />
    </>
  )
}

export default App
