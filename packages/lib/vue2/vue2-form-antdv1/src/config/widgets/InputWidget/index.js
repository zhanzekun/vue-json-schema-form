export default {
    name: 'InputWidget',
    functional: true,
    render(h, context) {
        const oldInputCall = context.data.on.input;
        context.data.on = {
            ...context.data.on,
            input(event) {
                oldInputCall.apply(context.data.on, [event.target.value]);
            }
        };
        return h('a-input', context.data, context.children);
    }
}