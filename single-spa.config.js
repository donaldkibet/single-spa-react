import { registerApplication, start } from "single-spa";

registerApplication(
    //name of the application
    "home",
    //loading function
    () => import("./src/home/home.app.js"),
    //activity function
    (location) =>location.pathname === "" ||
    location.pathname === "/" ||
    location.pathname.startsWith("/home")
);

start();
