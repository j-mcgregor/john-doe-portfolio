import React from 'react'
import { RichText } from 'prismic-reactjs'
import { linkResolver } from './linkResolver'
import { htmlSerializer } from './htmlSerializer'

export const asText = RichText.asText

const RichTextCustom = ({ render }) => (
    <RichText
        render={render}
        linkResolver={linkResolver}
        htmlSerializer={htmlSerializer}
    />
)

export default RichTextCustom
