import {  StyleSheet} from "react-native";
import {  Colors} from "../assets/constants";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE,
        padding: 15,
      },
      cardCon:{
        marginVertical:10,
        borderWidth: 1,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        padding: 10,
        backgroundColor:Colors.WHITE,
        borderRadius:10
      },
      airLineLogo:{
        height:60,
        width:80,
        resizeMode:"contain",
        position:"absolute",
        top:-10,
        right:10
    },
    sloganText:{
        marginTop:20,
        fontSize:18,
        textAlign:"center"
    },
    titleLabelCon:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical:5
      },
      title:{
        fontWeight: 'bold',
        fontSize: 15,
      }
})
export default styles;