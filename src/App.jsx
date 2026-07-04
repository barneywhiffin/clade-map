import './App.css'
import CladeCard from './components/clade-card/clade-card'
import Clade from '/src/assets/data/clades.json'
import Package from '../package.json'

function App() {

  return (
    <>
      <h1>Clade Map</h1>
      <p>v{Package.version}</p>
      <CladeCard title={Clade.title} description={Clade.description} img={Clade.img} />
    </>
  )
}

export default App
