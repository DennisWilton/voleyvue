<template>
  <div style="height: 100%">
    <div id="wrapper">
      <div class="teams"></div>
    </div>
  </div>
</template>

<script>
import MainManager from '../manager/MainManager';
import _ from 'lodash';

export default {
  name: 'HelloWorld',
  data() {
    return {
      teamA: [],
      teamB: [],
    };
  },
  methods: {},
  mounted() {
    window.teams = this;
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#wrapper {
  background: #fff;
  height: 100%;

  .teams {
    width: calc(100%);
    height: 300px;
    background: #eee;
    transform: translateY(0px) translateX(0px);
    box-shadow: 0px 2px 5px #0006;
  }
}
</style>
