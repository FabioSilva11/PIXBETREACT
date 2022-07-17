const firebaseConfig = {
    apiKey: "AIzaSyC59GXqcHDl7iiA3oAC6NR1smnWcItn0oc",
    authDomain: "pixbetreact.firebaseapp.com",
    databaseURL: "https://pixbetreact-default-rtdb.firebaseio.com",
    projectId: "pixbetreact",
    storageBucket: "pixbetreact.appspot.com",
    messagingSenderId: "755764004474",
    appId: "1:755764004474:web:279e3ce2aa7d24796c1dc3",
    measurementId: "G-Z17DT4GXXC"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);+
  
  function getReference(){
    var database = firebase.database().ref('jogos/time1');
  }


var data = new Date();

var dia = String(data.getDate()).padStart(2, '0');

var mes = String(data.getMonth() + 1).padStart(2, '0');

var ano = data.getFullYear();

dataAtual = dia + '/' + mes + '/' + ano;

var i = setInterval(function(){

var currentTime = new Date(); 

var tts = currentTime.toLocaleTimeString(); 

document.getElementById("007").innerHTML = dataAtual+"-"+tts;

}, 1000);

var time1 = "BOTAFOGO";
var icom1 = "https://www.imagecache365.com/SoccerSilks/Botafogo_Home.svg";
document.getElementById("01").innerHTML = time1;

var time2 = "AMÉRICA MINEIRO"
var icom2 = "https://www.imagecache365.com/SoccerSilks/America_Futebol_Clube_Home.svg";
document.getElementById("02").innerHTML = time2;

var time3 = "ITUANO"
var icom3 = "https://www.imagecache365.com/SoccerSilks/Ituano_Home.svg";
document.getElementById("03").innerHTML = time3;

var time4 = "LONDRINA"
var icom4 = "https://www.imagecache365.com/SoccerSilks/Londrina_Home.svg";
document.getElementById("04").innerHTML = time4;

var meuBotão = document.getElementById('showButton'); meuBotão.onclick = function(){

setTimeout(function() {

console.log('5 seconds have passed') 
location.replace("https://mpago.la/2GBCy8x");

}, 500);
}
