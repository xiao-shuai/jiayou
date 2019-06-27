import React,{Component} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    StyleSheet,
    ActivityIndicator,
    TextInput,AsyncStorage,Platform,
    SafeAreaView
} from 'react-native'
import {observer,inject} from 'mobx-react';
import {yangs} from './yangshi'
import { Input ,Button} from 'react-native-elements';
import DatePicker from 'react-native-datepicker'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Toast, {DURATION} from 'react-native-easy-toast'
@inject('allData')
@observer
class AAAbout extends Component{
    constructor(props){
        super(props)
        this.state={
             date:"",
             data2:"",
        }
    }
   

     componentDidMount(){
       
      }

  

  render(){
      console.log('qwq',this.props.allData.text)
       return(
        <SafeAreaView style={{flex:1,alignItems:'center'}}>
        <View style={{flex:1,width:'100%',alignItems:'center'}}>
            

        </View>

        <Toast
       ref="toast"
       position='top'
       opacity={0.8}
       />
     </SafeAreaView>
       )
  }

}
export default AAAbout

const styles=StyleSheet.create({
 
     

})