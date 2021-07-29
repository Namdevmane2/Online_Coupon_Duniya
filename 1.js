function validform(){
    var fname = document.getElementById("name").value;
    var mobile = document.getElementById("mobilenumber").value;
    var user = document.getElementById("Email1").value;
    var pass = document.getElementById("pass1").value;

    console.log(fname,user,mobile,pass);

    const data = {
        name:fname,
        username:user,
        phone:mobile,
        password :pass
    };

    console.log(data.name,data.username,data.phone,data.password);

    document.getElementById("demo").innerText=data.name + data.username + data.phone + data.password;
}


function DownloadJSON(){
    var fname = document.getElementById("name").value;
    var user = document.getElementById("Email1").value;
    var mobile = document.getElementById("mobilenumber").value;
    var pass = document.getElementById("pass1").value;
    


    var data = new Array();

    data.push(["name","user","mobile","Password"]);  // keys
    data.push([fname,user,mobile,pass]);  // values

    var info = JSON.stringify(data);

    // used for big data

     info = [info];
     var blob1 = new Blob(info,{type:"text/plain;charset=utf-8"}); 
     var isIE = false || !!document.documentMode;
  if (isIE) {
      window.navigator.msSaveBlob(blob1, "jason.txt");
  } else {
      var url = window.URL || window.webkitURL;
      link = url.createObjectURL(blob1);
      var a = $("<a />");
      a.attr("download", "register.txt");
      a.attr("href", link);
      $("body").append(a);
      a[0].click();
      $("body").remove(a);
  }


}

// test this on local server or live server Ajax
function AjaxPostCalls(){
    var req= new XMLHttpRequest();
                req.open('GET','register.txt',true);
                req.send();
                req.onreadystatechange = function(){
                    if(req.readyState==4 && req.status==200)
                    {
                        document.getElementById("demo").innerHTML=req.responseText;
                    }
                };



}

