<template>
<div class="page">
  <h1 class="page__title">Create story</h1>
  <div class="page__wrapper">
    <label> Name your story
      <input type="text" placeholder="Title of story" />
    </label>
    <label> Choose backdrop for story
      <input type="file" placeholder="Title of story" />
    </label>
    <button class="page__button" type="submit">
      Save story
    </button>
    <button class="page__button" type="reset">
      Cancel
    </button>
  </div>
</div>
</template>

<script>
export default {
  name: 'CreateStoryPage'

}
</script>

<style>

</style>
