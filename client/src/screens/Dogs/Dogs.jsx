import React from 'react'
import Layout from '../../Layouts/Layout'

export default function Dogs() {
  // deconstruct the dogs from props
  
  return (
    <Layout>
      <div className="card-list">
        {/* map through all dogs */.map(dog => (
          <React.Fragment key={/* use the dog id for the key*/}>
            <Link to={`/cats/${/*link to the individual dog id */}`}>
              <Card
                title={/* pass the dog's name as the title*/}
                image={/* pass the dog's image */}
                description={/* pass the dogs breed as the description */}
              />
            </Link>
          </React.Fragment>
        ))}
      </div>
      <Link to="/dogs/new"><button>Adopt a dog</button></Link>
    </Layout>
  )
}
