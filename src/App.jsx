import Cabecalho from './components/Cabecalho.jsx'
import Rodape from './components/Rodape.jsx'
import Conteudo from './components/Conteudo.jsx'
import './index.css'

function App() {

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", justifyContent: "space-between"}}>

        <Cabecalho />
        <Conteudo usuario={"qual"}/>
        <Rodape />
      </div>
    </>
  )
}

export default App
