localStorage.setItem('FirstName', 'vishwajeet');
localStorage.setItem('location', 'Delhi');

console.log(localStorage.getItem('FirstName'));

localStorage.removeItem('location');


sessionStorage.setItem('FirstName', 'vishwajeet');
sessionStorage.setItem('location', 'Delhi');

console.log(sessionStorage.getItem('FirstName'));

sessionStorage.removeItem('location');