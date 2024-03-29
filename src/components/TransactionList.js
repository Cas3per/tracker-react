import React, { useContext } from 'react'
import { GlobalContext, GlobalProvider } from '../context/GlobalState'
import { Transact } from './Transact'

export const TransactionList = () => {
  const { transactions} = useContext(GlobalContext)


  return (
    <>
        <h3>History</h3>
        <ul className="list">
          {transactions.map(transaction => (<Transact key={transaction.id} transaction= { transaction} />))} 
        </ul>
    </>    

  )
}
