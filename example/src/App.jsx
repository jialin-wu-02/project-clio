import React, { Component } from 'react'

import { Button } from 'project-clio'
import { Card } from 'project-clio'
import { H1, H2, H3, L, R, S } from 'project-clio'

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
          <H3> Card Title </H3>
          <R> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed natus, minus obcaecati, velit magni praesentium voluptatem facilis dolorem facere veniam ipsa in. Assumenda, eum? Quam blanditiis mollitia eveniet sapiente alias! </R>
          <Button size="md" />
        </Card>
        <p> </p>
        <Card>
          <H3> Card Title Two </H3>
          <R> Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam assumenda itaque magnam totam ipsa inventore, blanditiis autem sint repudiandae ea porro, provident non voluptates commodi similique, beatae ipsum delectus exercitationem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed natus, minus obcaecati, velit magni praesentium voluptatem facilis dolorem facere veniam ipsa in. Assumenda, eum? Quam blanditiis mollitia eveniet sapiente alias! </R>
          <Button size="lg" type="border" />
        </Card>
        <p> </p>
      </div>
    )
  }
}
