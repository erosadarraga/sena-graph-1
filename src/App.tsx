import { GraphLine } from './components/GraphLine';
import { peticionHook } from "./hook/peticionHook"
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Medidas } from './components/Medidas';


export const App = () => {

  const { data, resultado, options } = peticionHook()

  return (
    <div className='container' >
      <Navbar />
      <Medidas resultado={resultado} />
      <GraphLine data={data} options={options} />
      <Footer />
    </div>
  )
}
