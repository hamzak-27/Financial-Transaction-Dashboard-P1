import React from 'react'
import Transaction from '../ui/transactions/transaction'
import styles from '@/app/ui/dashboard/dashboard.module.css'

const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
      <Transaction/>

      </div>
      
    </div>
  )
}

export default Dashboard