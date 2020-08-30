import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'

import Layout from '../../Layouts/Layout';

export default function CatDetail(props) {
  const [cat, setCat] = useState(null);
  const { allCats, removeCat } = props;
  const { id } = useParams();

  useEffect(() => {
    if (allCats.length) {
      const oneCat = allCats.find((cat) => cat.id === Number(id));
      setCat(oneCat)
    }
  }, [allCats, id])

  return (
    <Layout>
      <div className="cat-details">
        {
          cat &&
          <div className="card">
            <h3>{cat.name}</h3>
            <img src={cat.img_url} alt={cat.name} />
            <p>{cat.breed}</p>
            <Link to={`/cats/${cat.id}/edit`}><button>Update</button></Link>
            <button onClick={() => removeCat(cat.id)}>Release</button>
          </div>
        }
      </div>
    </Layout>
  )
}
