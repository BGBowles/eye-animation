const eyeball = document.getElementsByClassName('eyeball');

document.onmousemove = (event) => {

  const x = (event.clientX * 100) / window.innerWidth + '%';
  const y = (event.clientY * 100) / window.innerHeight + '%';

  for (let i = 0; i < 2; i++) {
    eyeball[i].style.left = x;
    eyeball[i].style.top = y;
    eyeball[i].transform = 'translate(-' + x + ',-' + y + ')';
  }

};