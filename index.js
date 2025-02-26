function SendMail(){
    var params = {
        message: document.getElementById("message").value,
    }
    emailjs.send("service_72zd0up","template_2aj5s2i", params);
}