import { StyleSheet, StatusBar} from 'react-native';


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        marginStart: 23,
        marginEnd: 23,
        marginTop: -20,
        height: 85,
        borderRadius: 17.5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 18,
        paddingVertical: 18
    },
    netIncome: {
        flexDirection: 'row',
        gap: 15
    },
    wrapIcon: {
        width: 33.66,
        height: 32.77,
        opacity: 0.25,
        backgroundColor: 'rgb(117, 210, 206)',
        borderRadius: 8.75,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8
    },
    textWrapper: {
        flexDirection: 'column',
        gap: 3
    },
    ballanceText: {
        color: '#6B6B6B',
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 17
    },
    balanceValue: {
       color: '#E5E5E5',
       fontSize: 18,
       fontWeight: 400,
       lineHeight: 22
    }
   
})

export default styles