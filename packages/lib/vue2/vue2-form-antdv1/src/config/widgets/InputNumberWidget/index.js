export default {
  name: 'InputNumberWidget',
  render(h) {
    console.log('inputNUmberWidget', this);
    const self = this;
    return h('a-input-number', {
      attrs: {
        ...self.$attrs,
      },
      on: {
        ...self.$listeners,
        change: (val) => {
          self.$emit('input', val);
        }
      }
    });
  }
}