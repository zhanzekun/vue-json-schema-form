<template>
    <a-switch @change="onChange" :checked="value">
    </a-switch>
</template>

<script>
export default {
    name: 'SwitchWidget',
    props: {
        value: {
            type: Boolean,
            default: false
        },
    },
    methods: {
        onChange(value) {
            this.$emit('input', value);
        }
    },
};
</script>
