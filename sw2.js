"use strict";

this.addEventListener("fetch", function(event){
    if (event.request.header.get("save-data")){
        if (event.request.url.includes("fonts.googleapis.com")){
            event.respondWith(new Response("", {status: 471, statusText: "Ignore fonts to save data."}));
        }
    }
});