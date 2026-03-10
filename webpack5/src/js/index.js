// Import style sheets.
import "./../css/site.scss";

// Import scripts
import { alertsModule } from "./alertsModule";
import { datepickerModule } from "./datepickerModule";

// Assign to global "App" variable which makes modules accessible from web pages.
window.App = {
    alertsModule: alertsModule,
    datepickerModule: datepickerModule
};