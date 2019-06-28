var BqService = React.createClass({
    render: function(){
        var collumnNum = this.props.collumnNum;
        var services = this.props.services;
        var itemWidth = Math.floor(Util.size.width/collumnNum);
        var size ={
            width:itemWidth,
            height: itemWidth*0.75,
        };

        var itemviews = [];

        for(var ii = 0;ii<services.length;ii++){
            itemviews.push(
                <View style={[styles.center,size]}>
                    <ItemBlock service={services[ii]} />
                </View>
            );
        }

        return(
            <View style={styles.container}>
                {itemviews}
            </View>
            );
    },
});
var styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        flexWrap:'wrap',
    },
    center:{
        justifyContent:'center',
        alignItems:'center',
    },
    itemBlock:{
        //backgroundColor:'red',
        borderRadius:5,
    },
    font18:{
        fontSize:14,
        color:'#333333',
        marginTop:5,
    },
    image: {
        width:50,
        height:50,
        resizeMode: Image.resizeMode.contain,
    },
});