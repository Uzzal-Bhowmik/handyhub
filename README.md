# HandyHub

## Overview  
**HandyHub** is a **service marketplace MVP** where **service providers** can register, list their services, and connect with customers in need. The platform integrates a **fraud prevention system**, **Google Maps-based service filtering**, and a **rating-based sorting mechanism** to enhance the user experience.

## Key Features
- **Service Provider Registration & Authentication**
  - Service providers can sign up, create profiles, and list their services.  
  - Users can register to browse, book, and interact with service providers.  

- **Fraud Prevention System**   
  - Before service providers can list services, **admin verification** is required.  
  - Admin manually reviews and approves service provider details before activation.  

- **Google Maps Integration**   
  - Users can filter service providers based on their **location**.  
  - Both users and service providers can view each other's profiles and history.  

- **Advanced Filtering & Sorting**  
  - Filter services by **rating, charges, and location** for better user experience.  

- **Micro-Frontend Architecture**  
  - Implemented **modular frontends** for scalable, independent feature deployment.  

## Tech Stack   
- **Frontend:** Next.js, React, Redux Toolkit, TailwindCSS  
- **Backend:** Express.js, Node.js, MongoDB, Mongoose  
- **Other:** Google Maps API, RTK Query, JWT Authentication  

## Getting Started   

### Prerequisites  
Ensure you have the following installed:  
- **Node.js** (Latest LTS)  
- **MongoDB** (Local or Atlas)  

### Installation  

#### 1. Clone the Repository  
```bash
git clone https://github.com/Uzzal-Bhowmik/handyhub.git
cd handyhub
```


#### 2. Backend Setup (Express + MongoDB)
```bash
cd handyhub-server
npm install
```


#### 3. Create a .env file in handyhub-server/ and add:
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
GOOGLE_MAPS_API_KEY=your_api_key
