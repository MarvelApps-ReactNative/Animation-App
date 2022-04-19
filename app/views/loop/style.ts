import { StyleSheet, Dimensions } from "react-native";

let {height,width} = Dimensions.get('window');

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:10,
    },

    innerContainer:{
        flex:1
    },
    backgroundImage:{
        height:height,
        width:width
    },
    animatableView:{
            height:100,
            width:100,
            borderRadius:90,
    }

})

export default styles;