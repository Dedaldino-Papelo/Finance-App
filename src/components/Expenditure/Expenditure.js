import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'

const Expenditure = ({ item }) => {
  const { title, src } = item
  return (
    <TouchableOpacity style={styles.container}>
      <View style={[styles.item, 
        {backgroundColor: title == 'Groceries' ? '#EA4646' : title == 'Shopping' ? '#F9D46C' : '#46D0EA'}]}>
          <Image source={src} />
      </View>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Expenditure