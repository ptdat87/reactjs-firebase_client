import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
const firebaseConfig = {
    apiKey: "AIzaSyBf8havqr9gecE_oOGkuEVD4sCuhY2Vtwg",
    authDomain: "ionic-ea6f8.firebaseapp.com",
    projectId: "ionic-ea6f8",
    storageBucket: "ionic-ea6f8.appspot.com",
    messagingSenderId: "336466764084",
    appId: "1:336466764084:web:f9220acfad281101bf8561",
    measurementId: "G-3KLBVXS977",
};

const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);

export const getToken2 = (setTokenFound) => {
    return getToken(messaging, {
        vapidKey:
            "BNowDIwdXPvnJAv2uImc5DtJv1NQES4INkY5iEK5jrk0D_Xd6ItRbcG1bR_HmyT9_Wsz5X_D1UbdpbrAkx1yv2c",
    })
        .then((currentToken) => {
            if (currentToken) {
                console.log("current token for client: ", currentToken);
                setTokenFound(true);
                // Track the token -> client mapping, by sending to backend server
                // show on the UI that permission is secured
            } else {
                console.log(
                    "No registration token available. Request permission to generate one."
                );
                setTokenFound(false);
                // shows on the UI that permission is required
            }
        })
        .catch((err) => {
            console.log("An error occurred while retrieving token. ", err);
            // catch error while creating client token
        });
};

export const onMessageListener = () =>
    new Promise((resolve) => {
        onMessage(messaging, (payload) => {
            resolve(payload);
        });
    });
