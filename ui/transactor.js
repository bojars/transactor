function GetBalance() {
    send("GetBalance","", function(result) {
        updateBalance(result);

    });
}

function updateBalance(balance) {
    $("#balance").html(balance);
}

function Tansact() {
    var tx = {
        who: $("#to"),
        role: "spender",
        amount: $("#amount"),
        description: $("#desc")
    };

    send("TransactionCreate",tx, function(result) {
        GetBalance();
    });
}

$(window).ready(function() {
    GetBalance();
});
