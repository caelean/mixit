var tr = document.createElement("tr");
tr.innerHTML = '<tr>\n' +
    '\n' +
    '    <th><b>Song</b></th>\n' +
    '    <th><b>Artist</b></th>\n' +
    '    <th><b>Length</b></th>\n' +
    '\n' +
    '  </tr>'
document.getElementById("indextable").appendChild(tr);

var tr2 = document.createElement("tr");
tr2.innerHTML = '<tr>\n' +
    '    <td>Closer</td>\n' +
    '    <td>Lemaitre</td>\n' +
    '    <td>3:45</td>\n' +
    '  </tr>'
document.getElementById("indextable").appendChild(tr2);

var tr3 = document.createElement("tr");
tr3.innerHTML = '<tr>\n' +
    '    <td>Super Mario World</td>\n' +
    '    <td>Logic</td>\n' +
    '    <td>4:12</td>\n' +
    '  </tr>'
document.getElementById("indextable").appendChild(tr3);

var tr4 = document.createElement("tr");
tr4.innerHTML = '<tr>\n' +
    '    <td>You Were Right</td>\n' +
    '    <td>Rufus De Sol</td>\n' +
    '    <td>2:53</td>\n' +
    '  </tr>'
document.getElementById("indextable").appendChild(tr4);

var tr5 = document.createElement("tr");
tr5.innerHTML = '<tr>\n' +
    '    <td>G.O.M.D.</td>\n' +
    '    <td>J. Cole</td>\n' +
    '    <td>4:33</td>\n' +
    '  </tr>'
document.getElementById("indextable").appendChild(tr5);

document.getElementById("upload").addEventListener("click", uploadMix);
function uploadMix() {
    document.getElementById('fileInput').click()
}



