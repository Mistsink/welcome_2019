//  js二级菜单 

let liTags = document.querySelectorAll(".nav > ul > li");
for (let i=0; i<liTags.length;i++){
    liTags[i].onmouseenter = function (e) {
        let li = e.currentTarget;
        li.classList.add("active");
    }
    liTags[i].onmouseleave = function (e) {
        let li = e.currentTarget;
        li.classList.remove("active");
    }
}

// 倒计时

let d = document.querySelector("#day"),
    h = document.querySelector("#hour"),
    m = document.querySelector("#minute"),
    s = document.querySelector("#second");

function count(times){
    let today = new Date().getTime();

    if(today >= times){
        return {
            day:00,
            hour:00,
            minute:00,
            second:00,
            result:true
        }
    }

    let timeDiff = times - today;
    //    s m h d 
    let d = parseInt(timeDiff /1000 /60 / 60 /24 ,10),
        h = parseInt(timeDiff / 1000 / 60 /60 % 24 , 10),
        m = parseInt(timeDiff / 1000 / 60 %60 , 10),
        s = parseInt(timeDiff / 1000 %60 ,10);
    
    // 若数值仅一位数则补充一个0
    d = d < 9 ? "0"+d : d;
    h = h < 9 ? "0"+h : h;
    m = m < 9 ? "0"+m : m;
    s = s < 9 ? "0"+s : s;

    return {
        day:d,
        hour:h,
        minute:m,
        second:s,
        result:false
    }

}
    // 设置截止时间
const times = new Date('2020/9/1 0:00').getTime();

var con = count(times);
d.innerHTML = con.day;
h.innerHTML = con.hour;
m.innerHTML = con.minute;
s.innerHTML = con.second;

let interval = setInterval(function(){
    var con = count(times);
    if (con.result){
        clearInterval(interval)
    }
    d.innerHTML = con.day;
    h.innerHTML = con.hour;
    m.innerHTML = con.minute;
    s.innerHTML = con.second;
} , 1000)

//输入框清除效果
let map_search = document.querySelector(".map_title").getElementsByTagName("input")[0];
let map_clear = document.querySelector("#clear");

map_clear.addEventListener(
    "click" ,
    function(){
        map_search.value = ""
    },
    false
)

//qrcode to_top效果
var qrcode = document.querySelectorAll('.qrcode');
var to_top = document.querySelector(".to_top");
var fire = document.documentElement.querySelector(".fire");

window.addEventListener(
    'scroll',
    function(){
        var topScroll = document.documentElement.scrollTop;
        
        if( topScroll >= 182){
            to_top.style.zIndex = "1";
            for(let i=0;i<qrcode.length;i++){
                qrcode[i].style.position = "fixed";
                qrcode[i].style.top = "7.031vw";
                qrcode[i].style.zIndex = "1";
                qrcode[i].style.animationName = "qrcode"
            }
            if( topScroll >= 3820){
            to_top.style.position = "absolute";
            to_top.style.zIndex = "1";
            to_top.style.top = "326.563vw";
            }else{
                to_top.style = "";
                to_top.style.zIndex = "1"
            }
        }else{
            to_top.style = "";
            for(let i=0;i<qrcode.length;i++){
                qrcode[i].style=''
            }
        }
    }
);



to_top.addEventListener(
    'mouseover',
    function(){
        fire.style.animationName = "fire";
    }
)
to_top.addEventListener(
    'mouseout',
    function(){
        fire.style.animationName = "";
    }
)

//标题珠子效果
let wrap = document.getElementsByClassName("con");
let bead = document.getElementsByClassName("bead");

for(let i =0;i<wrap.length;i++){
    wrap[i].addEventListener(
        'mouseover',
        function(){
            bead[i].style.display = "block";
        }
    )
    wrap[i].addEventListener(
        'mouseout',
        function(){
            bead[i].style.display = "none";
        }
    )
}




//map效果
let marker_index = 0 ;
let container = document.querySelector(".map_container");
    //标记函数
function map_marker(x,y,boxName){
    var div = document.createElement("div");
    div.className = "map_marker";
    div.style.left = x - 5 + "px";
    div.style.top = y - 5 + "px";

    document.querySelector(boxName).appendChild(div);

    var marker = document.getElementsByClassName("map_marker");

    marker[marker_index].onclick = function(){
                container.removeChild(this)
            }
    marker_index++;
}
    //获取位置x,y;及点击事件
container.onclick = function (e) {
    e = e || window.event;
    var x = e.offsetX || e.layerX ,
        y = e.offsetY || e.layerY ;
    map_marker(x,y,".map_container");
}

    //放缩按钮
let img = document.querySelector(".map_img"),
    enlarge = document.querySelector(".enlarge"),
    narrow = document.querySelector(".narrow");

let scale_n = .5,  //设置固定放缩比例
    scale_num = 1; //记录实际放缩比例

enlarge.onclick = function(){
    scale_num = scale_num+scale_n;
    img.style.transform = "scale("+scale_num+","+scale_num+")"
}
narrow.onclick = function(){
    scale_num = scale_num-scale_n;
    scale_num = scale_num>1?scale_num:1;
    img.style.transform = "scale("+scale_num+","+scale_num+")"
}

