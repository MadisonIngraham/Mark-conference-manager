import Session from "./Models/Session.js";
import Speaker from "./Models/Speaker.js";
const STORAGEKEY = "CONFERENCE.STATE";

let _state = {
  /** @type {Session[]} */
  sessions: [
    new Session({
      name: "JavaScript",
      speakers: []
    }),
    new Session({
      name: "CSS",
      speakers: []
    }),
    new Session({
      name: "HTML",
      speakers: []
    }),
    new Session({
      name: "OOP",
      speakers: []
    })
  ]
};

function _loadState() {
  try {
    let data = JSON.parse(localStorage.getItem(STORAGEKEY));
    _state.sessions = data.sessions.map(s => new Session(s));
  } catch (e) {}
}
_loadState();

class Store {
  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }

  //run this after every state change
  saveState() {
    localStorage.setItem(STORAGEKEY, JSON.stringify(_state));
  }
}

const store = new Store();
export default store;
