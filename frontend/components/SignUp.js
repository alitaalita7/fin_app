import React from 'react';
import { View, Text } from 'react-native';

const SignUp = () => {
  return (
    <View style={{ flexDirection: 'row', backgroundColor: 'red', height: '100%'}}>
      <View style={{ width: 200, height: 200, backgroundColor: 'red' }}>
        <Text>Item 1</Text>
      </View>
      <View style={{ width: 200, height: 200, backgroundColor: 'blue' }}>
        <Text>Item 2</Text>
      </View>
      {/* Добавьте дополнительные элементы по вашему выбору */}
    </View>
  )
}

export default SignUp
