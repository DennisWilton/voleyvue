import { reactive } from 'vue';

function createMain() {
  const self = {};

  self.players = reactive([
    { id: 328173, name: 'Jogador padrão', skill: 1, distance: 1 },
  ]);

  self.addPlayer = (player) => {
    self.players.push(player);
  };

  self.removePlayer = (player) => {
    self.players.splice(
      self.players.findIndex((p) => p.id === player.id),
      1
    );
  };

  window.main = self;

  return self;
}

export default createMain();
