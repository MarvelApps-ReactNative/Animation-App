import React, { useEffect, useRef } from "react";
import {Text,FlatList, View, TouchableOpacity, StatusBar, ImageBackground,Dimensions,Animated} from 'react-native';
import styles from "./style";
import {colors, images, strings} from '../../constants';
let {height,width} = Dimensions.get('window')

interface InputProps{
    navigation:any
}

const HomeScreen = (props: InputProps)=>{
    const {navigation} =props;
    const Rain = useRef(new Animated.Value(0)).current;
    const Rain1 = useRef(new Animated.Value(50)).current;
    const Rain2 = useRef(new Animated.Value(30)).current;
    const Rain3 = useRef(new Animated.Value(10)).current;
    const secondRain = useRef(new Animated.Value(0)).current;
    const secondRain1 = useRef(new Animated.Value(50)).current;
    const secondRain2 = useRef(new Animated.Value(30)).current;
    const secondRain3 = useRef(new Animated.Value(10)).current;
    const thirdRain = useRef(new Animated.Value(0)).current;
    const thirdRain1 = useRef(new Animated.Value(50)).current;
    const thirdRain2 = useRef(new Animated.Value(30)).current;
    const thirdRain3 = useRef(new Animated.Value(10)).current;
    
    
    useEffect(()=>{
        Animated.loop(
            Animated.parallel([
                    Animated.timing(Rain,{
                        toValue: height,
                        duration:6500,
                        useNativeDriver: false
                    }),
                    Animated.timing(Rain1,{
                        toValue: height,
                        duration:4900,
                        useNativeDriver: true
                    }),
                    Animated.timing(Rain2,{
                        toValue: height,
                        duration:6500,
                        useNativeDriver: true
                    }),
                    Animated.timing(Rain3,{
                        toValue: height,
                        duration:4000,
                        useNativeDriver: true
                    }),
                ]),
                {iterations:200}
            ).start()

            Animated.loop(
                Animated.parallel([
                        Animated.timing(secondRain,{
                            toValue: height,
                            duration:10000,
                            useNativeDriver: false
                        }),
                        Animated.timing(secondRain1,{
                            toValue: height,
                            duration:8000,
                            useNativeDriver: true
                        }),
                        Animated.timing(secondRain2,{
                            toValue: height,
                            duration:8800,
                            useNativeDriver: true
                        }),
                        Animated.timing(secondRain3,{
                            toValue: height,
                            duration:6000,
                            useNativeDriver: true
                        }),
                    ]),
                    {iterations:200}
                ).start()
                Animated.loop(
                    Animated.parallel([
                            Animated.timing(thirdRain,{
                                toValue: height,
                                duration:1000,
                                useNativeDriver: false
                            }),
                            Animated.timing(thirdRain1,{
                                toValue: height,
                                duration:9000,
                                useNativeDriver: true
                            }),
                            Animated.timing(thirdRain2,{
                                toValue: height,
                                duration:8000,
                                useNativeDriver: true
                            }),
                            Animated.timing(thirdRain3,{
                                toValue: height,
                                duration:4000,
                                useNativeDriver: true
                            }),
                        ]),
                        {iterations:200}
                    ).start()
        
    },[])
    


    const DATA =[
        { name:'Spring Animation', navigation:'Spring' },
        { name:'Timing Animation', navigation:'Time'},
        { name:'Decay Animation', navigation:'Decay'},
        { name:'Event Animation', navigation:'Event'},
        { name:'InterPolation Animation', navigation:'InterPolate'},
        { name:'Looping In Animation', navigation:'Loop'},
        { name:'Parallel Animation', navigation:'Parallel'},
        { name:'Sequence Animation', navigation:'Sequence'},
        { name:'Stagger Animation', navigation:'Stagger'},
        { name:'Fade In Fade Out Animation', navigation:'FadeInOut'},
    ]
    
    return(
        <ImageBackground source={images.background} 
        style={styles.container}        
        imageStyle={styles.backgroundImage}>
        
        <View  style={styles.rainContainer}>
        <Animated.View style={[{ transform:[
            {translateY:Rain1}
        ]}, styles.rainingEffect1]} ></Animated.View>
        <Animated.View style={[{ transform:[
            {translateY:Rain}
        ]},styles.rainingEffect2]} >

        </Animated.View>
        <Animated.View style={[{ transform:[
            {translateY:secondRain1}
        ]}, styles.rainingEffect3]} ></Animated.View>
        <Animated.View style={[{ transform:[
            {translateY:secondRain}
        ]},styles.rainingEffect4]} ></Animated.View>
        <Animated.View style={[{ transform:[
            {translateY:Rain3}
        ]},styles.rainingEffect6]} >
            <Animated.View style={[{ transform:[
            {translateY:thirdRain3}
        ]}, styles.rainingEffect7]} ></Animated.View>

        </Animated.View>
        <Animated.View style={[{ transform:[
            {translateY:Rain1}
        ]},styles.rainingEffect8]} ></Animated.View>
        <Animated.View style={[{ transform:[
            {translateY:thirdRain2}
        ]}, styles.rainingEffect7]} ></Animated.View>
        <Animated.View style={[{ transform:[
            {translateY:Rain}
        ]},styles.rainingEffect4]} >

        

        </Animated.View>
        <Animated.View style={
          [  { 
                transform:[
            {translateY:thirdRain}]}, styles.rainingEffect5]} ></Animated.View>
        <Animated.View style={[{ transform:[
            {translateY:Rain1}
        ]}, styles.rainingEffect1]} ></Animated.View>
        <Animated.View style={[{ transform:[
            {translateY:Rain3}
        ]}, styles.rainingEffect9]} >

        </Animated.View>
        <Animated.View style={[{ transform:[
            {translateY:Rain3}
        ]},styles.rainingEffect5]} >

        </Animated.View>
        <Animated.View style={[{ transform:[
            {translateY:Rain1}
        ]}, styles.rainingEffect4]} ></Animated.View>
        <Animated.View style={[{ transform:[
            {translateY:thirdRain2}
        ]},styles.rainingEffect7]} ></Animated.View>
             <Animated.View style={[{ transform:[
            {translateY:Rain3}
        ]},styles.rainingEffect5]} >

        </Animated.View>
        <Animated.View style={[{ transform:[
            {translateY:Rain1}
        ]}, styles.rainingEffect10]} >

        </Animated.View>
        <Animated.View style={[{ transform:[
            {translateY:Rain}
        ]},styles.rainingEffect10]} >

        </Animated.View>
        
        <Animated.View style={[{ transform:[
            {translateY:thirdRain1}
        ]}]} ></Animated.View>

        <Animated.View style={[{ transform:[
            {translateY:secondRain1}
        ]}, styles.rainingEffect2]} ></Animated.View>
        <Animated.View style={[{ transform:[
            {translateY:secondRain}
        ]}, styles.rainingEffect8]} >

        </Animated.View>
        <Animated.View style={[{ transform:[
            {translateY:Rain2}
        ]},styles.rainingEffect5]} >
<Animated.View style={[{ transform:[
            {translateY:thirdRain1}
        ]},styles.rainingEffect7]} ></Animated.View>
        </Animated.View>
        <Animated.View style={[{ transform:[
            {translateY:secondRain3}
        ]},styles.rainingEffect5]} >

        </Animated.View>
        <Animated.View style={[{ transform:[
            {translateY:secondRain1}
        ]}, styles.rainingEffect8]} ></Animated.View>
             <Animated.View style={[{ transform:[
            {translateY:Rain1}
        ]},styles.rainingEffect7]} >

        </Animated.View>
        <Animated.View style={[{transform:[
            {translateY:secondRain}
        ]},styles.rainingEffect4]} >
        </Animated.View>
        <Animated.View style={[{ transform:[
            {translateY:secondRain1}
        ]}, styles.rainingEffect7]} ></Animated.View>
        <Animated.View style={[{ transform:[
            {translateY:secondRain3}
        ]}, styles.rainingEffect9]} >

        </Animated.View>
        <Animated.View style={[{ transform:[
            {translateY:secondRain1}
        ]}, styles.rainingEffect6]} >

        </Animated.View>
        <Animated.View style={[{ transform:[
            {translateY:secondRain}
        ]}, styles.rainingEffect10]} >
<Animated.View style={[{ transform:[
            {translateY:thirdRain}
        ]},styles.rainingEffect7]} ></Animated.View>
        </Animated.View>


        </View>
        <View style={styles.container} >
            <StatusBar backgroundColor={colors.black} />
            <Text style={styles.headText}>{strings.ReactAnimations}</Text>
            <FlatList
            showsVerticalScrollIndicator={false}
            data={DATA}
            extraData ={DATA}
            renderItem={({item,index})=>{return(
                <TouchableOpacity style={styles.renderContainer} onPress={()=>navigation.navigate(item.navigation)} >
                    <Text style={styles.renderText}>{item.name}</Text>
                    </TouchableOpacity>
            )}}
            />
        </View>
        </ImageBackground>
    )
}

export default HomeScreen