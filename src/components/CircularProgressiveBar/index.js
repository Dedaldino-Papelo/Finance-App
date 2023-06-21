import { View, Text } from 'react-native'
import React, {useState} from 'react'
import styles from './style'
import Animated from 'react-native-reanimated';
import Svg, { Circle } from 'react-native-svg';
import CircularProgress from 'react-native-circular-progress-indicator';

const Index = () => {
  const [value, setValue] = useState(0);

  return (
      <View>
        <CircularProgress
         radius={50}
         value={70}
         textColor='#222'
         fontSize={20}
         valueSuffix={'%'}
         activeStrokeColor={'#F9D46C'}
         inActiveStrokeColor={'#f5f5f5'}
         activeStrokeWidth={28}
         inActiveStrokeWidth={28}
         duration={3000}
         onAnimationComplete={() => setValue(50)}
         />
      </View>
  )
}

export default Index