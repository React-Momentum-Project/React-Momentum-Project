import { useEffect, useState } from 'react';

const API_KEY = 'bc9af38a81220aca0ddd91e15d708947';
let ignore = false;

const useFetchWeather = () => {
  const [weatherByGeolocation, setWeatherByGeolocation] = useState('');
  const [myGeolocation, setMyGeoLocation] = useState(null);
  const [myTemperature, setMyTemperature] = useState(null);
  const [myWeatherDescription, setMyWeatherDescription] = useState('');

  const getWeatherApiURL = (latitude: number, longitude: number) =>
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;

  const onGeoOk = async (position: GeolocationPosition) => {
    const { latitude, longitude } = position.coords;
    const URL_END_POINT = getWeatherApiURL(latitude, longitude);

    fetch(URL_END_POINT)
      .then((res) => res.json())
      .then((data) => {
        const { main, name, weather } = data;
        setWeatherByGeolocation(weather[0].main);
        setMyGeoLocation(name);
        setMyTemperature(main.temp);
        setMyWeatherDescription(weather[0].description);
      });
  };

  const onGeoError = () => {
    alert("Can't find you. No weather for you.");
  };

  useEffect(() => {
    if (!ignore) {
      navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
    }
    return () => {
      ignore = true;
    };
  }, []);

  return {
    weatherByGeolocation,
    myGeolocation,
    myTemperature,
    myWeatherDescription,
  };
};

export default useFetchWeather;
