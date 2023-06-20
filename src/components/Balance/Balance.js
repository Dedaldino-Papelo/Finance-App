import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './style'

const Balance = () => {
  return (
    <View style={styles.container}>
      <View style={styles.netIncome}>
        <View style={styles.wrapIcon}>
            <Image source={require('../../assets/blueIcon.png')} />
        </View>
        <View style={styles.textWrapper}>
            <Text style={styles.ballanceText}>Net income</Text>
            <Text style={styles.balanceValue}>AOA 6.650</Text>
        </View>
      </View>

      <View style={styles.netIncome}>
        <View style={[styles.wrapIcon, {backgroundColor: '#F06322'}]}>
            <Image style={styles.icon} source={require('../../assets/orange.png')} />
        </View>
        <View style={styles.textWrapper}>
            <Text style={styles.ballanceText}>Expenditure</Text>
            <Text style={styles.balanceValue}>AOA 3.600</Text>
        </View>
      </View>
    </View>
  )
}

export default Balance