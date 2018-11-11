"use strict";

/**
 * Define Array#find for IE
 */
if(!Array.prototype.find) Array.prototype.find = function(callback, thisArg) {
    for(var i = 0; i < this.length; ++i)
        if(callback.call(thisArg, this[i], i, this)) return this[i];
    return undefined;
}

/**
 * 用大括號包起來， const 跟 let 的就不會影響到全域變數。(ES6+ 限定)
 */
{

/// 一些資料
let now = new Date;
presentations.forEach(function(p) {
    /// 手機上的 Date() 只看得懂以斜線作為年月日間隔符號的格式。
    p.time = p.time.replace(/-/g, "/");
});

/**
 * 一些函數和常數
 */
const $ = function(id) {return document.getElementById(id);};
const e = React.createElement;
const weekdays = "日一二三四五六".split("");
const zerofill = function(num, length) {
    if(!length) length = 2;
    num = num.toString();
    while(num.length < length) num = "0" + num;
    return num;
};
const time2text = function(date) {
    return (date.getMonth()+1) + "/" + date.getDate()
        + "(" + weekdays[date.getDay()] + ") "
        + zerofill(date.getHours()) + ":" + zerofill(date.getMinutes())
    ;
};
const getProposal = function(id) {
    return proposals.find(function(p) {return p.id == id;});
};
const getPresentation = function(proposal, session) {
    return presentations.find(function(p) {
        return p.proposal == proposal && p.session == session;
    });
};

/**
 * React components ，不過為了支援 IE 所以不使用 class XXX extends React.Component
 */
function Presentation(p) {
    const time = new Date(p.time);
    const youtube = "https://youtu.be/" + p.youtube + (p.session == 1 ? "?t=1620" : "");    ///< 民視在27~29分鐘前就開始直播了。
    const endTime = time.getTime() + ((p.negative == "無") ? 30 : 50) * 60 * 1000;   ///< 只有正方時，中間還是會休息放廣告。

    let text, btnClass;
    if(time > now) {
        text = time2text(time);
        btnClass = "btn-outline-primary";
    }
    else if(endTime > now.getTime()) {
        text = "直播進行中";
        btnClass = "btn-danger";
    }
    else {
        text = "觀看錄影";
        btnClass = "btn-primary";
    }

    return e(
        "div", {className: "col-md-2 mb-3"},
        e("div", {className: ""},
            e("span", {className: "d-md-none small"}, "第" + weekdays[p.session] + "場次："),
            e("span", {className: "text-nowrap"}, p.positive),
            " vs. ",
            e("span", {className: "text-nowrap"}, p.negative)
        ),
        e("div", {className: ""},
            e("a", {
                className: "btn btn-sm " + btnClass,
                href: youtube,
                target: "_blank",
                title: p.time
            }, text)
        )
    );
}

function ProposalLink(p) {
    return e("a", {
        href: "#proposal" + p.id,
        title: p.mainText + "\n（提案領銜：" + p.proposer + "）"
    }, "第 " + p.id + " 案");
}

function PresentationsPerProposal(p) {
    const ps = [1,2,3,4,5].map(function(sid) {
        return e(Presentation, getPresentation(p.id, sid))
    });
    return e(
        "div", {className: "row mb-3"},
        e("div", {className: "col-md-2 small mb-2"},
            e("div", null,
                e("h5", {className: "mb-0 font-weight-bold d-inline-block", id: "proposal" + p.id},
                    e(ProposalLink, p)
                ),
                e("span", {className: "text-muted pl-3", title: "提案領銜"}, "by " + p.proposer)
            ),
            e("p", {className: "my-0"},
                p.mainText,
                e("a", {className: "d-inline d-md-block pl-3 pl-md-0", href: p.reasons, target: "_blank"}, "理由及政府意見")
            )
        ),
        ps //...
    );
}

function SessionHead(p) {
    return e(
        "div", {className: "col-md-2"},
        e("span", {className: "text-nowrap"}, "第" + weekdays[p.sid] + "場次"),
        e("small", {className: "text-nowrap"}, "（" + sessionsBy[p.sid] + "）")
    );
}


/**
 * 開始繪製 DOM 吧
 */
const sessionHeads = [1,2,3,4,5].map(function(sid) {
    return e(SessionHead, {sid: sid})
});
const presentationContainers = proposals.map(function(p) {
    return e(PresentationsPerProposal, p)
});

ReactDOM.render(
    e("div", null,
        e("div", {className: "d-none d-md-block mb-3 font-weight-bold"},
            e("div", {className: "row"},
                e("div", {className: "col-md-2"}),
                sessionHeads // ...
            )
        ),
        presentationContainers // ...
    ),
    $("presentations-container")
);


/**
 * 接下來是「現正播映」和「下個節目」
 */
let ongoing, next;
for(let i = 0; i < presentations.length; ++i) {
    const p = presentations[i];
    const time = (new Date(p.time)).getTime();
    if(time > now.getTime()) {
        next = p;
        break;  ///< 因為 presentations 剛好照時間排列才能這樣做。
    }

    const endTime = time + ((p.negative == "無") ? 30 : 50) * 60 * 1000;   ///< 只有正方時，中間還是會休息放廣告。
    if(endTime > now) {
        ongoing = p;
        setTimeout(function(){window.location.reload();}, endTime - now);
    }
}

const ms2text = function(ms) {
    const s = parseInt(ms / 1000);
    const m = parseInt(s / 60);
    const h = parseInt(m / 60);
    const d = parseInt(h / 24);

    let r = "";
    if(d) r += d + "日";
    if(d||h) r += zerofill(h % 24) + "時";   ///< 如果已知要顯示「日」，那麼「0時」即不可忽略。
    if(d||h||m) r += zerofill(m % 60) + "分";
    r += zerofill(s % 60) + "秒";
    return r;
}

if(ongoing) ReactDOM.render(
    e("div", {className: ""},
        e("a", {
            href: "https://youtu.be/" + ongoing.youtube,
            target: "_blank",
            className: "badge badge-danger",
        }, "進行中\u25B6"),
        e(ProposalLink, getProposal(ongoing.proposal)),
        " 第" + weekdays[ongoing.session] + "場次 ",
        e("span", {className: "text-nowrap"}, ongoing.positive + " vs. " + ongoing.negative)
    ),
    $("ongoing-container")

);
if(next) {
    ReactDOM.render(
        e("div", {className: "small mt-1"},
            "下一場：",
            e(ProposalLink, getProposal(next.proposal)),
            " 第" + weekdays[next.session] + "場次 ",
            e("span", {className: "text-nowrap"}, next.positive + " vs. " + next.negative),
            e("div", {
                id: "remainingTimeContainer",
                className: "text-muted d-inline-block",
                title: next.time
            })
        ),
        $("next-container")
    );
    const showTime = function(){
        now = new Date;
        const remainingTime = (new Date(next.time)).getTime() - now.getTime();
        ReactDOM.render(
            "（" + ms2text(remainingTime) + "之後開始）",
            $("remainingTimeContainer")
        );
        return remainingTime;
    };
    setTimeout(function(){window.location.reload();}, showTime());
    setInterval(showTime, 1000);
}

/**
 * 底部連結
 */
const listItems = links.map(function(item) {
    return e("li", {className: "list-inline-item"},
        e("a", {
            target: "_blank",
            className: "btn btn-sm btn-outline-secondary",
            href: item.link,
            title: item.title
        }, item.text)
    );
});
ReactDOM.render(
    e("ul", {className: "list-inline"}, listItems),
    $("footer")
);

}
