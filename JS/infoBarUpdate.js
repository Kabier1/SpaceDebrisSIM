
       // Get Year, understand the Decade and then update info bar with that
        import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
        import { getDatabase, ref, set, get, query, onValue, child, endBefore, orderByValue } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-database.js";

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
        console.log("At 3.0 im here "+ oldYear);

        //Creating the reference (The path in db you are trying to read/write/update)
        const dbRef = ref(db);

        const sliderYear = ref(db, '/SliderYear/YEAR');

        onValue(sliderYear, (snapshot) => {
          const uptoYear = snapshot.val();
          const yearYY = uptoYear.substring(2);
          const decade = yearYY.substring(0,1) + "0";
          console.log("At 3.1 Decade "+ decade);

//update text below with the output from Kabier's ChatGPT research
       switch(decade) {
        case "50":
          // Test for 50;
          document.getElementById("statsT").innerHTML = "Stats of the 50s";
          document.getElementById("sL1").innerHTML = " Active Satellites: 3";
          document.getElementById("sL2").innerHTML = " Space Debris: 0";
 //         document.getElementById("sL3").innerHTML = "50 sl3";
 //         document.getElementById("sL4").innerHTML = "50 sl4";

          document.getElementById("factsT").innerHTML = "Fun Facts of the 50s";
          document.getElementById("fL1").innerHTML = " The Space Age officially began with the launch of the Soviet satellite Sputnik 1 on October 4, 1957.";
/*          document.getElementById("fL2").innerHTML = " 50 fl2";
          document.getElementById("fL3").innerHTML = " 50 fl3";
          document.getElementById("fL4").innerHTML = " 50 fl4";

          document.getElementById("impactsT").innerHTML = "Impacts of the 50s";
          document.getElementById("iL1").innerHTML = " 50 il1";
          document.getElementById("iL2").innerHTML = " 50 il2";
          document.getElementById("iL3").innerHTML = " 50 il3";
          document.getElementById("iL4").innerHTML = " 50 il4";
 */
          break;
        case "60":
          // Test for 60;
          document.getElementById("statsT").innerHTML = "Stats of the 60s";
          document.getElementById("sL1").innerHTML = " Active Satellites: 32";
          document.getElementById("sL2").innerHTML = " Space Debris: 5+ fragments";
 //         document.getElementById("sL3").innerHTML = " 60 sl3";
 //         document.getElementById("sL4").innerHTML = " 60 sl4";

         document.getElementById("factsT").innerHTML = "Fun Facts of the 60s";
         document.getElementById("fL1").innerHTML = " The Apollo 11 mission successfully landed the first humans on the Moon on July 20, 1969, with astronauts Neil Armstrong and Buzz Aldrin.";
 /*         document.getElementById("fL2").innerHTML = " 60 fl2";
          document.getElementById("fL3").innerHTML = " 60 fl3";
          document.getElementById("fL4").innerHTML = " 60 fl4";

          document.getElementById("impactsT").innerHTML = "Impacts of the 60s";
          document.getElementById("iL1").innerHTML = " 60 il1";
          document.getElementById("iL2").innerHTML = " 60 il2";
          document.getElementById("iL3").innerHTML = " 60 il3";
          document.getElementById("iL4").innerHTML = " 60 il4";
*/
          break;
        case "70":
          // Test for 70;
          document.getElementById("statsT").innerHTML = "Stats of the 70s";
          document.getElementById("sL1").innerHTML = " Active Satellites: 138";
          document.getElementById("sL2").innerHTML = " Space Debris: 35+ fragments";
 //         document.getElementById("sL3").innerHTML = " 70 sl3";
 //         document.getElementById("sL4").innerHTML = " 70 sl4";

          document.getElementById("factsT").innerHTML = "Fun Facts of the 70s";
          document.getElementById("fL1").innerHTML = " The first space station, Skylab, was launched by NASA in 1973 and hosted crews of astronauts for scientific research.";
 /*         document.getElementById("fL2").innerHTML = " 70 fl2";
          document.getElementById("fL3").innerHTML = " 70 fl3";
          document.getElementById("fL4").innerHTML = " 70 fl4";

          document.getElementById("impactsT").innerHTML = "Impacts of the 70s";
          document.getElementById("iL1").innerHTML = " 70 il1";
          document.getElementById("iL2").innerHTML = " 70 il2";
          document.getElementById("iL3").innerHTML = " 70 il3";
          document.getElementById("iL4").innerHTML = " 70 il4";
 */
          break;
        case "80":
          // Test for 80;
          document.getElementById("statsT").innerHTML = "Stats of the 80s";
          document.getElementById("sL1").innerHTML = " Active Satellites: 562";
          document.getElementById("sL2").innerHTML = " Space Debris: 100+ fragments";
 //         document.getElementById("sL3").innerHTML = " 80 sl3";
 //         document.getElementById("sL4").innerHTML = " 80 sl4";

          document.getElementById("factsT").innerHTML = "Fun Facts of the 80s";
          document.getElementById("fL1").innerHTML = " The Space Shuttle program by NASA began in 1981, providing reusable spacecraft for various missions.";
 /*         document.getElementById("fL2").innerHTML = " 80 fl2";
          document.getElementById("fL3").innerHTML = " 80 fl3";
          document.getElementById("fL4").innerHTML = " 80 fl4";

          document.getElementById("impactsT").innerHTML = "Impacts of the 80s";
          document.getElementById("iL1").innerHTML = " 80 il1";
          document.getElementById("iL2").innerHTML = " 80 il2";
          document.getElementById("iL3").innerHTML = " 80 il3";
          document.getElementById("iL4").innerHTML = " 80 il4";
 */
          break;
        case "90":
          // Test for 90;
          document.getElementById("statsT").innerHTML = "Stats of the 90s";
          document.getElementById("sL1").innerHTML = " Active Satellites: 1,214";
          document.getElementById("sL2").innerHTML = " Space Debris: Approximately 8,000 fragments";
 //         document.getElementById("sL3").innerHTML = " 90 sl3";
 //         document.getElementById("sL4").innerHTML = " 90 sl4";

          document.getElementById("factsT").innerHTML = "Fun Facts of the 90s";
          document.getElementById("fL1").innerHTML = " The Hubble Space Telescope was launched in 1990, providing stunning images and valuable data about the universe.";
 /*         document.getElementById("fL2").innerHTML = " 90 fl2";
          document.getElementById("fL3").innerHTML = " 90 fl3";
          document.getElementById("fL4").innerHTML = " 90 fl4";

          document.getElementById("impactsT").innerHTML = "Impacts of the 90s";
          document.getElementById("iL1").innerHTML = " 90 il1";
          document.getElementById("iL2").innerHTML = " 90 il2";
          document.getElementById("iL3").innerHTML = " 90 il3";
          document.getElementById("iL4").innerHTML = " 90 il4";
 */
          break;
        case "00":
          // Test for 00;
          document.getElementById("statsT").innerHTML = "Stats of the 2000s";
          document.getElementById("sL1").innerHTML = " Active Satellites: 2,666";
          document.getElementById("sL2").innerHTML = " Space Debris: Approximately 13,000 fragments";
 //         document.getElementById("sL3").innerHTML = " 00 sl3";
 //         document.getElementById("sL4").innerHTML = " 00 sl4";

         document.getElementById("factsT").innerHTML = "Fun Facts of the 2000s";
         document.getElementById("fL1").innerHTML = " The International Space Station (ISS) became fully operational for continuous human habitation in 2000.";
  /*         document.getElementById("fL2").innerHTML = " 00 fl2";
          document.getElementById("fL3").innerHTML = " 00 fl3";
          document.getElementById("fL4").innerHTML = " 00 fl4";

          document.getElementById("impactsT").innerHTML = "Impacts of the 2000s";
          document.getElementById("iL1").innerHTML = " 00 il1";
          document.getElementById("iL2").innerHTML = " 00 il2";
          document.getElementById("iL3").innerHTML = " 00 il3";
          document.getElementById("iL4").innerHTML = " 00 il4";
*/
          break;
        case "10":
          // Test for 10;
          document.getElementById("statsT").innerHTML = "Stats of the 2010s";
          document.getElementById("sL1").innerHTML = " Active Satellites: 2,800+";
          document.getElementById("sL2").innerHTML = " Space Debris: Approximately 20,000 fragments";
//          document.getElementById("sL3").innerHTML = " 10 sl3";
//          document.getElementById("sL4").innerHTML = " 10 sl4";

          document.getElementById("factsT").innerHTML = "Fun Facts of the 2010s";
          document.getElementById("fL1").innerHTML = " SpaceX, founded by Elon Musk, became the first private company to send a spacecraft (Dragon) to the International Space Station in 2012.";
/*          document.getElementById("fL2").innerHTML = " 10 fl2";
          document.getElementById("fL3").innerHTML = " 10 fl3";
          document.getElementById("fL4").innerHTML = " 10 fl4";

          document.getElementById("impactsT").innerHTML = "Impacts of the 2010s";
          document.getElementById("iL1").innerHTML = " 10 il1";
          document.getElementById("iL2").innerHTML = " 10 il2";
          document.getElementById("iL3").innerHTML = " 10 il3";
          document.getElementById("iL4").innerHTML = " 10 il4";
*/
          break;
        case "20":
          // Test for 20;
          document.getElementById("statsT").innerHTML = "Stats of the 2020s";
          document.getElementById("sL1").innerHTML = " Active Satellites: 8,000+";
          document.getElementById("sL2").innerHTML = " Space Debris: Approximately 30,000 fragments (estimated)";
//          document.getElementById("sL3").innerHTML = " 20 sl3";
//          document.getElementById("sL4").innerHTML = " 20 sl4";

          document.getElementById("factsT").innerHTML = "Fun Facts of the 2020s";
          document.getElementById("fL1").innerHTML = " NASA's Perseverance rover successfully landed on Mars in February 2021, continuing the exploration of the Red Planet.";
/*          document.getElementById("fL2").innerHTML = " 20 fl2";
          document.getElementById("fL3").innerHTML = " 20 fl3";
          document.getElementById("fL4").innerHTML = " 20 fl4";

          document.getElementById("impactsT").innerHTML = "Impacts of the 2020s";
          document.getElementById("iL1").innerHTML = " 20 il1";
          document.getElementById("iL2").innerHTML = " 20 il2";
          document.getElementById("iL3").innerHTML = " 20 il3";
          document.getElementById("iL4").innerHTML = " 20 il4";
*/
          break;
        case "30":
          // Test for 30 and beyond;
          document.getElementById("statsT").innerHTML = "Stats of the 2030's";
          document.getElementById("sL1").innerHTML = " Active Satellites: 13,000+";
          document.getElementById("sL2").innerHTML = " Space Debris: Approximately 80,000 fragments (estimated)";
//          document.getElementById("sL3").innerHTML = " 30+ sl3";
//          document.getElementById("sL4").innerHTML = " 30+ sl4";

          document.getElementById("factsT").innerHTML = "Fun Facts of the 2030's";
          document.getElementById("fL1").innerHTML = " The Artemis missions launch around 10 rockets to take humans back to the moon";
/*          document.getElementById("fL2").innerHTML = " 30+ fl2";
          document.getElementById("fL3").innerHTML = " 30+ fl3";
          document.getElementById("fL4").innerHTML = " 30+ fl4";

          document.getElementById("impactsT").innerHTML = "Impacts of the 2030's";
          document.getElementById("iL1").innerHTML = " 30+ il1";
          document.getElementById("iL2").innerHTML = " 30+ il2";
          document.getElementById("iL3").innerHTML = " 30+ il3";
          document.getElementById("iL4").innerHTML = " 30+ il4";
*/
          break;
        case "40":
          // Test for 30 and beyond;
          document.getElementById("statsT").innerHTML = "Stats of the 2040's";
          document.getElementById("sL1").innerHTML = " Active Satellites: 21,000+";
          document.getElementById("sL2").innerHTML = " Space Debris: Approximately 120,000 fragments (estimated)";
//          document.getElementById("sL3").innerHTML = " 30+ sl3";
//          document.getElementById("sL4").innerHTML = " 30+ sl4";

          document.getElementById("factsT").innerHTML = "Fun Facts of the 2040's";
          document.getElementById("fL1").innerHTML = " Asteroid mining becomes a reality, with space companies successfully extracting valuable resources from asteroids to support Earth's growing demand for rare minerals.";
/*          document.getElementById("fL2").innerHTML = " 30+ fl2";
          document.getElementById("fL3").innerHTML = " 30+ fl3";
          document.getElementById("fL4").innerHTML = " 30+ fl4";

          document.getElementById("impactsT").innerHTML = "Impacts of the 2040's";
          document.getElementById("iL1").innerHTML = " 30+ il1";
          document.getElementById("iL2").innerHTML = " 30+ il2";
          document.getElementById("iL3").innerHTML = " 30+ il3";
          document.getElementById("iL4").innerHTML = " 30+ il4";
*/
          break;
        case "50":
          // Test for 30 and beyond;
          document.getElementById("statsT").innerHTML = "Stats of the 2050's";
          document.getElementById("sL1").innerHTML = " Active Satellites: 28,000+";
          document.getElementById("sL2").innerHTML = " Space Debris: Approximately 200,000 fragments (estimated)";
//          document.getElementById("sL3").innerHTML = " 30+ sl3";
//          document.getElementById("sL4").innerHTML = " 30+ sl4";

          document.getElementById("factsT").innerHTML = "Fun Facts of the 2050's";
          document.getElementById("fL1").innerHTML = " The construction of large-scale space habitats, such as O'Neill cylinders or Stanford tori, begins in Earth's orbit, creating new living spaces and opening up opportunities for long-term space habitation.";
 /*         document.getElementById("fL2").innerHTML = " 30+ fl2";
          document.getElementById("fL3").innerHTML = " 30+ fl3";
          document.getElementById("fL4").innerHTML = " 30+ fl4";

          document.getElementById("impactsT").innerHTML = "Impacts of the 2050's";
          document.getElementById("iL1").innerHTML = " 30+ il1";
          document.getElementById("iL2").innerHTML = " 30+ il2";
          document.getElementById("iL3").innerHTML = " 30+ il3";
          document.getElementById("iL4").innerHTML = " 30+ il4";
*/
          break;
        default:
          // Test for 30 and beyond;
          document.getElementById("statsT").innerHTML = "Stats of the Future";
          document.getElementById("sL1").innerHTML = " Active Satellites: 28,000+";
          document.getElementById("sL2").innerHTML = " Space Debris: Approximately 200,000 fragments (estimated)";
//          document.getElementById("sL3").innerHTML = " 30+ sl3";
//          document.getElementById("sL4").innerHTML = " 30+ sl4";

          document.getElementById("factsT").innerHTML = "Fun Facts of the Future";
          document.getElementById("fL1").innerHTML = " The construction of large-scale space habitats, such as O'Neill cylinders or Stanford tori, begins in Earth's orbit, creating new living spaces and opening up opportunities for long-term space habitation.";
 /*         document.getElementById("fL2").innerHTML = " 30+ fl2";
          document.getElementById("fL3").innerHTML = " 30+ fl3";
          document.getElementById("fL4").innerHTML = " 30+ fl4";

          document.getElementById("impactsT").innerHTML = "Impacts of the Future";
          document.getElementById("iL1").innerHTML = " 30+ il1";
          document.getElementById("iL2").innerHTML = " 30+ il2";
          document.getElementById("iL3").innerHTML = " 30+ il3";
          document.getElementById("iL4").innerHTML = " 30+ il4";
*/
        };
        });

