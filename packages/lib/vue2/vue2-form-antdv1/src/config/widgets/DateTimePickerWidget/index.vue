<template>
    <a-range-picker showTime v-if="isRange" placeholder="Select month" @change="onRangeChagne" />
    <a-date-picker  showTime v-else placeholder="Select Time" @ok="onChange" @change="onChange" />
  </template>
  
  <script>
  /**
   *  这里datePickWidget其实还需要负责range的部分
   */
  export default {
    name: 'DateTimePickerWidget',
    props: {
      isRange: {
        type: Boolean,
        default: false
      },
    },
    mounted() {
      console.log('DateTimePickerWidget mounted', this.$attrs)
    },
    methods: {
      // 这个val是个moment对象，我们根据$attr.isNumberValue来判断下要转成什么样子，number转成时间戳，string转成format形式？
      // 同时，这个时间戳是ms还是s，可以由$attr.timeUnit来决定，允许值为's'和'ms'，默认'ms' 
      onChange(val) {
        const res = this.$attrs.isNumberValue ? this.$attrs.timeUnit === 's' ? val.unix() : val.valueOf() : val.format(this.$attrs.format);
        console.log('date picker change', res);
        this.$emit('input', res)
      },
  
      onRangeChagne(valArr) {
        console.log('range change', valArr)
        const resArr = valArr.map(val => this.$attrs.isNumberValue ? this.$attrs.timeUnit === 's' ? val.unix() : val.valueOf() : val.format(this.$attrs.format));
        this.$emit('input', resArr)
      }
    }
  };
  </script>
  