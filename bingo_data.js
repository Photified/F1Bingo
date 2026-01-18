/* F1 2026 PICK 'EM DATA
   - 25 Races (Full Calendar)
   - Image paths linked to 'images/' folder
   - FIA events included
*/

const BINGO_CONFIG = {
    // 25 RACES - FULL LIST
    races: [
        {id:'aus', c:'au', n:'Australia', d:'Mar 8'},
        {id:'chn', c:'cn', n:'China', d:'Mar 15'},
        {id:'jpn', c:'jp', n:'Japan', d:'Mar 29'},
        {id:'bhr', c:'bh', n:'Bahrain', d:'Apr 12'},
        {id:'sau', c:'sa', n:'Saudi Arabia', d:'Apr 19'},
        {id:'mia', c:'us', n:'Miami', d:'May 3'},
        {id:'imo', c:'it', n:'Imola', d:'May 17'},
        {id:'mon', c:'mc', n:'Monaco', d:'May 24'},
        {id:'can', c:'ca', n:'Canada', d:'Jun 7'},
        {id:'esp', c:'es', n:'Barcelona', d:'Jun 21'},
        {id:'aut', c:'at', n:'Austria', d:'Jun 28'},
        {id:'gbr', c:'gb', n:'Silverstone', d:'Jul 5'},
        {id:'bel', c:'be', n:'Spa', d:'Jul 19'},
        {id:'hun', c:'hu', n:'Hungary', d:'Jul 26'},
        {id:'ned', c:'nl', n:'Zandvoort', d:'Aug 23'},
        {id:'ita', c:'it', n:'Monza', d:'Sep 6'},
        {id:'mad', c:'es', n:'Madrid', d:'Sep 13'},
        {id:'aze', c:'az', n:'Baku', d:'Sep 27'},
        {id:'sin', c:'sg', n:'Singapore', d:'Oct 4'},
        {id:'usa', c:'us', n:'Austin', d:'Oct 18'},
        {id:'mex', c:'mx', n:'Mexico', d:'Oct 25'},
        {id:'bra', c:'br', n:'Brazil', d:'Nov 8'},
        {id:'lvg', c:'us', n:'Las Vegas', d:'Nov 21'},
        {id:'qat', c:'qa', n:'Qatar', d:'Nov 29'},
        {id:'abu', c:'ae', n:'Abu Dhabi', d:'Dec 6'}
    ],

    // DRIVER ROSTER & IMAGE PATHS
    drivers: [
        { name: "Race Control", team: "FIA", color: "#333333", img: "images/fia.png" }, 
        { name: "Max Verstappen", team: "Red Bull", color: "#3671C6", img: "images/max.png" },
        { name: "Isack Hadjar", team: "Red Bull", color: "#3671C6", img: "images/hadjar.png" },
        { name: "Lando Norris", team: "McLaren", color: "#FF8000", img: "images/lando.png" },
        { name: "Oscar Piastri", team: "McLaren", color: "#FF8000", img: "images/oscar.png" },
        { name: "Lewis Hamilton", team: "Ferrari", color: "#E80020", img: "images/lewis.png" },
        { name: "Charles Leclerc", team: "Ferrari", color: "#E80020", img: "images/charles.png" },
        { name: "George Russell", team: "Mercedes", color: "#27F4D2", img: "images/george.png" },
        { name: "Kimi Antonelli", team: "Mercedes", color: "#27F4D2", img: "images/kimi.png" },
        { name: "Fernando Alonso", team: "Aston Martin", color: "#229971", img: "images/alonso.png" },
        { name: "Lance Stroll", team: "Aston Martin", color: "#229971", img: "images/lance.png" },
        { name: "Pierre Gasly", team: "Alpine", color: "#FF87BC", img: "images/gasly.png" },
        { name: "Franco Colapinto", team: "Alpine", color: "#0093CC", img: "images/franco.png" },
        { name: "Alex Albon", team: "Williams", color: "#64C4FF", img: "images/albon.png" },
        { name: "Carlos Sainz", team: "Williams", color: "#64C4FF", img: "images/sainz.png" },
        { name: "Liam Lawson", team: "VCARB", color: "#6692FF", img: "images/lawson.png" },
        { name: "Arvid Lindblad", team: "VCARB", color: "#6692FF", img: "images/lindblad.png" },
        { name: "Esteban Ocon", team: "Haas", color: "#B6BABD", img: "images/ocon.png" },
        { name: "Ollie Bearman", team: "Haas", color: "#B6BABD", img: "images/bearman.png" },
        { name: "Nico Hulkenberg", team: "Audi", color: "#F2F2F2", img: "images/hulk.png" },
        { name: "Gabriel Bortoleto", team: "Audi", color: "#F2F2F2", img: "images/gabriel.png" },
        { name: "Valtteri Bottas", team: "Cadillac", color: "#FFD700", img: "images/bottas.png" },
        { name: "Sergio Perez", team: "Cadillac", color: "#FFD700", img: "images/checo.png" }
    ],

    // TEMPLATES
    templates: {
        quali: [
            "Pole Position", "Front Row Start", "Q3 Appearance", 
            "Q2 Exit", "Q1 Exit", "Beats Teammate (Quali)"
        ],
        race: [
            "Race Win", "Podium Finish", "Top 5 Finish", "Top 10 Finish", 
            "Points Finish", "Crash / DNF", "11th-20th Finish"
        ],
        bonus: [
            "Fastest Lap", "Driver of the Day", "Beats Teammate (Race)", 
            "5s Penalty", "Leads a Lap", "Stalls at Start"
        ],
        team: [
            "Double Podium", "1-2 Finish", "Double Points", "Double DNF", 
            "Pit Stop Error (>4s)", "Strategy Error", "Engine Failure"
        ],
        fia: [
            "Safety Car Deployed", "Green Flag Race (No SC)", "Virtual Safety Car", 
            "Red Flag Suspends Race", "Rain / Wet Track", "All Cars Finish (No DNF)",
            "Blue Flags Shown", "Black & White Flag", "Turn 1 Incident", 
            "Unsafe Release Investigation", "Track Limits Penalty", 
            "Yellow Flag Sector 1", "Yellow Flag Sector 2", "Yellow Flag Sector 3",
            "Debris on Track", "DRS Disabled", "Medical Car Deployed",
            "5s Penalty Issued", "10s Penalty Issued", "Grid Drop Penalty",
            "Race Control: No Investigation", "Formation Lap Issue", 
            "Standing Start Restart", "Rolling Start Restart"
        ]
    }
};