<template>
<div>
  <label> Email
    <input type="email">
  </label>
  <label>
    <input type="password">
  </label>

</div>
</template>

<script>
import firebase from './components/firebase'

export default {
  name: 'AuthPage',
  methods: {
    signUp() {
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((user) => {
          console.log(user)
          // Signed in 
          // ...
        })
        .catch((error) => {
          console.log(error)
          // ..
        });
    }
  }

}
</script>

<style>

</style>
