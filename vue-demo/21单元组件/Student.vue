<!--VUE单元组件中只包含3类标签，分别是template script style，不能使用其他标签-->

<template>
  <div class="studentCss">
    <h2>学生姓名：{{studentName}}</h2>
    <h2>学生年龄：{{age}}</h2>
  </div>
</template>

<script>
  const student = Vue.extend({
    name: 'Student',
    data() {
      return {
        studentName: '张三',
        age: 19
      }
    }
  })
  export default student
</script>

<style>
  .studentCss {
    background-color: blue;
  }
</style>