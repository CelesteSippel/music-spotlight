import React from 'react'
import data from './data/bands.json'

const BandPage = props => {
  const bands = data.categories.filter(item => {
    return item.category === props.match.params.category
  })[0]
  return (
    <div className={props.match.params.category}>
      {bands.music.map(band => {
        return (
          <div>
            <header className="names">{band.title}</header>
            <img src={band.image} alt="" />
            <p>{band.info}</p>
            <h2>{band.album}</h2>
          </div>
        )
      })}
    </div>
  )
}

export default BandPage
