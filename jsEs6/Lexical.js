let data = {
    list:"friends",
    names:["bruce","petter","sam"],
    getFriends:function(){
       this.names.map(function(item){
        console.log("friends",item)


       })
    }
}
data.getFriends()