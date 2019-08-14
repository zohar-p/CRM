import React, { useState , useEffect} from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import data from './data.json'
import axios from 'axios'
import Topnav from './components/Topnav'
import ClientsTable from './components/clients/ClientsTable'
import Actions from './components/actions/Actions'
import './App.scss'

// const clients = [
//   {
//     "_id": "5b9f48a2406b2cd74c55c663",
//     "name": "Perkins Cunningham",
//     "email": "perkinscunningham@imant.com",
//     "firstContact": "2018-11-26T22:00:00.000Z",
//     "emailType": "B",
//     "sold": true,
//     "owner": "Emily Durham",
//     "country": "Romania"
//   },
//   {
//     "_id": "5b9f48a25afcc00e1c1ddfbf",
//     "name": "Fischer Hammond",
//     "email": "fischerhammond@imant.com",
//     "firstContact": "2017-05-15T21:00:00.000Z",
//     "emailType": null,
//     "sold": false,
//     "owner": "Janice Alvarado",
//     "country": "Turkey"
//   },
//   {
//     "_id": "5b9f48a2717f46c7647d2792",
//     "name": "Gonzalez Armstrong",
//     "email": "gonzalezarmstrong@imant.com",
//     "firstContact": "2018-04-05T21:00:00.000Z",
//     "emailType": null,
//     "sold": false,
//     "owner": "Leila Howe",
//     "country": "France"
//   }
// ]

function App() {

  const [clients, setClients] = useState([])

  useEffect(() => {
    const getAllClients = async () => {
      const allClients = await axios.get('http://localhost:4000/clients')
      setClients(allClients.data)
    }
    getAllClients()
  }, [])

  return (
    <div className="App">
      <Router>
        <Route path='/' render={() => <Topnav />} />
        <Route exact path='/clients' render={() => <ClientsTable clients={clients}/>} />
        <Route exact path='/actions' render={() => <Actions />} />
      </Router>
    </div>
  );
}

export default App;
