import './App.css'
import CladeCard from './components/clade-card/clade-card'
import Clades from '/src/assets/data/clades.json'
import Package from '../package.json'

function App() {

  const CladeCards = Clades.map(clade => (
      <>
        <CladeCard title={clade.title} description={clade.description} img={clade.img} alt={clade.alt} /> 
      </>
    )
  )

  return (
    <>
      <h1>Clade Map</h1>
      <p>v{Package.version}</p>
      {CladeCards}
    </>
  )
}

export default App
