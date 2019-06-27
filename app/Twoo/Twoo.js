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
    SafeAreaView,
    Linking
} from 'react-native'
import {observer,inject} from 'mobx-react';
import {yangs} from '../yangshi'
import { Input ,Button,Badge} from 'react-native-elements';
import MapView , { AnimatedRegion, Marker,Callout }from 'react-native-maps';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
@inject('allData')
@observer
class Twoo extends Component{
    constructor(props){
        super(props)
        this.state={
            
        }
        this.qwr=[
            {
                title:'Address',
                content:'41 kexing west road, huilongguan street, Beijing'
            },
            {
                title:'Telephone',
                content:'+8613478654675',
            },
            {
                title:'Email',
                content:'13478654675@makepolo.com',
            },
            {
                title:'Open time',
                content:'Monday to Friday,9:00-6:00'
            }
        ]
    }
   

     componentDidMount(){
         
      }
      
     
      onBeyondRange(num) {
        if (num < 0) {
          Toast.show('右拉刷新界面');
        } else {
          Toast.show('左滑进入往期列表');
          getNavigator().push({
            name: 'BeforeMonthList',
            ...(appearTime.music),
            onPress: this.onPress
          });
        }
      }
      onPress(rowData) {
        // rowData[0] year
        // rowData[1] month 0~11
        //跳转到新的页面
        getNavigator().push({
          name: 'MusicListPage',
          year: rowData[0],
          month: rowData[1]
        });
      }
      onRightPressed() {
        getNavigator().push({
          name: 'MyGithubPage'
        });
      }
    
  render(){
      console.log('qwq',this.props.allData.text)
       return(
        <SafeAreaView style={{flex:1,alignItems:'center'}}>
            <ScrollView contentContainerStyle={{alignItems:'center'}}>
        <View style={{flex:1,width:'100%',alignItems:'center',}}>
         {
           this.qwr.map((i,j)=>{
            return(
                <View style={{width:yangs.wd*.9,marginTop:20}} key={j}>
                <Badge value={i.title} badgeStyle={{width:'100%',height:yangs.hg*.05}} 
                 textStyle={{fontSize:yangs.wd*.05}}
                />
                 <Text style={{fontSize:18,color:yangs.themeColor,marginTop:15}}>{i.content}</Text>
                </View>
            )
           })
         }
        <MapView 
          style={styles.dt}
          initialRegion={{
            latitude: 39.9863275788,
            longitude:116.3544845581,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          >
          <Marker coordinate={{
             latitude: 39.9853275788,
             longitude:116.3644845581,
            }} pinColor={'#00FA9A'}>
            <Callout style={styles.aacallout} >
             <View style={{}}>
                <Text>Beijing HuiLongGuan street </Text>
             </View>
            </Callout>
          </Marker>
          </MapView>
        </View>
        </ScrollView>
       </SafeAreaView>
       )
  }

}
export default Twoo

const styles=StyleSheet.create({
    aacallout:{
        width:yangs.wd*.5,
        padding:6,
        opacity:.7
    },
    dt:{
        width:yangs.wd,
        height:yangs.hg*.25,
        marginTop:20
     },
     

})