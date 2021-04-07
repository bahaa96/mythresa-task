import React from 'react';
import { View, StyleSheet } from 'react-native'


const HorizontalDivider = () => {
  return (
    <View style={styles.container} />
  )
}

const styles = StyleSheet.create({
  container: {
    width: 2,
    backgroundColor: 'lightgray',
    borderRadius: 50,
    marginHorizontal: 10,
    marginVertical: 3,
  }
})

export default HorizontalDivider;