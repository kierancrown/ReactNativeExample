import React, {useReducer} from 'react';
import {News} from '../types/news';
import {Weather} from '../types/weather';

const initialData: APIContextTypes = {
  isLoading: true,
  weatherData: undefined,
  newsData: undefined,
};

export const APIContext = React.createContext<APIContextTypes>(initialData);

interface APIContextTypes {
  dispatch?: React.Dispatch<any>;
  isLoading: boolean;
  weatherData: Weather.RootObject | undefined;
  newsData: News.Article[] | undefined;
}

export enum ACTIONS {
  SET_LOADING,
  SET_WEATHER_DATA,
  SET_NEWS_DATA,
}

interface Props {
  children?: JSX.Element | JSX.Element[];
}

export type DispatchAction = {
  type: ACTIONS;
  value: any;
};

const APIContextProvider = ({children}: Props) => {
  const [state, dispatch] = useReducer(
    // eslint-disable-next-line @typescript-eslint/no-shadow
    (state: APIContextTypes, action: DispatchAction): APIContextTypes => {
      switch (action.type) {
        case ACTIONS.SET_LOADING:
          return {
            ...state,
            isLoading: action.value,
          };
        case ACTIONS.SET_WEATHER_DATA:
          return {
            ...state,
            weatherData: action.value,
          };
        case ACTIONS.SET_NEWS_DATA:
          return {
            ...state,
            newsData: action.value,
          };
        default:
          return state;
      }
    },
    initialData,
  );

  return (
    <APIContext.Provider value={{...state, dispatch}}>
      {children}
    </APIContext.Provider>
  );
};

export default APIContextProvider;
