import DATA from "./Data";
const STATES_DATA = DATA.STATES_DATA;
import console from 'console';

import { logInput, logOutput } from './lib/botanalytics.js';

export default function findCapital(input) {

  logInput('findCapital', input);

  let { state, $vivContext } = input;

  console.log($vivContext);
  
  let stateLower = state.toLowerCase();
  let stateData = STATES_DATA.find((obj) => obj.state === stateLower);

  let capital, stateGraphic;
  if (stateData) {
    capital = stateData.capital;
    stateGraphic = stateData.imgURL;
  }

  return logOutput('findCapital', input, {
    capital: capital,
    stateGraphic: stateGraphic,
  });
}
