import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchData = (url: string) => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get(url)
      .then(response => setData(response.data))
      .catch(() => setError("Erro ao buscar dados."))
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
};

export default useFetchData;
