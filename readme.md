
# TodoList App with Django and React

## Overview
This TodoList application is a full-stack web app with a Django backend and a React frontend. It features user authorization, Dockerized environments for both frontend and backend, and deployment on AWS. The frontend interacts with the backend through API calls for user registration and authentication, using Axios for communication. The project is structured for deployment using Docker Compose, with port forwarding to expose the frontend to the internet.

## Key Features
- **Full-Stack Application:** Integrates a React frontend with a Django backend.
- **User Authorization:** Implemented user registration and sign-in functionality.
- **Dockerization:** Both frontend and backend are containerized using Docker.
- **Docker Compose:** Simplifies the deployment of multi-container Docker applications.
- **AWS Deployment:** Automated deployment to AWS through GitHub Actions.
- **API Interaction:** Frontend communicates with the backend using Axios for API calls.
- **PostgreSQL Database:** Utilizes PostgreSQL for robust data management.
- **Django Rest Framework:** Backend API development using Django Rest Framework.
- **Tailwind CSS:** Stylish frontend design using Tailwind CSS.

## Architecture
- **Database:** PostgreSQL running in a Docker container.
- **Backend:** Django application connected to the PostgreSQL database.
- **Frontend:** React application making API calls to the backend.

## Docker Setup
The application is set up using Docker Compose with the following services:
- **PostgreSQL Database (`db`):** PostgreSQL server running in a container.
- **Django Backend (`backend`):** Django app serving the API, connected to the PostgreSQL database.
- **React Frontend (`frontend`):** React app that communicates with the Django backend.

## Running the Application
To run the application, you need to have Docker and Docker Compose installed.

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Dandiggas/Todolistapp
   cd Todolistapp
   ```

2. **Start the Application:**
   ```bash
   docker-compose up
   ```
   This command will start all the services defined in the `docker-compose.yml` file.

## Deployment
The application is deployed on AWS using GitHub Actions for continuous integration and continuous deployment. The workflow includes steps for building Docker images, pushing them to a registry, and deploying them to AWS.

## Contributing
Contributions to the project are welcome. Please follow the standard fork, branch, and pull request workflow.


## Contact
For any inquiries or contributions, please contact Daniel Adekugbe at DanielAdekugbe@gmail.com.

---

This TodoList application serves as a showcase of full-stack development skills, including front-end and back-end integration, Docker containerization, and cloud deployment.
