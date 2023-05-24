//menampilkan data
async function getData(){
    const fetchData = await fetch("http://localhost:3000/seminar")
    const json = await fetchData.json()
    
    const tbody = document.getElementById('postcontent')
//mengisi tabel
    let tdList = ''
    json.map((x, index) => {
        tdList +=`
        <tr>
        <td>${x.id}</td>
        <td>${x.firstname}</td>
        <td>${x.lastname}</td>
        <td>${x.email}</td>
        <td>${x.date}</td>
        <td style='color: ${x.status == 'Accept' ? 'green' : 'red'};'>
        ${x.status}
        </td>
        <td>
        <button onclick="deleteData(${x.id})" <i class="fa fa-trash-o"></button>
        <button onclick="acc(${x.id},'${x.firstname}','${x.lastname}','${x.email}','${x.date}','${x.status}')" style='color: green;' >Accept</button>
        <button onclick="reject(${x.id},'${x.firstname}','${x.lastname}','${x.email}','${x.date}','${x.status}')" style='color: red;'>Reject</button>        
        </td>
        </tr> `
        
    })

        tbody.innerHTML = tdList

       }

getData()

let status = null;
let idUpdate = null;


//btnSubmit
btnSubmit.onclick = async function(){
    
    const firstname = document.getElementById('firstname').value
    const lastname = document.getElementById('lastname').value
    const email = document.getElementById('email').value
    //mengambil nilai dari radio button
    const date = document.querySelector('input[name="date"]:checked').value

    //sudah memanggil value jadi tidak perlu mendeklarasikan kembali(menggunakan value)
    
    const postData = await fetch('http://localhost:3000/seminar', {
    method: 'POST',
    body: JSON.stringify({
    firstname: firstname,
    lastname: lastname,
    email: email,
    date: date,
    status: "on progress"
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',

  }})
  alert("Anda telah terdaftar!")
  getData()
 }

getData()


//delete
async function deleteData(id) {

    await fetch('http://localhost:3000/seminar/' + id , {
    method: 'DELETE',});

  alert("Data Berhasil dihapus!")

getData()

}

async function acc(id, firstname, lastname, email, date, status){
    await fetch('http://localhost:3000/seminar/' + id,{
        method: 'PUT',
        body: JSON.stringify({
        firstname: firstname,
        lastname: lastname,
        email: email,
        date: date,
        status: "Accept"
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },})
    
    getData()
}      



async function reject(id, firstname, lastname, email, date, status){
    await fetch('http://localhost:3000/seminar/' + id,{
        method: 'PUT',
        body: JSON.stringify({
        firstname: firstname,
        lastname: lastname,
        email: email,
        date: date,
        status: "Reject"
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },})
    
    getData()
}


        // <button onclick="acc(${x.id})" style='color: green;' >Accept</button>
        // <button onclick="reject(${x.id})" style='color: red;'>Reject</button>

//     function confirm() {
//     let confirmAction = confirm("Are you sure to execute this?");
//     if (confirmAction) {
//       alert("Action successfully executed");
//     } else {
//       alert("Action canceled");
//     }
//   }
    // function confirmAction() {
    //     let confirmAction = confirm("Are you sure to execute this?");
    //     if (confirmAction) {
    //       alert("Action successfully executed");
    //     } else {
    //       alert("Action canceled");
    //     }
    //   }

// <button onclick="confirm(${x.id})">confirm</button>
























// //delete
// async function deleteData(id) {

//         await fetch('http://localhost:3000/posts/' + id , {
//         method: 'DELETE',});
  
//       alert("Data Berhasil dihapus!")

//     getData()
    
//   }


//   //update
//   async function updateData(id, firstname, lastname){
//     console.log(id, firstname, lastname)

//     isUpdating = true;

//     idUpdate = id
//     const updatefirstName = document.getElementById('firstname')
//     const updatelastName = document.getElementById('lastname')

//         updatefirstName.value = firstname;
//         updatelastName.value = lastname;

//         getData()
//   }



  
// const btnSubmit = document.getElementById('btnSubmit')
// const deleteButtons = document.querySelectorAll('.btnDelete')

