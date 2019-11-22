import React from 'react'

export default function CatPage(props) {
  const { currentCat } = props;
  return (
    <div>
      {currentCat && (
        <>
          <h1>{currentCat.name}</h1>
          <p>{currentCat.breed}</p>
          <img src={currentCat.img_url} alt={currentCat.name} />
          <br />
          <button onClick={() => {
            props.removeCat(currentCat.id)
          }}>Delete</button>
          <button onClick={() => {
            props.setEdit(currentCat);
          }}>Edit</button>
        </>
      )}
    </div>
  )
}
