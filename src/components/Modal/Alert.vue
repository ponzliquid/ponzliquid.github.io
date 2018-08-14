<template>
    <transition name="modal" :modal="params">
        <div class="modal-mask">
            <div class="modal-wrapper" v-on:click="closeModal()">
                <div class="modal-container" v-on:click.stop="">
                    <div class="modal-body">
                        <slot name="body">
                            <!-- {{ params.msg }} -->
                            <span v-html="params.msg"></span>
                        </slot>
                    </div>
                    <div class="modal-footer">
                        <slot name="footer">
                            <!-- <button type="button" class="btn btn04 w-auto" @click="closeModal()">閉じる</button> -->
                            <i class="fas fa-times-circle fa-2x" @click="closeModal()" />
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
import modal from '../services/modal'

export default {
  props: ['params'],
  methods: {
    closeModal () {
      modal.close()
      if (this.params.onOk) {
        this.params.onOk()
      }
    }
  }
}
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .7);
  display: table;
  transition: opacity .3s ease;
}
.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
}
.modal-container {
  display: inline-block;
  width: auto;
  margin: 0px auto;
  padding: 40px 80px;
  background-color: #272727;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}
.modal-header h3 {
  margin-top: 0;
  color: #EFF1F3;
}
.modal-body {
  margin: 20px 0;
}
.modal-footer {
  display: block;
  text-align: center;
}
.modal-default-button {
  float: right;
}
.modal-enter {
  opacity: 0;
}
.modal-leave-active {
  opacity: 0;
}
.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
