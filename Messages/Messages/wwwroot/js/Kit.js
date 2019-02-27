var $ = function (name, s, p, t, n) {
    let e = new O(name, s, p, t, n).o;
    if (e && e.constructor.name !== "HTMLUnknownElement")
        return e;
    let msg = !e ? "use the 'Kit' after the document creation" : `${name} element is unknown`;
    alert(msg);
    throw new Error(msg);
};

class O {
    constructor(name, s, p, t, n = 0) {
        t = t || document.body;
        if (t) {
            if (n)
                t.insertAdjacentHTML("beforeEnd", "<br>".repeat(n));
            this.o = document.createElement(name);
            if (p)
                this.add(this.o, p);
            if (s)
                this.add(this.o.style, s);
            t.appendChild(this.o);
        }
    }
    add(o, text) {
        let pp = text.split(";"); // name-value pairs
        for (let i = 0; i < pp.length; i++) {
            let pair = pp[i];
            if (pair === "")
                continue;
            let p = pair.split("="), len = p.length;
            if (len > 0) {
                let n = p[0].trim();
                o[n] = len == 2 ? p[1].trim() : n;
            }
        }
    }
    static getHtml(o) { return o.innerHTML; }
    static html(text, to) {
        if (!to)
            to = document.body;
        if (to)
            to.insertAdjacentHTML("beforeEnd", text);
    }
    static query(s) { return document.querySelector(s); }
    static addText(text, to) {
        let o = document.createTextNode(text);
        if (!to)
            to = document.body;
        to.appendChild(o);
        return o;
    }
    static getAll(o) {
        let s = "[";
        for (let p in o)
            s += o[p] + ", ";
        s = s.substr(0, s.length - 2);
        s += "]";
        return s;
    }

}
