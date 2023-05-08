self.onmessage = function (event) {

};

let text = { "Typ": "result", "Wert": computePi() };

let s = JSON.stringify(text);

self.postMessage(s);

function computePi() {
    let sum = 0.0;
    const step = 1e-9;
    for (let i = 0; i < 1_000_000_000; i++) {
        let x = (i + 0.5) * step;
        sum = sum + 4.0 / (1.0 + x * x);

        if (i % 1000000 == 0) {
            let text2 = { "Typ": "counter", "Wert": i };

            let o = JSON.stringify(text2);

            self.postMessage(o);
        }

    }
    return sum * step;
}