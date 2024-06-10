import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  
  const [input, setInput] = useState('');
  const [results, setResult] = useState('');

  const onBtnPress = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input));
      } catch (error) {
        setResult('Error!');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput(input + value);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View>
        <Text style={styles.ResultText}>My Calculator</Text>
      </View>
      <View style={styles.ResultsCont}>
        <Text style={styles.ResultText}>{results}</Text>
      </View>
      <View style={styles.InputCont}>
        <TextInput
          style={styles.textInputCont}
          value={input}
          onChangeText={setInput}
          keyboardType='numeric'
        />
      </View>
      <View style={styles.btnCont}>
        {['+', '-', '*', '/', '7', '8', '9', '0', '4', '5', '6', 'C', '1', '2', '3', '=', , ].map(
          (item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.btn}
              onPress={() => onBtnPress(item)}
            >
              <Text style={styles.btnText}>
                {item} 
              </Text>
            </TouchableOpacity>
          )
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C2D2D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ResultsCont: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  ResultText: {
    fontSize: 40,
    color: '#fff'
  },
  InputCont: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  textInputCont: {
    fontSize: 26,
    color: '#fff'
  },
  btnCont: {
    flex: 7,
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  btn: {
    fontSize: 25,
    width: '24%',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 48,
    backgroundColor: '#D3D3D3',
    margin: 2,
  },
  btnText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 20,
  }
});
