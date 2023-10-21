console.log('Start');
 
setTimeout(()=>{
    console.log('Timeout callback')
},0);

setImmediate(() => {
    console.log('Immediate callback');
});
 
console.log('End');