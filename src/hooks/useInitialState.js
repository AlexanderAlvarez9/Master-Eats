import { useState, useEffect } from 'react';

const useInitialState = (API) => {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) =>
        data.data.reduce((objAcum, product) => {
          objAcum[product._id] = product;
          return objAcum;
        }, {})
      )
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);
  return data;
};

export default useInitialState;
