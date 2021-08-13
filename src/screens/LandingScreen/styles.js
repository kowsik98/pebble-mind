import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        backgroundColor: '#52459D',
        height: '100%',
        paddingVertical: 40,
        paddingHorizontal: 30,
    },
    container__title:{
        flex: 1,
        flexDirection: 'column',
        marginVertical: '55%'
    },
    button1: {
        height: 48,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#fff',
        alignItems: "center",
        justifyContent: 'center',
        marginVertical: 5
    },
    button2: {
        height: 48,
        backgroundColor: '#fd8c40',
        borderRadius: 8,
        borderColor: '#fff',
        alignItems: "center",
        justifyContent: 'center',
        marginTop: 5,
        color: '#fff'
    },
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    },
    content__help: {
        color: '#fff',
        textAlign: 'right',
    },
    title: {
        color: '#fff',
        fontFamily: 'sans-serif',
        fontSize: 30,
        fontWeight: '900',
        lineHeight: 33
    },
    title__sub: {
        color: '#fff',
        marginTop: 10,
        fontFamily: 'sans-serif-light',
        fontSize: 23,
    },  


})