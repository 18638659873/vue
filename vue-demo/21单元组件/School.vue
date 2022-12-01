<!--VUE单元组件中只包含3类标签，分别是template script style，不能使用其他标签-->

<template>
  <div class="schoolCss">
    <h2>学校名称：{{schoolName}}</h2>
    <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>
  const school = Vue.extend({
    name: 'School',
    data() {
      return {
        schoolName: '学校',
        address: '北京'
      }
    }
  })
  export default school
</script>

<style>
  .schoolCss {
    background-color: orange;
  }
</style>