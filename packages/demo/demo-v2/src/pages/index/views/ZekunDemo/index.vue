<template>
  <div :class="$style.container">
    <div>111</div>
    <VueForm v-model="formData" :schema="schema" @input="handleInput">
    </VueForm>
    <!-- <div style="margin: 30px;">schema :::::::</div>
    <div>{{ schema }}</div> -->
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
              // "string_1679562718519x0": {
              //   "title": "输入框",
              //   "type": "string",
              //   "ui:options": {
              //     "placeholder": "请输入"
              //   }
              // },
              // "number_1679562720886x0": {
              //   "title": "数字（slider）",
              //   "type": "number",
              //   // "ui:widget": "ElSlider",
              //   // "multipleOf": 1
              // },
              // "number_1679562723303x0": {
              //   "title": "数字输入框",
              //   "type": "number",
              //   "minimum": 1,
              //   maximum: 100,
              //   "multipleOf": 1
              // },
              // "color_string_1679562724571x0": {
              //   "title": "颜色选择器",
              //   "type": "string",
              //   "format": "color"
              // }
              // "boolean_1679850772146x0": {
              //   "title": "是否选择(Switch)",
              //   "type": "boolean"
              // },
              // "string_1679858123239x0": {
              //   "title": "单选(Select)",
              //   "type": "string",
              //   "ui:widget": "SelectWidget",
              //   "enum": [
              //     "1",
              //     "2",
              //     "3"
              //   ],
              //   "enumNames": [
              //     "一",
              //     "二",
              //     "三"
              //   ]
              // },
              // "array_1679858158579x0": {
              //   "type": "array",
              //   "uniqueItems": true,
              //   "items": {
              //     "type": "string",
              //     "enum": [
              //       "1",
              //       "2",
              //       "3"
              //     ],
              //     "enumNames": [
              //       "一",
              //       "二",
              //       "三"
              //     ]
              //   },
              //   "title": "多选(Select)",
              //   "ui:widget": "SelectWidget"
              // },
              // "date_number_1680433185910x0": {
              //   "title": "Date(时间戳) - number",
              //   "type": "number",
              //   "format": "date",
              //   "ui:options": {
              //     "placeholder": "请选择日期"
              //   }
              // },
              // "date_number_1680432x0": {
              //   "title": "Date(时间戳) - number - s单位",
              //   "type": "number",
              //   "format": "date",
              //   "unit": "s",
              //   "ui:options": {
              //     "placeholder": "请选择日期"
              //   }
              // },
              // "date_string_1680433196343x0": {
              //   "title": "Date(字符串) - string",
              //   "type": "string",
              //   "format": "date",
              //   "ui:options": {
              //     "placeholder": "请选择日期"
              //   }
              // },
              // "date-time_number_1680433197527x0": {
              //   "title": "DateTime(时间戳)",
              //   "type": "number",
              //   "format": "date-time",
              //   "ui:options": {
              //     "placeholder": "请选择日期时间"
              //   }
              // },
              // "date-time_string_1680433198364x0": {
              //   "title": "DateTime(字符串)",
              //   "type": "string",
              //   "format": "date-time",
              //   "ui:options": {
              //     "placeholder": "请选择日期时间"
              //   }
              // },
              // "date_array_1680433199180x0": {
              //   "title": "Date范围(时间戳) - number",
              //   "type": "array",
              //   "format": "date",
              //   "items": {
              //     "type": "number"
              //   },
              //   "ui:options": {
              //     "startPlaceholder": "开始日期",
              //     "endPlaceholder": "结束日期"
              //   }
              // },
              // "date_array_1680433199861x0": {
              //   "title": "Date范围(字符串) - string",
              //   "type": "array",
              //   "format": "date",
              //   "items": {
              //     "type": "string"
              //   },
              //   "ui:options": {
              //     "startPlaceholder": "开始日期",
              //     "endPlaceholder": "结束日期"
              //   }
              // },
              // "date-time_array_1680433201327x0": {
              //   "title": "DateTime范围(时间戳)",
              //   "type": "array",
              //   "format": "date-time",
              //   "items": {
              //     "type": "number"
              //   },
              //   "ui:options": {
              //     "startPlaceholder": "开始日期",
              //     "endPlaceholder": "结束日期"
              //   }
              // },
              // "date-time_array_1680433202144x0": {
              //   "title": "DateTime范围(字符串)",
              //   "type": "array",
              //   "format": "date-time",
              //   "items": {
              //     "type": "string"
              //   },
              //   "ui:options": {
              //     "startPlaceholder": "开始日期",
              //     "endPlaceholder": "结束日期"
              //   }
              // },
              // "time_string_1680433203059x0": {
              //   "title": "Time(字符串)",
              //   "type": "string",
              //   "format": "time",
              //   "ui:options": {
              //     "placeholder": "请选择时间"
              //   }
              // }
              // "boolean_1680462344188x0": {
              //   "title": "是否选择(Radio)",
              //   "type": "boolean",
              //   "ui:widget": "RadioWidget",
              //   "enumNames": [
              //     "是",
              //     "否"
              //   ]
              // },
              // "string_1680462495173x0": {
              //   "title": "单选(Radio)",
              //   "type": "string",
              //   "ui:widget": "RadioWidget",
              //   "enum": [
              //     "1",
              //     "2",
              //     "3"
              //   ],
              //   "enumNames": [
              //     "一",
              //     "二",
              //     "三"
              //   ]
              // },
              // "boolean_1680463579645x0": {
              //   "title": "是否选择(Checkbox)",
              //   "type": "wboolean",
              //   "ui:widget": "el-checkbox",
              //   "ui:options": {
              //     "label": "是否"
              //   }
              // },
              // "array_1680463589721x0": {
              //   "type": "array",
              //   "uniqueItems": true,
              //   "items": {
              //     "type": "string",
              //     "enum": [
              //       "1",
              //       "2",
              //       "3"
              //     ],
              //     "enumNames": [
              //       "一",
              //       "二",
              //       "三"
              //     ]
              //   },
              //   "title": "多选(Checkbox)",
              //   "ui:widget": "CheckboxesWidget"
              // }
              "array_1680463911344x0": {
                "title": "Array",
                "type": "array",
                "items": {
                  "type": "object",
                  "required": [],
                  "properties": {
                    "string_1680463912396x0": {
                      "title": "输入框",
                      "type": "string",
                      "ui:options": {
                        "placeholder": "请输入"
                      }
                    },
                    "number_1680463920703x0": {
                      "title": "数字输入框",
                      "type": "number",
                      "multipleOf": 1
                    }
                  },
                  "ui:order": [
                    "string_1680463912396x0",
                    "number_1680463920703x0"
                  ]
                },
                "uniqueItems": false
              }
            },
            // "ui:order": [
            //   "string_1679562718519x0",
            //   "number_1679562720886x0",
            //   "number_1679562723303x0",
            //   "color_string_1679562724571x0"
            // ]
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
