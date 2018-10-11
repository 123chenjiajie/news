new Vue({
    el:"#apps",
    data:{
        arrs:[
//            {box:"",id: "id",lab:"标签",tit:"标题", author:"作者",time:"时间",state:true,txt:"内容"}
        ]
    },
    created:function(){ this.arrs=JSON.parse(localStorage.getItem('n'))
    }
})

//v-if="arr.state==true && arr.lab=='1'"
// v-if="a.state==true && a.lab=='2222'"