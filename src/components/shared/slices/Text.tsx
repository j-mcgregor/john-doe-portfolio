import React from 'react'
import RichText from '../../../utils/RichTextCustom'

export const Text = ({ slice }) => (
    <div className="post-text container">
        <div>
            <RichText render={slice.primary.text} />
        </div>
    </div>
)
