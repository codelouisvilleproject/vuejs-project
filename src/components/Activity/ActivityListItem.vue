<template>
  <div class="column activity">
    <div class="card">
      <header class="card-header">
        <p class="card-header-title"
           v-show="!this.isEditing">
          {{ activity.name }}
        </p>
        <input class="input"
               type="text"
               name="name"
               v-model="activity.name"
               v-show="this.isEditing"
               :selected="activity.name">
        <a href="#"
           class="card-header-icon"
           aria-label="more options"
           @click="this.toggleOptions"
           v-show="!this.isEditing">
          <span class="icon"
                v-show="!this.isOptionsOpen">
            <i aria-hidden="true" class="fas fa-angle-down"></i>
          </span>
          <span class="icon"
                v-show="this.isOptionsOpen">
            <i aria-hidden="true" class="fas fa-angle-up"></i>
          </span>
        </a>
      </header>
      <div class="card-content">
        <div class="content">
          <a href="#"
             v-show="!this.isEditing">#{{ activity.type }}</a>
            <select class="select"
                    v-model="activity.type"
                    v-show="this.isEditing">
              <option>Cardio</option>
              <option>Weight Lifting</option>
              <option>etc.</option>
            </select>
          <br>
          <time v-show="!this.isEditing">
            {{ activity.duration }} minutes
          </time>
          <input class="input"
                 type="number"
                 v-model="activity.duration"
                 v-show="this.isEditing"/>
        </div>
      </div>
      <footer class="card-footer"
              v-show="this.isOptionsOpen">
        <a class="card-footer-item"
           @click="this.toggleEditing">{{ this.isEditing ? 'save' : 'Edit' }}</a>
        <a class="card-footer-item delete-button"
           @click="deleteActivity(activity.id)">Delete</a>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  props: ['activity', 'deleteActivity'],
  methods: {
    toggleProp(prop) {
      this[prop] = !this[prop]
    },
    toggleOptions: function() {
      this.toggleProp('isOptionsOpen')
    },
    toggleEditing: function() {
      this.toggleProp('isEditing')
    }
  },
  data: function() {
    return {
      isOptionsOpen: false,
      isEditing: false
    }
  }
}
</script>

<style>
  input {
    width: 100%;
    min-height: 48px;
  }
  select {
    margin-bottom: 24px;
  }
  .delete-button {
    color: #ff4c4c;
  }
  .delete-button:hover {
    color: #e52d2d;
  }
</style>
