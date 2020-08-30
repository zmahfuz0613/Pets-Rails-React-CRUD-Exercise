import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'

import Layout from '../../Layouts/Layout';

export default function DogDetail() {
  // make state for one dog
  const { id } = useParams();
  // deconstruct all dogs from props
  // also deconstruct the delete dog function once it's passed

  useEffect(() => {
    if (/* check the all dogs array to make sure it's not empty*/) {
      // use .find on the all dogs array to pull out the single dog
      // that matches the id from the url params
      // .find((dog) => dog.id === Number(id));

      // set the one dog in state 
    }
  }, [/* watch the all dogs array for updates*/, id])

  return (
    <Layout>
      <div className="pet-details">
        {
          /* check the single dog in state for data */ &&
          <div className="card">
            <h3>{/* dog's name as the card title */}</h3>
            <img src={/* dog's image url as the img source */} alt={/* we can use the dog's name as the alt attribute */} />
            <p>{/* dog's breed at he sub text */}</p>
            <Link to={`/dogs/${/* use the dogs id in the url param */}/edit`}><button>Update</button></Link>
            <button onClick={() => /* call the delete dog function here and pass the dog's id as the argument */}>Release</button>
          </div>
        }
      </div>
    </Layout>
  )
}
