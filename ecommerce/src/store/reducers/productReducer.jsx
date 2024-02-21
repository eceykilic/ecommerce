import * as fetchTypes from '../actions/fetchStatesTypes';
import * as productActionTypes from '../actions/productAction/productActionTypes';

const initialState = {
  productList: [],
  totalProductCount: 0,
  pageCount: 0,
  activePage: 1,
  fetchState: fetchTypes.NOT_FETCHED,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case productActionTypes.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        productList: action.payload.productList,
        totalProductCount: action.payload.totalProductCount,
        pageCount: action.payload.pageCount,
        fetchState: action.payload.productList.length !== 0 ? fetchTypes.FETCHED : fetchTypes.FETCHING,
      };
    case productActionTypes.FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        fetchState: fetchTypes.FETCHING,
      };
    case productActionTypes.FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        fetchState: fetchTypes.FETCH_FAILED,
      };
    default:
      return state;
  }
};

export default productReducer;
