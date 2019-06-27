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
import {yangs} from '../yangshi'
import { Input ,Button} from 'react-native-elements';
import DatePicker from 'react-native-datepicker'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Toast, {DURATION} from 'react-native-easy-toast'
@inject('allData')
@observer
class Home extends Component{
    constructor(props){
        super(props)
        this.state={
             date:"",
             data2:"",
        }
    }
    dottoday=()=>{
        const date = new Date();
        
        const fyear = date.getFullYear().toString();
        const fmonth = (date.getMonth()+1).toString();
        const fday = date.getDate().toString();
        const aaafinal=fyear+'-'+fmonth+'-'+fday
        this.setState({date:aaafinal,date2:aaafinal})
      } 

     componentDidMount(){
         this.dottoday()
      }

  ttt=()=>{
      if(this.state.nm==undefined){

          return this.refs.toast.show('Please enter the name',1000)

      }else if(this.state.ph==undefined){

          return this.refs.toast.show('Please enter the phone',1000)
      }else if(this.state.ad==undefined){
       return  this.refs.toast.show('Please enter the address',1000)
      }else if(this.state.com==undefined){
         return this.refs.toast.show('Please enter the company',1000) 
      }
    
      

  }

  render(){
      console.log('qwq',this.props.allData.text)
       return(
        <SafeAreaView style={{flex:1,alignItems:'center'}}>
        <View style={{flex:1,width:'100%',alignItems:'center'}}>
         
         <KeyboardAwareScrollView contentContainerStyle={{alignItems:'center'}}>

         <Input label={'name'} containerStyle={{marginTop:20}} 
             labelStyle={{color:yangs.themeColor}}
           placeholder={'Please enter name'}
           onChangeText={(nm)=>{
            this.setState({nm})
           }}
         />
         <Input label={'phone'} containerStyle={{marginTop:20}} 
         labelStyle={{color:yangs.themeColor}}
           placeholder={'Please enter phone'}
           onChangeText={(ph)=>{
            this.setState({ph})
           }}
         />
          <Input label={'address'} containerStyle={{marginTop:20}} 
          labelStyle={{color:yangs.themeColor}}
           placeholder={'Please enter address'}
           onChangeText={(ad)=>{
             this.setState({ad})
           }}
         />
          <Input label={'company'} containerStyle={{marginTop:20}} 
          labelStyle={{color:yangs.themeColor}}
           placeholder={'Please enter name'}
           onChangeText={(com)=>{
               this.setState({com})
           }}
         />
          <View style={{marginTop:20,marginLeft:10,width:yangs.wd*.95}}>
            <Text style={{fontSize:yangs.wd*.05 ,fontWeight:'500',color:yangs.themeColor,}}>start Time</Text>
            <DatePicker
        style={{width: 200,marginLeft:'20%'}}
        date={this.state.date}
        mode="date"
        showIcon={false}
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate={this.state.date}
        maxDate="2020-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />
          </View>

          <View style={{marginTop:20,marginLeft:10,borderBottomColor:yangs.themehui2,
          borderBottomWidth:1,width:yangs.wd*.95
          }}>
            <Text style={{fontSize:yangs.wd*.05 ,fontWeight:'500',color:yangs.themeColor,}}>end Time</Text>
            <DatePicker
        style={{width: 200,marginLeft:'20%',marginBottom:10}}
        date={this.state.date2}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate={this.state.data2}
        maxDate="2020-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        showIcon={false}
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({date2: date})}}
      />
          </View>
          <Input label={'note'} containerStyle={{marginTop:20}} 
           placeholder={'optional'}
         />
         <Button  title={'submit'} buttonStyle={{
              width:yangs.wd*.95,marginTop:20
          }} onPress={()=>{this.ttt()}}/>
          </KeyboardAwareScrollView>
          
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
export default Home

const styles=StyleSheet.create({
 
     

})