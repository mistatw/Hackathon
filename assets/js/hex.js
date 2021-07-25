//let img_url=[];
let name=[];
var index=0;
function hex_shape(){
  for(i=1;i<6;i++){
    var con=document.getElementById(`con${i}`);
    var li_con="";
    for(j=0;j<5;j++){
      li_con+=`<li><div class="hexagon"><div id="con${i}_img${j+1}" class="banner_holderImage"></div><div class="overlay"><p class="juries_nd">Robert Downey Jr</p><p class="juries_nd">CEO</p></div></div></li>`//replace name... with array[index]
    }
    var con_ul=con.innerHTML=`<ul id="grid" class="clear">${li_con}</ul>`;
    for(k=0;k<5;k++){
      let img=document.getElementById(`con${i}_img${k+1}`);
      img.style.background=`url(assets/img/${k+1}.jpg)no-repeat`;//replace k+1 with index+1
      img.style.backgroundSize=`cover`;
      img.style.backgroundPosition=`center`;
      index+=1;
    }
  }
}
hex_shape();

