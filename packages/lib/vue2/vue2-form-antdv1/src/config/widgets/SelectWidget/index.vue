<template>
    <a-select v-bind="$attrs" v-on="$listeners" @change="onChange" :mode="mode">
        <a-select-option v-for="(item, index) in enumOptions" :key="index" :value="item.value">
            {{ item.label }}
        </a-select-option>
    </a-select>
</template>

<script>
export default {
    name: 'SelectWidget',
    props: {
        enumOptions: {
            default: () => [],
            type: [Array]
        }
    },
    computed: {
        mode() {
            return this.$attrs.multiple ? 'tags' : null
        }
    },
    methods: {
        onChange(val) {
            console.log('select widget onchange val', val)
            this.$emit('input', val)
        }
    },
    mounted() {
        console.log('select widget mounted', this.$props, this.$attrs)
    },
};
</script>


<!-- <template>
    <div>
        <a-select default-value="lucy" style="width: 120px" @change="handleChange">
            <a-select-option value="jack">
                Jack
            </a-select-option>
            <a-select-option value="lucy">
                Lucy
            </a-select-option>
            <a-select-option value="disabled" disabled>
                Disabled
            </a-select-option>
            <a-select-option value="Yiminghe">
                yiminghe
            </a-select-option>
        </a-select>
        <a-select default-value="lucy" style="width: 120px" disabled>
            <a-select-option value="lucy">
                Lucy
            </a-select-option>
        </a-select>
        <a-select default-value="lucy" style="width: 120px" loading>
            <a-select-option value="lucy">
                Lucy
            </a-select-option>
        </a-select>
    </div>s
</template>
  <script>
  export default {
    methods: {
      handleChange(value) {
        console.log(`selected ${value}`);
      },
    },
  };
  </script> -->
  