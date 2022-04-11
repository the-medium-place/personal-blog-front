import React, { useState, useEffect, useRef } from 'react'
import { motion, useViewportScroll } from 'framer-motion'
import useMousePosition from '../../utils/hooks/MousePosition';


export default function ScrollBar() {

    const scrollBarRef = useRef(null)

    const { scrollYProgress } = useViewportScroll();

    const { x, y } = useMousePosition(scrollBarRef);


    const [progressIsVisible, setProgressIsVisible] = useState(false)
    const [scrollState, setScrollState] = useState();
    const [isComplete, setIsComplete] = useState(false);


    useEffect(() => {
        scrollYProgress.onChange(x => {
            setScrollState(Math.ceil(x * 100))
            setIsComplete(Math.ceil(x * 100) > 99)
            setProgressIsVisible(true)

            setTimeout(() => {
                setProgressIsVisible(false)
            }, 3000);

        })
    }, [scrollYProgress])


    return (
        <div
            ref={scrollBarRef}
            onClick={() => alert(percentY)}
            style={{
                background: '#ededed',
                height: '90vh',
                width: '.5rem',
                position: 'fixed',
                right: '.5rem',
                top: 70,
                borderRadius: 8
            }}
        >
            <motion.div
                style={{
                    width: '100%',
                    margin: 0,
                    background: 'red',
                    borderRadius: 8
                }}
                animate={{
                    height: `${scrollState}%`
                }}
            >
                <motion.div
                    style={{
                        borderRadius: '50%',
                        height: 40,
                        width: 40,
                        position: 'absolute',
                        right: '.1rem',
                        background: 'blue',
                        color: 'white',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                    animate={{
                        top: `${scrollState - 4}%`,
                        opacity: progressIsVisible ? 1 : 0
                    }}
                >
                    {scrollState < 100 ? scrollState : (
                        <svg
                            style={{
                                width: 40,
                                height: 40,
                                aspectRatio: '1/1'
                            }}
                            viewBox="0 0 50 50"
                        >
                            <motion.path
                                fill="none"
                                strokeWidth="5"
                                stroke="#ededed"
                                d="M14,26 L 22,33 L 35,16"
                                initial={false}
                                strokeDasharray="0 1"
                                animate={{ pathLength: isComplete ? 1 : 0 }}
                            />
                        </svg>
                    )}
                </motion.div>

            </motion.div>

        </div>
    )
}
