// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// >>>>>>>>>>>>>>>>>/  INDEX   >>>>>>>>>>>>>>>>>>>>
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

import { PRISMIC_landing_node } from './prismic'

export interface IndexPageProps {
    data: {
        prismic: {
            allLandings: {
                edges: PRISMIC_landing_node[]
            }
        }
        file: {
            childImageSharp: {
                fixed: {
                    height: number
                    width: number
                    base64: string
                    src: string
                    srcSet: string
                }
            }
        }
    }
}
