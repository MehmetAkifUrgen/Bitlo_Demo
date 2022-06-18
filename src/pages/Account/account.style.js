import { StyleSheet } from 'react-native';
import colors from '../../colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.main,

    },
    image:{
        width:80,
        height:80,
        borderRadius:40
    },
    header:{
        justifyContent:'center',
        alignItems:'center',
        flex:1
    },
    body:{
        flex:2,
        marginHorizontal:'2%',
        marginTop:'15%'
    },
    field:{
        color:colors.black,
        fontSize:17,
        fontWeight:'bold'
    },
    bodyItem:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10,
        backgroundColor:colors.white,
        marginBottom:10,
        borderRadius:20
    },
    fieldText:{
        color:colors.black
    }
})