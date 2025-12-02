import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  
  const [userdata, setuserdata] = useState([])
  const [index, setindex] = useState(1)



  async function getdata(){
    
     const response= await axios.get(`https://picsum.photos/v2/list?       page=${index}&limit=25`)

     setuserdata(response.data)
     console.log(response.data)
      

  }

  useEffect(function(){
    getdata()
  },[index])

 
let update = "date not present"

  
  if(userdata.length>0){
    update =  userdata.map(function(ele,idx){
      return<div  key={idx} className=' h-50 w-50'>
        <a href={ele.url} target='_blank'>
         <div className='h-44 w-50 overflow-hidden'> 
        <img className='h-full w-full object-cover' src={ele.download_url} alt={ele.author}></img>
      </div>
      <h1 className='text-center '>{ele.author}</h1>
      </a>
      </div>
    }) 
  }
  






  return (

    <div>

  <div className=' bg-black h-screen  p-15 overflow-auto text-white ' >
       {/* <div>{userdata}</div> */}
     {/* <button onClick={getdata} 
     className='bg-amber-500 active:scale-95 m-3 w-23 p-2'> click</button> */}

      <div className=' flex flex-wrap gap-5'>
       
      {update}
     </div>

   

     <div className=' flex justify-center items-center gap-20 my-5'>
      <button onClick={()=>{ if(index>1){setindex(index-1)}}} className='bg-amber-400 text-black active:scale-95 w-20 text-center'>Previous</button>
      <h2>{index}</h2>
      <button onClick={()=>{setindex(index+1)}} className='bg-amber-400 active:scale-95 text-black w-20 text-center'>Next</button>
     </div>
     
       </div>



     </div>
  )
}

export default App
