import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Problems = () => {
    const [problems, setProblems] = useState([]);
    const [problemStatistics, setProblemStatistics] = useState([]);
    const [input, setInput] = useState("");
    const [number, setNumber] = useState(null);
  useEffect(() => {
    axios.get(`https://codeforces.com/api/problemset.problems?tags=${input}`)
    .then((response) => {
        setProblems(response.data.result.problems);
        setProblemStatistics(response.data.result.problemStatistics);
    })
    .catch((error) => {
        console.log(error);
    })
  },[])
  return (
    <div className='w-screen h-screen flex flex-wrap gap-4'>
      <div className='w-full h-[100px] flex items-center justify-center p-5 gap-4'>
        <input type="text" placeholder='Give the tags to search for the problems like (dsa,dynamic programming)' className='w-[50%] p-4 rounded-4xl outline-none bg-white' onChange={(e) => {
          setInput(e.target.value)
        }}/>
        <input type="number" name="number" id="number" className='bg-white text-black px-4 py-4 w-120 rounded-4xl outline-none' placeholder='Enter the number of search results you want to see ..' onChange={(e) => {
          setNumber(e.target.value)
        }}/>
      </div>
      {
        problems.slice(0,20).map((problem) => <Problem name = {problem.name} type= {problem.type} tags = {problem.tags}/>)
      }
    </div>
  )
}

export default Problems
function Problem({ contestId ,name, tags, type}){
  return(
    <div key={contestId} className='flex flex-col gap-4 w-[300px] h-[350px] rounded-xl bg-white p-4 justify-between'>
      <div className='flex flex-wrap w-full border-b-2 items-center justify-center'>
        <h1 className='text-xl text-black'>{name}</h1>
      </div>
      <div className='flex flex-col gap-3'>
        <h2 className='text-lg text-black capitalize'>Type: {type}</h2>
      </div>
      <div className='flex gap-3 flex-wrap'>
        {tags.map((tag, index) => (
          <div key={index} className="bg-gray-300 hover:bg-gray-200 px-2 py-1 w-fit cursor-pointer rounded text-black capitalize">
            {tag}
          </div>
        ))}
      </div>
    </div>
  )
}