import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/Card/Card';
import Layout from '../../Layouts/Layout';

export default function Cats(props) {
  const { allCats } = props;
  return (
    <Layout>
      <div className="card-list">
        {allCats.map(cat => (
          <React.Fragment key={cat.id}>
            <Link to={`/cats/${cat.id}`}>
              <Card
                title={cat.name}
                image={cat.img_url}
                description={cat.breed}
              />
            </Link>
          </React.Fragment>
        ))}
      </div>
      <Link to="/cats/new"><button>Adopt a cat</button></Link>
    </Layout>
  )
}
