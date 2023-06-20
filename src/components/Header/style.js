import { StyleSheet, StatusBar} from 'react-native';

const statusBarHeigth = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#466AEA",
        justifyContent: 'center',
        alignItems: 'center',
        height: 200
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    textValue: {
        color: "#fff",
        fontSize: 18
    },
    value: {
        color: "#fff",
        fontSize: 48,
        fontWeight: '700'
    }
  });

  export default styles