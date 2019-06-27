import React,{Component} from 'react'
import { 
    createBottomTabNavigator,
     createAppContainer,
     createStackNavigator 
    } from 'react-navigation';
 
 import  Ionicons  from 'react-native-vector-icons/Ionicons' 
 import  {
     Me,
     Home,
     Twoo,
     OrderList
} from  '../index'
 import {yangs} from  '../yangshi'
 import AAAbout from '../AAAbout'

 const DiBu=createBottomTabNavigator(
    {
        Home:Home,
        Address:Twoo,
        Me:Me,
      },
      {
       initialRouteName: 'Home',
       defaultNavigationOptions:({ navigation })=>({
           tabBarIcon:({focused, horizontal, tintColor})=>{
          
          const { routeName } = navigation.state;
           let iconName;
           if (routeName === 'Home') {
               iconName ='ios-home';
             } else if (routeName === 'Address') {
               iconName = 'ios-business';
             }else{
                 iconName='ios-person'
             }
             return  <Ionicons name={iconName} size={horizontal ? 20 : 25} 
         color={focused?yangs.themeColor:yangs.themehui} />;
        }
       }),
       tabBarOptions: {
          activeTintColor:yangs.themeColor,
          inactiveTintColor:yangs.themehui,
        },
      }
 )

 const Route =createStackNavigator({
      DiBu:{
        screen:DiBu,
        navigationOptions:()=>({
            header:null,
            headerBackTitle:null,
        })
      },
      
      
      AAAbout:{
        screen:AAAbout, 
        navigationOptions:()=>({
            title:'About us'
        })
      },
    //   Login:{
    //     screen:Login,
    //     navigationOptions:()=>({
    //         // title:'About us'
    //         header:null
    //     })
    //   },
    OrderList:{
        screen:OrderList,
        navigationOptions:()=>({
            title:'About us'
            
        })
      },

 })

 export default createAppContainer(Route)