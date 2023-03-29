importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
    apiKey: "AIzaSyDoMao28Gnvi0H8nyKp8NKJ0sS_DabHgIU",
    authDomain: "fidarri-b49bf.firebaseapp.com",
    projectId: "fidarri-b49bf",
    storageBucket: "fidarri-b49bf.appspot.com",
    messagingSenderId: "530566311232",
    appId: "1:530566311232:web:32f8fc945af5a3a5c09ea5",
    measurementId: "G-T2PR020Y3M"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
console.log('Received background message ', payload);

const notificationTitle = payload.notification.title;
const notificationOptions = {
body: payload.notification.body,
};

self.registration.showNotification(notificationTitle,
notificationOptions);
});