import React, { Component } from 'react'

import { Button, Card, FlipCard, Image, Nav } from 'project-clio'
import { H1, H2, H3, B, R, S } from 'project-clio'

import styles from './App.module.css';
import printer from './printer.png'

export default class App extends Component {
  render () {
    return (
      <div>
        <Nav> 
            <Nav.Item href="#"> Home </Nav.Item>
            <Nav.Item href="#"> About </Nav.Item>
            <Nav.Item href="#"> 123 </Nav.Item>
            <Nav.Item href="#"> 123 </Nav.Item>
        </Nav>
        <p>  </p>
        <H1> Heading One </H1>
        <H2> Heading Two </H2>
        <H3> Heading Three </H3>
        <B> Bold </B>
        <S> Small </S>
        <R> Regular </R>
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
        <Card>
          <H3> Card Title </H3>
          <Image src={printer} alt="" width="150px"/>
          <Button size="md" />
        </Card>
        <p> </p>
        <div>
        {/* <FlipCard>
          <FlipCard.Front>
            <H3> Hover Here </H3>
            <img src={printer} alt="" style={{width: 150+"px"}}/>
          </FlipCard.Front>
          <FlipCard.Back>
            <H3> Card Title Two </H3>
            <R> Lovident non voluptates commodi similique, beatae ipsum delectus exercitationem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed natus, minus obcaecati, velit magni praesentium voluptatem facilis dolorem facere veniam ipsa in. Assumenda, eum? Quam blanditiis mollitia eveniet sapiente alias! </R>
            <Button size="lg" type="border" />
          </FlipCard.Back>
        </FlipCard> */}
        {/* <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"                 title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"                 title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div> */}
        <p> </p>
        </div>
      </div>
    )
  }
}
