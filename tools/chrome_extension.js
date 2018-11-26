
// 抓出資料
storage_sync = await new Promise(resolve => chrome.storage.sync.get(resolve));
storage_local = await new Promise(resolve => chrome.storage.local.get(resolve));

// 抓出所有資料
storage = await Promise.all(["sync", "local", "managed"].map(p => new Promise(r => chrome.storage[p].get(r))));


// 取得資料的函式
const getData = (key, area = "local") =>
    new Promise(resolve => chrome.storage[area].get(key,
        (typeof key == "string") ? (s => resolve(s[key])) : resolve
    ))
;

const setData = (items, area = "local") =>
    new Promise(resolve => chrome.storage[area].set(items, resolve))
;
