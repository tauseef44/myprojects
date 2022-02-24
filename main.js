
//const btn= document.querySelector('#btn-el')
//const pr=document.querySelector('#')
const bv2 = document.querySelector('#bv');
const inputel = document.querySelector('#input-el')
let mylead =[];
const btn_del=document.querySelector('#btn-dl')
const btnel = document.querySelector('#btn-el')
const ulel = document.querySelector('#ul-el')
const btntb = document.querySelector('#btn-tb')
//localStorage.setItem('askani','www.askanitech.com')
let name2=localStorage.getItem('askani')
console.log(name2)



btn_del.addEventListener('dblclick',function(){
    console.log('that delete clicked')
    mylead=[];
    renderlead(mylead);
})
const leadstorage = JSON.parse(localStorage.getItem('mylead'))
if(leadstorage)
{
    mylead=leadstorage;
    renderlead(mylead);
}

btntb.addEventListener("click",function(){
    chrome.tabs.query({active: true, currentwindow: true},function(tabs){
        mylead.push(tabs[0].url)
    localStorage.setItem("mylead",JSON.stringify(mylead))
    
    renderlead(mylead)
    })
})
//localStorage.clear()
//const anker1=document.querySelector('#anker')
//const liel = document.querySelector('#li-el')
btnel.addEventListener('click',function(){
mylead.push(inputel.value)
localStorage.setItem('mylead',JSON.stringify(mylead))
inputel.value = ''
console.log(localStorage.getItem( 'mylead'))

renderlead(mylead);
})
function renderlead(leads){
let listitem='';
for(let i=0;i<leads.length;i++){
    listitem+= `<li><a href="#">${leads[i]}</li></a>`
}
ulel.innerHTML=listitem;

}

