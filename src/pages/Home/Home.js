import { View, Text } from 'react-native'
import styles from './style'
import Header from '../../components/Header/Header'
import Balance from '../../components/Balance/Balance'

const Home = () => {
    return(
    <View style={styles.container}>
        <Header />
        <Balance />
    </View>
    )
}

export default Home