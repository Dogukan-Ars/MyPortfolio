import React, { useEffect, useRef } from 'react'
import { styled } from 'styled-components'
import { Tassel, Rope } from '../components/AllSvgs'


const Container = styled.div`
position: relative;
`

const Slider = styled.div`
position: fixed;
top: 0;
right: -1rem;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
transform: translateY(-100%);

&>*:last-child {
   width: 130px;
   height: 130px;
}

@media (max-width: 640px) {
   right: -1.5rem;
   &>*:last-child {
      width: 120px;
      height: 120px;
   }
}

@media (min-width: 1024px) {
   right: -1rem;
   &>*:last-child {
      width: 140px;
      height: 140px;
   }
}
`

const PreDisplay = styled.div`
position: fixed;
top: -2rem;
right: -1rem;
width: 130px;
height: 130px;

@media (max-width: 640px) {
   top: -1.5rem;
   right: -1.5rem;
   width: 120px;
   height: 120px;
}

@media (min-width: 1024px) {
   top: -2rem;
   right: -1rem;
   width: 140px;
   height: 140px;
}
`

const TasselComponent = (props) => {
   const ref = useRef(null);
   const hiddenRef = useRef(null);

   useEffect(() => {
      const handleScroll = () => {

         let scrollPosition = window.scrollY;
         let windowSize = window.innerHeight;
         let bodyHeight = document.body.offsetHeight;

         let diff = Math.max(bodyHeight - (scrollPosition + windowSize))
         // diff*100/scrollposition
         let diffP = (diff * 100) / (bodyHeight - windowSize)

         ref.current.style.transform = `translateY(${-diffP}%)`

         if (window.scrollY > 30) {
            hiddenRef.current.style.display = 'none'
         } else {
            hiddenRef.current.style.display = 'block'
         }
      }

      window.addEventListener('scroll', handleScroll)

      return () => window.removeEventListener('scroll', handleScroll)
   }, [])


   return (
      <Container>
         <PreDisplay ref={hiddenRef} className='hidden'>
            <Tassel fill='currentColor' />
         </PreDisplay>
         <Slider ref={ref}>
            {
               [...Array(props.numbers)].map((x, id) => {
                  return <Rope key={id} width={120} height={120} style={{ transform: "rotateX(120deg)", margin: "-2.57rem 0" }} fill='currentColor' className="Tassel" />
               })
            }
            <Tassel fill='currentColor' style={{ marginTop: "-1.3rem", marginLeft: ".6rem" }} />
         </Slider>
      </Container>
   )
}

export default TasselComponent