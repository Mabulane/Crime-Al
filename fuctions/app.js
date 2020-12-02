
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCdoLQ226jj1WOgYjbLrBYfyIFz7fzLzhM",
    authDomain: "alert-system-ce269.firebaseapp.com",
    databaseURL: "https://alert-system-ce269.firebaseio.com",
    projectId: "alert-system-ce269",
    storageBucket: "alert-system-ce269.appspot.com",
    messagingSenderId: "693459571275",
    appId: "1:693459571275:web:ef1d516c652a6a0e61f3ce",
    measurementId: "G-38J5Y5HYYZ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db =firebase.firestore();

const database = firebase.database();
const UserRef=database.ref('Users');
const alertRef=database.ref('Alerts');
const historyRef=database.ref('History');
const policeReef=database.ref('Police');

/*
const sendAlert =document.querySelector('#create-alert');
db.collection('Alerts').get().then(snapshot=>{
    setUIAlerts(snapshot.docs);
});
sendAlert.addEventListener('submit',(e)=>{
    e.preventDefault();
    db.collection('Alerts').add({
        alertName:sendAlert['altName'].value,
        alertDiscription:sendAlert['disc'].value,
        geolocation:sendAlert['location'].value
    }).then(()=> {
        sendAlert.reset();
    });
});

*/


/*const alertList =document.querySelector('#Alert-list');
function renderAlert(doc){
    let li =document.createElement('li');
    let name = document.createElement('span');
    let discriptin = document.createElement('span');
    let location =document.createElement('span');

    li.setAttribute('data-id',doc.id);
        name.textContent=doc.data().alertName;
        discriptin.textContent= doc.data().alertDiscription;
        location.textContent = doc.data().geolocation;

        alertList.appendChild(li);
}  

db.collection('Alerts').get().then((snapshot)=>{
    snapshot.docs.forEach(doc => {
        renderAlert(doc);
    });
});


  <h3>Rape</h3>
        <p>Robbery in progress, @ Soshanguve L near Metseng Primary School. Suspect wearing all black</p>
        <span id="location">Soshanguve</span> 
        <span id="timing" >09:58</span>*/
