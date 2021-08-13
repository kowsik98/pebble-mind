import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    title:{
        marginTop: 60,
        marginBottom: 10,
        fontSize: 22,
        fontWeight: 'bold',
        color: '#000',
        marginLeft: 32,
    },
    sectionTitle: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#000',
        marginLeft: 32,
        marginTop: 20,
    },
    logo: {
        flex: 1,
        height: 100,
        width: 250,
        resizeMode: 'contain',
        alignSelf: "center",
        margin: 30
    },
    input: {
        height: 48,
        borderWidth: 0.3,
        borderColor: "#aaa",
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16,
    },
    button: {
        backgroundColor: '#fd8c40',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        marginBottom: 40,
        height: 48,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    },
    footerView: {
        marginLeft: 30,
    },
    footerText: {
        fontSize: 16,
        color: '#2e2e2d',
        fontFamily: 'sans-serif-light',
        marginBottom: 30
    },
    footerLink: {
        color: "#53469c",
        fontFamily: 'sans-serif',
        fontWeight: "bold",
        fontSize: 16
    },
    genderButtonGroup: {
        height: 48,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 0.3,
        borderColor: "#aaa",
    },
    genderTitle: {
        marginRight: 10,
        marginLeft: 14,
        color: '#aaaaaa',
        fontSize: 14,
        fontWeight: "800",
    },
    genderText: {
        marginLeft: 12,
        fontFamily:'sans-serif-light',
        fontSize: 13
    },
    terms:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 30,
        marginTop: 50,
    },
    terms__text: {
        fontFamily:'sans-serif-light',
        fontSize: 14
    },
    terms__textLinkContainer:{
    },
    terms__textLink:{
        fontWeight: "bold",
        color: "#53469c"
    }
})