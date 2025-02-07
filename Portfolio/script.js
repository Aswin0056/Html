const logo = document.getElementById('demo');

logo.onmouseover = function() {
    logo.innerHTML = 'Aswin';
}

logo.onmouseout = function() {
    logo.innerHTML = 'My Self';
}


window.onload = function() {
document.querySelector('.page-content').classList.add('fade-in');
};

document.getElementById("one").innerHTML = "Welcome";
