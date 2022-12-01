<template>

  <div>
    <School></School>
    <Student></Student>
  </div>
</template>

<script>
  // 引入组件
  import School from "./School";
  import Student from "./Student";

  const app = Vue.extend({
    name: 'app',
    components: {
      School: School,
      Student
    }
  })
  export default app

</script>

<style>

</style>