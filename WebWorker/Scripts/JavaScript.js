let worker;

$("#start").on("click", function () {
    worker = new Worker("Scripts/task.js");

    $("#start").attr("disabled", true);

    worker.onmessage = function (event) {
        let o = JSON.parse(event.data);

        if (o.Typ == "result") {
            $("#pi").val(o.Wert);
            $("#start").attr("disabled", false);
        }
        else {
            $("#progress").val(o.Wert);
        }
    };
});

$("#stop").on("click", function () {
    worker.terminate();
});

class Nachricht {
    constructor(typ, wert) {
        this.Typ = typ;
        this.Wert = wert;
    }
}






