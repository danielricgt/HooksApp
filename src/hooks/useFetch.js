import { useEffect, useState } from "react";


export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: false,
    errorMessage: null,
  });

  useEffect(() => {
     getFetch();
  });

  const loadingState = () => { setState({ 
    data: null,
    isLoading: true,
    hasError: false,
    errorMessage: null,
  })

  const getFetch =  async() => {
loadingState();
    const res =  await fetch(url);

    if (!res.ok) {
      setState({
        data: null,
        isLoading: false,
        hasError: true,
        error: {
          code: res.status,
          message: res.statusText,
        }
      });
      return;
    }
    const data = await res.json();
  setState({
    data: data,
    isLoading: false,
    hasError: false,
    error: null,
  })
  }

  return {
    ...useFetch,
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};
