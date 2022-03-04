<template>
  <router-view></router-view>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, sans-serif;

  &::-webkit-scrollbar {
    display: none;
  }
}

body {
  touch-action: manipulation;
}

html {
  overscroll-behavior-y: contain;
}

#app {
  min-height: 100vh;
  background: #222;
}
</style>
