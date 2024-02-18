import useFetchWeather from './hooks/useFetchWeather';
import * as S from './Weather.styles';

interface I_weatherList {
  [key: string]: string;
}

const Weather = () => {
  const {
    weatherByGeolocation,
    myGeolocation,
    myTemperature,
    myWeatherDescription,
  } = useFetchWeather();

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
    <S.WeatherLayout $weather={weatherByGeolocation}>
      <S.WeatherContainer>
        <div>현재 날씨 : {currentWeather}</div>
        <div>위치 : {myGeolocation}</div>
        <div>기온 : {myTemperature}℃</div>
        <div>날씨 상세 정보 : {myWeatherDescription}</div>
      </S.WeatherContainer>
    </S.WeatherLayout>
  );
};

export default Weather;
