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

function Transact() {
    var tx = {
        who: $("#to").val(),
        role: "spender",
        amount: parseFloat($("#amount").val()),
        description: $("#desc").val()
    };

    // var tx = $('#transact-form').serialize();

    send("TransactionCreate",tx, function(result) {
        GetBalance();
    });
}

$(window).ready(function() {
    GetBalance();
    GetUserProfile();
});
