import { useState, useEffect } from 'react'
import { Data, Datum, Options } from '../interface/api';

export const peticionHook = () => {
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

                const data = {

                    labels: rest2.map((item: { created_date: any; }) => item.created_date),
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
            fetchData();
        }, 10000);

        fetchData();

        return () => clearInterval(id);
    }, [])

    return {
        resultado, data, options
    }


}
