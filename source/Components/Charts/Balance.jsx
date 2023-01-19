/**ORIGINAL
 * 
 * import React from 'react';
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

const Balance = () => {
  const { transactions } = useSelector((state) => state.app);
  Chart.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  const getMonth = (date) => {
    return date?.toDate().toLocaleString('pt-BR', { month: 'long' });
  };

  const getBalance = (labels, type, transactions) => {
    return labels.map((label) => {
      return transactions
        .filter((transaction) => getMonth(transaction.date) === label)
        .filter((transaction) => transaction.type === type)
        .reduce((acc, cur) => acc + cur.amount, 0);
    });
  };

  const labels = [
    ...new Set(
      [...transactions]
        .sort((a, b) => a.date?.toDate() - b.date?.toDate())
        .map((transaction) => getMonth(transaction.date))
    ),
  ];

  const incomes = getBalance(labels, 'income', transactions);
  const expenses = getBalance(labels, 'expense', transactions);

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: incomes,
        backgroundColor: '#7f60f3',
      },
      {
        label: 'Dataset 2',
        data: expenses,
        backgroundColor: '#fd7477',
      },
    ],
  };

  return (
    <div>
      <Bar options={options} data={data} />
    </div>
  );
};

export default Balance;
 */

/**ESTUDO */


/**
 *  VAMOS USAR O CHART PARA PARTE GRAFICA
 * OBSERVAÇÂO: DOCUMENTAÇÂO IMPORTANTE (MODELOS) 
https://react-chartjs-2.js.org/
 * OBSERVAÇÃO MODELO QUE USARAEMOS COM EXEMPLO (Vertical Bar Chart)
COPIA E TRAZER, COLA AQUI
 */

import React from 'react';
import {
  //Chart as ChartJS,  //NÃO ESTAMOS USANDO TypeScript
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
 // Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
//import faker from 'faker';

/*
//LEVAR TODAS ESSA PARTE PARA DENTRO DA ARRAYFUCTION BALANCE
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
//TIRAR EXPOSTAÇÔES
 options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
//TIRAR EXPOSTAÇÕES
 data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};
//LEVADO
*/

/*
//TIRAR O RETURNO E COLOCAR NA ARRAYFUCTION DO BALANCE
export function App() {
  return <Bar options={options} data={data} />;
}
*/
const Balance = () => {

    ///CHAMAR AS TRANSAÇÕES
    const { transactions } = useSelector((state) => state.app);
    //LEVAR TODAS ESSA PARTE PARA DENTRO DA ARRAYFUCTION BALANCE
//ChartJS.register(
    Chart.register(
    CategoryScale,
    LinearScale,
    BarElement,
   // Title,
    Tooltip,
    Legend
  );
  //TIRAR EXPOSTAÇÔES
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    //NÃO VAMOS PRECISA DE TITLE
    //  title: {
    //    display: true,
    //    text: 'Chart.js Bar Chart',
    //  },
    },
  };
  
//ARRAY LABELS COM OS MESES DISPONIVEIS - precisamos mapear dentro do transactions o mes de cada transação
////////const labels = transactions.map(transactions => transactions.date)
//POREM NESSE CASO VOU PEGAR O TIMESTATE E NÃO O MES, ENTÃO CRIAR FUNCÃO TRANFORMAR Timestate EM MÊS
const getMonth = (date)=>{
    return date?.toDate().toLocaleString('pt-BR',  {month:'long'} )
}
//PODE PEGAR O getMonth e usar em const labels, 
// A FUNÇÂO ABAIXO NOS DAR UMA ARRAY COM os MESES DAS TRANSACÕES
/////const labels = transactions.map(transaction => getMonth(transaction.date))
///E COLOCAR ISSO DENTRO DE UMA ARRAY, e aplicar Set para TIRAR OS DADOS DUPLICADOS
//ISSO FAZ QUE APARECE SOMENTE UM SETEMBRO EM UMA ARRAY NOVO
////const labels = [... new Set(transactions.map(transaction => getMonth(transaction.date)))];
//SE TIVERMOS MAIS QUE UMA MES VAMOS TER QUE POR EM ORDEM CRESCENTE NO MÊS, ENTÃO USAMOS O METODO sort

