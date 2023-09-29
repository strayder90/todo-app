import { useEffect, useState } from "react";
import PropTypes from "prop-types";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [Error, setError] = useState(null);

  const handleDelete = (id) => {
    const newData = data.filter((data) => data.id !== id);

    setData(newData);
  };

  const fetchData = () => {
    setTimeout(async () => {
      try {
        const result = await fetch(url);
        const data = await result.json();

        setData(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(true);
        const err = `${error.message} - Something went wrong with fetching data.`;

        setError(err);
      }
    }, 500);
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, isLoading, Error, handleDelete };
};

useFetch.propTypes = {
  url: PropTypes.string.isRequired,
};
