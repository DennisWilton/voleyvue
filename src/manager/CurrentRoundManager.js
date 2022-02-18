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

  return self;
}

export default createCurrentRoundManager();
