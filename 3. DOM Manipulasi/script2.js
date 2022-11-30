// DOM Manipulation
// buat Element baru
const pBaru = document.createElement('p');
const teksPBaru = document.createTextNode('Paragraf Baru');

// simpan tulisan kedalam paragraf
pBaru.appendChild(teksPBaru);

// simpan pBaru diakhir Section A
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);

const link = document.getElementsByTagName('a')[0];
link.innerHTML = 'instagram saya ' 
link.style.textDecoration = 'none'
link.style.fontFamily = 'comic sans ms'

const p = document.getElementsByTagName('p');
p[2].style.color = 'blue'
for( let i = 0; i < p.length; i++) {
    p[i].style.fontFamily = 'comic sans ms';
    p[i].style.color = 'blue';
} p[1].style.color = 'green'

// membuat tempat teksnya 
const liBaru = document.createElement('li');
// isi teks 
const teksLiBaru = document.createTextNode('Item Baru');
// panggil teksLiBaru
liBaru.appendChild(teksLiBaru);
// menampilkan teks baru
const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');

// menambahkan tag baru sebelum tag yg lain 
ul.insertBefore(liBaru, li2);

// mengapus tag 
sectionA.removeChild(link);

// kita harus menangkap Elementnya 
const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const h2Baru = document.createElement('h2');
const teksH2Baru = document.createTextNode('Judul Baru!');

h2Baru.appendChild(teksH2Baru);

sectionB.replaceChild(h2Baru, p4);


pBaru.style.backgroundColor = 'salmon';
liBaru.style.backgroundColor = 'salmon';
h2Baru.style.backgroundColor = 'salmon';