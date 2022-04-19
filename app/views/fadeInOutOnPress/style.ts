import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../../constants";

let {height,width} = Dimensions.get('window')
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:10,
      },
      fadingContainer: {
        padding: 20,
        backgroundColor: colors.red,
        borderRadius:4
      },
      fadingText: {
        color: colors.white,
        fontSize: 28,
        textAlign: 'center',
      },
      buttonRow: {
        flexBasis: 100,
        justifyContent: 'space-evenly',
        marginVertical: 16,
      },
      backgroundImage:{
          height: height, 
          width: width
    },
    innerContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    fadeButton:{
        padding: 10,
        borderRadius: 10,
        backgroundColor: 'steelblue',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText:{
        color: 'white', 
        fontSize: 18}

})
export default styles;