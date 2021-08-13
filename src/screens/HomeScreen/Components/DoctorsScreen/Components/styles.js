import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: '95%',
        alignItems: 'center',
        alignContent: 'center' ,
        justifyContent: 'center',
        borderRadius: 5,
        paddingVertical: 30,
        paddingHorizontal: 20
    },
    time: {
        width: '90%',
        padding: 10,
        margin: 5,
        borderColor: "#006BFF",
        backgroundColor:'#F5F5F5'
    },
    preview__title: {
        fontSize: 20,
        textAlign: 'center',
        padding: 10
    },
    surface: {
        borderRadius: 5,
        padding: 20,
        textAlign: 'center',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        width: '85%',
        elevation: 5,
    },
    surface2: {
        marginTop: 10,
        borderRadius: 5,
        padding: 20,
        textAlign: 'center',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        width: '85%',
        elevation: 5,
    },
    buttonContainer:{
        alignItems: 'center',
    },
    button: {
        width:'90%',
        backgroundColor: '#189AB4',
        height: 48,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button2: {
        width:'85%',
        margin: 10,
        backgroundColor: '#189AB4',
        height: 48,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    },
    doc__screen:{
        flex:1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    doc__container:{
        flex:1,
        flexDirection: 'row',
        width: '95%',
        margin: 10,
        borderRadius: 5,
        backgroundColor: "#fff",
        elevation: 3,
    },
    doc__imgcontainer:{
        flex:0.5,
        height: 100,
        resizeMode: 'contain',
        justifyContent: 'center',
        alignSelf:'center'
    },
    doc__image:{
        height: '100%',
        width: '85%',
        margin: 20,

        alignSelf: 'center',
        borderRadius: 100,
    },
    doc__title: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignSelf: 'center',
        marginHorizontal: 5,
        marginVertical: 20
    },
    doc__title_name:{
        fontSize: 20,
        fontWeight: 'bold',
        padding: 3,
        marginBottom: 5
    },
    doc__title_specs:{
        padding: 3
    },
    doc__title_exp:{
        padding: 3
    },
    doc__title_lang:{
        padding: 3
    },
    doc__container2:{
        flex:1,
        flexDirection: 'column',
        width: '95%',
        margin: 10,
        borderRadius: 5,
        backgroundColor: "#fff",
        elevation: 3
    },
    doc__container2_title: {
        marginHorizontal: 20,
        marginTop: 15,
        marginBottom: 5,
        fontSize: 17,
        fontWeight: 'bold',
    },
    doc__container2_stitle: {
        marginHorizontal: 20,
        marginBottom: 20,
        fontSize: 15,
        fontWeight: 'normal',
    },
    doc__button:{
        width:'95%',
        backgroundColor: '#189AB4',
        height: 48,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cal__container: {
        flex:1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    cal__container_title:{
        marginHorizontal: 20,
        marginTop: 15,
        marginBottom: 10,
        fontSize: 17,
        fontWeight: 'bold',
    },
    cal__container_stitle1:{
        marginHorizontal: 20,
        marginBottom: 5,
        fontSize: 17,
    },
    cal__container_stitle:{
        color:'#585858',
        marginHorizontal: 20,
        marginBottom: 5,
        fontSize: 15,
        fontWeight: 'normal',
    },
    cal__switchContainer: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 5,
        margin: 12,
        marginVertical: 0,
        elevation: 5,
        borderRadius: 10,
        justifyContent: 'center',
    },
    cal__switchContainer_text:{
        marginHorizontal: 13,
        marginTop: 15,
        marginBottom: 10,
        fontSize: 17,
        fontWeight: 'bold',
    },
    cal__switchContainer_label:{
        fontFamily: 'sans-serif',
        fontSize: 15,

    },
    cal__switchContainer_button:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    cal__calContainer: {
        margin: 12,
        elevation: 5,
        borderRadius: 10
    },
    cal__legend:{
        borderRadius: 100, 
        backgroundColor: '#00ADF5',
        color:'#fff', 
        alignItems: 'center', 
        paddingTop:5,
        paddingLeft:11,
        fontSize: 17,
        width:'8%',
        height:'90%'
    },
    pat__container:{
        width: '95%',
        margin: 10,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 5,
        backgroundColor: "#fff",
        elevation: 3
    },
    pat__input:{
        height: 48,
        borderWidth: 0.3,
        borderColor: "#aaa",
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginVertical: 10,
        marginHorizontal:2,
        paddingLeft: 16,
    },
    pat__options:{
        borderWidth: 0.3,
        borderColor: "#aaa",
        borderRadius: 5,
        padding: 5,
        marginTop: 5
    },
    pat__title:{
        fontWeight: '500',
        marginLeft: 3,
        marginTop: 10
    },
    pat__subtitle:{
        fontWeight: '500',
        marginLeft: 3,
        marginTop: 20
    },
    pat__button:{
        backgroundColor: '#189AB4',
        marginTop: 20,
        height: 48,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center'
    },
    pat__buttonTitle:{
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    },
    pat__genderButtonGroup: {
        height: 48,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 0.3,
        borderColor: "#aaa",
        marginHorizontal:2,
    },
    pat__genderTitle: {
        marginRight: 10,
        marginLeft: 14,
        color: '#aaaaaa',
        fontSize: 14,
        fontWeight: "800",
    },
    pat__genderText: {
        marginLeft: 12,
        fontFamily:'sans-serif-light',
        fontSize: 13
    },
    det__surface: {
        borderRadius: 5,
        padding: 20,
        textAlign: 'center',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        elevation: 5,
    },
    det__surface2: {
        marginTop: 10,
        borderRadius: 5,
        padding: 20,
        textAlign: 'center',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        elevation: 5,
    },
    det__title:{
        fontFamily: 'sans-serif',
        fontSize: 19,
        fontWeight: '200',
        marginTop: 10,
        marginLeft: 15,
    },
    det__subtitle:{
        fontFamily: 'sans-serif-light',
        fontSize: 17,
        marginLeft: 15,
    },
    det__button2: {
        width:'90%',
        margin: 20,
        backgroundColor: '#189AB4',
        height: 48,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    det__buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    },
})