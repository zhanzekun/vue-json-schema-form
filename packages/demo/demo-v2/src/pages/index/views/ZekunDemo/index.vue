<template>
  <div :class="$style.container">
    <div>111</div>
    <VueForm v-model="formData" :schema="schema" @input="handleInput">
    </VueForm>
    <div style="margin: 30px;">schema :::::::</div>
    <div>{{ schema }}</div>
    <div style="margin: 30px;">formData :::::::</div>
    <div>{{ formData }}</div>
  </div>
</template>

<script>
import EditorHeader from 'demo-common/components/EditorHeader.vue';
import CodeEditor from 'demo-common/components/CodeEditorV2';
import schemaTypes from 'demo-common/schemaTypes';
import VueForm from '@zekun/vue2-form-antdv';

const VueElementForm = () => import('@lljj/vue-json-schema-form');

const VueIview3Form = async () => {
  // eslint-disable-next-line
  const [iview, ivewForm] = await Promise.all([
    import('demo-common/components/iView/index.js'),
    import('@lljj/vue2-form-iview3')
  ]);

  return ivewForm;
};

const typeItems = Object.keys(schemaTypes);
console.log('zekun####', typeItems, schemaTypes)

export default {
  name: 'Demo',
  components: {
    CodeEditor,
    EditorHeader,
    VueForm,
    VueElementForm,
    // eslint-disable-next-line vue/no-unused-components
    VueIview3Form,
  },
  data() {
    return {
      formData: {},
      uiSchema: {},
      schema: {
        "type": "object",
        "required": [],
        "properties": {
          "object_1679562716341x0": {
            "title": "Object",
            "type": "object",
            "required": [],
            "properties": {
              "string_1679562718519x0": {
                "title": "输入框",
                "type": "string",
                "ui:options": {
                  "placeholder": "请输入"
                }
              },
              // "number_1679562720886x0": {
              //   "title": "数字（slider）",
              //   "type": "number",
              //   // "ui:widget": "ElSlider",
              //   // "multipleOf": 1
              // },
              "number_1679562723303x0": {
                "title": "数字输入框",
                "type": "number",
                "multipleOf": 1
              },
              // "color_string_1679562724571x0": {
              //   "title": "颜色选择器",
              //   "type": "string",
              //   "format": "color"
              // }
            },
            "ui:order": [
              "string_1679562718519x0",
              "number_1679562720886x0",
              "number_1679562723303x0",
              "color_string_1679562724571x0"
            ]
          }
        },
        "ui:order": [
          "object_1679562716341x0"
        ]
      },
      typeItems,
    };
  },
  created() {
    // this.initData();
  },
  methods: {
    handleInput(val) {
      console.log('v-model input', val)
    }
  }
};
</script>

<style module>
.btns {
  display: flex;
  align-items: center;
  justify-content: center;
}

.box {
  padding: 0 15px;
}

.typeList {
  padding: 15px 0 20px;
}

.linkItem {
  margin-right: 8px;
  margin-top: 8px;
  margin-left: auto !important;
}

.middleBox {
  :global {
    .el-card {
      border-top: none;
      overflow: visible;
    }

    .el-card__header {
      border-top: 1px solid #EBEEF5;
      padding: 10px 20px;
      font-size: 14px;
      font-weight: bold;
      background: #FFFFFF;
      z-index: 3;
    }
  }
}

.middleBox_form {
  position: sticky;
  top: 0;
}

.formBox {
  max-height: calc(100vh - 40px);
  overflow: auto !important;

  :global .el-card__header {
    position: sticky;
    top: 0;
  }
}
</style>
