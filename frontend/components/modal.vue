<style lang="scss">
  $time: .3s;
  .v-modal-wrap {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
    background-color: transparent;

    &.modal-leave-active {
      transition: opacity $time;
    }

    &.modal-enter-active,
    &.modal-leave-active {
      .v-modal-mask {
        opacity: 0;
      }

      .v-modal {
        transform: translate(-50%, -70%);
        opacity: 0;
      }
    }

    .v-modal-mask {
      background-color: hsla(0,0%,100%,.7);
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      transition: opacity $time;
      opacity: 1;
    }

    .v-modal {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
      border-radius: 6px;
      background-color: #fff;
      border: 1px solid rgba(0,0,0,.1);
      box-shadow: 0 5px 25px rgba(0,0,0,.1);
      transition: opacity $time, transform $time;
      opacity: 1;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      height: auto;
      max-height: 80%;
      max-width: 50%;

      >header, >main, >footer {
        &:before, &:after {
          content: '';
          clear: both;
          display: table;
        }
      }

      >header {
        padding: 20px;

        h4 {
          margin: 0;
          color: #333;
        }

        .close {
          position: absolute;
          right: 0;
          top: 0;
        }
      }

      >main {
        padding: 20px;
        font-size: 15px;
        color: #333;
        flex-grow: 1;
        overflow-x: hidden;
        overflow-y: auto;
      }

      >footer {
        padding: 20px;
        background-color: #fff;

        button {
          float: right;
        }
      }
    }
  }
</style>

<template>
  <transition name="modal">
    <section class="v-modal-wrap" v-if="toggle">
      <div class="v-modal-mask" @click="handleClose"></div>
      <div class="v-modal" @click>
        <header v-if="header">
          <slot name="header">
            <h4 v-text="headerText"></h4>
            <a v-if="close" class="close" @click="handleClose">&times;</a>
          </slot>
        </header>
        <main>
          <slot></slot>
        </main>
        <footer v-if="footer">
          <slot name="footer">
            <button class="submit" @click="handleSubmit" v-text="submitText"></button>
            <button class="cancel" @click="handleCancel" v-text="cancelText"></button>
          </slot>
        </footer>
      </div>
    </section>
  </transition>
</template>

<script>
  export default {
    name: 'v-modal',
    props: {
      value: {
        type: Boolean,
        default: false
      },
      close: {
        type: Boolean,
        default: true
      },
      header: {
        type: Boolean,
        default: true
      },
      footer: {
        type: Boolean,
        default: true
      },
      submitText: {
        type: String,
        default: '确认'
      },
      cancelText: {
        type: String,
        default: '取消'
      },
      headerText: {
        type: String,
        default: '标题'
      }
    },
    watch: {
      toggle(val) {
        this.$emit('input', val);
      },
      value(val) {
        this.toggle = val;
      }
    },
    data() {
      return {
        toggle: this.value
      };
    },
    methods: {
      handleClose() {
        this.toggle = false;
      },
      handleSubmit() {
        this.$emit('submit');
      },
      handleCancel() {
        this.$emit('cancel');
        this.handleClose();
      }
    }
  };
</script>
