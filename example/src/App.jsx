import React, { Component } from 'react'

import { Button } from 'project-clio'
import { Card } from 'project-clio'
import { H1 } from 'project-clio'

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
          <H1>Card</H1>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed natus, minus obcaecati, velit magni praesentium voluptatem facilis dolorem facere veniam ipsa in. Assumenda, eum? Quam blanditiis mollitia eveniet sapiente alias! </p>
          <Button size="md" />
        </Card>
      </div>
    )
  }
}
