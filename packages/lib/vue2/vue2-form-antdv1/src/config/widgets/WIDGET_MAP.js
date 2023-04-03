/**
 * Created by Liu.Jun on 2020/4/21 18:23.
 */

// widget 组件对应antdv 配置表

import widgetComponents from './index.js';

const {
    InputWidget,
    InputNumberWidget,
    SwitchWidget,
    SelectWidget,
    DatePickerWidget,
    DateTimePickerWidget,
    TimePickerWidget,
    RadioWidget,
    CheckboxesWidget
} = widgetComponents;

const temp = {
    render() {
        return null;
    }
}

export default {
    types: {
        boolean: SwitchWidget,
        string: InputWidget,
        number: InputNumberWidget, // 这里有个问题就是，Widget还需要知道当前是哪种number，是整数还是小数
        integer: 'a-input-number',
    },
    formats: {
        color: temp, // antdv1.x没有colorPicker这个组件
        time: TimePickerWidget,
        date: DatePickerWidget,
        'date-time': DateTimePickerWidget,
    },
    common: {
        select: SelectWidget,
        radioGroup: RadioWidget,
        checkboxGroup: CheckboxesWidget,
    },
    widgetComponents
};
