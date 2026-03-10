import $ from "jquery";

function showAlert(msg) {
    privateFunction(msg);
    alert(msg);
}

// Private function that is not exported.
function privateFunction(msg) {
    $("#demo-name").text(msg);
}

export const alertsModule = {
    showAlert: showAlert
};