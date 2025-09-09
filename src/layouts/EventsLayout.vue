<template>
  <div class="header">
    Header
  </div>
  <div class="map">
    Map
  </div>
  <div class="content">
    <router-view />
  </div>
</template>
<style lang="scss">
.header {
  height: 50px;
  width: 100%;
  background-color: grey;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5em;
  z-index: 10;
}

.map {
  position: absolute;
  top: 50px;
  height: calc(100% - 50px);
  width: 100%;
  background-color: lightblue;
  z-index: -5;
}

.content {
  position: absolute;
  bottom: 56px;
  left: 0;
  right: 0;
  overflow: auto;
  border-radius: 16px 16px 0 0;
  background-color: rgb(255, 255, 255);

}
</style>
