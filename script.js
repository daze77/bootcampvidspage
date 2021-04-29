var classList = document.querySelector('ul')




// function getInfo(){
// fetch('/classvidsinfo.json')
// .then(function (response) {
//   return response.json();
// })
// .then(function (data) {
//     console.log(data)
//   for (var i = 0; i < data.length; i++) {
//     var listItem = document.createElement('li');
//     listItem.classList="list-group-item"
//     listItem.textContent = data[i].SessionNumber + "  " + data[i].SessionName;
//     // console.log(listItem)
//     // console.log(classList)
//     classList.appendChild(listItem);
  

//   for (var x=0; x<data.Videos; x++){
//       console.log(data.Videos)
//     var subList = document.createElement('li')
//     subList.textContent=data[i]
//     console.log(subList)



//   }}
// }










// );

// }
// getInfo()










fetch('/classvidsinfo.json')
.then(response => response.json())
.then(data => {
                const jsonData = data
                console.log(jsonData)


                const classDetails = jsonData.map(item=>
                    `<li class="list-group-item"><strong>${item.SessionNumber}</strong>   ${item.SessionName}
                        <ul class="vidList"> 
                        ${item.Videos.map((vid,i)=>`<li><a href='${vid}' target="_blank">Video: ${i+1}</a></li>`).join('')}
                        </ul>
                    </li>`
                    ).join('')
                
                console.log(classDetails)
                document.querySelector('.classVidList').innerHTML+=classDetails


    })
