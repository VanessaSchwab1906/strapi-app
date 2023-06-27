# Simple Review App with Strapi 

This is a simple web application built with Strapi and React, allowing users to read reviews.

## Features

Browse reviews: Users can view a list of reviews on the main page.
Read review details: Clicking on a review takes the user to a dedicated page displaying the full details of the selected review.

## API Options

- REST API
The app retrieves data from the Strapi backend using a REST API. Axios is used to make HTTP requests to the relevant endpoints. The REST API endpoints provided by Strapi are as follows:

/reviews: Fetches all reviews.
/reviews/:id: Fetches a specific review by ID.
You can refer to the Strapi documentation for more details on the available REST API endpoints and their usage.

- GraphQL 
If you prefer to use GraphQL instead of the REST API, Strapi also provides a GraphQL API. To interact with the GraphQL API, you can use Apollo Client or any other GraphQL client library of your choice.

The GraphQL endpoint for the Strapi backend is typically located at http://localhost:1337/graphql. You can utilize this endpoint to send GraphQL queries and mutations to retrieve and manipulate data.

## Getting Started
To run the app locally, follow these steps:

- Clone the repository
- Install the dependencies for both the backend and frontend:
- Configure the Strapi backend: 
Set up your database connection in the .env file in the backend directory.
Create the necessary content types and fields in the Strapi admin panel or using the Strapi CLI.
- Start the backend server and the frontend development server
- Open your browser and navigate to http://localhost:3000 to access the app
