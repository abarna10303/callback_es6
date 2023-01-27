//callback function
function myFirst(callback)
{
    setTimeout(function(){
        console.log("First Function");
        callback();
    },1000);
}
function mySecond()
{
    setTimeout(function(){
        console.log("Second Function")
    },1000);
}
myFirst(mySecond);
