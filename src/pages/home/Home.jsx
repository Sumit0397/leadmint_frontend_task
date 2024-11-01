import React from 'react'
import Card from '../../components/home/Card'

const Home = () => {

  const userDetails = [
    {
      id:1,
      header:'Users',
      num:'140'
    },
    {
      id:2,
      header:'Referal Users',
      num:'64'
    },
    {
      id:3,
      header:"Today's Organic Users" ,
      num:'76'
    },
    {
      id:4,
      header:'This Week Users',
      num:'679'
    },
    {
      id:5,
      header:'This Month Users',
      num:'22727'
    },
    {
      id:6,
      header:'Last Month Users',
      num:'71291'
    },
  ]

  return (
    <div className='w-full flex flex-wrap items-center justify-center'>
      {
        userDetails.map((data) => (
          <Card key={data.id} header={data.header} number={data.num}/>
        ))
      }
    </div>
  )
}

export default Home
