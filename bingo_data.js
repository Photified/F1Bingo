/* F1 2026 BINGO DATA - VISUAL EDITION
   Includes Team Hex Codes for UI styling.
*/

const BINGO_CONFIG = {
    races: [
        {id:'aus', c:'au', n:'Australia', d:'Mar 8'}, {id:'chn', c:'cn', n:'China', d:'Mar 15'},
        {id:'jpn', c:'jp', n:'Japan', d:'Mar 29'}, {id:'bhr', c:'bh', n:'Bahrain', d:'Apr 12'},
        {id:'sau', c:'sa', n:'Saudi Arabia', d:'Apr 19'}, {id:'mia', c:'us', n:'Miami', d:'May 3'},
        {id:'can', c:'ca', n:'Canada', d:'May 24'}, {id:'mon', c:'mc', n:'Monaco', d:'Jun 7'},
        {id:'esp', c:'es', n:'Barcelona', d:'Jun 14'}, {id:'aut', c:'at', n:'Austria', d:'Jun 28'},
        {id:'gbr', c:'gb', n:'Silverstone', d:'Jul 5'}, {id:'bel', c:'be', n:'Spa', d:'Jul 19'},
        {id:'hun', c:'hu', n:'Hungary', d:'Jul 26'}, {id:'ned', c:'nl', n:'Zandvoort', d:'Aug 23'},
        {id:'ita', c:'it', n:'Monza', d:'Sep 6'}, {id:'mad', c:'es', n:'Madrid', d:'Sep 13'},
        {id:'aze', c:'az', n:'Baku', d:'Sep 27'}, {id:'sin', c:'sg', n:'Singapore', d:'Oct 11'},
        {id:'usa', c:'us', n:'Austin', d:'Oct 25'}, {id:'mex', c:'mx', n:'Mexico', d:'Nov 1'},
        {id:'bra', c:'br', n:'Brazil', d:'Nov 8'}, {id:'lvg', c:'us', n:'Las Vegas', d:'Nov 21'},
        {id:'qat', c:'qa', n:'Qatar', d:'Nov 29'}, {id:'abu', c:'ae', n:'Abu Dhabi', d:'Dec 6'}
    ],

    // DRIVERS WITH TEAM COLORS
    drivers: [
        { name: "Max Verstappen", team: "Red Bull", color: "#3671C6", text: "#fff" },
        { name: "Isack Hadjar", team: "Red Bull", color: "#3671C6", text: "#fff" },
        { name: "Lando Norris", team: "McLaren", color: "#FF8000", text: "#000" },
        { name: "Oscar Piastri", team: "McLaren", color: "#FF8000", text: "#000" },
        { name: "Lewis Hamilton", team: "Ferrari", color: "#E80020", text: "#fff" },
        { name: "Charles Leclerc", team: "Ferrari", color: "#E80020", text: "#fff" },
        { name: "George Russell", team: "Mercedes", color: "#27F4D2", text: "#000" },
        { name: "Kimi Antonelli", team: "Mercedes", color: "#27F4D2", text: "#000" },
        { name: "Fernando Alonso", team: "Aston Martin", color: "#229971", text: "#fff" },
        { name: "Lance Stroll", team: "Aston Martin", color: "#229971", text: "#fff" },
        { name: "Pierre Gasly", team: "Alpine", color: "#FF87BC", text: "#000" }, // BWT Pink
        { name: "Franco Colapinto", team: "Alpine", color: "#0093CC", text: "#fff" }, // Blue
        { name: "Alex Albon", team: "Williams", color: "#64C4FF", text: "#000" },
        { name: "Carlos Sainz", team: "Williams", color: "#64C4FF", text: "#000" },
        { name: "Liam Lawson", team: "VCARB", color: "#6692FF", text: "#fff" },
        { name: "Arvid Lindblad", team: "VCARB", color: "#6692FF", text: "#fff" },
        { name: "Esteban Ocon", team: "Haas", color: "#B6BABD", text: "#000" },
        { name: "Ollie Bearman", team: "Haas", color: "#B6BABD", text: "#000" },
        { name: "Nico Hulkenberg", team: "Audi", color: "#F2F2F2", text: "#000" }, // Mock Audi Silver
        { name: "Gabriel Bortoleto", team: "Audi", color: "#F2F2F2", text: "#000" },
        { name: "Valtteri Bottas", team: "Cadillac", color: "#FFD700", text: "#000" }, // Mock Gold
        { name: "Sergio Perez", team: "Cadillac", color: "#FFD700", text: "#000" }
    ],

    // PREDICTIONS
    outcomes: [
        "Race Win", "Podium Finish", "Top 5 Finish", "Top 10 Finish", 
        "Points Finish", "Pole Position", "Front Row Start", "Q3 Appearance", 
        "Q1 Exit", "DNF (Retires)", "Fastest Lap", "Driver of the Day",
        "Beats Teammate", "Gains 5+ Places", "Penalty (5s+)", "Crash / Spin"
    ],

    chaos: [
        "Safety Car (Full)", "Virtual Safety Car", "Red Flag", "Rain During Race",
        "Turn 1 Pile-up", "Slow Stop (>4s)", "Less than 16 Finishers",
        "Leader Crashes", "Animal on Track", "Safety Car Ending"
    ]
};