import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../colors';

export default StyleSheet.create({
    container: {
        flex: 4,
        backgroundColor: colors.main,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: '2%',
        padding: 10
    },
    text: {
        fontSize: 16,
        color: colors.white,
        fontWeight: 'bold'
    },
    value: {
        flex: 3,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    coinName: {
        flex: 4
    },
    percent: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
        width: Dimensions.get('window').width / 6
    },
    percentText: {
        color: colors.white,
        fontWeight: 'bold'
    }

})