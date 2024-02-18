
//Import the functions you need from the SDKs you need -->
        import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
        import { getDatabase, ref, set, get, query, onValue, child } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-database.js";
        import { getAuth, signInAnonymously } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

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
        const auth = getAuth(app); //Initialize Firebase Authentication and get a reference to the service

/*
//login Anonymously
//TODO - Solve for this and change the Rules in FB to restrict authenticated users to update the database
        signInAnonymously(auth)
          .then(() => {
            console.log("Signed in Annon - All Good");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("Failed to login Annon");
            console.log(errorMessage);
          });
*/

//Creating the reference (The path in db you are trying to read/write/update)
        const dbRef = ref(db);


//Update the year on the screen beside the slider based on where the slider is
    const slider = document.getElementById('slider');
    const selectedValue = document.getElementById('selectedValue');

    console.log("Resetting Year in FB Db to 1957 Now:");
    writeSliderDate("1957"); //reset at start

    slider.addEventListener
    ('input', () =>
      {
      selectedValue.textContent = slider.value
//Update Slider Year Value to Firebase DB
      console.log("Year on Slider: "+ slider.value);
      writeSliderDate(slider.value);
      }
    );
//end of update year

//Functions
function writeSliderDate(sliderYear)
{
  set(ref(db, 'SliderYear/'),
  {
    YEAR: sliderYear
  });
}
