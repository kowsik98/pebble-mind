import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    input: {
        height: 48,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16
    },
        categoryBtn: {
          flex: 1,
          width: '30%',
          marginHorizontal: 0,
          alignSelf: 'center',
        },
        categoryIcon: {
          borderWidth: 0,
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
          width: 70,
          height: 70,
          backgroundColor: '#fdeae7' /* '#FF6347' */,
          borderRadius: 50,
        },
        cardsWrapper: {
          marginTop: 20,
          width: '90%',
          alignSelf: 'center',
        },
        card: {
          height: 100,
          marginVertical: 10,
          flexDirection: 'row',
          shadowColor: '#999',
          shadowOffset: {width: 0, height: 1},
          shadowOpacity: 0.8,
          shadowRadius: 2,
          elevation: 5,
        },
        cardImgWrapper: {
          flex: 1,
        },
        cardImg: {
          height: '100%',
          width: '100%',
          alignSelf: 'center',
          borderRadius: 8,
          borderBottomRightRadius: 0,
          borderTopRightRadius: 0,
        },
        cardInfo: {
          flex: 2,
          padding: 10,
          borderColor: '#ccc',
          borderWidth: 1,
          borderLeftWidth: 0,
          borderBottomRightRadius: 8,
          borderTopRightRadius: 8,
          backgroundColor: '#fff',
        },
        cardTitle: {
          fontWeight: 'bold',
        },
        cardDetails: {
          fontSize: 12,
          color: '#444',
        },
        button: {
          backgroundColor: '#189AB4',
          marginLeft: 30,
          marginRight: 30,
          marginTop: 20,
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
      
})