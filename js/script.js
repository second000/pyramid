let pyramid = (function () {

  const div = document.createElement('div');
  const userLetter = (prompt('Enter english letter', 'a')).toUpperCase().codePointAt(0);

  if  (userLetter >=65 && userLetter <= 86) {

    const arr = [userLetter];

    for (let i = 0; i <=4; i++) {
    arr.push(String.fromCodePoint(arr[0] + i));

    let firstStr = arr.join(' ');
    firstStr = firstStr.replace(/[^A-Za-z]/g, ' ');

    let secondStr = firstStr.split(' ').reverse().join(' ').replace(/[^A-Za-z]/g, ' ').slice(1, -1);

    const p = document.createElement('p');
    p.innerHTML = `${firstStr + secondStr}`;
    div.appendChild(p);
    }
return div;

  } else {
    alert('Bad letter, try again.')
  }
return pyramid;
})();

document.body.appendChild(pyramid);
