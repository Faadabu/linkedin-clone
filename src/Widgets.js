import React from 'react'
import './Widgets.css'
import InfoIcon from '@mui/icons-material/Info'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets_article">
        <div className="widgets_article_left">
            <FiberManualRecordIcon />
        </div>

        <div className="widgets_article_right">
            <h4>{heading}</h4>
            <p>{subtitle}</p>
        </div>
    </div>
  )

  return (
    <div className="widgets">
        <div className="widgets_header">
            <h2>LinkedIn News</h2>
            <InfoIcon />
        </div>

        {newsArticle("Tech firm HP to lay off 6,000 workers", "Tops news - 1,324 readers")}
        {newsArticle("Future of Work: Learn Top Tech Skills", "Tops news - 4,345 readers")}
    </div>
  )
}

export default Widgets