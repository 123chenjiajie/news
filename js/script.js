new Vue({
    el: "#app",
    data: {
        addtit:"",
        addauthor:"",
        addtxt:"",
        addlab:"",
        addstate:"",
        
        addtit1:"",
        addauthor1:"",
        addtxt1:"",
        addlab1:"",
        addstate1:"",
        indexs:"",
        lists:[
//            {box:"",id: "id",lab:"标签",tit:"标题", author:"作者",time:"时间",state:true}
        ]
    },
    methods:{
        add: function () {
            var ads = document.querySelector(".adds")
            ads.style.display = "block"
        },
        close: function () {
            var ads = document.querySelector(".adds")
            ads.style.display = "none"
        },
        aee:function(){
            if(this.addtit==""){
                alert("必填项不能为空")
            }else if(this.addlab==""){
                alert("必填项不能为空")
            }else if(this.addauthor==""){
                alert("必填项不能为空")
            }else if(this.addtxt==""){
                alert("必填项不能为空")
            }else {
				if(this.addstate==""){
					this.addstate=false
				}
                this.lists.push(
                    {
						lab:this.addlab, tit:this.addtit, author:this.addauthor, time:new Date().toLocaleString(), state:this.addstate,
					 txt:this.addtxt
					}
                )
                this.addlab=""
                this.addtit=""
                this.addauthor=""
				this.addstate=false
                this.addtxt=""
                var ads = document.querySelector(".adds")
            ads.style.display = "none"
				
            }
			if(this.addstate=""){
				this.lists.push(
                    {
					 state:false
					}
                )
			}
            	localStorage.setItem('n',JSON.stringify(this.lists))
			
                

        },
        //删除
        del:function(index){

		 
    var checkBoxList = document.getElementsByName("as");
        var count = 0;
        for(var i = 0 ;i < checkBoxList.length; i++)
       {   if(checkBoxList[i].type == "checkbox")
                if(checkBoxList[i].checked)
                    count++;
        }
			
        if(count <= 0){ 
			alert("请选择您要删除的记录！")
            return false;
        }else if(!confirm("确定删除该记录么？")){
			
			 return false;
		}else{
			this.lists.splice(index,1)
			localStorage.setItem('n',JSON.stringify(this.lists))
			  return true;
		}
			
            localStorage.s("n",)
		},
		//修改
		modify:function(a){
			console.log(this.lists[a],a)
            var edits = document.querySelector(".edit");
            edits.style.display="block"
            this.indexs=a;
            console.log(a)
            console.log(this.indexs)
            this.addtit1=this.lists[a].tit
            this.addauthor1=this.lists[a].author
            this.addtxt1=this.lists[a].txt
            this.addlab1=this.lists[a].lab
            this.addstate1 =this.lists[a].state
            
		},
        delss:function(){
            var edits = document.querySelector(".edit");
            edits.style.display="none"
            
            
        },
        confirm:function(){
         console.log(this.indexs)
        this.lists[this.indexs].tit=this.addtit1
      this.lists[this.indexs].author=this.addauthor1
            this.lists[this.indexs].txt=this.addtxt1
            this.lists[this.indexs].lab=this.addlab1
        this.lists[this.indexs].state=this.addstate1  
        var edits = document.querySelector(".edit");
            edits.style.display="none"
  localStorage.setItem('n',JSON.stringify(this.lists))
        },
        //修改
        //全选
        alls:function(){
            var all = document.getElementById("all");
            var as = document.getElementsByName("as");
            console.log("as长度=="+as.length)
            
            if(all.checked==true){
                console.log("all=true 所以全选")
                if(as.length){
                    for(var i=0;i<as.length;i++){
                        as[i].checked = true;
                    }
                
                }
                as.chcked=true;
            }else{
              console.log("all==false 所以全不选")
                if(as.length){
                    for(var i=0;i<as.length;i++){
                        as[i].checked = false;
                    }
                
                }
            }
            
        },
        //全部删除
	   dels:function(){
         var checkBoxList = document.getElementsByName("as");
        var count = 0;
        for(var i = 0 ;i < checkBoxList.length; i++)
       {   if(checkBoxList[i].type == "checkbox")
                if(checkBoxList[i].checked)
                    count++;
        }
			
        if(count <= 0){ 
			alert("请选择您要删除的记录！")
            return false;
        }else if(!confirm("确定删除该记录么？")){
			
			 return false;
		}else{
			this.lists.splice(this.lists)
			localStorage.setItem('n',JSON.stringify(this.lists))
			  return true;
		}
           
        }
    },
	created: function () {
        //浏览器打开的时候赋值本地存储的值    判断是否等于空
        if (localStorage.getItem('n') !== null){
            this.lists = JSON.parse(localStorage.getItem('n'));
        }
    }
})

autosize(document.querySelectorAll('textarea'));