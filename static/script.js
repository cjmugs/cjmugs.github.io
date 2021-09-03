
function myFunction() {
    alert('Are you sure you want to run this test program?  Click Ok')
    document.getElementById("button").innerHTML = alert('program is running fine');
    document.getElementById("button").innerHTML = alert('no seriously its working');
    document.getElementById("button").innerHTML = alert('oh no nevermind its crashing now . . . ');
    var tag_id = document.getElementById('button');
    tag_id.innerHTML = 'ShitShitShitShitShitShitShitShitShitShitShitShitShitShitShitShitShit';
}
