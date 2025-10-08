import { useEffect, useState } from "react";
import axios from "axios";

const useApplication = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true)
    axios("./applicationsData.json")
      .then((data) => setApplications(data.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return { applications, loading, error };
};

export default useApplication;
