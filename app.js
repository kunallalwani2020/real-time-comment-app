function send(){
var text= document.getElementById("text")
var email = document.getElementById("email")
var comment = document.getElementById("comment")
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
dateTime=dateTime.toString();


var key= firebase.database().ref("comment").push().key;
var comment_data= {
    text: text.value,
    email: email.value,
    comment: comment.value,
    date:dateTime,
    
}


firebase.database().ref("comment").child(key).set(comment_data);
}
firebase.database().ref("comment").on("child_added", function(data){

    var name= document.createTextNode(data.val().text)
 var email= document.createTextNode(data.val().email)
 var comment= document.createTextNode(data.val().comment)
 var date=document.createTextNode(data.val().date)
 var list = document.getElementById("list")
 var li = document.createElement("li" )
li.setAttribute("class","list") 
//name
li.appendChild(document.createTextNode("Name:  "))
li.appendChild(name)
li.appendChild(document.createElement("br"))
//email
li.appendChild(document.createTextNode("Email:  "))
li.appendChild(email)
li.appendChild(document.createElement("br"))
//comment
li.appendChild(document.createTextNode("Comment:  "))
li.appendChild(comment)
li.appendChild(document.createElement("br"))
//date
li.appendChild(document.createTextNode("DateTime:  "))
li.appendChild(date);
li.appendChild(document.createElement("br"))

list.appendChild(li)
})
