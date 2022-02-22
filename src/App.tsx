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




  const URL = 'https://boyaxam.herokuapp.com/data'
  const URL2 = "https://boyaxam.herokuapp.com/vector"

  useEffect(() => {
    // (1) define within effect callback scope
    const fetchData = async () => {
      try {
        const res = await fetch(URL);
        const json = await res.json();
        const { data: rest } = json

        const res2 = await fetch(URL2);
        const json2 = await res2.json();
        const { data: rest2 } = json2

        console.log(rest2)


        // const dat = [
        //   {
        //     created_date: "02/18/23",
        //     id: 1,
        //     ph: "65.5",
        //     temperatura: "34.5"
        //   },
        //   {
        //     created_date: "02/18/24",
        //     id: 2,
        //     ph: "31.5",
        //     temperatura: "35.2"
        //   },
        //   {
        //     created_date: "02/18/25",
        //     id: 1,
        //     ph: "43.5",
        //     temperatura: "23.5"
        //   },
        //   {
        //     created_date: "02/18/25",
        //     id: 1,
        //     ph: "45.5",
        //     temperatura: "23.5"
        //   },
        //   {
        //     created_date: "02/18/25",
        //     id: 1,
        //     ph: "35.5",
        //     temperatura: "53.5"
        //   },
        //   {
        //     created_date: "02/18/25",
        //     id: 1,
        //     ph: "63.5",
        //     temperatura: "34.5"
        //   }
        // ]


        const data = {

          labels: rest2.map((item) => item.created_date),
          datasets: [
            /* {
              label: 'PH',
              data: rest2.map((item) => item.ph),
              borderColor: 'rgb(255, 99, 132)',
              backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }, */
            {
              label: 'TEMPERATURA',
              data: rest2.reverse().map((item) => item.temperatura),
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
    }, 10000000);

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
