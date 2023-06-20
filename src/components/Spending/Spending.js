import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'

const Spending = () => {
  return (
    <View style={styles.container}>
        <View style={styles.infoSide}>
            <Text style={styles.title}>Monthy spending{"\n"}limit</Text>
            <Text style={styles.spendText}>Spend: AOA 3,050 / AOA 5,000</Text>
        </View>
        <View style={styles.circularProgressive}>

        </View>
    </View>
  )
}

export default Spending