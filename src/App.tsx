import { useEffect, useState } from 'react'
import { GraphLine } from './components/GraphLine';


import { Data, Datum, Options } from './interface/api';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Medidas } from './components/Medidas';





export const App = () => {

  const [resultado, setresultado] = useState<Datum[]>([])
  const [options, setOptions] = useState<Options>()
  const [data, setData] = useState<Data>()

  if (data === undefined) {
    console.log("nino")

  }
  else { console.log("listo") }


  const URL = 'https://boyaxam.herokuapp.com/data'

  useEffect(() => {
    // (1) define within effect callback scope
    const fetchData = async () => {
      try {
        const res = await fetch(URL);
        const json = await res.json();
        const { data: rest } = json

        const dat = [
          {
            created_date: "02/18/23",
            id: 1,
            ph: "65.5",
            temperatura: "34.5"
          },
          {
            created_date: "02/18/24",
            id: 2,
            ph: "31.5",
            temperatura: "35.2"
          },
          {
            created_date: "02/18/25",
            id: 1,
            ph: "43.5",
            temperatura: "23.5"
          },
          {
            created_date: "02/18/25",
            id: 1,
            ph: "45.5",
            temperatura: "23.5"
          },
          {
            created_date: "02/18/25",
            id: 1,
            ph: "35.5",
            temperatura: "53.5"
          },
          {
            created_date: "02/18/25",
            id: 1,
            ph: "63.5",
            temperatura: "34.5"
          }
        ]


        const data = {
          /*  labels: rest.map((item) => item.created_date), */
          labels: dat.map((item) => item.created_date),
          datasets: [
            {
              label: 'PH',
              data: dat.map((item) => item.ph),
              borderColor: 'rgb(255, 99, 132)',
              backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
              label: 'TEMPERATURA',
              data: dat.map((item) => item.temperatura),
              borderColor: 'rgb(53, 162, 235)',
              backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
          ],
        };

        const options = {
          responsive: true,
          plugins: {
            legend: {
              position: 'top' as const,
            },
            title: {
              display: true,
              text: 'Grafica boya',
            },
          },
        };

        setData(data)
        setOptions(options)
        setresultado(rest);
      } catch (error) {
        console.log(error);
      }
    };

    const id = setInterval(() => {
      fetchData(); // <-- (3) invoke in interval callback
    }, 1000000);

    fetchData(); // <-- (2) invoke on mount

    return () => clearInterval(id);
  }, [])






  return (
    <div className='container' >
      <Navbar />
      <Medidas resultado={resultado} />
      <GraphLine data={data} options={options} />
      <Footer />
    </div>
  )
}
