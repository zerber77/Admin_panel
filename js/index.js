const tableHeader = `<table class="table">
 <tbody>
<thead>
    <tr id ="tbl"> 
      <th scope="col">#</th>
      <th scope="col">Main_point</th>
      <th scope="col">Sex</th>
      <th scope="col">Age</th>
      <th scope="col">Created</th>
      <th scope="col">Updated</th>
    </tr>
   
  </thead>
  </tbody>
</table>
`

const toHTML = item =>`<tr>
      <th scope="row">${item.id}</th>
      <td>${item.point}</td>
      <td>${item.sex}</td>
      <td>${item.age}</td>
      <td>${item.created}</td>
      <td>${item.updated}</td>
    </tr>
`
async function getDatabase(){
    document.querySelector('.connectedSortable').innerHTML = "<div>ЗАГРУЗКА....</div>"
    let response = await  fetch('Api/database.php')
    let data = await response.json();
    const table = data.response.map(item=>{
        return toHTML(item)
    })
    document.querySelector('.connectedSortable').innerHTML = ""
    document.querySelector('.connectedSortable').innerHTML = tableHeader
    let tbl = document.getElementById('tbl')
    const str = (table.join(''))
    tbl.insertAdjacentHTML('afterend', `${str}`)
//    document.querySelector('#tbl').innerHTML = table
}


addEventListener('click',(event)=>{
    console.log(event.target)
    if (event.target.dataset.database) {
        getDatabase()
    }
})



/*

 */
