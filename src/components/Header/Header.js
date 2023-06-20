import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.textValue}>Balance</Text>
        <Text style={styles.value}>AOA 3,050</Text>
      </View>
    </View>
  )
}

export default Header