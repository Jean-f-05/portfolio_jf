'use client'
import Typewriter from 'typewriter-effect';
import styles from "./styles.module.css"

type TypeWriterProps = {
    text: any
}

const TypeWriter = ({ text }: TypeWriterProps) => {
    return (
        <Typewriter
            options={{
                wrapperClassName: styles.Typewriter__wrapper,
                cursorClassName: styles.Typewriter__cursor
            }}
            onInit={(typewriter) => {
                typewriter
                    .typeString(text.firstLine)
                    .pauseFor(1000)
                    .typeString(text.secondLine)
                    .pauseFor(1700)
                    .changeDeleteSpeed(0.4)
                    .deleteChars(12)
                    .typeString(text.thirdLine)
                    .pauseFor(1000)
                    .typeString(text.fourthLine)
                    .start();
            }}
        />)
}

export default TypeWriter