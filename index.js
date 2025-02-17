function SendMail(){
    var params = {
        message: document.getElementById("message").value,
    }
    emailjs.send("service_cjujp8g","template_lo32ojr", params);
}