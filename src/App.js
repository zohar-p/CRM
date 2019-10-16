import React, { useState, createContext} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import axios from 'axios'
import Topnav from './components/Topnav'
import ClientsTable from './components/clients/ClientsTable'
import Actions from './components/actions/Actions'
import Analytics from './components/analytics/Analytics'
import './App.scss'
import Notifier from './components/Notifier';

export const NotifierContext = createContext()
export const GetClientsContext = createContext()
export const ClientsContext = createContext()
export const OwnersContext = createContext()
export const EmailTypesContext = createContext()

function App() {
  const owners = ['Emily Durham', 'Janice Alvarado', 'Leila Howe', 'Hull Conrad', 'Shepherd Stone', 'Martin Massey', 'Barton Ramirez']
  const emailTypes = ['A', 'B', 'C', 'D']
  
  const [clients, setClients] = useState([])    
  const [notifier, setNotifier] = useState(false)
  const [msg, setMsg] = useState('')

  const getAllClients = async () => {
    const allClients = await axios.get('http://localhost:4000/clients')
    setClients(allClients.data)
  }

  return (
    <div className="App">
      <Router>
        <Route path='/' render={() => <Topnav />} />
        <NotifierContext.Provider value={{setNotifier, setMsg}}>
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
        </NotifierContext.Provider>
      </Router>
      <Notifier open={notifier} setNotifier={setNotifier} msg={msg} />
    </div>
  );
}

export default App;
