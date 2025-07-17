function bringData(){

    const container=document.querySelector('.data-container')

   fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response)=>{   
        console.log(response)
        return response.json()
    }).then( (data)=>{
        data.forEach(element => {
            
            const titleDiv=document.createElement('div')
            const idDiv=document.createElement('div')
            const bodyDiv=document.createElement('div')
            

            titleDiv.innerText=element.title
            idDiv.innerText=element.id
            bodyDiv.innerText=element.body

            container.appendChild(idDiv)
            container.appendChild(bodyDiv)
            container.appendChild(titleDiv)
            console.log(element)
        });
    })
  

}