function send() {
    let username = document.getElementById('username');
    let surname = document.getElementById('surname');
    let phone = document.getElementById('phone');
    let message = document.getElementById('message');
    let email = document.getElementById('email');
    sendtelegram(`Ismi: ${username.value}; Familiyasi: ${surname.value}; Telefon nomer: ${phone.value};  Email: ${email.value}; Message: ${message.value};`);
}

// sendtelegram
function sendtelegram(message) { let telegram_bot_id = "6677367895:AAEPeJdbME7dQN4q36GbBz-SjfKTmAXsQH4"; let chat_id = 5164875477; let settings = { "async": true, "crossDomain": true, "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage", "method": "POST", "headers": { "Content-Type": "application/json", "cache-control": "no-cache" }, "data": JSON.stringify({ "chat_id": chat_id, "text": message }) }; $.ajax(settings).done(function (response) { }); };