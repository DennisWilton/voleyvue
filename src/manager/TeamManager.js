import { computed, reactive } from 'vue';
import MM from './MainManager';
import CRM from './CurrentRoundManager';
import _ from 'lodash';

function createTeamManager() {
  const self = {};

  self.allPlayers = MM.players;
  self.nextTeam = reactive([]);

  self.playersTeamed = () => {
    return _.intersectionBy(
      self.allPlayers,
      _.union(self.nextTeam, CRM.teamA, CRM.teamB),
      'id'
    );
  };

  self.playersUnteamed = computed(() => {
    return _.differenceBy(self.allPlayers, self.playersTeamed(), 'id');
  });

  self.sortNextTeam = function () {
    let nextTeam = [];
    console.log(self.playersTeamed());
    const groups = _.groupBy(
      _.union(self.playersUnteamed.value, self.nextTeam),
      (p) => p.distance
    );
    const order = Object.keys(groups).reverse();
    for (let group of order) {
      nextTeam.push(..._.sampleSize(groups[group], 6));
    }
    self.nextTeam.splice(0);
    self.nextTeam.push(...nextTeam.slice(0, 6));
  };

  self.clearNextTeam = function () {
    self.nextTeam.splice(0);
  };

  window.managers = window.managers || {};
  window.managers.TM = self;
  return self;
}

export default createTeamManager();
