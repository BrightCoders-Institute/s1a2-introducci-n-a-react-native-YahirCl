// Counter.tsx

import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

interface CounterProps {}

const Counter: React.FC<CounterProps> = () => {
  const [count, setCount] = useState(0);

  const increment = (value: number) => {
    setCount(count + value);
  };

  const decrement = (value: number) => {
    if (count >= value) {
      setCount(count - value);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Contador: {count}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Aumentar 1" onPress={() => increment(1)} />
        <Button title="Disminuir 1" onPress={() => decrement(1)} />
        <Button title="Aumentar 5" onPress={() => increment(5)} />
        <Button title="Disminuir 5" onPress={() => decrement(5)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '80%',
  },
});

export default Counter;
