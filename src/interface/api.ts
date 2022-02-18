// Generated by https://quicktype.io

export interface API {
    data: Datum[];
}

export interface Datum {
    created_date: string;
    id: number;
    ph: string;
    temperatura: string;
}

export interface Options {
    responsive: boolean;
    plugins: {
        legend: {
            position: "top";
        };
        title: {
            display: boolean;
            text: string;
        };
    };
}

export interface Data {

    labels: string[];
    datasets: {
        label: string;
        data: string[];
        borderColor: string;
        backgroundColor: string;
    }[];

}