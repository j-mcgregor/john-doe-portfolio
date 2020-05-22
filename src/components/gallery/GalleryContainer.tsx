import React, { useState } from 'react'
import { PRISMIC_gallery_image_fields } from '../../types/interfaces'
import createKey from '../../utils/createKey'
import SvgGrid from '../../images/grid-svg.svg'
import SvgRowGrid from '../../images/grid-row-svg.svg'
import SvgColGrid from '../../images/grid-col-svg.svg'

interface GalleryContainerProps {
    images: PRISMIC_gallery_image_fields[]
}

function chunkArray<T>(array: T[], n: number): Array<T | T[]> {
    const arrayCopy: T[] = [...array]
    const result: Array<T | T[]> = []
    while (arrayCopy.length) {
        result.push(arrayCopy.splice(0, Math.ceil(arrayCopy.length / n--)))
    }
    return result
}

export enum GridStyle {
    GRID = 'GRID',
    ROW = 'ROW',
    COL = 'COL',
}

const GalleryContainer: React.FC<GalleryContainerProps> = ({ images }) => {
    const [gridStyle, setGridStyle] = useState<GridStyle>(GridStyle.GRID)

    /**
     * >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
     * @version 1
     * @name : SQUARE GRID
     * >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
     */

    const grid =
        images.length &&
        images.map(
            (i: PRISMIC_gallery_image_fields) =>
                i.image.thumbnail &&
                i.image.thumbnail.url && (
                    <div className="image-container">
                        <img src={i.image.thumbnail.url} />
                    </div>
                )
        )

    /**
     * >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
     * @version 2
     * @name : EQUAL HEIGHT ROW
     * >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
     */

    const row =
        images.length &&
        images.map(
            (i: PRISMIC_gallery_image_fields) =>
                i.image.thumbnail && (
                    <div className="image-container">
                        <img src={i.image.url} />
                    </div>
                )
        )

    /**
     * >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
     * @version 3
     * @name : EQUAL WIDTH COLUMN
     * >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
     */

    const col = chunkArray<PRISMIC_gallery_image_fields>(images, 3).map(
        (
            imgArr:
                | PRISMIC_gallery_image_fields
                | PRISMIC_gallery_image_fields[]
        ) => {
            if (Array.isArray(imgArr)) {
                const imgs = imgArr.map(
                    (img: PRISMIC_gallery_image_fields, i: number) => {
                        return (
                            <div
                                className="image-container"
                                key={createKey(img.image.alt || `alt-img-${i}`)}
                            >
                                <img src={img.image.url} />
                            </div>
                        )
                    }
                )
                return <div className="image-column">{imgs}</div>
            }
        }
    )

    return (
        <div className="gallery-container pb3">
            <div className="container panel">
                <SvgGrid onClick={() => setGridStyle(GridStyle.GRID)} />
                <SvgRowGrid onClick={() => setGridStyle(GridStyle.ROW)} />
                <SvgColGrid onClick={() => setGridStyle(GridStyle.COL)} />
            </div>
            {gridStyle === GridStyle.GRID ? grid : null}
            {gridStyle === GridStyle.COL ? col : null}
            {gridStyle === GridStyle.ROW ? row : null}
        </div>
    )
}

export default GalleryContainer
