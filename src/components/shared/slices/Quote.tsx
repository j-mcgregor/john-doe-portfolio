import React from 'react'
import RichText from '../../../utils/RichTextCustom'

export const Quote = ({ slice }) => (
    <div className="post-quote container">
        <blockquote>{<RichText render={slice.primary.quote} />}</blockquote>
    </div>
)
