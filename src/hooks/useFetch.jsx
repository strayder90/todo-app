import { useEffect, useState } from "react";
import PropTypes from "prop-types";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

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
        const err = (
          <div className="error ui negative medium message">
            <i className="close icon"></i>
            <div name="header">We're sorry something went wrong.</div>
            <p>{error.message}</p>
          </div>
        );

        setError(err);
      }
    }, 500);
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, isLoading, error, handleDelete };
};

useFetch.propTypes = {
  url: PropTypes.string.isRequired,
};
