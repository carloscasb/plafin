/***
 * ORIGINAL
 * import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

ChartJS.register(ArcElement, Tooltip, Legend);

const CategoriesPie = () => {
  const { categories } = useSelector((state) => state.app);

  const labels = categories.map((category) => category.title);
  const amount = labels.map(
    (label) => categories.find((category) => category.title === label).amount
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: 'Valor Acumulado',
        data: amount,
        backgroundColor: [
          '#FD7477',
          '#359EE5',
          '#FF9F40',
          '#4BC0C0',
          '#7F60F3',
        ],
      },
    ],
  };

  return (
    <div>
      <Doughnut options={options} data={data} />
    </div>
  );
};

export default CategoriesPie;
 */


/**ESTUDO */

//TROUXEMOS DO https://react-chartjs-2.js.org(Doughnut Chart)

import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

ChartJS.register(ArcElement, Tooltip, Legend);

/** VAi TODO PARA DENTRO DA FUNCTION CategoriesPie (tirando o export)
export const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: 'Valor Acumulado', //'# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      
    },
  ],
};
*/

//CRIAR UMA ARRAYFUCTION
const CategoriesPie = () => {

    //PEGAR TODAS AS CATEGORIAS 
    const {categories} = useSelector ((state) => (state.app));
    //MAPEAR CADA VCATEGORIA NO Labels
    //PARA CADA CATEGORIA QUEREMOS O CATEGORIA.Title (O NOME DA CATEGORIA)
    const labels = categories.map((category) => category.title);
    //MAPEAR AS LABELS, PARA ENCONTRAR CADA CATEGORIA(investimento, essencial) QUE A O TITULO (NOME) SEJA IGUAL AO LABEL
    //E EM CADA CATEGORIA QUERO PEGAR O AMOUNT
    const amount = labels.map(label => categories.find(category => category.title === label).amount);

    //COMO ELE NÃO REDERIZOU AS OPTIONS VAMOS CRIAR IGUAL NO BALANCE E RETORNAR NO Doughnut(EMBAIXO)
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
        },
      };
//VEIO DE CIMA (UM DATASETS DAR CONTA POIS É UM GRAFICO DE PIZZA)
//O GRAFICO VAI RECEBER AS CATEGORIAS (renderizar)
    const data = {
       // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
       labels,
        datasets: [
          {
            label: 'Valor Acumulado', //'# of Votes',
            data: amount, //[12, 19, 3, 5, 2, 3],
          //  backgroundColor: [
          //    'rgba(255, 99, 132, 0.2)',
          //    'rgba(54, 162, 235, 0.2)',
          //    'rgba(255, 206, 86, 0.2)',
          //    'rgba(75, 192, 192, 0.2)',
          //    'rgba(153, 102, 255, 0.2)',
          //    'rgba(255, 159, 64, 0.2)',
          //  ],
          backgroundColor: [
            '#FD7477',
            '#359EE5',
            '#FF9F40',
            '#4BC0C0',
            '#7F60F3',
          ],
            
          },
        ],
      };

      //VOU ENVOLVER ISSO NUMA DIV PARA MELHORRAR A ESTILIZAÇÃO
      //E NO Balance.jsx TAMBEM
      //return  <Doughnut options={options} data={data} />;

    return (
        <div>
             <Doughnut options={options} data={data} />;
        </div>
    )
    

}

export default CategoriesPie;

/** 
export function App() {
  return <Doughnut  data={data} />;
}
*/