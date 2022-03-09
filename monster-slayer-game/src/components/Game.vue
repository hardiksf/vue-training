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
          <div class="healthbar-value" :style="{width: playerHealth + '%'}"></div>
        </div>
    </section>
    <section class="control">
        <button @click="attack">ATTACK</button>
        <button :disabled="specialAttachRestriction" @click="specialAttack">SPECIAL ATTACK</button>
        <button>HEAL</button>
        <button>SURRENDER</button>
    </section>
    <section class="log">
      <div>Current Round: {{ currentRound }}</div>
      <div># of Attack: {{ attackCounter }}</div>
      <div># of Special Attack {{ specialAttackCounter }}</div>
      specialAttachRestriction {{specialAttachRestriction}}
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
      return { width: `${this.monsterHealth}%` };
      // return '{ width: 90% }';
    },
  },
  methods: {
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
</style>
