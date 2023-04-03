<template>
    <a-time-picker @change="onChange" />
</template>
<script>
export default {
    name: 'TimePickerWidget',
    methods: {
        onChange(val) {
            const format = 'HH:mm:ss' // TODO: 这里要怎么支持入参
            const res = val.format(format)
            this.$emit('input', res)
        },
    }
};
</script>