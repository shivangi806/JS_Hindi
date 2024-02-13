const insert = document.getElementById('insert');


window.addEventListener('keydown',function(e){
    insert.innerHTML = `
    <div class='tablePart'>
        <table>

        <tr>
        <th>Key</th>
        <th>Ascii value</th>
        </tr>

        <tr>
        <td>${e.key==' ' ? 'Space' : e.key}</td>
        <td>${e.key.charCodeAt(0)}</td>
        </tr>

        </table>
    </div>
    `
    ;
});



// window.addEventListener('keydown', (e) => {
//   insert.innerHTML = `
//     <div class='color'>
//     <table>
//     <tr>
//       <th>Key</th>
//       <th>Keycode</th> 
//       <th>Code</th>
//     </tr>
//     <tr>
//       <td>${e.key === ' ' ? 'Space' : e.key}</td>
//       <td>${e.keyCode}</td> 
//       <td>${e.code}</td>
//     </tr>
    
//   </table>
//     </div>
//   `;
// });

