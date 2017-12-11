export default function app (state = {}, action) {
    switch (action.type) {
        case 'APP_INIT':
            return {
                app: {
                    tag: action.tag
                }
            };
            break;
        default:
            return state;
    }
}
