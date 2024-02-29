
import React from 'react';
import { View, Text, Image } from 'react-native';


export const TemperatureWidget = ({ temperature }) => {
  return (
    <View>
      <Text>Temperatura Actual</Text>
      <Text>{temperature} °C</Text>
    </View>
  );
};

export const ConditionWidget = ({ condition }) => {
  return (
    <View>
      <Text>Condición Actual</Text>
      <Text>{condition}</Text>
    </View>
  );
};

export const ForecastWidget = ({ forecast }) => {
  return (
    <View>
      <Text>Pronóstico para el Día</Text>
      <Text>Máxima: {forecast.max} °C</Text>
      <Text>Mínima: {forecast.min} °C</Text>
    </View>
  );
};

export const IconWidget = ({ iconUrl }) => {
  return (
    <View>
      <Text>Icono del Clima</Text>
      <Image style={{ height: 30, width: 30 }} source={{ uri: 'https:' + iconUrl }} />
    </View>
  );
};
