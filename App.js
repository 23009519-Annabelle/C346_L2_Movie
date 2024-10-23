import React from 'react';
import { View, Text , StatusBar} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";
import { Image } from 'react-native';
import { ScrollView } from "react-native";

const Movie = ({title, year, icon_names, poster}) => {
  return (
      <View>
          <Image source= {poster}
                 style={{width:400, height: 500}} />
          <Icon name={icon_name} size={20}> <Text>{title} {year}</Text></Icon>
      </View>
  );
}
 const App = () => {
  return (
      <ScrollView>
          <StatusBar hidden={true} />
        <Movie title="Doctor Sleep" year="2019" icon_name="user-doctor" poster={require("./img/doctor-sleep.jpg")} />
        <Movie title="Alien Romulus" year="2024" icon_name="baby" poster={require("./img/alien-romulus.jpg")} />
      </ScrollView>
  );
}

export default App;
