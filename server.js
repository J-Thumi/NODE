//Client and server
//we create a server via a command line not like in PHP where there are servers such as apache or xamp

const http=require('http')

//the createserver module takes a function as an arg the function write what to be returned when server receives a request
//the function takes request and response parameters
const server=http.createServer((req,res)=>{
console.log('request made')
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