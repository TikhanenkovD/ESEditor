<template>
<div class="page">
  <h1 class="page__title">Endless story editor</h1>
  <router-link class="page__button" :to="{name: 'create-story-page'}">Create new story</router-link>
  <div class="page__caption">List of stories</div>
  <div v-if="stories">
    <router-link v-for="(story, index) in stories" :key="index" :to="/edit/ + index" class="page__link">
      <StoryCard :story="story" :index="index"></StoryCard>
    </router-link>
  </div>
</div>
</template>

<script>
import StoryCard from './StoryCard.vue'

export default {
  name: 'MainPage',
  data() {
    return {
      stories: [{
          title: 'First Story',
          img: ''
        },
        {
          title: 'Second Story',
          img: ''
        }
      ],
      isLogged: true
    }
  },
  mounted() {
    !this.isLogged ? this.$router.push('auth') : '';
  },
  components: {
    StoryCard
  }

}
</script>

<style lang="scss">
.page {
  padding: 0 7.5%;
  font-family: Mulish;
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 60px;

  &__wrapper {
    display: flex;
    flex-direction: column;
  }

  &__title {
    font-family: Playfair Display;
    font-style: normal;
    font-weight: bold;
    font-size: 64px;
    line-height: 80px;
    color: #202336;
  }

  &__caption {
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 27px;
    color: #202336;
    margin-bottom: 24px;
  }

  &__button {
    background: #FB8F1D;
    border-radius: 8px;
    padding: 1rem 4rem;
    text-decoration: none;
    color: #FFFFFF;
    margin-bottom: 24px;
    cursor: pointer;
  }

  &__link {
    width: 30%;
    text-decoration: none;
  }
}
</style>
