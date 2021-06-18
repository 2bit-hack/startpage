import React, { useState, useEffect } from "react";
import axios from "axios";

import jokeConstants from "../../constants/jokeConstants";

const Joke = () => {
  const [joke, setJoke] = useState(null);

  const getJoke = async () => {
    try {
      const res = await axios.get(jokeConstants.baseUrl);
      setJoke(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getJoke();
  }, []);

  return (
    <div className="inner">
      {joke ? (
        <div className="col">
          <p className="text text-lg">{joke.setup}</p>
          <div className="space-y" />
          <p className="text text-md">{joke.punchline}</p>
        </div>
      ) : (
        <>
          <p className="text text-lg text-error">Could not fetch joke</p>
        </>
      )}
    </div>
  );
};

export default Joke;
