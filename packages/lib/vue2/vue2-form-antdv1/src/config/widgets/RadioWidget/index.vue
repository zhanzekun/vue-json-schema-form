<template>
    <a-radio-group v-bind="$attrs" v-on="$listeners" @change="onChange">
        <a-radio v-for="(item, index) in enumOptions" :key="index" :value="item.value" :label="item.value">
            {{ item.label }}
        </a-radio>
    </a-radio-group>
</template>

<script>
export default {
    name: 'RadioWidget',
    props: {
        enumOptions: {
            default: () => [],
            type: [Array]
        }
    },
    methods: {
        onChange(event) {
            // console.log('radio change', val)
            this.$emit('input', event.target.value)
        }
    },
};
</script>
