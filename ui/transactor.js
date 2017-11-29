function GetBalance() {
    send("GetBalance", "", function(result) {
        updateBalance(result);
    });
}

function updateBalance(balance) {
    $("#balance").html(balance);
}

function GetUserProfile() {
    send("GetUserProfile", "", function(result) {
        updateProfile(result);
    });
}

function updateProfile(details) {
    $("#address").html(details.pub);
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
    GetUserProfile();
});
