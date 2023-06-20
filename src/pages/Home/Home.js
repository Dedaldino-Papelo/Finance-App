import { View, Text } from 'react-native'
import styles from './style'
import Header from '../../components/Header/Header'
import Balance from '../../components/Balance/Balance'
import Spending from '../../components/Spending/Spending'

const Home = () => {
    return(
    <View style={styles.container}>
        <Header />
        <Balance />
        <Spending />
    </View>
    )
}

export default Home