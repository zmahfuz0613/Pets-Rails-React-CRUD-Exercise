# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)  SOFTWARE ENGINEERING IMMERSIVE

![](https://media1.giphy.com/media/hPyONzUYJhLZS/giphy.gif)

## Pets CRUD Exercise

### Overview

In this exercise, you will be creating a backend with two resources, "Dogs" and "Cats". The two tables are not related. There is an empty rails app in the starter code. You will be responsible for creating everything else. On the frontend, we have provided you with full CRUD for "Cats" but not "Dogs.

### Setup

1. fork, clone and `cd` into the project directory
1. `bundle install`
1. `rails db:create`
1. open a new terminal tab
1. cd into `./client`
1. `npm install`

### Models

Let's start off by creating models for our two resources:

`rails g model ResourceName column:type`

Both the "Dog" and "Cat" resource should have `name`, `breed` and `img_url`. All of which are strings.

> When we pass columns to the model generation, rails will also make migrations for us. Don't forget to migrate them with `rails db:migrate`
 
### Seed

In our `/db/seeds.rb` file, we will find two arrays of pet data. Let's go ahead create them in the database. After we're done with the `seeds.rb` file, let's run `rails db:seed`

### Controllers

Next let's make some controllers for both:

`rails g controller PluralResourceName`

Fill each controller with methods for full CRUD. (index, show, create, update, destroy)

### Routes

Add all of our routes for both "Cats" and "Dogs".

`resources :resourcename`

> Since these two resources are not related, they do not need to be nested in the routes

### CORS

In order to use our React frontend, you will need to configure CORS on the backend. refer back to the [cors setup](https://git.generalassemb.ly/sei-nyc-apollo/cors-setup) lesson if you need to.

### Frontend BONUS!!!

There is already full CRUD for Cats. Let's add CRUD for Dogs as well. There are comments to help you out and also feel free reference the cats part of the app.
