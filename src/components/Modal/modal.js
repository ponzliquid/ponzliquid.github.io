const store = require('../store/').default
const {OPEN_MODAL} = require('../store/action-types')
const {CLOSE_MODAL} = require('../store/action-types')

export default {
  alert (message, onOk) {
    store.dispatch(OPEN_MODAL, {
      component: 'modalAlert',
      params: {
        msg: message,
        onOk: onOk
      }
    })
    this.debug(message)
  },
  confirm (message, onOk, onNg) {
  },
  openComponent (component) {
  },
  close () {
    store.dispatch(CLOSE_MODAL)
  },
  closeAll () {
  },
  debug (st) {
    console.log(st)
  }
}
