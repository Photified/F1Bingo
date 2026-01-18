/* F1 2026 PICK 'EM DATA
   - 25 Races
   - Budget Logic: BALANCED
   - Max Victory Package (~$73M) allows for ~$6.75M avg for remaining picks
*/

const BINGO_CONFIG = {
    // 25 RACES
    races: [
        {id:'aus', c:'au', n:'Australia', d:'Mar 8', lockTime:'2026-03-07T05:00:00'}, 
        {id:'chn', c:'cn', n:'China', d:'Mar 15', lockTime:'2026-03-14T07:00:00'},
        {id:'jpn', c:'jp', n:'Japan', d:'Mar 29', lockTime:'2026-03-28T06:00:00'},
        {id:'bhr', c:'bh', n:'Bahrain', d:'Apr 12', lockTime:'2026-04-11T15:00:00'},
        {id:'sau', c:'sa', n:'Saudi Arabia', d:'Apr 19', lockTime:'2026-04-18T17:00:00'},
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

    // DRIVER ROSTER - Prices Dialed Back
    drivers: [
        { name: "Race Control", team: "FIA", color: "#333333", img: "images/fia.png", price: 0 }, 
        { name: "Max Verstappen", team: "Red Bull", color: "#3671C6", img: "images/max.png", price: 18 },
        { name: "Isack Hadjar", team: "Red Bull", color: "#3671C6", img: "images/hadjar.png", price: 4 },
        { name: "Lando Norris", team: "McLaren", color: "#FF8000", img: "images/lando.png", price: 16 },
        { name: "Oscar Piastri", team: "McLaren", color: "#FF8000", img: "images/oscar.png", price: 14 },
        { name: "Lewis Hamilton", team: "Ferrari", color: "#E80020", img: "images/lewis.png", price: 15 },
        { name: "Charles Leclerc", team: "Ferrari", color: "#E80020", img: "images/charles.png", price: 15 },
        { name: "George Russell", team: "Mercedes", color: "#27F4D2", img: "images/george.png", price: 13 },
        { name: "Kimi Antonelli", team: "Mercedes", color: "#27F4D2", img: "images/kimi.png", price: 6 },
        { name: "Fernando Alonso", team: "Aston Martin", color: "#229971", img: "images/alonso.png", price: 10 },
        { name: "Lance Stroll", team: "Aston Martin", color: "#229971", img: "images/lance.png", price: 5 },
        { name: "Pierre Gasly", team: "Alpine", color: "#FF87BC", img: "images/gasly.png", price: 6 },
        { name: "Franco Colapinto", team: "Alpine", color: "#FF87BC", img: "images/franco.png", price: 5 },
        { name: "Alex Albon", team: "Williams", color: "#64C4FF", img: "images/albon.png", price: 7 },
        { name: "Carlos Sainz", team: "Williams", color: "#64C4FF", img: "images/sainz.png", price: 8 },
        { name: "Liam Lawson", team: "VCARB", color: "#6692FF", img: "images/lawson.png", price: 5 },
        { name: "Arvid Lindblad", team: "VCARB", color: "#6692FF", img: "images/lindblad.png", price: 3 },
        { name: "Esteban Ocon", team: "Haas", color: "#B6BABD", img: "images/ocon.png", price: 5 },
        { name: "Ollie Bearman", team: "Haas", color: "#B6BABD", img: "images/bearman.png", price: 4 },
        { name: "Nico Hulkenberg", team: "Audi", color: "#F2F2F2", img: "images/hulk.png", price: 4 },
        { name: "Gabriel Bortoleto", team: "Audi", color: "#F2F2F2", img: "images/gabriel.png", price: 3 },
        { name: "Valtteri Bottas", team: "Cadillac", color: "#FFD700", img: "images/bottas.png", price: 4 },
        { name: "Sergio Perez", team: "Cadillac", color: "#FFD700", img: "images/checo.png", price: 5 }
    ],

    // EVENT COSTS (Winning/Pole made slightly cheaper to incentivize risk)
    templates: {
        quali: [
            { t: "Pole Position", c: 3 }, // Cost 3 + Driver Price
            { t: "Front Row Start", c: 5 }, 
            { t: "Q3 Appearance", c: 9 }, // Safe = Expensive
            { t: "Q2 Exit", c: 4 }, 
            { t: "Q1 Exit", c: 3 }, 
            { t: "Beats Teammate (Quali)", c: 6 }
        ],
        race: [
            { t: "Race Win", c: 3 }, // Cost 3 + Driver Price
            { t: "Podium Finish", c: 6 }, 
            { t: "Top 5 Finish", c: 8 }, 
            { t: "Top 10 Finish", c: 10 }, // Safe = Expensive
            { t: "Points Finish", c: 10 }, 
            { t: "Crash / DNF", c: 2 }, // Very Cheap
            { t: "11th-20th Finish", c: 5 }
        ],
        bonus: [
            { t: "Fastest Lap", c: 2 }, // Cheap (Hard to predict)
            { t: "Driver of the Day", c: 3 }, 
            { t: "Beats Teammate (Race)", c: 7 }, 
            { t: "5s Penalty", c: 3 }, 
            { t: "Leads a Lap", c: 4 }, 
            { t: "Stalls at Start", c: 1 } 
        ],
        team: [
            { t: "Double Podium", c: 4 }, 
            { t: "1-2 Finish", c: 2 }, // Cheap (Very Hard)
            { t: "Double Points", c: 8 }, // Safe
            { t: "Double DNF", c: 1 }, 
            { t: "Pit Stop Error (>4s)", c: 5 }, 
            { t: "Strategy Error", c: 5 }, 
            { t: "Engine Failure", c: 3 },
            { t: "One Driver in Points", c: 7 },
            { t: "Team Orders Used", c: 3 }
        ],
        fia: [
            { t: "Safety Car Deployed", c: 8 }, // Expensive (Likely)
            { t: "Green Flag Race (No SC)", c: 3 }, 
            { t: "Virtual Safety Car", c: 6 }, 
            { t: "Red Flag Suspends Race", c: 2 }, 
            { t: "Rain / Wet Track", c: 4 }, 
            { t: "All Cars Finish (No DNF)", c: 3 },
            { t: "Blue Flags Shown", c: 8 }, 
            { t: "Black & White Flag", c: 6 }, 
            { t: "Turn 1 Incident", c: 5 }, 
            { t: "Unsafe Release Investigation", c: 4 }, 
            { t: "Track Limits Penalty", c: 7 }, 
            { t: "Yellow Flag Sector 1", c: 7 }, 
            { t: "Yellow Flag Sector 2", c: 7 }, 
            { t: "Yellow Flag Sector 3", c: 7 },
            { t: "Debris on Track", c: 6 }, 
            { t: "DRS Disabled", c: 4 }, 
            { t: "Medical Car Deployed", c: 2 },
            { t: "5s Penalty Issued", c: 7 }, 
            { t: "10s Penalty Issued", c: 5 }, 
            { t: "Grid Drop Penalty", c: 4 },
            { t: "Race Control: No Investigation", c: 5 }, 
            { t: "Formation Lap Issue", c: 2 }, 
            { t: "Standing Start Restart", c: 3 }, 
            { t: "Rolling Start Restart", c: 4 }
        ]
    }
};