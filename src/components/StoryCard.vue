<template>
<div class="story-card">
  <div class="story-card__title">{{story.title}}</div>
  <img :src="story.img" class="story-card__img" />
</div>
</template>

<script>
export default {
  name: 'StoryCard',
  props: {
    story: Object
  }
}
</script>

<style lang="scss">
.story-card {
  border: 0.8px solid #AFB0B9;
  box-sizing: border-box;
  border-radius: 6px;
  width: 50%;
  display: flex;
  align-items: center;
  height: 80px;
  padding: 0 24px;
  margin-bottom: 24px;
  cursor: pointer;
  transition: .7s ease;

  &:hover {
    background-color: #797a7e;
  }

  &__img {
    width: 30%;
  }

  &__title {
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 32px;
    color: #4A4C53;
    text-decoration: none;
  }
}
</style>
