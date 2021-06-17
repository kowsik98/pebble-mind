import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        backgroundColor: '#fff',
        padding: 5,
        width: '100%',
        textAlign: 'center',
        opacity: 100,
        borderRadius: 20,
        backgroundColor: 'linear-gradient(100deg, rgba(10, 100, 190,0.03) 50%, rgba(0,0,0,0.9) 100%)'
      },
      profilecontainer: {
        flex: 1,
        height: '100%',
        width: '100%',
        opacity: 100,
        margin:10,
        backgroundColor: 'linear-gradient(100deg, rgba(10, 100, 190,0.03) 50%, rgba(0,0,0,0.9) 100%)'
      },
      safearea_container: {
        flex: 1,  
        justifyContent: 'center', 
        margin: 20,
        color: '#aaaa',
      },
      datafiller: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        marginBottom: 10,
        width: '100%'
      },
      userImg: {
        height: 150,
        width: 150,
        borderRadius: 75,
        borderWidth: 0.5,
        marginTop:10
      },
      userName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
        textAlign: 'center'
    
      },
      aboutUser: {
        fontSize: 12,
        fontWeight: '600',
        color: '#666',
        textAlign: 'center',
        marginBottom: 10,
      },
      settingsTitle: {
        fontSize: 12,
        fontWeight: '600',
        color: '#000',
        marginTop: 10,
        marginLeft: 20,
        marginBottom: 10,
      },
      userBtnWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        marginBottom: 10,
      },
      userBtn: {
        borderColor: '#189AB4',
        borderWidth: 2,
        borderRadius: 3,
        paddingVertical: 8,
        paddingHorizontal: 12,
        marginHorizontal: 5,
      },
      userList: {
        borderColor: '#aaaa',
        backgroundColor: '#fff',
        borderBottomWidth: 0.2,
        borderRadius: 15,
        paddingVertical: 15,
        paddingHorizontal: 12,
        marginHorizontal: 10,
        marginVertical: 2,
        height: 50,
      },
      userBtnTxt: {
        color: '#189AB4',
      },
      root: {
        flex: 1,
        flexDirection: "column",
        marginRight: 2
      },
       rowContainer: {
        flex: 1, 
        marginTop: 2,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
      },
      userInfoWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginVertical: 20,
      },
      userInfoItem: {
        marginTop: 5,
        marginLeft: 10,
        fontSize: 14,
        fontWeight: 'bold',
        color: '#555555',
        textAlign: 'left'
      },
      userInfoTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
        textAlign: 'center',
      },
      userInfoSubTitle: {
        fontSize: 12,
        color: '#666',
        textAlign: 'center',
      },
      text: {
        flex: 1,
        backgroundColor: 'white', 
      
      },
    title: {

    },
    logo: {
        flex: 1,
        height: 100,
        width: 90,
        alignSelf: "center",
        margin: 100
    },
    input: {
        height: 40,
        borderWidth: 0.5,
        borderRadius: 10,
        backgroundColor: '#fff',
        marginTop: 15,
        marginBottom: 10,
        marginRight: 10,
        marginLeft: 10,
        padding: 10,
        fontSize: 14
    },
    
    button: {
        backgroundColor: '#189AB4',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        height: 48,
        width: '100%',
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: 5,
    },
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    },
    footerView: {
        flex: 1,
        alignItems: "center",
        marginTop: 20,
    },
    footerText: {
        fontSize: 16,
        color: '#2e2e2d'
    },
    footerLink: {
        color: "#189AB4",
        fontWeight: "bold",
        fontSize: 16
    }
})