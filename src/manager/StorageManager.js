import _ from 'lodash';

const LOCAL_STORAGE_PLAYERS_SAVES_KEY = 'player-saves';
function getPlayersSave() {
  return JSON.parse(
    localStorage.getItem(LOCAL_STORAGE_PLAYERS_SAVES_KEY) || '{}'
  );
}

function createStorage() {
  const self = {};

  window.managers = window.managers || {};
  window.managers.SM = self;

  self.loadAllPlayersSaves = function () {
    const saves = getPlayersSave();

    return _.mapValues(saves, JSON.parse);
  };

  self.loadPlayers = function (key = 'Padrão') {
    const saves = getPlayersSave();

    return JSON.parse(saves[key]);
  };

  self.savePlayers = function (key = 'Padrão', players = []) {
    const saves = getPlayersSave();

    saves[key] = JSON.stringify(players);

    localStorage.setItem(
      LOCAL_STORAGE_PLAYERS_SAVES_KEY,
      JSON.stringify(saves)
    );
  };

  return self;
}

export default createStorage();
