// Scripts for firebase and firebase messaging
importScripts(
    "https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"
);
importScripts(
    "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js"
);

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
    apiKey: "AIzaSyBf8havqr9gecE_oOGkuEVD4sCuhY2Vtwg",
    authDomain: "ionic-ea6f8.firebaseapp.com",
    projectId: "ionic-ea6f8",
    storageBucket: "ionic-ea6f8.appspot.com",
    messagingSenderId: "336466764084",
    appId: "1:336466764084:web:f9220acfad281101bf8561",
    measurementId: "G-3KLBVXS977",
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
    console.log("Received background message ", payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
