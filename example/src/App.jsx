import React, { Component } from 'react'

import { Button, Card, HoverCard, Checkbox, FlipCard, Image, Nav, Carousel } from 'project-clio'
import { H1, H2, H3, B, R, S } from 'project-clio'
import { COLOR, SIZE } from 'project-clio'

import './App.module.css';
import printer from './printer.png'
import plants from './plants.jpg'

export default class App extends Component {
  render () {
    return (
      <div>
        <Nav>
            <Nav.Item href="#"> Home </Nav.Item>
            <Nav.Item href="#"> About </Nav.Item>
            <Nav.Item href="#"> Product </Nav.Item>
            <Nav.Item href="#"> Contact </Nav.Item>
        </Nav>
        <p>  </p>
        <H1> Heading One </H1>
        <H2> Heading Two </H2>
        <H3> Heading Three </H3>
        <B> Bold </B>
        <S> Small </S>
        <R> Regular </R>
        {/* <Checkbox label="This is a Checkbox."/> */}
        <Button content="Button" color={COLOR.BLUE} size={SIZE.MD} type="border" />
        <p>  </p>
        <Button content="Large" color={COLOR.LIGHT} size={SIZE.LG} type="expand" />
        <p>  </p>
        <Button content="Button" color={COLOR.DARK} size={SIZE.MD} type="border" />
        <p>  </p>
        <Card>
          <H3> Card Title </H3>
          <R> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed natus, minus obcaecati, velit magni praesentium voluptatem facilis dolorem facere veniam ipsa in. Assumenda, eum? Quam blanditiis mollitia eveniet sapiente alias! </R>
          <Button content="Button" color={COLOR.DARK} size={SIZE.MD} />
        </Card>
        <p> </p>
        <div className="flex-container">
        <Card>
          <H3> Card Title </H3>
          <Image src={printer} alt="" width="150px"/>
          <Button content="Button" size={SIZE.MD} />
        </Card>
        <Card>
          <H3> Card Title </H3>
          <Image src={printer} alt="" width="150px"/>
          <Button content="Button" size={SIZE.MD} />
        </Card>
        <Card>
          <H3> Card Title </H3>
          <Image src={printer} alt="" width="150px"/>
          <Button content="Button" size={SIZE.MD} />
        </Card>
        </div>

        <p> </p>
        <HoverCard>
          <HoverCard.Front> 
            <Image src={printer} alt="" width="150px"/>
          </HoverCard.Front>
          <HoverCard.Back>
            <R> lorem lorem hover card. lorem lorem hover card. lorem lorem hover card. </R>
          </HoverCard.Back>
        </HoverCard>
        {/* <Carousel>
          <Carousel.Slide>
            <H3> Slide Title 1 </H3>
            <Image src={printer} alt="" width="150px"/>
            <Button content="Button" size={SIZE.MD} />
          </Carousel.Slide>
          <Carousel.Slide>
            <H3> Slide Title 2 </H3>
            <Image src={printer} alt="" width="150px"/>
            <Button content="Button" size={SIZE.MD} />
          </Carousel.Slide>
        </Carousel> */}
        {/* <Image src={plants} width="80%">
          <H1> HERE IS A TITLE </H1>
          <Button content="Button" size={SIZE.MD}/>
        </Image> */}
        {/* Photo by eberhard grossgasteiger on Unsplash */}
        {/* <FlipCard>
          <FlipCard.Front>
            <H3> Hover Here </H3>
            <img src={printer} alt="" style={{width: 150+"px"}}/>
          </FlipCard.Front>
          <FlipCard.Back>
            <H3> Card Title Two </H3>
            <R> Lovident non voluptates commodi similique, beatae ipsum delectus exercitationem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed natus, minus obcaecati, velit magni praesentium voluptatem facilis dolorem facere veniam ipsa in. Assumenda, eum? Quam blanditiis mollitia eveniet sapiente alias! </R>
            <Button content="Button" size={SIZE.MD} type="border" />
          </FlipCard.Back>
        </FlipCard> */}
        {/* <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"                 title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"                 title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div> */}
        <p> </p>
      </div>
    )
  }
}
