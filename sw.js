importScripts("/gh/xdMilo/classroom@main/controller/controller.sw.js"),self.addEventListener("fetch",o=>{self.$scramjetController.shouldRoute(o)&&o.respondWith(self.$scramjetController.route(o))});
