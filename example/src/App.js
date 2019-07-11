import React, { Component } from 'react'

import { Button } from 'project-clio'
import { Card } from 'project-clio'

import styles from './App.module.css';

export default class App extends Component {
  render () {
    return (
      <div className={styles.main}>
        <p>  </p>
        <Button size="sm" type="border" />
        <p>  </p>
        <Button size="md" type="expand" />
        <p>  </p>
        <Button size="lg" />
        <p>  </p>
        <Card>
          <p>Card</p>
          <Button size="md" />
        </Card>
      </div>
    )
  }
}
