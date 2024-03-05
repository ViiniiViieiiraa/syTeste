document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = hashPassword(document.getElementById('password').value);
    if (username === 'user' && password === '5f4dcc3b5aa765d61d8327deb882cf99') {
        localStorage.setItem('loggedIn', 'true');
        window.location.href = 'script.html';
    } else {
        document.getElementById('loginStatus').innerText = 'Usuário ou senha incorretos.';
    }
});
function hashPassword(password) {
    return md5(password);
}
function md5(string) {
    var hash = '';
    for (var i = 0; i < string.length; i++) {
        hash += string.charCodeAt(i).toString(16);
    }
    return hash;
}