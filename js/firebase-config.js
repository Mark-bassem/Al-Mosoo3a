const firebaseConfig = {
    apiKey: "AIzaSyB5n_mS0WXqdMZc8I7eiCdFE74aQBZdqBw",
    authDomain: "arabic-iq.firebaseapp.com",
    databaseURL: "https://arabic-iq-default-rtdb.firebaseio.com/",
    projectId: "arabic-iq",
    storageBucket: "arabic-iq.firebasestorage.app",
    messagingSenderId: "902408695475",
    appId: "1:902408695475:web:8d048a24027f52b86c4ac6",
    measurementId: "G-YNTFTQRLB3"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();
const auth = firebase.auth();