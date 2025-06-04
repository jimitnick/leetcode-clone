import React, { useEffect, useState } from 'react'
import Competitions from './Competitions'
import axios from 'axios';

const Contests = () => {
    const [contests, setContests] = useState([]);
    const [submissions, setSubmissions] = useState({});
    useEffect(() => {
        axios.get("https://codeforces.com/api/contest.list?gym=false")
        .then((response) => {
            setContests(response.data.result);
            const top10 = response.data.result.slice(0,10);


            top10.forEach(element => {
                getNumberOfSubmission(element.id)
                .then((count) => {
                    setSubmissions(prev => ({...prev, [element.id]: count}))
                })
            });
            console.log(response.data.result);
        })
        .catch((error) => {
            console.log(error);
            setContests([]);
        })
    },[])
  return (
    <div className='w-screen h-screen flex flex-wrap items-center justify-center gap-4'>
        <div className='h-[30px] w-full'></div>
        {
            contests.slice(0,50).map((contest) => <Competitions key= {contest.id} title={contest.name} status = {contest.phase} date = {convertUnixToTimeLeft(contest.startTimeSeconds)} submission = {submissions.length}/>)
        }
        
    </div>
  )
}

export default Contests
async function getNumberOfSubmission(userId){
    axios.get(`https://codeforces.com/api/contest.status?contestId=${userId}&from=1`)
    .then((response)=> {
        if (response){
            return response.data.result.length;
        }
    })
    .catch((error) => {
        console.log(error);
    })
}

function convertUnixToTimeLeft(startTimeSeconds) {
  const contestDate = new Date(startTimeSeconds * 1000); // Convert to milliseconds
  const now = new Date();

  const diffMs = contestDate - now;

  if (diffMs <= 0) return "Started or Ended";

  const diffSec = Math.floor(diffMs / 1000);

  const days = Math.floor(diffSec / (3600 * 24));
  const hours = Math.floor((diffSec % (3600 * 24)) / 3600);
  const minutes = Math.floor((diffSec % 3600) / 60);

  return `${days}d ${hours}h ${minutes}m`;
}
