# Animation App
## Introduction
Animation is the way to enhance the experience of application. The Animated API is designed to concisely express a wide variety of interesting animation and interaction patterns in a very efficient way. Animated focuses on declarative relationships between inputs and outputs, with configurable transforms in between, and start/stop methods to control time-based animation execution. 
Animated exports six animatable component types: View, Text, Image, ScrollView, FlatList and SectionList. 

![Alt Text](https://github.com/iamkaushalgupta/ChatBot/blob/master/gifs/Home.gif)

## Configuring Animation 
Animated libaray basically three types of animations: 
- Animated.spring() 
- Animated.decay() 
- Animated timing() 

## Features
- Home Screen
- Spring Animation
- Timing Animation
- Decay Animation
- Event Animation
- Interpolation
- Loop in animation
- Parallel Animation
- Sequence Animation
- Stagger Animation
- Fade In Fade Out

## Home Screen
Home screen consists of a list of various animations and on top of the home screen the rain effect is created with the help of custom animation using loop, parallel, sequence and timing animation.
Each type of animation with examples can be seen whenever the user clicks on a particular button.

## Spring Animation

Animates a value according to an analytical spring model based on damped harmonic oscillation. Tracks velocity state to create fluid motions as the toValue updates, and can be chained together.
In the App, a red color view moves from top left to bottom right and performs harmonic motion with some bounces.

## Timing Animation
Animates a value along a timed easing curve. The Easing module has tons of predefined curves, or you can use your own function.
In the app, a red color view moves from top left to bottom right and takes five seconds to reach at bottom right.

## Decay Animation

Animates a value from an initial velocity to zero based on a decay coefficient. In simple words, the animation starts with initial velocity and velocity keeps on decreasing depending on the decay coefficient.
In the app, a red color view moves from top left to bottom right and slows its speed as defined by decay coefficient.

## Event Animation

Takes an array of mappings and extracts values from each arg accordingly, then calls setValue on the mapped outputs.
In the app, there is a touchable view, which can be moved from anywhere on the screen but whenever it is released it will reach at its initial position.

##Interpolation Animation

The interpolate() function allows input ranges to map to different output ranges. By default, it will extrapolate the curve beyond the ranges given, but you can also have it clamp the output value.
In the app, a ball with the help of view is created by giving the border radius. Whenever the input increases then the ball translates in both directions and also the color, opacity is also getting changed.

##  Looping Animation

Loops a given animation continuously, so that each time it reaches the end, it resets and begins again from the start.
In the app, the animation is being performed repeatedly which is used in interpolation for some iterations.

##  Parallel Animation

Starts an array of animations all at the same time. By default, if one of the animations is stopped, they will all be stopped.
In the app, whenever the click me button is clicked, one view is get faded out and parallely one view gets faded In.

## Sequence Animation
Starts an array of animations in order, waiting for each to complete before starting the next. If the current running animation is stopped, no following animations will be started.

## Stagger Animation

Array of animations may run in parallel (overlap), but are started in sequence with successive delays. Nice for doing trailing effects. 
In the app, whenever the click me button is clicked then one view is faded in and another view faded out along with some delay.

## Fade In Fade Out Animation

Custom Animation which is performed whenever the button is pressed. In the app, whenever the fade in view button is clicked the fading view is faded in and whenever the fade out button is clicked then fading view is faded out

