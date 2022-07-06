
export default function (overlay = { visible: false, date: null }, action) {
    if (action.type == 'show') {
        var newOverlay = { visible: true, date: action.date };
        return newOverlay;

    } else if (action.type == 'hide') {
        var newOverlay = { visible: false, date: null };
        return newOverlay;
    } else {
        return overlay;
    }
}