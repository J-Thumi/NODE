const people=['Jos','jane','Precious']
const ages =[12,34,54,23,89]

//console.log(people)


//we must manually export whatever we want in the other file
//module.exports= people

//if we want to export multiple variables pass objects to module.exports
module.exports={
    people,ages
}