function timeout(){
    setTimeout(function(){
        var para = document.createElement("P");               
        para.innerText = "Here we go!";               
        document.body.appendChild(para);
    },5000);
}

timeout();
