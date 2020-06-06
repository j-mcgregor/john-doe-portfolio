// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// >>>>>>>>>>>>>>>>>/  GALLERY >>>>>>>>>>>>>>>>>>>>
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

import { PRISMIC_gallery_node, PRISMIC_gallery_image_fields } from './prismic'

export interface GalleryContainerProps {
    images: PRISMIC_gallery_image_fields[]
}

export interface LocalFileNode {
    node: {
        name: string
        id: string
        publicURL: string
    }
}

export interface GalleryPageProps {
    data: {
        prismic: {
            allGallerys: {
                edges: PRISMIC_gallery_node[]
            }
        }
        allFile: {
            edges: LocalFileNode[]
        }
    }
}

export interface SVG_Node {
    node: {
        extension: string
        id: string
        internal: {
            mediaType: string
        }
        name: string
        publicURL: string
    }
}

export interface SVG_StaticRequestProps {
    allFile: {
        edges: SVG_Node[]
    }
}
