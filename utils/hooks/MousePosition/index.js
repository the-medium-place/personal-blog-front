import { useEffect, useState } from 'react'

export default function useMousePosition(targetRef) {
    const [x, setX] = useState()
    const [y, setY] = useState()
    useEffect(
        () => {
            const update = (e) => {
                setX(e.clientX)
                setY(e.clientY)
            }
            targetRef.current.addEventListener('mousemove', update)
            targetRef.current.addEventListener('touchmove', update)
            return () => {
                targetRef.current.removeEventListener('mousemove', update)
                targetRef.current.removeEventListener('touchmove', update)
            }
        },
        [setX, setY]
    )

    return { x, y };
}
