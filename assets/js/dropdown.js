var team= document.getElementById("co-ordinators");
team.innerHTML=teamImg("0");
document.querySelector('.custom-select-wrapper1').addEventListener('click', function() {
    this.querySelector('.custom-select1').classList.toggle('open');
})

for (const option of document.querySelectorAll(".custom-option")) {
option.addEventListener('click', function() {
if (!this.classList.contains('selected')) {
    this.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
    this.classList.add('selected');
    this.closest('.custom-select1').querySelector('.custom-select__trigger1 span').textContent = this.textContent;
    var team_val=document.querySelector(".custom-option.selected").getAttribute("data-value");
    team.innerHTML= teamImg(team_val);
}
})
}
window.addEventListener('click', function(e) {
const select = document.querySelector('.custom-select1')
if (!select.contains(e.target)) {
select.classList.remove('open');
}
});

function teamImg(val){
team.style.gridRowGap="50px";
var result="";
var web_team_name=['Harish','Pravin','Jegadeesh','Shruthi','Sowmiya','Balaji','Raja Selva Kumar','Sayhanuddin','Raghav'];
var event_team_name=['Deepa','Krithika','Sakthivel','Harish Kumar','Srinath','Hemavarshini','Akshaya','Dharani'];
var poster_team_name=['Vinodh','Kavin','Preeti','Sabareeswar'];
var content_team_name=['Sanjeev','Jenish','Hariharan','Sai Divya','Chitra','Asfar Fathima'];
var video_team_name=['Ramya','Divagar','Navashri','Surya'];
var digital_team_name=['Pravin','Kavin','Madhumitha','Rohan','Rajabharathi','Naveen','Sakthi'];

var web_team_id=['https://www.linkedin.com/in/harish-v-464006168','https://www.linkedin.com/in/pravin-s-m-128610165','https://www.linkedin.com/in/jegadeesh-r-j-0b7657188','https://www.linkedin.com/in/sruthi-k-r-7658581b2','https://www.linkedin.com/in/sowmiya-s-0661b4195','https://www.linkedin.com/in/balaji-star/','https://www.linkedin.com/in/raja-selva-kumar-i-5539151aa','https://www.linkedin.com/in/n-mohamed-sayhanuddin-2689121ab','https://www.linkedin.com/in/thirishal-ragav-075419179']
if(val=="0"){
    team.style.gridRowGap="0px";
    for(i=1;i<6;i++){
        if(i==5){
        result += `<div class="team_box_1">
                     <img class="img_box" src="assets/team/techlead/${i}.jpeg" >
                     <div class="overlay_box">
                     <a href="https://www.linkedin.com/in/manikandan-k-457447190">
                        <div class="text_box_1">Manikandan</div>
                        </a>
                     </div>
                   </div>`;
        }
        else{
            result += `<div class="team_box" style="visibility:hidden"></div>`;
        }
    }
    return result;
}
else if(val=="1"){
    for(i=1;i<10;i++){
        result += `<div class="team_box">
                     <img class="img_box" src="assets/team/webdesign/${i}.jpeg" >
                     <div class="overlay_box">
                        <a href="${web_team_id[i-1]}"><div class="text_box">${web_team_name[i-1]}</div></a>
                     </div>
                   </div>`;
    }
    return result;
}
else if(val=="2"){
    for(i=1;i<9;i++){
        result += `<div class="team_box">
                     <img class="img_box" src="assets/team/event/${i}.jpeg">
                     <div class="overlay_box">
                        <div class="text_box">${event_team_name[i-1]}</div>
                     </div>
                   </div>`;
    }
    return result;
}
else if(val=="3"){
    for(i=1;i<5;i++){
        result += `<div class="team_box">
                     <img class="img_box" src="assets/team/poster/${i}.jpeg" >
                     <div class="overlay_box">
                        <div class="text_box">${poster_team_name[i-1]}</div>
                     </div>
                   </div>`;
    }
    return result;
}
else if(val=="4"){
    for(i=1;i<7;i++){
        result += `<div class="team_box">
                     <img class="img_box" src="assets/team/content/${i}.jpeg" >
                     <div class="overlay_box">
                        <div class="text_box">${content_team_name[i-1]}</div>
                     </div>
                   </div>`;
    }
    return result;
}
else if(val=="5"){
    for(i=1;i<5;i++){
        result += `<div class="team_box">
                     <img class="img_box" src="assets/team/video/${i}.jpeg" >
                     <div class="overlay_box">
                        <div class="text_box">${video_team_name[i-1]}</div>
                     </div>
                   </div>`;
    }
    return result;
}
else if(val=="6"){
    for(i=1;i<8;i++){
        result += `<div class="team_box">
                     <img class="img_box" src="assets/team/digital/${i}.jpeg" >
                     <div class="overlay_box">
                        <div class="text_box">${digital_team_name[i-1]}</div>
                     </div>
                   </div>`;
    }
    return result;
}
}
