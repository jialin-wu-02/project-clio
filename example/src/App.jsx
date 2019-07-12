import React, { Component } from 'react'

import { Button, Card, FlipCard } from 'project-clio'
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
        <FlipCard>
          {/* <FlipCard.Front> */}
            <img src="" alt="" srcset=""/>
          {/* </FlipCard.Front> */}
          {/* <FlipCard.Back> */}
            <H3> Card Title Two </H3>
            <R> Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam assumenda itaque magnam totam ipsa inventore, blanditiis autem sint repudiandae ea porro, provident non voluptates commodi similique, beatae ipsum delectus exercitationem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed natus, minus obcaecati, velit magni praesentium voluptatem facilis dolorem facere veniam ipsa in. Assumenda, eum? Quam blanditiis mollitia eveniet sapiente alias! </R>
            <Button size="lg" type="border" />
          {/* </FlipCard.Back> */}
        </FlipCard>
        <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"                 title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"                 title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
        <p> </p>
      </div>
    )
  }
}
