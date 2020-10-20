<template>
  <div class="notes">
    <h1>{{ appTitle }}</h1>
    <form>
      <div class="form-group">
        <label for="noteTitle">Note title</label>
        <input
          type="text"
          class="form-control"
          id="noteTitle"
          placeholder="Enter note title"
          v-model="note.title"
        />
        <div class="form-group">
          <label for="noteDetail">Note Detail</label>
          <textarea
            type="text"
            class="form-control"
            id="noteDetail"
            placeholder="Enter Note Detail"
            v-model="note.detail"
          />
        </div>
        <button
          type="text"
          class="btn btn-primary"
          v-on:click.prevent="addNotes"
        >
          Add Note
        </button>
        <div class="all-notes">
          <div class="card m-3" v-for="(note, index) in notes" v-bind:key="index">
            <button class="close" @click.prevent="removeNote(index)">&times;</button>
            <div class="card-body">
              <h2 class="card-title">{{ note.title }}</h2>
              <div class="card-subtitle">{{ note.date }}</div>
              <div class="card-text">{{ note.detail }}</div>
            </div>
          </div>

          <div class="row"></div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      note: {
        title: '',
        detail: '',
      },
      notes: [
        {
          title: 'Grocery',
          detail: 'Get produce, meat and drinks',
          date: new Date(Date.now()).toLocaleString(),
        },
      ],
    };
  },
  methods: {
    addNotes() {
      const { title, detail } = this.note;
      this.notes.push({
        title,
        detail,
        date: new Date(Date.now()).toLocaleString(),
      });
    },
    removeNote(index) {
      this.notes.splice(index, 1);
    },
  },
  props: {
    appTitle: String,
  },
};
</script>

<style lang="sass" scoped>
.notes
  margin: 10vw
  margin-top: 5vw
.close
  font-size: 5vw
</style>
