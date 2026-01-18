/* F1 2026 PICK 'EM DATA - FORGIVING BUDGET EDITION
   - Reductions applied to high-tier drivers and expensive event templates.
*/

const BINGO_CONFIG = {
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

    drivers: [
        { name: "Max Verstappen", team: "Red Bull", tier: 1, color: "#3671C6", img: "images/max.png", price: 15 },
        { name: "Lando Norris", team: "McLaren", tier: 1, color: "#FF8000", img: "images/lando.png", price: 13 },
        { name: "Charles Leclerc", team: "Ferrari", tier: 1, color: "#E80020", img: "images/charles.png", price: 12 },
        { name: "Lewis Hamilton", team: "Ferrari", tier: 1, color: "#E80020", img: "images/lewis.png", price: 12 },
        { name: "Oscar Piastri", team: "McLaren", tier: 1, color: "#FF8000", img: "images/oscar.png", price: 11 },
        { name: "George Russell", team: "Mercedes", tier: 1, color: "#27F4D2", img: "images/george.png", price: 10 },
        { name: "Fernando Alonso", team: "Aston Martin", tier: 2, color: "#229971", img: "images/alonso.png", price: 8 },
        { name: "Carlos Sainz", team: "Williams", tier: 2, color: "#64C4FF", img: "images/sainz.png", price: 7 },
        { name: "Alex Albon", team: "Williams", tier: 2, color: "#64C4FF", img: "images/albon.png", price: 6 },
        { name: "Pierre Gasly", team: "Alpine", tier: 2, color: "#FF87BC", img: "images/gasly.png", price: 5 },
        { name: "Kimi Antonelli", team: "Mercedes", tier: 1, color: "#27F4D2", img: "images/kimi.png", price: 5 },
        { name: "Lance Stroll", team: "Aston Martin", tier: 2, color: "#229971", img: "images/lance.png", price: 4 },
        { name: "Liam Lawson", team: "VCARB", tier: 2, color: "#6692FF", img: "images/lawson.png", price: 4 },
        { name: "Esteban Ocon", team: "Haas", tier: 3, color: "#B6BABD", img: "images/ocon.png", price: 4 },
        { name: "Franco Colapinto", team: "Alpine", tier: 2, color: "#FF87BC", img: "images/franco.png", price: 4 },
        { name: "Sergio Perez", team: "Cadillac", tier: 3, color: "#FFD700", img: "images/checo.png", price: 4 },
        { name: "Isack Hadjar", team: "Red Bull", tier: 1, color: "#3671C6", img: "images/hadjar.png", price: 3 },
        { name: "Valtteri Bottas", team: "Cadillac", tier: 3, color: "#FFD700", img: "images/bottas.png", price: 3 },
        { name: "Nico Hulkenberg", team: "Audi", tier: 3, color: "#F2F2F2", img: "images/hulk.png", price: 3 },
        { name: "Ollie Bearman", team: "Haas", tier: 3, color: "#B6BABD", img: "images/bearman.png", price: 3 },
        { name: "Arvid Lindblad", team: "VCARB", tier: 2, color: "#6692FF", img: "images/lindblad.png", price: 2 },
        { name: "Gabriel Bortoleto", team: "Audi", tier: 3, color: "#F2F2F2", img: "images/gabriel.png", price: 2 }
    ],

    constructors: [
        { name: "Red Bull", type: "Team", tier: 1, color: "#3671C6", img: "images/car_rb.png", price: 8 },
        { name: "McLaren", type: "Team", tier: 1, color: "#FF8000", img: "images/car_mclaren.png", price: 7 },
        { name: "Ferrari", type: "Team", tier: 1, color: "#E80020", img: "images/car_ferrari.png", price: 7 },
        { name: "Mercedes", type: "Team", tier: 1, color: "#27F4D2", img: "images/car_merc.png", price: 6 },
        { name: "Aston Martin", type: "Team", tier: 2, color: "#229971", img: "images/car_aston.png", price: 5 },
        { name: "Williams", type: "Team", tier: 2, color: "#64C4FF", img: "images/car_williams.png", price: 4 },
        { name: "Alpine", type: "Team", tier: 2, color: "#FF87BC", img: "images/car_alpine.png", price: 4 },
        { name: "VCARB", type: "Team", tier: 2, color: "#6692FF", img: "images/car_vcarb.png", price: 3 },
        { name: "Haas", type: "Team", tier: 3, color: "#B6BABD", img: "images/car_haas.png", price: 3 },
        { name: "Audi", type: "Team", tier: 3, color: "#F2F2F2", img: "images/car_audi.png", price: 2 },
        { name: "Cadillac", type: "Team", tier: 3, color: "#FFD700", img: "images/car_cadillac.png", price: 2 }
    ],

    templates: {
        quali: [
            { t: "Pole Position", c: 3, tiers: [1] }, 
            { t: "Front Row Start", c: 4, tiers: [1] }, 
            { t: "Beats Teammate (Quali)", c: 3, tiers: [1, 2, 3] }
        ],
        race: [
            { t: "Race Win", c: 3, tiers: [1] }, 
            { t: "Podium Finish", c: 4, tiers: [1] }, 
            { t: "Points Finish", c: 5, tiers: [2] }, 
            { t: "11th-20th Finish", c: 3, tiers: [2, 3] },
            { t: "Crash / DNF", c: 2, tiers: [1, 2, 3] } 
        ],
        bonus: [
            { t: "Fastest Lap", c: 2, tiers: [1] }, 
            { t: "Driver of the Day", c: 2, tiers: [1, 2, 3] }, 
            { t: "Beats Teammate (Race)", c: 4, tiers: [1, 2, 3] }, 
            { t: "5s Penalty", c: 2, tiers: [1, 2, 3] }, 
            { t: "Leads a Lap", c: 3, tiers: [1] }
        ],
        team: [
            { t: "1-2 Finish", c: 2, tiers: [1] }, 
            { t: "Double Podium", c: 3, tiers: [1] }, 
            { t: "Double Points", c: 4, tiers: [1, 2] }, 
            { t: "One Driver in Points", c: 4, tiers: [2, 3] },
            { t: "Double DNF", c: 1, tiers: [1, 2, 3] }, 
            { t: "Pit Stop Error (>4s)", c: 3, tiers: [1, 2, 3] }, 
            { t: "Strategy Error", c: 3, tiers: [1, 2, 3] }, 
            { t: "Engine Failure", c: 2, tiers: [1, 2, 3] },
            { t: "Team Orders Used", c: 2, tiers: [1, 2] }
        ],
        fia: [
            { t: "Safety Car Deployed", c: 0, tiers: [1,2,3] }, 
            { t: "Virtual Safety Car", c: 0, tiers: [1,2,3] }, 
            { t: "Yellow Flag", c: 0, tiers: [1,2,3] }, 
            { t: "Red Flag", c: 0, tiers: [1,2,3] }, 
            { t: "Green Flag Race (No SC)", c: 0, tiers: [1,2,3] }, 
            { t: "Rain / Wet Track", c: 0, tiers: [1,2,3] }, 
            { t: "All Cars Finish (No DNF)", c: 0, tiers: [1,2,3] },
            { t: "Blue Flags Shown", c: 0, tiers: [1,2,3] }, 
            { t: "Track Limits Penalty", c: 0, tiers: [1,2,3] }, 
            { t: "Debris on Track", c: 0, tiers: [1,2,3] }, 
            { t: "DRS Disabled", c: 0, tiers: [1,2,3] }, 
            { t: "5s Penalty Issued", c: 0, tiers: [1,2,3] }, 
            { t: "Grid Drop Penalty", c: 0, tiers: [1,2,3] },
            { t: "Formation Lap Issue", c: 0, tiers: [1,2,3] }, 
            { t: "Standing Start Restart", c: 0, tiers: [1,2,3] }
        ]
    }

};