"use strict";
{
const e = React.createElement;
const now = new Date;
const weekdays = "日一二三四五六".split("");

const getPresentation = (proposal, session) =>
    presentations.find(p => p.proposal == proposal && p.session == session);

class Presentation extends React.Component {
  constructor(props) { super(props); }
  render() {
    const p = this.props;
    const time = new Date(p.time.replace(/-/g, "/"));   ///< 手機上只看得懂以斜線作為年月日間隔符號的格式。
    const youtube = "https://youtu.be/" + p.youtube + (p.session == 1 ? "?t=1620" : "");    ///< 民視在27~29分鐘前就開始直播了。

    let text;
    if(time > now) text = `${time.getMonth()+1}/${time.getDate()}(${weekdays[time.getDay()]}) ` + p.time.split(" ")[1];
    else if(time*1 + 3600*1000 > now.getTime()) text = "觀看直播";
    else text = "觀看錄影";

    return e(
        "div", {className: "col-md-2 mb-3"},
        e("div", {className: ""},
            e("span", {className: "d-md-none small"}, `第${weekdays[p.session]}場次：`),
            e("span", {className: "text-nowrap"}, p.positive),
            " vs. ",
            e("span", {className: "text-nowrap"}, p.negative),
        ),
        e("div", {className: ""},
            e("a", {
                className: "btn btn-outline-primary btn-sm",
                href: youtube,
                target: "_blank"
            }, text)
        )
    );
  }
}

class PresentationsPerProposal extends React.Component {
  constructor(props) { super(props); }
  render() {
    const p = this.props;
    const ps = [1,2,3,4,5].map(sid => e(Presentation, getPresentation(p.id, sid)));
    return e(
        "div", {className: "row mb-3"},
        e("div", {className: "col-md-2 small mb-2"},
            e("div", null,
                e("h5", {className: "mb-0 font-weight-bold d-inline-block", id: `proposal${p.id}`},
                    e("a", {href: `#proposal${p.id}`}, `第 ${p.id} 案`)
                ),
                e("span", {className: "text-muted pl-3"}, "by " + p.proposer)
            ),
            e("p", {className: "my-0"},
                p.mainText,
                e("a", {className: "d-inline d-md-block pl-3 pl-md-0", href: p.reasons, target: "_blank"}, "理由書")
            )
        ),
        ...ps
    );
  }
}

class SessionHead extends React.Component {
  constructor(props) { super(props); }
  render() {
    const sid = this.props.sid;
    return e(
        "div", {className: "col-md-2"},
        e("span", {className: "text-nowrap"}, `第${weekdays[sid]}場次`),
        e("small", {className: "text-nowrap"}, `（${sessionsBy[sid]}）`)
    );
  }
}

const sessionHeads = [1,2,3,4,5].map(sid => e(SessionHead, {sid}));
const presentationContainers = proposals.map(p => e(PresentationsPerProposal, p));

ReactDOM.render(
    e("div", null,
        e("div", {className: "d-none d-md-block mb-3 font-weight-bold"},
            e("div", {className: "row"},
                e("div", {className: "col-md-2"}),
                ...sessionHeads
            )
        ),
        ...presentationContainers
    ),
    document.getElementById("presentations-container")
);

}