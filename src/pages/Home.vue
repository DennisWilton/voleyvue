<template>
  <div id="wrapper">
    <div class="current-round">
      <div class="upper-scoreboard">
        <a class="reset-points reset" @click="crm.resetPoints()"
          >Resetar pontos</a
        >
        <a class="reset-points" @click="crm.resetPoints()">Limpar time A</a>
        <a class="reset-points" @click="crm.resetPoints()">Limpar time B</a>
      </div>
      <div class="current-round__scoreboard">
        {{ crm.teamAPoints }} &times; {{ crm.teamBPoints }}
      </div>
      <div class="current-round__teams">
        <div class="current-round__team current-round__team--A">
          <div class="current-round__team__player">Denis A.</div>
          <div class="current-round__team__player">Alanis A.</div>
          <div class="current-round__team__player">Comaru M.</div>
          <div class="current-round__team__player">Marcos V.</div>
          <div class="current-round__team__player">Kenny R.</div>
        </div>
        <div class="divider"></div>
        <div class="current-round__team current-round__team--B">
          <div class="current-round__team__player">Ajala J.</div>
          <div class="current-round__team__player">Lucas I.</div>
          <div class="current-round__team__player">Vanessa S.</div>
          <div class="current-round__team__player">Amauri B.</div>
          <div class="current-round__team__player">Enzio N.</div>
          <div class="current-round__team__player">Alysson B.</div>
        </div>
      </div>
      <div class="current-round__round-control">
        <div class="current-round__round-control__point-control">
          <button @click="crm.pointTeam('A', 1)">Ponto Time A</button>
          <button @click="crm.pointTeam('B', 1)">Ponto Time B</button>
          <a @click="crm.pointTeam('A', -1)" class="text">Diminuir ponto A</a>
          <a @click="crm.pointTeam('B', -1)" class="text">Diminuir ponto A</a>
        </div>
      </div>
    </div>

    <div class="team-control">
      <div class="first-row">
        <span>Controle de partida</span>
        <button class="prepare-next-team">Preparar próximo time</button>
      </div>
      <div class="team-control__next-team">
        <div class="team-control__next-team__player">Leandro A.</div>
        <div class="team-control__next-team__player">Neymar J.</div>
      </div>
      <div class="team-control__define">
        <button disabled>Definir como time A</button>
        <button disabled>Definir como time B</button>
      </div>
      <div class="team-control__player-list">
        <button @click="$router.push('/jogadores')" class="add-player">
          Adicionar jogador
        </button>
        <div class="team-control__player-list__player">[ 2 ] Pedro B.</div>
        <div class="team-control__player-list__player">[ 2 ] Jessa C.</div>
        <div class="team-control__player-list__player">[ 2 ] Mizael R.</div>
      </div>
    </div>
  </div>
</template>

<script>
import MainManager from '@/manager/MainManager';
import Teams from '@/components/Teams.vue';
import CurrentRoundManager from '@/manager/CurrentRoundManager';
import { onMounted } from '@vue/runtime-core';

export default {
  name: 'App',
  components: { Teams },
  setup() {
    onMounted(() => {
      window.crm = CurrentRoundManager;
    });

    return { crm: CurrentRoundManager };
  },
};
</script>

<style scoped lang="scss">
#wrapper {
  display: grid;
  background: none;
  height: 100%;
  padding: 0px;
  display: grid;
  grid-template-rows: min-content auto;
  justify-items: center;
  align-items: space-evenly;
  color: #fff;
  grid-gap: 10px;

  &,
  & * {
    user-select: none;
  }
}

.current-round {
  background: #2a2a2a;
  padding: 20px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;

  .upper-scoreboard {
    display: flex;
    gap: 10px;
  }

  .divider {
    height: 100%;
    background: #ffffff03;
    width: 1px;
  }

  &__teams {
    padding: 10px;
    background: #222;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    grid-gap: 10px;
  }

  &__team {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(3, 1fr);
    text-align: center;
    grid-gap: 5px;
    &__player {
      padding: 10px;
      color: #fff;
      background: #ffffff06;
      font-size: 0.7em;
    }
  }

  &__scoreboard {
    color: #fff;
    background: #fff1;
    display: grid;
    place-items: center;
    width: 100%;
    font-size: 2em;
    font-weight: bold;
    padding: 20px;
  }

  .reset-points {
    width: 100%;
    text-align: center;
    display: block;
    padding: 7.5px;
    font-size: 0.7em;
    color: #fff;
    background: #fff1;
    &.reset {
      background: rgb(245, 82, 82);
    }
  }

  &__round-control {
    display: grid;
    grid-gap: 5px;

    &__point-control {
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-items: center;
      grid-gap: 5px;

      button {
        width: 100%;
        padding: 12px;
        border: none;
        background: rgb(230, 44, 44);
        color: #fff;
      }
      a {
        font-size: 0.6em;
        padding: 7.5px;
        color: #fff;
        width: 100%;
        background: #fff1;
        text-align: center;
      }
    }
  }
}

.team-control {
  background: #111;
  width: 100%;
  height: 100%;
  padding: 20px;
  display: grid;
  grid-gap: 10px;
  align-content: start;
  grid-auto-rows: min-content;

  .first-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .prepare-next-team {
    background: rgb(230, 44, 44);
    color: #fff;
    padding: 10px 20px;
    border: none;
  }

  &__next-team {
    background: #222;
    padding: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(3, 1fr);
    text-align: center;
    grid-gap: 5px;
    &__player {
      padding: 10px;
      color: #fff;
      background: #ffffff06;
      font-size: 0.7em;
    }
  }

  &__define {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5px;
    button {
      width: 100%;
      padding: 10px 5px;
      color: #fff;
      background: rgb(245, 82, 82);
      border: none;

      &:disabled {
        color: white;
        background: #ffffff06;
      }
    }
  }

  &__player-list {
    padding: 10px;
    background: #000f;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    gap: 10px;

    button.add-player {
      font-size: 0.7em;
      padding: 10px 5px;
      border: none;
      background: #222;
      color: #fff;
    }

    &__player {
      padding: 10px;
      color: #fff;
      background: #ffffff11;
      display: grid;
      place-items: center;
      font-size: 0.7em;
    }
  }
}
</style>
