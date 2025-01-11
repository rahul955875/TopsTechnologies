import React from 'react'
import CardData from './CardData'

function Card() {
  // const  [{}]
  return (

    <div className='row row-cols-1 row-cols-lg-3 p-4 g-4 ' >
    <CardData img='https://tse1.mm.bing.net/th?id=OIP.VCTYNHBTeQHqdZF7No_H4AHaEK&pid=Api&P=0&h=180' title='card 1' />    
    <CardData img='https://tse2.mm.bing.net/th?id=OIP.QCiOX1-lhHhdj9r9ZYX3-gHaEo&pid=Api&P=0&h=180' title='card 2' />
    <CardData img='https://tse1.mm.bing.net/th?id=OIP.tivQ_4-GIk8GI5G-0Ee7wgHaEK&pid=Api&P=0&h=180' title='card 3' />
    <CardData img='https://tse1.mm.bing.net/th?id=OIP.tivQ_4-GIk8GI5G-0Ee7wgHaEK&pid=Api&P=0&h=180' title='card 3' />
    <CardData img='https://tse1.mm.bing.net/th?id=OIP.VCTYNHBTeQHqdZF7No_H4AHaEK&pid=Api&P=0&h=180' title='card 1' />    
    <CardData img='https://tse2.mm.bing.net/th?id=OIP.QCiOX1-lhHhdj9r9ZYX3-gHaEo&pid=Api&P=0&h=180' title='card 2' />
    <CardData img='https://tse1.mm.bing.net/th?id=OIP.tivQ_4-GIk8GI5G-0Ee7wgHaEK&pid=Api&P=0&h=180' title='card 3' />
    <CardData img='https://tse1.mm.bing.net/th?id=OIP.tivQ_4-GIk8GI5G-0Ee7wgHaEK&pid=Api&P=0&h=180' title='card 3' />
    </div>

  )
}

export default Card