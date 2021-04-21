import React from 'react'
import Container from "../components/container"
import * as styles from "./about-css-modules.module.css"

console.log(styles)

const User = props => (
    <div className={styles.user}>
        <img src={props.avatar} className={styles.avatar} alt=""/>
        <div className={styles.description}>
            <h2 className={styles.username}>{props.username}</h2>
            <p className={styles.exerpt}>{props.excerpt}</p>
            

        </div>
    </div>
)
export default function About(){
    return(
        <Container>
            <h1>About CSS Modules</h1>
            <p>CSS Modules are chill</p>
            <User
                username="Chef Watkins"
                avatar="https://raw.githubusercontent.com/gatsbyjs/gatsby/master/docs/docs/tutorial/part-two/pexels-daniel-xavier-1102341.jpg"
                excerpt="Don't play with me boi I'll cook you *chef emoji* *knife emoji* Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            />
            
            <User
                username="Ol' Baller"
                avatar="https://raw.githubusercontent.com/gatsbyjs/gatsby/master/docs/docs/tutorial/part-two/pexels-guilherme-almeida-1858175.jpg"
                excerpt="Ball will always be life. Don't get crossed. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            />
        </Container>
    )
}