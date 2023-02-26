// const judul = document.getElementById('judul');
// judul.innerHTML = '<em>Irfan Mndalaptra</em>'

// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = 'hello world';

// const judul = document.querySelector('#judul');
// judul.style.color = 'lightblue';
// judul.style.backgroundColor = 'salmon';

// const judul = document.getElementsByTagName('h1')[0];
// const a = document.querySelector('section#a a');
// const p2 = document.querySelector('.p2');
// const p2 = documetn.getElementsByTagName('p');

// p2.setAttribute('class', 'label')
// a.innerHTML = 'ini di ubah di javascript';

// a.style.textDecoration = 'none'

// judul.setAttribute('name', 'sandika');


// let indo = document.getElementById

// p2[3].style.backgroundColor = 'red';




const a = document.querySelector('section#a a');
const judul = document.getElementById('judul');
judul.innerHTML = 'APAPA';
judul.style.textDecoration = 'underline';
a.innerHTML = 'sudah di ubah';




// Buat Element Baru 
const divBaru = document.createElement('div');
const texkDiv = document.createTextNode('div baru')
const liBaru = document.createElement('li');
const textLi = document.createTextNode('Li Baru');
const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(1)');


liBaru.appendChild(textLi);
divBaru.appendChild(texkDiv);
const sectionA = document.getElementById('a');
sectionA.appendChild(divBaru);
divBaru.style.fontFamily = 'arial';
divBaru.setAttribute('class','none');

ul.insertBefore(liBaru , li2);
