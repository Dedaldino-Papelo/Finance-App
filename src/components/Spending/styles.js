import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        marginStart: 23,
        marginEnd: 23,
        height: 156,
        marginTop: 25,
        marginBottom: 50,
        borderRadius: 17.5,
        flexDirection: 'row',
        paddingHorizontal: 18,
        paddingVertical: 18,
        justifyContent: 'space-between'
    },
    title: {
        color: '#6B6B6B',
        fontSize: 18,
        fontWeight: '700',
        lineHeight: 25
    },
    infoSide: {
        flexDirection: 'column',
        gap: 15
    },
    spendText: {
        color: '#B6B6B6',
        fontSize: 12,
        lineHeight: 14,
        fontWeight: '400'
    }
})

export default styles