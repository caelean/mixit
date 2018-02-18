var tr = document.createElement("tr");
tr.innerHTML = '<tr>\n' +
    '\n' +
    '    <th><b>Song</b></th>\n' +
    '    <th><b>Artist</b></th>\n' +
    '    <th><b>Song Length</b> </th>\n' +
    '  </tr>'
document.getElementById("playlisttable").appendChild(tr);

var tr2 = document.createElement("tr");
tr2.innerHTML = '<tr>\n' +
    '\n' +
    '    <td><a>Fool to Love</a></td>\n' +
    '    <td><a>Nao</a></td>\n' +
    '    <td>3:45<button class="button2" id=\'myBtn\' value = \'send\' onclick="deleteSong()">X</button>\n</td>\n' +
    '  </tr>'
document.getElementById("playlisttable").appendChild(tr2);

var tr3 = document.createElement("tr");
tr3.innerHTML = '<tr>\n' +
    '    <td>Your Love</td>\n' +
    '    <td>Mark Knight</td>\n' +
    '    <td>4:12</td>\n' +
    '  </tr>'
document.getElementById("playlisttable").appendChild(tr3);

var tr4 = document.createElement("tr");
tr4.innerHTML = '<tr>\n' +
    '    <td>Summer 99</td>\n' +
    '    <td>Tchami</td>\n' +
    '    <td>3:45</td>\n' +
    '  </tr>'
document.getElementById("playlisttable").appendChild(tr4);

var tr5 = document.createElement("tr");
tr5.innerHTML = '<tr>\n' +
    '    <td>Hello</td>\n' +
    '    <td>Adele</td>\n' +
    '    <td>4:07</td>\n' +
    '  </tr>'
document.getElementById("playlisttable").appendChild(tr5);

function addSong() {
var tr6 = document.createElement("tr");
    var input = document.getElementById('addSong').value;
            if (input) {

                tr6.innerHTML = '<tr>\n' +
                    '    <td>Hey</td>\n' +
                    '    <td>Boss</td>\n' +
                    '    <td>3:00</td>\n' +
                    '  </tr>'
                document.getElementById('addSong').value = "";
                document.getElementById("playlisttable").appendChild(tr6);
            }
            console.log(document.getElementById('playlisttable'))

    }
    function deleteSong() {
    }



