/*
* File: app.js
* Author: Dobány Norbert
* Copyright: 2024, Dobány Norbert
* Group: Szoft I-1-N
* Date: 2024-05-07
* Github: https://github.com/notdefinitelynot/
* Licenc: GNU GPL
*/
const doc =
{
    bookBody:document.querySelector('#bookBody')
}

const state =
{
    url:'http://localhost:8000/books',
    bookList:[]
}

function getBook()
{
    console.log('getBook check')
    fetch(state.url).then(response=>response.json()).then(result => {state.bookList=result
        renderBook()})
    
}

function renderBook()
{
    console.log('renderBook check')
    state.bookList.forEach(bk=>{
        var tr = document.createElement('tr')
        tr.innerHTML=`
        <td>${bk.id}</td>
        <td>${bk.title}</td>
        <td>${bk.author}</td>
        <td>${bk.price}</td>`
        
        doc.bookBody.append(tr)
    })
}

getBook()