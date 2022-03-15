<template>
  <div>
    <section class="health-container">
      <h2>Monster Health</h2>
      <div class="healthbar">
          <div class="healthbar-value" :style="monsterBarStyles"></div>
        </div>
    </section>
    <section class="health-container player">
      <h2>Player Health</h2>
       <div class="healthbar">
          <div class="healthbar-value" :style="playBarStyles"></div>
        </div>
    </section>
    <section class="game-end" v-if="result">
      <h2>Game ended</h2>
      <h3 v-if="result==='player'">You won</h3>
      <h3 v-if="result==='monster'">You lost</h3>
      <h3 v-if="result==='draw'">Game tied</h3>
      <button class="play-again"  @click="playAgain">Play again</button>
    </section>
    <section v-else class="control">
        <button @click="attack">ATTACK</button>
        <button :disabled="specialAttachRestriction" @click="specialAttack">SPECIAL ATTACK</button>
        <button @click="healPlayer">HEAL</button>
        <button @click="surrender">SURRENDER</button>
    </section>
    <section class="log">
      <div>result {{ result }} </div>
      <div>Current Round: {{ currentRound }}</div>
      <div># of Attack: {{ attackCounter }}</div>
      <div># of Special Attack {{ specialAttackCounter }}</div>
      <div>specialAttachRestriction {{specialAttachRestriction}}</div>
      <div>monsterHealth {{ monsterHealth }} </div>
      <div>playerHealth {{ playerHealth }} </div>
    </section>
  </div>
</template>

<script>
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
export default {

  name: 'Game',
  data() {
    return {
      result: null,
      attackCounter: 0,
      currentRound: 0,
      monsterHealth: 100,
      playerHealth: 100,
      specialAttackCounter: 0,
    };
  },
  computed: {
    specialAttachRestriction() {
      return this.attackCounter / this.specialAttackCounter < 3;
    },
    monsterBarStyles() {
      if (this.monsterHealth < 0) {
        return { width: '0%' };
      }
      return { width: `${this.monsterHealth}%` };
    },
    playBarStyles() {
      if (this.playerHealth < 0) {
        return { width: '0%' };
      }
      return { width: `${this.playerHealth}%` };
    },
  },
  watch: {
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        /* eslint-disable no-unused-expressions */
        this.result = 'draw';
      }
      if (value <= 0) {
        /* eslint-disable no-unused-expressions */
        this.result = 'player';
      }
    },
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        /* eslint-disable no-unused-expressions */
        this.result = 'draw';
      }
      if (value <= 0) {
      /* eslint-disable no-unused-expressions */
        this.result = 'monster';
      }
    },
  },
  methods: {
    surrender() {
      this.result = 'monster';
    },
    playAgain() {
      this.result = null;
      this.attackCounter = 0;
      this.currentRound = 0;
      this.monsterHealth = 100;
      this.playerHealth = 100;
      this.specialAttackCounter = 0;
    },
    healPlayer() {
      this.currentRound += 1;
      const healValue = getRandomNumber(10, 15);
      if (this.playerHealth < 100) {
        this.playerHealth += healValue;
        if (this.playerHealth > 100) {
          this.playerHealth = 100;
        }
      }
      this.counterAttackByMonster();
    },
    specialAttack() {
      this.specialAttackCounter += 1;
      this.currentRound += 1;
      const attackValue = getRandomNumber(7, 12);
      this.monsterHealth -= attackValue;
      this.counterAttackByMonster();
    },
    attack() {
      this.attackCounter += 1;
      this.currentRound += 1;
      const attackValue = getRandomNumber(3, 8);
      this.monsterHealth -= attackValue;
      this.counterAttackByMonster();
    },
    counterAttackByMonster() {
      const attackValue = getRandomNumber(4, 9);
      this.playerHealth -= attackValue;
    },
  },
};

</script>

<style>
  .health-container {
    border: 1px solid grey;
    width: 50vw;
    margin: 0 auto;
  }
  .healthbar {
  width: 100%;
  height: 4vw;
  /* border: 1px solid #575757; */
  margin: 1vw 0;
  background: lightgrey;
}

.healthbar-value {
  background-color: green;
  /* width: 100%; */
  height: 100%;
}
  .player {
    margin-top: 5vw;
    margin-bottom: 5vw;
  }
  .control {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .control button{
    padding: 1vw;
    margin: 1vw;
    width: 25vw;
  }
  .game-end{
    border: 1px solid black;
  }
  .play-again {
    margin-bottom: 2vw;
  }
</style>
