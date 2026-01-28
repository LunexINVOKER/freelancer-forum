/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

function createFreelancer(){
const rand = {
name: NAMES[Math.floor(Math.random() * NAMES.length)],
occupation: OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)],
rate: Math.floor(Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min + 1)) + PRICE_RANGE.min
};
return rand;
}

const state = {
freelancers: []
};

for (let i = 0; i < NUM_FREELANCERS; i++){
  state.freelancers.push(createFreelancer());
}

function getAvgRate(){
  const accum = state.freelancers.reduce((acc, freelancer) => acc + freelancer.rate, 0);
  const avg = accum / state.freelancers.length;
  return avg;
}

state.averageRate = getAvgRate();

function freelacnerRow(freelancer){
  const tr = document.createElement(`tr`);
  tr.innerHTML = `<tr><td>${freelancer.name}</td><td>${freelancer.occupation}</td><td>$${freelancer.rate}</td></tr>`;
  return tr;
}

function freelancerArray(){
  const tbody = document.createElement(`tbody`);
  tbody.innerHTML = state.freelancers
  .map(freelancer => `<tr><td>${freelancer.name}</td><td>${freelancer.occupation}</td><td>$${freelancer.rate}</td></tr>`)
  .join(``);
  return tbody;
}

function freelancerAvgRate(){
  const p = document.createElement(`p`);
  p.innerHTML = `The Average rate is $${state.averageRate}`;
  return p;
}

function render(){
  const app = document.querySelector(`#app`)
  app.innerHTML = ` 
  <h1>Freelancer Forum</h1>
  <div id="average"></div>
  <table>
  <thead>
  <tr>
  <th>NAME</th>
  <th>OCCUPATION</th>
  <th>RATE</th>
  </tr>
  </thead>
  <tbody id = "FreelancerArray"></tbody>
  </table>
  `;
  app.querySelector(`#average`).replaceWith(freelancerAvgRate())
  app.querySelector(`#FreelancerArray`).replaceWith(freelancerArray());
}

render();
