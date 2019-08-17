import React, { useState , useEffect, createContext} from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import data from './data.json'
import axios from 'axios'
import Topnav from './components/Topnav'
import ClientsTable from './components/clients/ClientsTable'
import Actions from './components/actions/Actions'
import Analytics from './components/analytics/Analytics'
import './App.scss'

export const GetClientsContext = createContext()
export const ClientsContext = createContext()
export const OwnersContext = createContext()
export const EmailTypesContext = createContext()

function App() {

  const owners = ['Emily Durham', 'Janice Alvarado', 'Leila Howe', 'Hull Conrad', 'Shepherd Stone', 'Martin Massey', 'Barton Ramirez']
  const emailTypes = ['A', 'B', 'C', 'D']

  const [clients, setClients] = useState([])    

  const getAllClients = async query => {
    const allClients = await axios.get('http://localhost:4000/clients')
    setClients(allClients.data)
  }

  return (
    <div className="App">
      <Router>
        <Route path='/' render={() => <Topnav />} />
        <ClientsContext.Provider value={clients}>
            <GetClientsContext.Provider value={getAllClients}>
            <OwnersContext.Provider value={owners}>
              <Route exact path='/clients' render={() => <ClientsTable />} />
              <EmailTypesContext.Provider value={emailTypes}>
                <Route exact path='/actions' render={() => <Actions />} />
              </EmailTypesContext.Provider>
            </OwnersContext.Provider>
            <Route exact path='/analytics' render={() => <Analytics />} />
          </GetClientsContext.Provider>
        </ClientsContext.Provider>
      </Router>
    </div>
  );
}

export default App;
