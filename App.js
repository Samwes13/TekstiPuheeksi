import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import * as Speech from 'expo-speech';

const App = () => {
  const [text, setText] = useState('');

  const speakText = () => {
    Speech.speak(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
        placeholder="Syötä teksti"
      />
      <Button title="Puhu teksti" onPress={speakText} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default App;
