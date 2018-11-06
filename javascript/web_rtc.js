"use strict";
var pc = new RTCPeerConnection(undefined);
var dc = pc.createDataChannel("Chat");
pc.createOffer().then(function (e) {
    pc.setLocalDescription(e);
});
// dc.onopen = function(){$("textarea").attr("disabled",true);addMSG("CONNECTED!", "info")};
// dc.onmessage = function(e: MessageEvent) {
//   if (e.data) addMSG(e.data, "other");
// }
var localDescriptionAsString = JSON.stringify(pc.localDescription);
