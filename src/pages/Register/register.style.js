import { StyleSheet } from 'react-native';
import colors from '../../colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.main
    },
    image: {
        width: 50,
        height: 50
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    body: {
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center'
    },
    error: {
        color: colors.red,
        marginBottom: 5
    }
})