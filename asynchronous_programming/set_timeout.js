/*
  This here is an example of asynchronous programming.
  Two separate processes are running at the same time,
  and are reporting results on their own schedule.
*/
setTimeout(function(){
  console.log("do this")
}, 6000)

setTimeout(function(){
  console.log("do that")
}, 5000)
