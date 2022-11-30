// DOM Selection 
// document.getElementById()
const judul = document.getElementById('judul')
judul.style.color = 'red';
judul.style.backgroundColor = '#ccc';
judul.innerHTML = 'irfan mdlptra';

// document.getElementsByTagName()
// cari nama tag yang namanya ('apa')
//  -> HTMLColletions


// const p = document.getElementsByTagName('p') ;
// // p[3].style.backgroundColor = 'green';
// for ( let i = 0 ; i < p.length; i++) {
//     p[i].style.backgroundColor = 'lightblue';
// }   p[3].innerHTML = 'aku pragraf ke 4';

// const h1 = document.getElementsByTagName('h1')[0];
// h1.style.fontSize = '50px';

// document.getElementsByClassName()
// cari nama class yang namanya ('apa')
// -> HTMLCollection


// const p1 = document.getElementsByClassName('p1')[0];
// p1.innerHTML = 'Ini  di ubah dari java script';
// p1.style.color = 'yellow';


const link = document.getElementsByTagName('a')[0];
link.innerHTML = 'instagram irfnmdlptra'
link.style.textDecoration = 'none';
link.style.background = '';



// // document.querySelector() menghasilkan element

// // const p4 = document.querySelector('#b p');
// // p4.style.color = 'green';
// // p4.style.fontSize = '30px';

// // const li2 = document.querySelector('section#b ul li:nth-child(2)'); 
// // li2.style.backgroundColor = 'orange';


// // const p = document.querySelector('p');
// // p.innerHTML = 'ini di ubah di javascript';


// // document.querySelectorAll()
// const p = document.querySelectorAll('p');
// for( let i = 0; i < p.length; i++) {
//     p[i].style.backgroundColor = 'lightBlue';
// }




// const sectionb = document.getElementById('b');
// const p4= sectionb.querySelector('p');
// p4.style.backgroundColor = 'orange';

const sectionB = document.querySelector('section#b');
const p4 = sectionB.getElementsByTagName('p')[0];
p4.style.backgroundColor = 'orange';

