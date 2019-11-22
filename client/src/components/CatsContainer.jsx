import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { getAllCats, putCat, postCat, deleteCat } from '../services/api-helper';
import CatsList from './CatsList';
import CatPage from './CatPage';
import CatsCreate from './CatsCreate';
import CatsEdit from './CatsEdit';

class CatsContainer extends Component {
  state = {
    cats: [],
    formData: {
      name: '',
      breed: '',
      img_url: ''
    }
  }

  async componentDidMount() {
    const cats = await getAllCats();
    this.setState({ cats });
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      formData: {
        ...prevState.formData,
        [name]: value
      }
    }));
  }

  createSubmit = async () => {
    const newCat = await postCat(this.state.formData);
    this.setState(prevState => ({
      cats: [
        ...prevState.cats,
        newCat
      ]
    }));
    this.props.history.push('/cats');
  }
  removeCat = async (catId) => {
    await deleteCat(catId);
    this.setState(prevState => ({
      cats: prevState.cats.filter(cat => cat.id !== catId)
    }));
    this.props.history.push('/cats');
  }

  editSubmit = async (id) => {
    const updatedCat = await putCat(id, this.state.formData);
    this.setState(prevState => ({
      cats: prevState.cats.map(cat => {
        return cat.id === parseInt(id) ? updatedCat : cat
      })
    }));
    this.props.history.push(`/cats/${id}`)
  }

  setEdit = (catData) => {
    const { name, breed, img_url } = catData;
    this.setState({
      formData: {
        name,
        breed,
        img_url
      }
    });
    this.props.history.push(`/cats/${catData.id}/edit`);
  }

  render() {
    return (
      <div>
        <Route exact path='/cats' render={() => (
          <CatsList
            cats={this.state.cats}
          />
        )} />
        <Route exact path='/cats/:id' render={(props) => {
          const catId = props.match.params.id;
          const currentCat = this.state.cats.find(cat => cat.id === parseInt(catId));
          return <CatPage
            setEdit={this.setEdit}
            removeCat={this.removeCat}
            currentCat={currentCat}
          />
        }} />
        <Route path='/cats/new' render={() => (
          <CatsCreate
            formData={this.state.formData}
            handleChange={this.handleChange}
            createSubmit={this.createSubmit}
          />
        )} />
        <Route path="/cats/:id/edit" render={(props) => {
          const catId = props.match.params.id;
          return <CatsEdit
            catId={catId}
            formData={this.state.formData}
            handleChange={this.handleChange}
            editSubmit={this.editSubmit}
          />
        }} />
      </div>
    )
  }
};

export default withRouter(CatsContainer);