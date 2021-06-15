import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import axios from "axios";

import userConstants from "../../constants/userConstants";
import weatherConstants from "../../constants/weatherConstants";

const Welcome = () => {
  const [currDate, setCurrDate] = useState(dayjs());
  const [weatherInfo, setWeatherInfo] = useState(null);

  const getWeatherInfo = async () => {
    try {
      const res = await axios.get(
        weatherConstants.baseUrl +
          weatherConstants.cityName +
          weatherConstants.suffix +
          import.meta.env.VITE_WEATHER_API
      );
      setWeatherInfo(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => setCurrDate(dayjs()), 1000);

    return () => clearInterval(timer);
  }, [currDate]);

  useEffect(() => {
    getWeatherInfo();

    const timer = setInterval(() => getWeatherInfo(), 60 * 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="inner">
      <div className="col">
        <div className="row justify-space-between">
          <div className="col">
            <p className="text text-lg">Welcome back,</p>
            <p className="text text-xl">@{userConstants.username}</p>
          </div>
          <div className="col" style={{ alignItems: "flex-end" }}>
            <p className="text text-xl">{currDate.format("hh:mm:ss A")}</p>
            <p className="text text-md">{currDate.format("DD MMM, YYYY")}</p>
          </div>
        </div>
        <div>
          {weatherInfo ? (
            <>
              <div className="row">
                <div className="col">
                  <div className="row align-center">
                    <img
                      src={
                        weatherConstants.iconBaseUrl +
                        weatherInfo?.weather?.[0]?.icon +
                        weatherConstants.iconSuffix
                      }
                      alt={weatherInfo?.weather?.[0]?.description}
                    />
                    <div className="col">
                      <p className="text text-xl">
                        {weatherInfo?.main?.temp?.toFixed(0) ?? "N/A"}°C
                      </p>
                      <p className="text text-md">
                        {weatherInfo?.weather?.[0]?.description ??
                          "Unavailable"}
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <p className="text text-lg">Kolkata, IN</p>
                  </div>
                </div>

                <div className="col align-end justify-end">
                  <p className="text text-md">
                    Feels Like: {weatherInfo?.main?.["feels_like"]?.toFixed(0)}
                    °C
                  </p>
                  <p className="text text-md">
                    Min: {weatherInfo?.main?.["temp_min"]?.toFixed(0)}
                    °C
                  </p>
                  <p className="text text-md">
                    Max: {weatherInfo?.main?.["temp_max"]?.toFixed(0)}
                    °C
                  </p>
                  <p className="text text-md">
                    Humidity: {weatherInfo?.main?.humidity?.toFixed(0)} %
                  </p>
                </div>
              </div>
            </>
          ) : (
            <p className="text text-lg text-error">
              Could not fetch weather data
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Welcome;
