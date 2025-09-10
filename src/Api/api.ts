import { useState, useEffect } from "react";


// useEffect(() => {
//     fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${titleCity},643&limit=1&appid=7a7246067a4dacd8861ed493fa0284f1`)
//         .then((response) => response.json())
//         .then((data) => {
//           setGeocoding(data);
//           setLat(data[0].lat);
//           setLon(data[0].lon);
//         })
//         .catch(err => {
//             console.log('Ошибка запроса');
//         })
//   }, [titleCity])
type data = {
    name?: string
}

function useFetchCityWeather(lat: number, lon: number) {
    const [data, setData] = useState<data>({});
    useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7a7246067a4dacd8861ed493fa0284f1&lang=ru&units=metric`)
        .then((response) => response.json())
        .then((result) => {setData(result)
        })
        .catch(err => {
            console.log('Ошибка запроса');
        });
    }, [lat, lon])
    // if (data !== null) {
    //    console.log("data", data); 
    //    return data;
    // } else { 
    //     return "Данные не загрузились"
    // }
    return data;
}

function useFethchWeatherFiveDays(lat: number, lon: number) {
    const [resultAPI, setResultAPI] = useState({})
    useEffect(() => {
        fetch(`https://www.meteosource.com/api/v1/free/point?lat=${lat}&lon=${lon}&sections=current%2Cdaily&language=en&units=metric&key=0yhpulmq0puhpdn841y7aklgjd638ep6b7ak9exp`)
            .then((response) => response.json())
            .then((result) => {
                setResultAPI(result)
            })
            .catch(err => {
                console.log("Ошибка запроса");
            })
    }, [lat, lon])
    return resultAPI;
}

  interface coordinates {
    lat: number,
    lon: number
  }

function useLocation(titleCity: string) {
    const [geocoding, setGeocoding] = useState<{}>({});
    useEffect(() => {
        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${titleCity},643&limit=1&appid=7a7246067a4dacd8861ed493fa0284f1`)
            .then((response) => response.json())
            .then((data) => {
            setGeocoding(data);
            })
            .catch(err => {
                console.log('Ошибка запроса');
            })
    }, [titleCity])
    return geocoding;
}

//   useEffect(() => {
//     fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7a7246067a4dacd8861ed493fa0284f1&lang=ru&units=metric`)
//         .then((response) => response.json())
//         .then((data) => {setResultApi(data)
//         })
//         .catch(err => {
//             console.log('Ошибка запроса');
//         });
//   }, [geocoding])

export { useFetchCityWeather, useLocation, useFethchWeatherFiveDays };