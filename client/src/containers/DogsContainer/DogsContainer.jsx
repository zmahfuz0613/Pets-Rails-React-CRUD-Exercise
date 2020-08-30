import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Dogs from '../../screens/Dogs/Dogs';
import DogCreate from '../../screens/DogCreate/DogCreate';
import DogEdit from '../../screens/DogEdit/DogEdit';


export default function DogsContainer() {
  // 1. make some empty state for dogs list
  const history = useHistory();

  useEffect(() => {
    // 3. call your function that sets all dogs in state
  }, [])

  // 2. make a function to get all dogs and then set state

  // 8. make a function to post a dog and set state
  // this function should take in some dogData as a parameter
  // this function should also push '/dogs' to the router history

  // 11.  make a function to edit a dog and set state
  // this function should take in an id and some dogData as a parameter
  // this function should also push '/dogs' to the router history

  // 14.make a function to delete a dog and set state
  // this function should take in an id as a parameter
  // this function should also push '/dogs' to the router history

  return (
    <>
      <Switch>
        <Route path='/dogs/new'>
          <DogCreate
            // 9. pass the create dog function through props
            // 10. complete the DogCreate.js component
          />
        </Route>
        <Route path='/dogs/:id/edit'>
          <DogEdit
            // 12. pass all dogs and the update dog function through props
            // 13. complete the DogEdit.jsx component
          />
        </Route>
        <Route path='/dogs/:id'>
          <CatDetail
            // 6. pass all dogs through props
            // 7. complete the DogsDetail.jsx component except for the delete dog part
            // 15. complete the delete dog parts of DogsDetail.jsx 
          />
        </Route>
        <Route path='/dogs'>
          <Dogs
            // 4. pass all dogs through props
            // 5. complete the Dogs.jsx component
          />
        </Route>
      </Switch>
    </>
  )
}
