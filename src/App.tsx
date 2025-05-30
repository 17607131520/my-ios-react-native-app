import React from 'react';
import { View, Text } from 'react-native';
import styles from './app.style';

const App:React.FC = () => {
  return (
    <View style={styles.box}>
      <Text>Hello World</Text>
    </View>
  );
};

export default App;
