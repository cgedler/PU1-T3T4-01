export default class Utils {

    static getTimeStamp() {
        var now = new Date();
        return ((now.getMonth() + 1) + '/' +
                (now.getDate()) + '/' +
                now.getFullYear() + " " +
                now.getHours() + ':' +
                ((now.getMinutes() < 10)
                        ? ("0" + now.getMinutes())
                        : (now.getMinutes())) + ':' +
                ((now.getSeconds() < 10)
                        ? ("0" + now.getSeconds())
                        : (now.getSeconds())));
    }

    static getDayStamp() {
        var now = new Date();
        return ((now.getMonth() + 1) + '-' +
                (now.getDate()) + '-' +
                now.getFullYear());
    }

}