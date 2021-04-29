var classList = document.querySelector('ul')


async function getInfo(){
await fetch('./classvidsinfo.json')
.then(response => response.json())
.then(data => {
                const jsonData = data
                console.log(jsonData)


                const classDetails = jsonData.map(item=>
                    `<li class="list-group-item sessionNames"><strong>${item.SessionNumber}</strong>   ${item.SessionName} <span class="float-end"><small>${item.Date}</small></span>
                        <ul class="vidList"> 
                        ${item.Videos.map((vid,i)=>`<li><a href='${vid}' target="_blank">Video: ${i+1}</a></li>`).join('')}
                        </ul>
                    </li>`
                    ).join('')
                
                console.log(classDetails)
                document.querySelector('.classVidList').innerHTML+=classDetails


    })

}
getInfo()
