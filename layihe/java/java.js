function tikla(){
  document.getElementById("sign").style.display = "block";
  document.getElementById("giris-fon").style.display = "block";
};
function exit(){
    document.getElementById("sign").style.display = "none";
    document.getElementById("giris-fon").style.display = "none";
};

function search(){

 var element=document.getElementById("search").value;
  if((element=="Python") || (element=="python")){
    document.getElementById("form-search").action="file:///C:/Users/Admin/Desktop/pragmatech/layihe/pyhton.html"
  }
  else if(element=="Ana sehife" || element=="ana sehife"){
    document.getElementById("form-search").action="file:///C:/Users/Admin/Desktop/pragmatech/layihe/anasehife.html"
  }
  else if(element=="Riyaziyyat" || element=="riyaziyyat"){
    document.getElementById("form-search").action="file:///C:/Users/Admin/Desktop/pragmatech/layihe/riyaziyyat.html"
  }
  else if(element=="Haqqinda" || element=="haqqinda"){
    document.getElementById("form-search").action="file:///C:/Users/Admin/Desktop/pragmatech/layihe/haqqinda.html"
  }
  else if(element=="Uzvuluk" || element=="uzvuluk"){
    document.getElementById("form-search").action="file:///C:/Users/Admin/Desktop/pragmatech/layihe/uzvuluk.html"
  }
  else if(element=="Qeydiyyat" || element=="qeydiyyat"){
    document.getElementById("form-search").action="file:///C:/Users/Admin/Desktop/pragmatech/layihe/qeydiyyat.html"
  }
  else if(element=="V.I.P/Python" || element=="v.i.p/python" || element=="vip python"){
    document.getElementById("form-search").action="file:///C:/Users/Admin/Desktop/pragmatech/layihe/viptestpython.html"
  }
  else if(element=="V.I.P/Riyaziyyat" || element=="v.i.p/riyaziyyat" || element=="vip riyaziyyat"){
    document.getElementById("form-search").action="file:///C:/Users/Admin/Desktop/pragmatech/layihe/viptestriyaziyyat.html"
  }
}

function enter(){
  var element=document.getElementById("search").value;
  if((element=="Python") || (element=="python")){
    document.getElementById("form-search").action="file:///C:/Users/Admin/Desktop/pragmatech/layihe/pyhton.html"
  }
  else if(element=="Ana sehife" || element=="ana sehife"){
    document.getElementById("form-search").action="file:///C:/Users/Admin/Desktop/pragmatech/layihe/anasehife.html"
  }
  else if(element=="Riyaziyyat" || element=="riyaziyyat"){
    document.getElementById("form-search").action="file:///C:/Users/Admin/Desktop/pragmatech/layihe/riyaziyyat.html"
  }
  else if(element=="Haqqinda" || element=="haqqinda"){
    document.getElementById("form-search").action="file:///C:/Users/Admin/Desktop/pragmatech/layihe/haqqinda.html"
  }
  else if(element=="Uzvuluk" || element=="uzvuluk"){
    document.getElementById("form-search").action="file:///C:/Users/Admin/Desktop/pragmatech/layihe/uzvuluk.html"
  }
  else if(element=="Qeydiyyat" || element=="qeydiyyat"){
    document.getElementById("form-search").action="file:///C:/Users/Admin/Desktop/pragmatech/layihe/qeydiyyat.html"
  }
  else if(element=="V.I.P/Python" || element=="v.i.p/python" || element=="vip python"){
    document.getElementById("form-search").action="file:///C:/Users/Admin/Desktop/pragmatech/layihe/viptestpython.html"
  }
  else if(element=="V.I.P/Riyaziyyat" || element=="v.i.p/riyaziyyat" || element=="vip riyaziyyat"){
    document.getElementById("form-search").action="file:///C:/Users/Admin/Desktop/pragmatech/layihe/viptestriyaziyyat.html"
  }
}

function Yoxla_sual(){
  var _duz1=document.formTest.q1.value;
  var _duz2=document.formTest.q2.value;
  var _duz3=document.formTest.q3.value;
  var correct=0;
  if(_duz1=="duz"){
    correct+=1;
    document.getElementById("sual1").innerHTML="Duzgun";
  }
  else if(_duz1==""){
    document.getElementById("sual1").innerHTML="Cavablandirilmayib";
    document.getElementById("label_duz1").style.color="green";
  }
  else{
    document.getElementById("sual1").innerHTML="Sehv";
    document.getElementById("label_duz1").style.color="green";

  }
  if(_duz2=="duz"){
    correct+=1;
    document.getElementById("sual2").innerHTML="Duzgun";
  }
  else if(_duz2==""){
    document.getElementById("sual2").innerHTML="Cavablandirilmayib";
    document.getElementById("label_duz2").style.color="green";
  }
  else{
    document.getElementById("sual2").innerHTML="Sehv";
    document.getElementById("label_duz2").style.color="green";
  }
  if(_duz3=="duz"){
    correct+=1;
    document.getElementById("sual3").innerHTML="Duzgun";
  }
  else if(_duz3==""){
    document.getElementById("sual3").innerHTML="Cavablandirilmayib";
    document.getElementById("label_duz3").style.color="green";
  }
  else{
    document.getElementById("sual3").innerHTML="Sehv";
    document.getElementById("label_duz3").style.color="green";
  }
  if(correct==1){
    document.getElementById("say_duz").innerHTML="1";
  }
  else if(correct==2){
    document.getElementById("say_duz").innerHTML="2";
  }
  else if(correct==3){
    document.getElementById("say_duz").innerHTML="3";
  }
  
}

function create(){
  var username=document.querySelectorAll(".username");
  var regist_cost=[]
  for(var i=0;i<username.length;i++){
    if(username[i].value!=""){
      regist_cost.push(username[i].value)
    }
  }
  if(regist_cost.length!=8){
    document.getElementById("regist-warning").style.display="block";
  }
}


