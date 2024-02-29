// Clima.js
import React, { useEffect, useState } from 'react';
import { View, Text, Alert, ActivityIndicator, FlatList } from 'react-native';
import { estilos } from './Estilos';
import * as WeatherWidgets from './WeatherWidgets';
import { Card, ListItem, Button, Icon } from 'react-native-elements';


const Clima = () => {
  const [data, setData] = useState(null);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    fetch('http://api.weatherapi.com/v1/forecast.json?key=5a492ff34efa492b91a172441211110&q=huejutla&days=3&aqi=no&alerts=no&lang=es')
      .then(res => res.json())
      .then(obj => {
        setData(obj);
        setLoad(true);
      })
      .catch(err => Alert.alert('Error inesperado: ' + err));
  }, []);

  const UScreen = () => {
    return (
      <View>
        <ActivityIndicator size={'large'} color={'darkblue'} />
        <Text>Cargando datos</Text>
      </View>
    );
  };

  const LScreen = () => {
    return (
      <View>
        <Card>
          <Text>{data.location.name}</Text>
          <WeatherWidgets.TemperatureWidget temperature={data.current.temp_c} />
          <WeatherWidgets.ConditionWidget condition={data.current.condition.text} />
        </Card>
        <FlatList
          data={data.forecast.forecastday}
          renderItem={({ item }) => (
            <Card>
              <WeatherWidgets.ForecastWidget forecast={{ max: item.day.maxtemp_c, min: item.day.mintemp_c }} />
              <WeatherWidgets.IconWidget iconUrl={item.day.condition.icon} />
            </Card>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  };


  return (
    <View style={estilos.ContainerClima}>
      <Text>Clima</Text>
      {load ? <LScreen /> : <UScreen />}
    </View>
  );
};

export default Clima;
