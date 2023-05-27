'use client'
import Typewriter from 'typewriter-effect';
import styles from "./styles.module.css"

const TypeWriter = () => {
    return (
        <Typewriter
            options={{
                wrapperClassName: styles.Typewriter__wrapper
            }}
            onInit={(typewriter) => {
                typewriter
                    .typeString('Hello there, I&apos;m Jean<span>!</span> Front-end developer<span>.</span> ')
                    .pauseFor(1000)
                    .typeString('36 years old')
                    .pauseFor(1700)
                    .changeDeleteSpeed(0.4)
                    .deleteChars(12)
                    .typeString('With the looks of a 25 years old<span>.</span> ')
                    .pauseFor(1000)
                    .typeString('Under my belt, around 3 years of experience<span>.</span>')
                    .start();
            }}
        />)
}

export default TypeWriter