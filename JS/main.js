//This is the main JS files to be referred to in index.html
//Import the functions you need from the SDKs you need -->
        import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
        import { getDatabase, ref, get, query, onValue, child } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-database.js"
        //TODO: Add SDKs for Firebase products that you want to use https://firebase.google.com/docs/web/setup#available-libraries

        //Your web app's Firebase configuration
        const firebaseConfig = {
            apiKey: "AIzaSyAvrWJhPsOgrBEdLewL3UMacXY5JRRMObA",
            authDomain: "spacedebrissim.firebaseapp.com",
            databaseURL: "https://spacedebrissim-default-rtdb.asia-southeast1.firebasedatabase.app",
            projectId: "spacedebrissim",
            storageBucket: "spacedebrissim.appspot.com",
            messagingSenderId: "978087687350",
            appId: "1:978087687350:web:9c3f6676f40f30decc2217"
       };

        //Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const db = getDatabase(app); // <-- Pass in the initialized app

        //Creating the reference (The path in db you are trying to read/write/update)
        const dbRef = ref(db);

        get(child(dbRef, `/1`)).then((snapshot) => {
            if (snapshot.exists()) {
                console.log(snapshot.val());
            } else {
                console.log("No data available");
            }
            }).catch((error) => {
                console.error(error);
            });
