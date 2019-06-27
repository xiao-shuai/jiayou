import React,{Component} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    StyleSheet,
    ActivityIndicator,
    KeyboardAvoidingView,
    TextInput,AsyncStorage,Platform,
    SafeAreaView
} from 'react-native'
import { yangs } from '../yangshi';
import {Button} from 'react-native-elements'
import clear from 'react-native-clear-cache';
class Me extends Component{
    constructor(props){
        super(props)
        this.state={
            cacheSize:"",
            unit:"",
        }
        clear.getCacheSize((value,unit)=>{
            this.setState({
              cacheSize:value, //缓存大小
              unit:unit  //缓存单位
            })
          });
        this.tab=[
            {
              n:'Order',
            },
            {
             n:'Cache',
            },
            {
             n:'About',
            }
        ]
    }
    clearCache(){

        clear.runClearCache(()=>{
    
        clear.getCacheSize((value,unit)=>{
          this.setState({
            cacheSize:value, //缓存大小
            unit:unit  //缓存单位
          })
        });
          
        });
    
      }

  render(){
      return(
        <SafeAreaView style={{flex:1,alignItems:'center'}}>
           <View style={{width:yangs.wd,alignItems:'center',backgroundColor:yangs.themehui,flex:1}}>
            <View style={styles.t_v}>
              <Image source={require('../images/me.png')} 
              style={{width:yangs.wd*.25,height:yangs.wd*.25}}/>
              <View style={{marginLeft:'10%'}}>
                  <Text style={styles.text}>Personal data</Text>
                  <Text style={[styles.text,{marginTop:5}]}>Name: Tom</Text>
              </View>
            </View>
        
        {
            this.tab.map((i,m)=>{
                 return(
                     <TouchableOpacity style={{width:'100%',padding:15,
                     backgroundColor:'white',marginTop:m==0?20:5,}} onPress={()=>{
                         m==1?this.clearCache():null
                     }}>
                          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                         <Text style={{fontSize:yangs.wd*.05,fontWeight:'500',color:yangs.themeColor}}>{i.n}</Text>
                         {
                             m==1?
                             <Text style={{color:yangs.themeColor}}>{this.state.cacheSize}{this.state.unit}</Text>
                             :null
                         }
                         </View>
                    
                     </TouchableOpacity>
                 )
            })
        }

        
       <Button title={'Sign out'} buttonStyle={{
           marginTop:20,width:yangs.wd*.95
       }}/>
           </View>
       </SafeAreaView>
      )
       
  }

}
export default Me
const styles=StyleSheet.create({
    t_v:{
        flexDirection:'row',
        marginTop:5,
        alignItems:'center',
        width:yangs.wd,
        backgroundColor:'white',
        height:yangs.hg*.2,
        padding:10
    },
    text:{
        fontSize:yangs.wd*.05,fontWeight:'500',color:yangs.themeColor
    }
})