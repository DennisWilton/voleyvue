import { reactive } from 'vue';
import MainManager from './MainManager';

function createLogger() {
  const self = {};

  self.logWinners = function () {
    let text = ``;

    text = `*E os melhores jogadores de hoje foram:*\n\n`;
    MainManager.players
      .sort((a, b) => a.name.trim().localeCompare(b.name.trim()))
      .sort((a, b) => b.wins - a.wins)
      .forEach((player, index) => {
        text += `#${index + 1} - *${player.name.trim()}*: ${
          player.wins || 0
        } vitórias`;

        if (index < 3 && player.wins && player.wins > 0) {
          text += '🏆';
        }

        text += '\n';
      });

    console.log(text);
  };

  window.managers = window.managers || {};
  window.managers.LM = self;

  return self;
}

export default createLogger();
