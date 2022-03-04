import { reactive } from 'vue';
import createPlayer from '../factory/Player';

function createMain() {
  const self = {};

  self.players = reactive([]);

  self.addPlayer = (player) => {
    self.players.push(player);
  };

  self.removeAllPlayers = function () {
    self.players.splice(0);
  };

  self.removePlayer = (player) => {
    self.players.splice(
      self.players.findIndex((p) => p.id === player.id),
      1
    );
  };

  self.setPlayers = (arrPlayers) => {
    self.removeAllPlayers();
    arrPlayers.forEach((player) => {
      self.addPlayer(player);
    });
  };

  window.managers = window.managers || {};
  window.managers.MM = self;

  return self;
}

export default createMain();
