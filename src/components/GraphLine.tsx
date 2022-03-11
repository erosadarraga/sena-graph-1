import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { Data, Options } from '../interface/api';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';




ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

interface Props {
    options: Options;
    data: Data;
}

export const GraphLine = ({ options, data }: Props) => {

    return (<div className='card p-2'>
        {data ? <Line options={options} data={data} /> : <p className='text-center'>Cargando...</p>}
    </div>)

}