const labels = [
    ... new Set(
    [...transactions]
    .sort((a, b) => a.date?.toDate() - b.date?.toDate())
    .map(transaction => getMonth(transaction.date)))];

/** 
//FAZER A SOMA DAS TRANSAÇÕES. 
//PRIMEIRO PRECISAMOS MAPEAR AS LABELS, PARA CADA MES PRECISAMOS SABER A SOMA DE TRANSAÇÃO
//E QUE O MÊS DA TRASAÇÂO SEJA IGUAL AO label
//E DEPOIS QUEREMOS PEGAR SOMENTE AS ENTRADA, APLICAMOS OUTRO FILTRO type
//E PARA SOMAR USAMOS UM REDURCE, que recebe um acumulador  e um valor atual, 
//NO VALOR ATUAL, PRECISAMOS NESSE CASO PEGAR O amount e VALOR INICIAL DO acc È 0 (zero)
//VAMOS LEVAR ESSA FUNÇÃO income LA NO data e substituir o [1,2,3,4,5,6,7],
////////////////////////////
const income = labels.map((Label) => {
  return  transactions
  .filter((transaction) => getMonth(transaction.date) === Label)
  .filter((transaction) => transaction.type === 'income')
  .reduce ((acc, cur) => acc + cur.amount, 0)

})*/

//PRECISAMOS FAZER UMA PARA expense, ORA
//ENTÃO FAREMOS uma JUNTANDO TANTA AS SOMAS DE ENTRADA E SAIDA NUMA SO FUNÇÃO A GetBalance()
// A FUNÇÂO getBalance VAI RETORNAR EXATEMANETE O QUE A FUNÇÃO income FAZ
//SO QUE VAMOS RECEBER ALGUNAS COISA ((labels, type, transactions))
//JÁ PODEMOS EXCLUIR A FUNÇÃO income
//Só PRECISAMOS CRIAR OS expenses E OS incomes (INCLUIDO(incorporando) O getBalance NELES - INDO JUNTO)
const getBalance = (labels, type, transactions) => {
  return labels.map((label) => {
     return transactions
    .filter((transaction) => getMonth(transaction.date) === label)
    .filter((transaction) => transaction.type === type)
    .reduce ((acc, cur) => acc + cur.amount, 0)
  
  });
  
  };
  

//CRIAR AS INCONES E EXPENSES PASSANDO OS LABELS, OS INCOME, EXPENSE, E AS TRASAÇÕES
const incomes = getBalance(labels, 'income', transactions);
//A MESMA COISA COM OS EXPENSES
const expenses = getBalance(labels, 'expense', transactions);
//AGORA É PASSAE OS INCONES E OS EXPENSES NO data DA FUNÇÃO data

//console.log(incomes)
//console.log(expenses)


 //FECHAR(excluir) ESSE DO EXEMPLO const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  //TIRAR EXPOSTAÇÕES
 const  data = {
    labels,
    datasets: [
      {
        label: 'Entardas', // 'Dataset 1',
       // data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
       //data:[1,2,3,4,5,6,7], ///SUBSTITUIDO PELA FUNÇÃO income
       //data:income,
       data: incomes,
        backgroundColor: '#7f60f3', //'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Saidas', //'Dataset 2', 
        //data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
       // data:[1,2,3,4,5,6,7],
       data: expenses,
        backgroundColor: '#fd7477', // 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
//PASSANDO UMA OPTIONS(como grafico vai ser redirecionado) E AS DATA (importante)
//VOU ENVOLVER NUMA DIV PARA ARRUMAR A ESTILIZAÇÃO
   // return <Bar options={options} data={data} />;
   return (
    <div>
       <Bar options={options} data={data} />;
    </div>
   )
   
}


export default Balance;