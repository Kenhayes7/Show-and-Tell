function showMe() {
    var div = document.getElementById('myDiv');
    if(div.style.display === 'none') {
        div.style.display = 'block';
    }else if(div.style.display === 'block') {
        div.style.display = 'none';
    }
    var heading1 = document.createElement('h1');
    heading1.innerHTML = 'Oh, Hello there.';
    div.appendChild(heading1);
    heading1.style.fontFamily = 'Impact';
    var words = document.createElement('p');
    words.innerHTML = 'Can you see me now?';
    div.appendChild(words);
    words.style.fontSize = '36px';
    words.style.color = 'red';
    var happy = document.createElement('p');
    happy.innerHTML = 'You can see me! Yay!!!';
    div.appendChild(happy);
    happy.style.cssFloat = 'left';
    happy.style.backgroundColor = 'black';
    happy.style.color = 'red';
    happy.style.fontSize = '55px';
    var image = document.createElement('img');
    image.src = 'dance.gif';
    div.appendChild(image);

    document.getElementById('hide').style.visibility = 'hidden';
    
}