<template>
    <a-checkbox-group v-bind="$attrs" v-on="$listeners" @change="onChange">
        <a-checkbox v-for="(item, index) in enumOptions" :key="index" :value="item.value" :label="item.value">
            {{ item.label }}
        </a-checkbox>
    </a-checkbox-group>
</template>

<script>
export default {
    name: 'CheckboxesWidget',
    props: {
        enumOptions: {
            default: () => [],
            type: [Array]
        }
    },
    methods: {
        onChange(val) {
            console.log('checkbox change', val)
            this.$emit('input', val)
        }
    },
};
</script>
