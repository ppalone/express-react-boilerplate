import { useEffect, useState } from "react";

import axios from "./config/axios";

import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("/api")
      .then((res) => {
        setMessage(res.data.message);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      {isLoading ? <div>Loading . . .</div> : <div>{message}</div>}
    </div>
  );
}

export default App;
