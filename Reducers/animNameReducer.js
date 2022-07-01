
export default function (animName = "", action) {
    if (action.type == 'setName') {
        var newAnimName = action.animName.toUpperCase();

        return newAnimName;
    } else {

        return animName;
    }
}