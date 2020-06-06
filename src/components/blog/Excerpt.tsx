import React from 'react'
import { BlogBodyProps, PostSummaryProps } from '../../types/interfaces/blog'
import { RichText } from 'prismic-reactjs'

// Function to retrieve a small preview of the post's text
export const Excerpt: React.FC<PostSummaryProps> = ({ post }) => {
    // Find the first text slice of post's body
    const firstTextSlice = post.body.find(
        (slice: BlogBodyProps) => slice.type === 'text'
    )

    if (firstTextSlice != null) {
        // Set the character limit for the text we'll show in the homepage
        const textLimit = 300
        const text = RichText.asText(firstTextSlice.primary.text)
        const limitedText = text.substring(0, textLimit)

        if (text.length > textLimit) {
            // Cut only up to the last word and attach '...' for readability
            return (
                <p>
                    {`${limitedText.substring(
                        0,
                        limitedText.lastIndexOf(' ')
                    )}...`}
                </p>
            )
        } else {
            // If it's shorter than the limit, just show it normally
            return <p>{text}</p>
        }
    } else {
        // If there are no slices of type 'text', return nothing
        return null
    }
}
