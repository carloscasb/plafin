/**ORIGINAL
 * 
 * import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: null,
  transactions: null,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setCategories(state, action) {
      state.categories = action.payload;
    },
    setTransactions(state, action) {
      state.transactions = action.payload;
    },
  },
});

export const { setCategories, setTransactions } = appSlice.actions;

export default appSlice.reducer;
 */



/**ESTUDO */
import { createSlice } from '@reduxjs/toolkit'

//ALEM DAS CATEGORIES, CHAMAREMOS AS TRANSACTIONS (tabelas)
const initialState = {
  //ESTADO INICIAL VAZIO
  categories: null,
  transactions: null,

}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setCategories(state, action) {
      // AO CHAMAR VAMOS POPUPAR COM O QUE DIGITAMOS
      state.categories = action.payload;

    },
    //CRIA OUTRO REDURCE O DA tabela Transactions
    setTransactions(state, action) {
      // AO CHAMAR VAMOS POPUPAR COM O QUE DIGITAMOS
      state.transactions = action.payload;

    },

  },

});

// PEGAMOS O QUE QUEREMOS EXPORTAR E DE ONDE EXPORTAREMOS PELO METODO ACTION
//EXPORTAMOS O REDUX setCategories
//E EXPORTA O setTransactions
export const { setCategories, setTransactions } = appSlice.actions;
export default appSlice.reducer;