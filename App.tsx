import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={style.container}>
      <Text>TEST</Text>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    flex: 1,
  },
});

export default App;
