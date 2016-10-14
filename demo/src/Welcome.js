import React, { PropTypes } from 'react'
import ResumeContent from '../../content/resume.md'
import Markdown from 'react-remarkable'

const Resume = React.createClass({
  render () {
    return (
      <div className="wrapper">
        <Markdown
          source={ ResumeContent }
          options={ markdownOptions }
        />
      </div>
    )
  }
})

export default Resume
