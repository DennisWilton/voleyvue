<template>
  <Modal ref="loadPlayers">
    <div class="load-players">
      <button @click="$refs.loadPlayers.toggle()">FECHAR</button>
      <button
        :key="{ key }"
        v-for="key in Object.keys(SM.loadAllPlayersSaves())"
        @click="
          MM.removeAllPlayers();
          SM.loadPlayers(key).forEach((player) => MM.addPlayer(player));
          localStorageKey = key;
        "
      >
        Carregar {{ key }}
      </button>
    </div>
  </Modal>

  <Modal ref="savePlayers">
    <div class="save-players-modal">
      <input v-model="localStorageKey" type="text" />
      <button @click="saveToLocalStorage">Salvar</button>
      <button class="cancel" @click="$refs.savePlayers.toggle()">Cancel</button>
    </div>
  </Modal>

  <div id="wrapper">
    <div class="top-buttons">
      <div @click="$router.back()" class="back-btn red">Voltar</div>
      <div style="display: flex; gap: 10px">
        <div @click="$refs.savePlayers.toggle()" class="back-btn">Salvar</div>
        <div
          @click="$refs.loadPlayers.toggle()"
          style="display: flex"
          class="back-btn"
        >
          Carregar ultimo salvo
        </div>
      </div>
    </div>
    <div class="add-form">
      <span class="title">
        Adicionar um novo jogador em <b>{{ localStorageKey }}</b></span
      >
      <input ref="inputName" placeholder="Nome do jogador" />
      <button @click="createNewPlayer">Adicionar</button>
    </div>
    <div class="player-list">
      <div
        class="player-list__player"
        :key="player.id"
        v-for="player in MM.players.sort((a, b) =>
          a.name.localeCompare(b.name)
        )"
      >
        <span>{{ player.name }}#{{ player.distance }}</span>
        <button @click="player.distance++">ID</button>
        <button @click="player.distance--">DD</button>
        <button @click="MM.removePlayer(player)" class="exclude">
          Excluir
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import MM from '@/manager/MainManager';
import SM from '@/manager/StorageManager';
import createPlayer from '../factory/Player';
import { onMounted, ref, watch } from 'vue';
import Modal from '@/components/Modal';

const LOCAL_STORAGE_PLAYERS_SAVES_KEY = 'player-saves';

export default {
  components: { Modal },
  setup() {
    const inputName = ref(null);
    const loadPlayers = ref(null);
    const savePlayers = ref(null);
    const localStorageKey = ref('Padrão');

    function createNewPlayer() {
      const players = inputName.value.value.split(',');
      for (let playerName of players) {
        const player = createPlayer();
        player.name = playerName;
        MM.addPlayer(player);
      }
      inputName.value.value = '';
    }

    function saveToLocalStorage() {
      if (!localStorageKey.value) {
        return;
      }
      SM.savePlayers(localStorageKey.value, MM.players);
      savePlayers.value.toggle();
    }

    return {
      MM,
      SM,
      inputName,
      createNewPlayer,
      loadPlayers,
      savePlayers,
      saveToLocalStorage,
      localStorageKey,
    };
  },
};
</script>

<style scoped lang="scss">
#wrapper {
  padding: 20px;
  color: #fff;
  display: grid;
  grid-auto-flow: row;
  grid-auto-rows: min-content;
  grid-gap: 10px;

  .top-buttons {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .player-list {
    display: grid;
    grid-auto-flow: row;
    gap: 5px;
    &__player {
      padding: 10px;
      background: #fff1;
      display: grid;

      grid-template-columns: 1fr repeat(3, min-content);
      gap: 10px;
      align-items: center;

      button {
        border: none;
        padding: 7px;
        background: #111;
        color: #fff;

        &.exclude {
          background: rgb(230, 44, 44);
          color: #fff;
        }
      }
    }
  }

  .add-form {
    padding: 10px;
    background: #111;
    display: grid;
    grid-auto-flow: row;
    grid-gap: 10px;

    span.title {
      font-size: 0.8em;
    }

    input {
      background: #000;
      color: #fff;
      padding: 10px;
      border: none;
    }

    button {
      width: min-content;
      padding: 5px 15px;
      background: rgb(230, 44, 44);
      border: none;
      color: white;
    }
  }

  .back-btn {
    background: #333;
    &.red {
      background: rgb(230, 44, 44);
    }
    display: block;
    padding: 10px 20px;
    font-size: 0.7em;
  }
}
</style>

<style scoped lang="scss">
.load-players {
  background: #fff;
  padding: 20px;

  display: grid;
  grid-auto-flow: row;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.save-players-modal {
  background: #fff;
  padding: 20px;
  display: flex;
  gap: 10px;

  input,
  button {
    border: none;
    background: #eee;
    padding: 10px;
    outline: none;
    border: 2px solid #0001;
  }

  button {
    background: #195;
    color: #fff;
  }
}
</style>
