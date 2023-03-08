import { Reducer, useReducer } from "react";

export const usePictures = (count = 1) => {
  const defaultUrl: string =
    "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGFydHl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60";

  const defaults = Array(count).fill(defaultUrl);

  const [urls, setUrls] = useReducer<Reducer<any, any>>(
    (state: any, action: any) => ({
      ...state,
      ...action
    }),
    {
      ...defaults
    }
  );

  return { urls, setUrls };
};
