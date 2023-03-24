/**
 * Created by Liu.Jun on 2020/4/21 18:23.
 */

// widget 组件对应antdv 配置表

import widgetComponents from './index.js';

const {
    InputWidget
} = widgetComponents;

const temp = {
    render() {
        return null;
    }
}

export default {
    types: {
        boolean: 'a-switch',
        string: InputWidget,
        number: 'a-input-number',
        integer: 'a-input-number',
    },
    formats: {
        color: temp, // antdv1.x没有colorPicker这个组件
        time: temp, // 20:20:39+00:00
        date: temp, // 2018-11-13
        'date-time': temp, // 2018-11-13T20:20:39+00:00
    },
    common: {
        select: temp,
        radioGroup: temp,
        checkboxGroup: temp,
    },
    // widgetComponents
};
