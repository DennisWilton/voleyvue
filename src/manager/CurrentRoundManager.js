import { reactive, ref } from 'vue';

function createCurrentRoundManager() {
  const self = {};

  self.teamA = reactive([]);
  self.teamB = reactive([]);
  self.teamAPoints = ref(0);
  self.teamBPoints = ref(0);

  self.resetPoints = function () {
    self.teamAPoints.value = 0;
    self.teamBPoints.value = 0;
  };

  self.pointTeam = function (team, pointsToIncrease = 1) {
    switch (team) {
      case 'A':
        self.teamAPoints.value += pointsToIncrease;
        return;
      case 'B':
        self.teamBPoints.value += pointsToIncrease;
        return;
      default:
        return;
    }
  };

  self.setTeam = function (team, players) {
    self.clearTeam(team);
    switch (team) {
      case 'A':
        self.teamA.push(...players);
        return;

      case 'B':
        self.teamB.push(...players);
        return;

      default:
        return;
    }
  };

  self.clearTeam = function (team) {
    switch (team) {
      case 'A':
        self.teamA.splice(0);
        self.resetPoints();
        return;

      case 'B':
        self.teamB.splice(0);
        self.resetPoints();
        return;

      default:
        return;
    }
  };

  window.managers = window.managers || {};
  window.managers.CRM = self;
  return self;
}

export default createCurrentRoundManager();
