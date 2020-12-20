const { exception } = require("console");
const http = require("http");

http.createServer(function(request,response){     
    let numbers = get_numbers(request.url)
    if(numbers.length===2){
        if(request.url.includes("add?")){
            response.end(`<h1>${numbers[0] + numbers[1]}</h1>`);
        }else if(request.url.includes("sub?")){
            response.end(`<h1>${numbers[0] - numbers[1]}</h1>`);
        }else if(request.url.includes("mul?")){
            response.end(`<h1>${numbers[0] * numbers[1]}</h1>`);
        }else if(request.url.includes("div?")){
            if(numbers[1]!==0) {
                response.end(`<h1>${numbers[0] * numbers[1]}</h1>`);
            }else{
                response.end(`<h1>Denominator is 0</h1>`)
            }
                
        }
    }
   
    
     
}).listen(3000, "127.0.0.1",function(){
    console.log("Server 3000");
});


function get_numbers(url){
    let r = /\d+/g;
    let m;
    let arr=[];
    while ((m = r.exec(url)) != null) {
	    arr.push(parseInt(m[0]));
    }
    return arr;
}

