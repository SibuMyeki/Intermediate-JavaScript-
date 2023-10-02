
let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
width=0,height=0,left=-1000,top=-1000`;

open('/', 'test', params);

let newWin = window.open("about:blank", "hello", "width=200,height=200");

newWin.document.write("Hello, world!");

window.open('https://www.google.com/');