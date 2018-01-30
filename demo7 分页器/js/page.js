class Page{
	constructor(){
		this.init();
	}
	init(){
		let ul = document.getElementById('ul');
        let li = ul.getElementsByTagName('li');
        li[2].className = 'background';
        this.num01 = 1;
        this.num02 = 10;
        //点击首页
        this.firstClick(li,this.num01)
//2 //尾页的点击事件
            
//3 //上一页的点击事件
            li[li.length-(li.length-1)].onclick = function(){

                for(var j = 0;j<li.length-4;j++){
                    if(li[j+2].className == 'background' && li[j+2].innerHTML != 1){
                        if(j+2 != li.length-(li.length-2)){
                            Background(j+1);
                        }
                        break;
                    }
                }
                if(j+2 == li.length-(li.length-2)){
                    this.num01 -- ;
                    content(this.num01);
                }
            }
//4 下一页的点击事件
            li[li.length-2].onclick = function(){
                for(var j = 0;j<li.length;j++){
                    if(li[j].className == 'background' && li[j].innerHTML < this.num02){  //* && 写最后一页的总数*/
                        if(j+1 < li.length-2){
                            Background(j+1);
                        }
                        break;
                    }
                }
                if(j+1 == li.length-2){
                    this.num01++;
                    content(this.num01);
                }
            }        
//     分页的点击事件
            for(var i = 0;i<li.length-4;i++){
                li[i+2].index = i+2;
                li[i+2].onclick = function(){
                    Background(this.index);
                }
            }
    //把所有的分页背景去掉，给指定的分页添加背景颜色
            function Background(num){
                for(var i = 0;i<li.length;i++){
                    li[i].className = li[i].className.replace('background','');
                    li[num].className = 'background';
                }
            }
    // 给li 写内容
        content(this.num01);
            function content(number){
                for(var i=0;i<li.length-4;i++){
                    li[i+2].innerHTML = number;
                    number++;
                }
            }        
	}
    //点击首页
    firstClick(li,num1){
        li[li.length-li.length].addEventListener('click',{
            this.Background(2);
            num1 = 1;
            content(num1);
        })
    }
    //点击尾页
    lastClick(li,num2,num1){
        li[li.length-1].addEventListener('click',=>{
            this.Background(li.length-3);
            this.num1 = this.num2-(li.length-5);
            content(this.num1)
        })
    }
    Background(num){
        for(var i = 0;i<li.length;i++){
            li[i].className = li[i].className.replace('background','');
            li[num].className = 'background';
        }
    }
}
var page = new Page();