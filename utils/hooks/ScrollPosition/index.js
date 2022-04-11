import { useRef, useLayoutEffect } from 'react'

const isBrowser = typeof window !== `undefined`

function getScrollPosition({ element, useWindow }) {
  if (!isBrowser) return { x: 0, y: 0 }

  const target = element ? element.current : document.body
  const position = target.getBoundingClientRect()

  return useWindow
    ? { x: window.scrollX, y: window.scrollY }
    : { x: position.left, y: position.top }
}

export default function useScrollPosition(effect, deps, element, useWindow, wait) {
  const position = useRef(getScrollPosition({ useWindow }))

  let throttleTimeout = null

  const callBack = () => {
    const currPos = getScrollPosition({ element, useWindow })
    effect({ prevPos: position.current, currPos })
    position.current = currPos
    throttleTimeout = null
  }

  useLayoutEffect(() => {
    const handleScroll = () => {
      if (wait) {
        if (throttleTimeout === null) {
          throttleTimeout = setTimeout(callBack, wait)
        }
      } else {
        callBack()
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, deps)
}

// UTILIZATION EXAMPLE
  // useScrollPosition(({ currPos, prevPos }) => {
  //   // console.log(scrollYProgress)
  //   // CAPTURE SCROLL DIRECTION
  //   const scrollingUp = currPos.y > prevPos.y;
  //   const scrollingDown = currPos.y < prevPos.y;
  //   // GET TOP AND BOTTOM POSITIONS OF EACH ANIMATED ELEMENT
  //   const greetingTop = topPos(greetingRef.current),
  //     picTop = topPos(picRef.current),
  //     introTop = topPos(introRef.current),
  //     greetingBottom = bottomPos(greetingRef.current),
  //     picBottom = bottomPos(picRef.current),
  //     introBottom = bottomPos(introRef.current);

  //   // MOVE INTRO TEXT/PIC IN ON SCROLL DOWN
  //   if (scrollingDown && yPosCounter > 0 && opacityCounter < 1) {
  //     yPosCounter--
  //     opacityCounter += 0.007;
  //   }
  //   // MOVE INTRO TEXT/PIC OUT ON SCROLL UP
  //   if (scrollingUp && yPosCounter < 100 && opacityCounter > 0) {
  //     yPosCounter++
  //     opacityCounter -= 0.02;
  //   }
  //   // ENSURE TEXT/PIC STAYS VISIBLE AT HOME POSITION
  //   // AND STAY IN PLACE WHILE SCROLLING UP 
  //   // UNTIL READY TO SCROLL
  //   if (yPosCounter === 0) {
  //     opacityCounter = 1;
  //   }
  //   if (picBottom < 1000) {
  //     yPosCounter = 0;
  //     opacityCounter = 1;
  //   }
  //   // APPLY INTRO TEXT ANIMATION STYLES
  //   introRef.current.style.transform = `translateX(${yPosCounter}vw)`
  //   introRef.current.style.opacity = opacityCounter;
  //   picRef.current.style.transform = `translateX(${-yPosCounter}vw)`
  //   picRef.current.style.opacity = opacityCounter;
  //   // console.log(yPosCounter, currPos.y)
  //   // console.log(picTop, picBottom)
  //   // console.log('up: ', JSON.stringify(scrollingUp))
  //   // console.log('down: ', JSON.stringify(scrollingDown))
  // }, [])
  // const topPos = element => element.getBoundingClientRect().top;
  // const bottomPos = element => element.getBoundingClientRect().bottom;
  // function setElementOpacity(element) {
  //   element.style.opacity = 0;
  // }
