import './App.css'
import CladeCard from './components/clade-card/clade-card'

const clade = {
    title: "Sarcopterygii",
    description: "'Lobe finned fish'",
    img: "/src/assets/sarcopterygii.png"
}

function App() {

  return (
    <>
      <h1>Clade Map</h1>
      <CladeCard title={clade.title} description={clade.description} img={clade.img} />
    </>
  )
}

export default App
