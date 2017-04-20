import React, { Component } from 'react';

class Biography extends Component {
  render() {
    return (
      <div className="col-sm-8">
        <h2>Biography</h2>
        <p>
          I am a professional web developer focused on Ruby on Rails and ReactJS.
          I have been coding in some capacity for as long as I can remember, only
          beginning my professional career in late 2016 with <a href="http://www.levvel.io/" target="_blank">Levvel</a>.
        </p>
        <p>
          I thrive on challenge and system engineering, always keeping the big picture
          and return-on-investment in mind when making or suggesting changes. I also
          have a proven ability to explain myself at a non-technical level whenever
          necessary, which comes in handy rather often!
        </p>
      </div>
    )
  }
}

export default Biography;
