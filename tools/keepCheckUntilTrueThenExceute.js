/**
 * Repeatedly call `conditionFuncSync` if it keeps returning false; otherwise execute `executeFunc`.
 * @async
 * @param {function} conditionFuncSync
 * @param {function} executeFunc
 * @param {number} [delay]
 * @param {number} [limit]
 * @param {function} [counterCallback]
 * @returns
 */
async function keepCheckUntilTrueThenExceute(
    conditionFuncSync,
    executeFunc,
    delay = 10,
    limit = Infinity,
    counterCallback = () => {}
) {
    if(typeof delay != "number" || delay < 10) delay = 10;
    if(typeof limit != "number" || limit <= 0) limit = Infinity;
    return new Promise((resolve, reject) => {
        let counter = 0;
        function main() {
            counterCallback(counter);
            if(conditionFuncSync()) return resolve(executeFunc());
            if(++counter > limit) return reject(counter);
            setTimeout(main, delay);
            // `conditionFuncSync` may take time longer than `delay`, therefore `setInterval` is not recommended.
        }
        setTimeout(main);
    });
}
