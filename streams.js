
//streams and buffers
//stremas allows us to use data before it has been fuully loaded
//little chunks of data sent in buffers e.g when streaming movies
//the whole movie does not first load for you to see it

//read and write streams

const fs=require('fs')
//where are we readin data from

const writeStream=fs.createWriteStream('blog2')
const readStream=fs.createReadStream('blog.txt',{encoding:'utf8'})
//{encoding:'utf8'} makes outpuut be in readable format


//add an on event listener
readStream.on('data',(chunk)=>{
console.log('=====NEW CHUNK======')
console.log(chunk)

writeStream.write('\n NEW CHUNK \n')
writeStream.write(chunk)
})



//we 