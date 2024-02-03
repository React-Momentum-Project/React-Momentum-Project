import { useEffect, useState } from 'react';

import { StWeatherContainer, StWeatherLayout } from './Weather.styles';

const API_KEY = 'bc9af38a81220aca0ddd91e15d708947';
let ignore = false;

interface I_weatherList {
  [key: string]: string;
}

const Weather = () => {
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

  const weatherList: I_weatherList = {
    Clear: '맑음',
    Rain: '비',
    Thunderstorm: '뇌우',
    Snow: '눈',
    Mist: '옅은 안개',
    Drizzle: '이슬비',
    Clouds: '흐림',
    Fog: '짙은 안개',
    Haze: '실안개',
  };

  const currentWeather = weatherList[weatherByGeolocation];

  return (
    <StWeatherLayout $weather={weatherByGeolocation}>
      <StWeatherContainer>
        <div>현재 날씨 : {currentWeather}</div>
        <div>위치 : {myGeolocation}</div>
        <div>기온 : {myTemperature}</div>
        <div>날씨 상세 정보 : {myWeatherDescription}</div>
      </StWeatherContainer>
    </StWeatherLayout>
  );
};

export default Weather;
