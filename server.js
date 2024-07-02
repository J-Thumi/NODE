//Client and server
//we create a server via a command line not like in PHP where there are servers such as apache or xamp

const http=require('http')
const fs=require('fs')


//the createserver module takes a function as an arg the function write what to be returned when server receives a request
//the function takes request and response parameters
const server=http.createServer((req,res)=>{
console.log(req.url , req.method)
//in the response 
//1. set Header  specify Content type
//2. content the response to return
//3. end the response

//we can return plain text
        //res.setHeader('Content-Type','text/Plain')
        //res.write('Hello Ninja')
//apart from just returning plain text we can also return html 
        res.setHeader('Content-Type','text/html')
let path='./views'
switch(req.url){
        case '/':
                path +='/index.html'
                res.statusCode=200
                break
        case '/about':
                path+='/about.html'
                res.statusCode=200
                break

                // On the World Wide Web, HTTP 301 is the HTTP response status code for 301 Moved Permanently. It is used for permanent redirecting, meaning that links or records returning this response should be updated.
        case '/about-me':
                res.statusCode=301
                res.setHeader("Location",'about')
                res.end()
                break
        default:
        
                path+='/404.html'
                res.statusCode=404
                break
}
                //the above way of getting html files/ routering is not effective hence we can use express framework it is a 3rd party package
                




        // res.write('<head> <link rel="stylesheet" href="#"> </head>')
        // res.write('<p>Hello Ninja</p>')
        // res.write('<p>Hello again Ninja</p>')

        //sending html this way is not effective

        //we can read a html external file which is better
fs.readFile(path,(err,data)=>{
if(err){
        console.log(err)
        res.end()
}
else{
        //res.write(data)
        //the res.write() is better to use when writing multiple lines separately

        //here we can pass the data to the res.end(data)
       
        //status code describe typr of response sent to browser
        //100-informational,200-success,300-redirects,400-client error,500-server error
        //we can add status code to the response
        
        res.end(data)
}       
})
})

server.listen(3000,'localhost',()=>{
    console.log('listening to a request on port 3000')
})

//localhost is like a domain name on the web
//it takes us to a very specific ip adress called the loop back ip adress (127.0.0.1)  it brings you back to your computer
//this is how we make our own computers servers when dev websites

//A port number is a logical identifier  used to differentiate between different services or applications running on a single  computer. 
//It acts like an apartment number within a building (the IP address  being the building address).
//Ports help direct incoming network traffic to the appropriate program or service on a device.
//Port numbers are 16-bit unsigned integers, meaning they can range from 0 to 65,535.


//A well-known organization called the Internet Assigned Numbers Authority (IANA) maintains a list of standard port numbers assigned to specific services.
//Examples: Port 80 for HTTP traffic (web browsing), port 22 for SSH (secure remote access), port 25 for SMTP (email sending).
//While IANA assigns well-known ports, there are also many non-standard ports used by various applications.



//Imagine an office building (computer) with many departments (services).  
//Clients (incoming network traffic) visit the building (IP address). 
//The  receptionist (port number) asks them which department they're there to see  (specific service) and directs them accordingly.