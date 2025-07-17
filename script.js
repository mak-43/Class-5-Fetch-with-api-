function bringData(){

    const container=document.querySelector('.data-container')

   fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response)=>{   
        
        return response.json()
    }).then( (data)=>{
        data.forEach((element,i) => {
            console.log(i)
            const postDiv= document.createElement('div')
            postDiv.className='post'
            const titleDiv=document.createElement('div')
            const idDiv=document.createElement('div')
            const bodyDiv=document.createElement('div')
            

            titleDiv.innerText=element.title
            idDiv.innerText=element.id
            bodyDiv.innerText=element.body

            postDiv.appendChild(idDiv)
            postDiv.appendChild(titleDiv)
            postDiv.appendChild(bodyDiv)

            container.appendChild(postDiv)
           
        });
    })
  

}