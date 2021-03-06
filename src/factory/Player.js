import _ from 'lodash';
import v4 from 'uuid/v4';
import { reactive, ref } from 'vue';

export default function createPlayer() {
  const self = {};

  self.id = v4();
  self.name = 'Sem nome';
  self.distance = ref(1);
  self.skill = ref(5);
  self.wins = ref(0);

  self.incDistance = function () {
    self.distance.value++;
  };
  self.decDistance = function () {
    self.distance.value--;
  };

  return self;
}
