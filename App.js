import React from 'react';
import {StatusBar, ScrollView} from 'react-native';
import Movie from "./components/Movie.js"


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
