<template>
  <div class="notes">
    <h1>{{ title }}</h1>
    <form>
      <div class="form-group">
        <label for="noteTitle">Note title</label>
        <input
          type="text"
          class="form-control"
          id="noteTitle"
          placeholder="Enter note title"
          v-model="note.tilte"
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
        <button type="submit" class="btn btn-primary">Submit</button>
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
    };
  },
  props: {
    title: String,
  },
};
</script>

<style lang="sass" scoped>
.notes
    margin: 0 10vw
</style>
