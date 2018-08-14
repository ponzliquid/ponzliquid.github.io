<template>
    <transition name="modal">
        <div class="overlay" @click.self="$emit('close')">
            <div class="panel" @click.stop>
                <h3>{{ msg }}</h3>
                <i class="fas fa-times-circle fa-2x" @click="$emit('close')" />
            </div>
        </div>
    </transition>
</template>

<script>
export default {
//   name: 'HelloWorld',
  data () {
    return {
      msg: 'discord'
    }
  }
}
</script>

<style lang="scss">
h3{
  margin-bottom: 48px;
  color: #EFF1F3;
}
.overlay {
    background: rgba(0, 0, 0, .8);
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 900;
    transition: opacity .5s;
}
.panel {
    background: #272727;
    color: #EFF1F3;
    transition: opacity .5s;
    position: fixed;
    left: 50%;
    top: 50%;
    z-index: 99;
    transform: translate(-50%, -50%);
    max-width: 70vw;
    max-height: 70vh;
    box-sizing: border-box;
    padding: 32px;
    border-radius: 8px;
}
.modal-enter,
.modal-leave-active {
    opacity: 0;
}
.modal-enter .panel,
.modal-leave-active .panel{
    top: -200px;
}
</style>
