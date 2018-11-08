"use strict";
{
const $ = function(s) {return document.querySelector(s);};
const e = React.createElement;
const rpp = 20;

class DataSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filtered: datasets,
            page: 1
        };
    }

    search() {
        const s = $("#search").value.trim();
        const filtered = s ? datasets.filter(ds => ds[1].indexOf(s) >= 0) : datasets;
        this.setState({
            filtered: filtered,
            page: 1
        });
    }

    getTotalPage() {
        return Math.ceil(this.state.filtered.length / rpp);
    }

    setPage() {
        const max = this.getTotalPage();
        let page = parseInt($("#page").value);
        if(page > max) page = max;
        if(page <= 0) page = 1;
        $("#page").value = max.toString();
        this.setState({page: page});
    }

    render() {
        const p = this.state.page;
        const rows = this.state.filtered
            .slice((p-1)*rpp, p*rpp)
            .map(ds =>
                e("tr", {key: ds[0]},
                    e("td", null, ds[0]),
                    e("td", null,
                        e("a",{
                            href: "https://data.gov.tw/dataset/" + ds[0]
                        }, ds[1])
                    )
                )
            )
        ;
        return e(
            "div", null,
            e("div", null,
                e("input", {
                    id: "search",
                    onChange: this.search.bind(this),
                    placeholder: "搜尋",
                    className: "form-control-sm"
                }),
                e("span", {className: "text-muted small"},
                    "（共",
                    this.state.filtered.length,
                    "資料集）"
                )
            ),
            e("div", null,
                "第",
                e("input", {
                    id: "page",
                    onChange: this.setPage.bind(this),
                    type: "number",
                    min: 1,
                    className: "text-right form-control-sm",
                    style: {width: "4em"},
                    value: this.state.page
                }),
                "頁",
                e("button", {
                    title: "上一頁",
                    className: "btn btn-sm btn-primary mx-1",
                    disabled: this.state.page == 1,
                    onClick: ()=>{this.setState({page: this.state.page - 1 })}
                }, "\u25C0"),
                e("button", {
                    title: "下一頁",
                    className: "btn btn-sm btn-primary mx-1",
                    disabled: this.state.page >= this.getTotalPage(),
                    onClick: ()=>{this.setState({page: this.state.page + 1 })}
                }, "\u25B6"),
                e("span", {className: "text-muted small"},
                    "（共",
                    this.getTotalPage(),
                    "頁）"
                )
            ),
            e("table", {className: "table table-striped table-hover table-sm my-2"},
                e("thead", null,
                    e("tr", null,
                        e("th", null, "ID"),
                        e("th", null, "資料集名稱")
                    )
                ),
                e("tbody", null, rows)
            )
        );
    }
}

ReactDOM.render(
    e(DataSearch),
    $("main")
);

}
