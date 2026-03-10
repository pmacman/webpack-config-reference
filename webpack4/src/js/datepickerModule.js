import flatpickr from "flatpickr";
import "flatpickr/dist/themes/dark.css";

function init() {
    flatpickr(".datepicker");
}

export const datepickerModule = {
    init: init
};