import React from 'react'

const HomePage = () => {
  return (
    <>
      <section className="header">
        <h1>Favorite Bands</h1>
      </section>
      <section>
        <h2 className="bandName">Red Hot Chili Peppers</h2>
        <p className="bandInfo">
          Red Hot Chili Peppers are an American rock band formed in Los Angeles
          in 1983. The group's musical style primarily consists of alternative
          rock with an emphasis on funk, as well as elements from other genres
          such as punk rock and psychedelic rock.
        </p>
      </section>
      <section>
        <h2 className="bandName">Pearl Jam</h2>
        <p className="bandInfo">
          Pearl Jam is an American rock band formed in 1990 in Seattle,
          Washington. The band's current lineup comprises founding members Eddie
          Vedder, Mike McCready, Stone Gossard and Jeff Ament and Matt Cameron.
          Keyboardist Boom Gaspar has also been a session/touring member with
          the band since 2002.
        </p>
      </section>
      <section>
        <h2 className="bandName">Everclear</h2>
        <p className="bandInfo">
          Everclear is an American rock band formed in Portland, Oregon, in
          1991. The band was formed by Art Alexakis, the band's lead songwriter,
          vocalist, and guitarist; and for most of the band's height of
          popularity, consisted of Craig Montoya on bass guitar and Greg Eklund
          on drums.
        </p>
      </section>
    </>
  )
}
export default HomePage
