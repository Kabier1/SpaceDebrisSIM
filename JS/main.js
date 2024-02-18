//This is the main JS files to be referred to in index.html
//Import the functions you need from the SDKs you need -->
        import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
        import { getDatabase, ref, set, get, query, onValue, child, endBefore, orderByValue } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-database.js";
        //import {getFirestore, doc, getDoc, collection, query, where } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore.js";


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
        var oldYear = "1957";

        //Creating the reference (The path in db you are trying to read/write/update)
        const dbRef = ref(db);

        const sliderYear = ref(db, '/SliderYear/YEAR');
        onValue(sliderYear, (snapshot) => {
          const uptoYear = snapshot.val();
          console.log("At 0.9 Year Changed to "+ uptoYear);
          console.log("At 1");
          // get All Objects from DB where year is less than or Equal to Slider Year
          //const Debris = query(ref(db, 'Debris/0/'+uptoYear));

          console.log("At 1.5 - uptoYear: "+uptoYear+" and oldYear: "+oldYear);
          if (uptoYear <= oldYear) {
            for (let i = oldYear; i >= uptoYear; i--){
            //TODO - Clear only differential Debris

            }
          } else {
            //No need to clear any Debris, just add the incremental
            console.log("At 1.51 - uptoYear: "+uptoYear+" and oldYear: "+oldYear);
              for (let i = oldYear; i <= uptoYear; i++){
                get(child(dbRef, `/Debris/0/`+ i)).then((snapshot) => {
                  if (snapshot.exists()) {
                    snapshot.forEach(function (childSnapshot) {
                    var yearKey = snapshot.key;
                    var childKey = childSnapshot.key;
                    var childData = childSnapshot.val();
                    var apogee = childData.APOGEE;// APOGEE
                    var perigee = childData.PERIGEE;// PERIGEE
                    var period = childData.PERIOD;// PERIOD
                    var decay = childData.DECAY;// DECAY
                    var angle = childData.INCLINATION;//angle


                    //TODO - Repaint deferential Debris again on animation the loop will take care of the rest

                    console.log("At 1.70: Year: "+yearKey);
                    console.log("At 1.71: Object: "+childKey);
                    console.log("At 1.74: Apogee: "+apogee);
                    console.log("At 1.74: Perigee: "+perigee);
                    console.log("At 1.75: period: "+period);
                    console.log("At 1.76: decay: "+decay);
                    console.log("At 1.76: angle: "+angle);

                  });
                  onlyOnce: true;
                  } else {
                    console.log("No data available at 1.90");
                  }
                }).catch((error) => {
                  console.error(error);
                });
              }
              onlyOnce: true;
            }
              console.log("At 2 - uptoYear: "+uptoYear+" and oldYear: "+oldYear);
              oldYear = uptoYear;
           //TODO - Get Text For the uptpyear on Slider to show on sidebar
        });


