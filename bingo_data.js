/* F1 2026 BINGO CONFIGURATION
   Edit this file to update predictions and races.
*/

const BINGO_CONFIG = {
    // 2026 RACE CALENDAR
    races: [
        {id:'aus', c:'au', n:'Australia', d:'Mar 8'},
        {id:'chn', c:'cn', n:'China', d:'Mar 15'},
        {id:'jpn', c:'jp', n:'Japan', d:'Mar 29'},
        {id:'bhr', c:'bh', n:'Bahrain', d:'Apr 12'},
        {id:'sau', c:'sa', n:'Saudi Arabia', d:'Apr 19'},
        {id:'mia', c:'us', n:'Miami', d:'May 3'},
        {id:'can', c:'ca', n:'Canada', d:'May 24'},
        {id:'mon', c:'mc', n:'Monaco', d:'Jun 7'},
        {id:'bar', c:'es', n:'Spain', d:'Jun 14'},
        {id:'aut', c:'at', n:'Austria', d:'Jun 28'},
        {id:'gbr', c:'gb', n:'Britain', d:'Jul 5'},
        {id:'bel', c:'be', n:'Belgium', d:'Jul 19'},
        {id:'hun', c:'hu', n:'Hungary', d:'Jul 26'},
        {id:'ned', c:'nl', n:'Dutch', d:'Aug 23'},
        {id:'ita', c:'it', n:'Monza', d:'Sep 6'},
        {id:'mad', c:'es', n:'Madrid', d:'Sep 13'},
        {id:'aze', c:'az', n:'Baku', d:'Sep 27'},
        {id:'sin', c:'sg', n:'Singapore', d:'Oct 11'},
        {id:'usa', c:'us', n:'Austin', d:'Oct 25'},
        {id:'mex', c:'mx', n:'Mexico', d:'Nov 1'},
        {id:'bra', c:'br', n:'Brazil', d:'Nov 8'},
        {id:'lvg', c:'us', n:'Vegas', d:'Nov 21'},
        {id:'qat', c:'qa', n:'Qatar', d:'Nov 29'},
        {id:'abu', c:'ae', n:'Abu Dhabi', d:'Dec 6'}
    ],

    // PREDICTION POOL
    pool: {
        driver: [
            "Hamilton (Ferrari) Win", "Antonelli (Merc) Podium", "Max (RB) Pole Position",
            "Hadjar (RB) Rookie Error", "Norris (McLaren) Win", "Piastri (McLaren) Fastest Lap",
            "Bottas (Cadillac) Points", "Perez (Cadillac) Q1 Exit", "Bortoleto (Audi) Crash",
            "Hulkenberg (Audi) Top 10", "Alonso (Aston) Top 5", "Sainz (Williams) Podium",
            "Bearman (Haas) Points", "Doohan (Alpine) Spin", "Lawson (RB) beats Max (Quali)",
            "Leclerc (Ferrari) Pole", "Colapinto (Alpine) Overtake", "Lindblad (RB) Debut Points",
            "Zhou (Cadillac) FP1 Run", "Gasly (Alpine) Q3 App", "Russell (Merc) Win"
        ],
        team: [
            "Cadillac Double DNF", "Audi Engine Overheat", "Ford Battery Fail (RB)",
            "Aston Martin Aero Fail", "Mercedes 1-2 Finish", "McLaren Double Podium",
            "Williams Double Q3", "Haas Points Finish", "Alpine Internal Clash",
            "Ferrari Strategy Error", "Cadillac 'Undrivable' Radio", "Honda-Aston Integration Issue",
            "Audi Slow Pit Stop (>4s)", "Red Bull Engine Smoke", "Alpine Suspension Fail"
        ],
        tech: [
            "Manual Override (MOM) Pass", "X-Mode (Low Drag) Stuck", "Z-Mode (Cornering) Fail",
            "MGU-K Clipping (>290kph)", "Car Underweight (768kg)", "Fuel Flow Breach",
            "Narrow Tyre Lock-up", "Battery Depleted Defense", "Active Front Wing Dmg",
            "Compression Ratio Protest", "Mule Car Comparison", "Newey Aero Trick Spotted",
            "50/50 Power Split Issue"
        ],
        chaos: [
            "Q1 Traffic Jam (22 Cars)", "Lap 1 Safety Car", "Red Flag in Q1",
            "Turn 1 Pile-up", "5s Penalty Served", "VSC Deployment",
            "Start Aborted", "Unsafe Release", "Rain starts Mid-Race",
            "Protest Filed (€20k Fee)", "20 Car Length SC Gap",
            "Track Limits (Narrow Cars)", "Two-Stage Nose Detached",
            "Madrid Street Drain Loose"
        ]
    }
};