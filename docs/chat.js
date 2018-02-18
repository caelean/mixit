var li = document.createElement("LI");
li.innerHTML = '<li class="container darker">\n' +
    '    <img src="hw32.jpeg" alt="Avatar" class="right" style="width:100%;">\n' +
    '    <p>Hello There :)</p>\n' +
    '    <span class="time-left">9:01</span>\n' +
    '</li>'
document.getElementById("chatList").appendChild(li);



function postMessage() {
        var li = document.createElement("LI");
        var input = document.getElementById('message').value;
        if (input) {
            li.innerHTML = '<li class="container">\n' +
                '  <img src="hw31.jpg" alt="Avatar" style="width:100%;">\n' + input +
                '  <span class="time-right">9:02</span>\n' +
                '  </li>'
            document.getElementById('message').value = "";
            document.getElementById("chatList").appendChild(li);
        }

    }
