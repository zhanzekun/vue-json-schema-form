/**
 * Created by Liu.Jun on 2019/11/29 11:25.
 */

import createVue2Core, { fieldProps, SchemaField } from '@lljj/vue2-form-core';

import i18n from '@lljj/vjsf-utils/i18n';
import * as vueUtils from '@lljj/vjsf-utils/vueUtils';
import * as formUtils from '@lljj/vjsf-utils/formUtils';
import * as schemaValidate from '@lljj/vjsf-utils/schema/validate';
import getDefaultFormState from '@lljj/vjsf-utils/schema/getDefaultFormState';

import WIDGET_MAP from './config/widgets/WIDGET_MAP.js';

import './style.css';

const globalOptions = Object.freeze({
  WIDGET_MAP: Object.freeze(WIDGET_MAP),
  COMPONENT_MAP: Object.freeze({
    form: 'a-form',
    formItem: 'a-form-item',
    button: 'a-button',
    popover: 'a-popover'
  }),
  HELPERS: {
    // 是否mini显示 description
    isMiniDes(formProps) {
      return formProps && ['left', 'right'].includes(formProps.labelPosition);
    }
  }
});

const JsonSchemaFormAntdv = createVue2Core(globalOptions);


// 存在Vue 全局变量默认注册 VueForm 组件
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('JsonSchemaFormAntdv', JsonSchemaFormAntdv);
}

export default JsonSchemaFormAntdv;

export {
  globalOptions,
  SchemaField,
  getDefaultFormState,
  fieldProps,
  // vueUtils,
  formUtils,
  schemaValidate,
  i18n
};
