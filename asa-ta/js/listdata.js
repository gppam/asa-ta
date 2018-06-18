function listCreate(e) {
    var t = Object.keys(e).map(function(t) {
            return e[t]
        }),
        a = "";
    for (i = 0; i < t.length; i++) {
        var r = checkIcon(t[i].type);
        a += templateHtml.replace(/{{name}}/g, t[i].name).replace(/{{type}}/g, r).replace(/{{typelabel}}/g, t[i].type).replace(/{{location}}/g, t[i].address).replace(/{{hours}}/g, t[i].hours).replace(/{{wifi}}/g, t[i].wifi).replace(/{{outlets}}/g, t[i].outlet).replace(/{{food}}/g, t[i].food).replace(/{{drinks}}/g, t[i].bev)
    }
    return a
}

function toggle_vis(id) {
       var e = document.getElementById(id);
       if(e.style.display == 'block')
          e.style.display = 'none';
       else
          e.style.display = 'block';
}

function checkIcon(e) {
    var t = "";
    switch (e) {
        case "Cafe":
            t = "ion-coffee";
            break;
        case "Restaurant":
        case "Bistro":
            t = "ion-android-restaurant";
            break;
        case "Workspace":
            t = "ion-android-laptop";
            break;
        default:
            t = "ion-android-home"
    }
    return t
}

var template = document.getElementById("template-item"),
    templateHtml = template.innerHTML,
    loading = document.getElementById("loader"),
    request = new XMLHttpRequest;
request.onreadystatechange = function() {
    if (request.readyState == XMLHttpRequest.DONE && 200 == request.status) {
        loading.outerHTML = "";
        var e = JSON.parse(request.response);
        document.getElementById("list").innerHTML = listCreate(e)
    }
}, request.open("GET", "db/shopdata.json", !0), request.send();