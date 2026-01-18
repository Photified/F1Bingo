/* F1 2026 PICK 'EM DATA
   - 25 Races
   - Budget Logic: PAY FOR SAFETY
   - High Probability = High Cost
   - Low Probability = Low Cost
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

    // DRIVER ROSTER
    drivers: [
        { name: "Race Control", team: "FIA", color: "#333333", img: "images/fia.png", price: 0 }, 
        { name: "Max Verstappen", team: "Red Bull", color: "#3671C6", img: "images/max.png", price: 15 },
        { name: "Isack Hadjar", team: "Red Bull", color: "#3671C6", img: "images/hadjar.png", price: 5 },
        { name: "Lando Norris", team: "McLaren", color: "#FF8000", img: "images/lando.png", price: 14 },
        { name: "Oscar Piastri", team: "McLaren", color: "#FF8000", img: "images/oscar.png", price: 12 },
        { name: "Lewis Hamilton", team: "Ferrari", color: "#E80020", img: "images/lewis.png", price: 12 },
        { name: "Charles Leclerc", team: "Ferrari", color: "#E80020", img: "images/charles.png", price: 13 },
        { name: "George Russell", team: "Mercedes", color: "#27F4D2", img: "images/george.png", price: 11 },
        { name: "Kimi Antonelli", team: "Mercedes", color: "#27F4D2", img: "images/kimi.png", price: 6 },
        { name: "Fernando Alonso", team: "Aston Martin", color: "#229971", img: "images/alonso.png", price: 9 },
        { name: "Lance Stroll", team: "Aston Martin", color: "#229971", img: "images/lance.png", price: 5 },
        { name: "Pierre Gasly", team: "Alpine", color: "#FF87BC", img: "images/gasly.png", price: 6 },
        { name: "Franco Colapinto", team: "Alpine", color: "#FF87BC", img: "images/franco.png", price: 5 },
        { name: "Alex Albon", team: "Williams", color: "#64C4FF", img: "images/albon.png", price: 7 },
        { name: "Carlos Sainz", team: "Williams", color: "#64C4FF", img: "images/sainz.png", price: 8 },
        { name: "Liam Lawson", team: "VCARB", color: "#6692FF", img: "images/lawson.png", price: 5 },
        { name: "Arvid Lindblad", team: "VCARB", color: "#6692FF", img: "images/lindblad.png", price: 4 },
        { name: "Esteban Ocon", team: "Haas", color: "#B6BABD", img: "images/ocon.png", price: 5 },
        { name: "Ollie Bearman", team: "Haas", color: "#B6BABD", img: "images/bearman.png", price: 4 },
        { name: "Nico Hulkenberg", team: "Audi", color: "#F2F2F2", img: "images/hulk.png", price: 5 },
        { name: "Gabriel Bortoleto", team: "Audi", color: "#F2F2F2", img: "images/gabriel.png", price: 4 },
        { name: "Valtteri Bottas", team: "Cadillac", color: "#FFD700", img: "images/bottas.png", price: 5 },
        { name: "Sergio Perez", team: "Cadillac", color: "#FFD700", img: "images/checo.png", price: 6 }
    ],

    // EVENT COSTS (INVERTED: Safe = Expensive, Risky = Cheap)
    templates: {
        quali: [
            { t: "Pole Position", c: 4 }, // Hard
            { t: "Front Row Start", c: 6 }, 
            { t: "Q3 Appearance", c: 10 }, // Safe
            { t: "Q2 Exit", c: 5 }, 
            { t: "Q1 Exit", c: 4 }, 
            { t: "Beats Teammate (Quali)", c: 7 }
        ],
        race: [
            { t: "Race Win", c: 5 }, // Hard (Cheap)
            { t: "Podium Finish", c: 8 }, 
            { t: "Top 5 Finish", c: 10 }, 
            { t: "Top 10 Finish", c: 12 }, // Safest (Expensive)
            { t: "Points Finish", c: 12 }, 
            { t: "Crash / DNF", c: 3 }, // Risky
            { t: "11th-20th Finish", c: 6 }
        ],
        bonus: [
            { t: "Fastest Lap", c: 4 }, // Risky
            { t: "Driver of the Day", c: 5 }, 
            { t: "Beats Teammate (Race)", c: 9 }, // Safe-ish
            { t: "5s Penalty", c: 4 }, 
            { t: "Leads a Lap", c: 5 }, 
            { t: "Stalls at Start", c: 2 } // Very Rare
        ],
        team: [
            { t: "Double Podium", c: 5 }, // Hard
            { t: "1-2 Finish", c: 3 }, // Very Hard
            { t: "Double Points", c: 10 }, // Safe
            { t: "Double DNF", c: 2 }, 
            { t: "Pit Stop Error (>4s)", c: 6 }, 
            { t: "Strategy Error", c: 6 }, 
            { t: "Engine Failure", c: 4 },
            { t: "One Driver in Points", c: 8 },
            { t: "Team Orders Used", c: 4 }
        ],
        fia: [
            { t: "Safety Car Deployed", c: 10 }, // High Prob (Expensive)
            { t: "Green Flag Race (No SC)", c: 4 }, // Low Prob
            { t: "Virtual Safety Car", c: 8 }, 
            { t: "Red Flag Suspends Race", c: 3 }, // Rare
            { t: "Rain / Wet Track", c: 5 }, 
            { t: "All Cars Finish (No DNF)", c: 4 },
            { t: "Blue Flags Shown", c: 10 }, // Guaranteed
            { t: "Black & White Flag", c: 7 }, 
            { t: "Turn 1 Incident", c: 6 }, 
            { t: "Unsafe Release Investigation", c: 5 }, 
            { t: "Track Limits Penalty", c: 8 }, 
            { t: "Yellow Flag Sector 1", c: 9 }, 
            { t: "Yellow Flag Sector 2", c: 9 }, 
            { t: "Yellow Flag Sector 3", c: 9 },
            { t: "Debris on Track", c: 7 }, 
            { t: "DRS Disabled", c: 5 }, 
            { t: "Medical Car Deployed", c: 3 },
            { t: "5s Penalty Issued", c: 9 }, 
            { t: "10s Penalty Issued", c: 7 }, 
            { t: "Grid Drop Penalty", c: 5 },
            { t: "Race Control: No Investigation", c: 6 }, 
            { t: "Formation Lap Issue", c: 3 }, 
            { t: "Standing Start Restart", c: 4 }, 
            { t: "Rolling Start Restart", c: 5 }
        ]
    }
};