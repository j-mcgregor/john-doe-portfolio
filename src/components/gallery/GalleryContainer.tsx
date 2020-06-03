import React, { useState, useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import {
    PRISMIC_gallery_image_fields,
    GalleryContainerProps,
    SVG_StaticRequestProps,
    SVG_Node,
} from '../../types/interfaces'
import createKey from '../../utils/createKey'
import { chunkArray } from '../../utils/chunkArray'
import { GridStyle } from '../../types/enums'
import Modal from '../shared/modal/Modal'
import { useKeyPress } from '../../utils/hooks/useKeyPress'
import { GalleryUtils } from '../../utils/helpers/gallery'

const GalleryContainer: React.FC<GalleryContainerProps> = ({ images }) => {
    const data: SVG_StaticRequestProps = useStaticQuery(graphql`
        {
            allFile(filter: { extension: { eq: "svg" } }) {
                edges {
                    node {
                        id
                        name
                        publicURL
                    }
                }
            }
        }
    `)

    const [gridStyle, setGridStyle] = useState<GridStyle>(GridStyle.GRID)

    const handleSetGridStyle = (type: GridStyle) => {
        setGridStyle(type)
        window.localStorage.setItem('GridStyle', type)
    }

    useEffect(() => {
        const item = window.localStorage.getItem('GridStyle')

        switch (item) {
            case 'ROW':
                setGridStyle(GridStyle.ROW)
                break
            case 'COL':
                setGridStyle(GridStyle.COL)
                break
            default:
                setGridStyle(GridStyle.GRID)
                break
        }
    }, [])

    /**
     * >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
     * @keyEvent left / right
     * >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
     */

    //  will fire on each rerender >>>>>>>>>>
    const leftPress: boolean = useKeyPress('ArrowLeft')
    const rightPress: boolean = useKeyPress('ArrowRight')
    const escPress: boolean = useKeyPress('Escape')
    // <<<<<<<<<<<<

    const [cursor, setCursor] = useState<number>(0)
    const [selected, setSelected] = useState<PRISMIC_gallery_image_fields>(
        images[cursor]
    )
    const [modalOpen, setModalOpen] = useState<boolean>(false)

    useEffect(() => {
        if (images.length && leftPress) {
            setCursor(prevState => GalleryUtils.moveLeft(prevState, images))
        }
    }, [leftPress])

    useEffect(() => {
        if (images.length && rightPress) {
            setCursor(prevState => GalleryUtils.moveRight(prevState, images))
        }
    }, [rightPress])

    useEffect(() => {
        setModalOpen(false)
    }, [escPress])

    // set the current image when modal is open
    useEffect(() => setSelected(images[cursor]), [cursor])

    /**
     * >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
     * @modal
     * onClick img sets modal image URL
     * then its opens the modal
     * >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
     */

    const handleImageClick = (e: React.MouseEvent<HTMLImageElement>) => {
        return images.filter((i, x) => {
            if (
                i.image.url === e.currentTarget.src ||
                (i.image.thumbnail &&
                    i.image.thumbnail.url === e.currentTarget.src)
            ) {
                // set the current selected image
                setSelected(i)
                // set the INDEX of the current image (important when cycling through the modal images)
                setCursor(x)
                // open the modal
                setModalOpen(true)
                // for testing
                GalleryUtils.setImage(i, x, true)
            }
        })[0]
    }

    const handleCloseModal = () => setModalOpen(false)

    /**
     * >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
     * @version 1
     * @name : SQUARE GRID
     * >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
     */

    const grid =
        images.length &&
        images
            .map(
                (img: PRISMIC_gallery_image_fields, i: number) =>
                    img.image.thumbnail &&
                    img.image.thumbnail.url && (
                        <div
                            className="image-container"
                            key={createKey('key', i)}
                        >
                            <img
                                src={img.image.thumbnail.url}
                                onClick={handleImageClick}
                                data-testid={`gallery-img-${i}`}
                            />
                        </div>
                    )
            )
            .filter(i => i)

    /**
     * >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
     * @version 2
     * @name : EQUAL HEIGHT ROW
     * >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
     */

    const row =
        images.length &&
        images
            .map(
                (img: PRISMIC_gallery_image_fields, i: number) =>
                    img.image.url && (
                        <div
                            className="image-container"
                            key={createKey('key', i)}
                        >
                            <img
                                src={img.image.url}
                                onClick={handleImageClick}
                                data-testid={`gallery-img-${i}`}
                            />
                        </div>
                    )
            )
            .filter(i => i)

    /**
     * >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
     * @version 3
     * @name : EQUAL WIDTH COLUMN
     * >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
     */

    const col = chunkArray<PRISMIC_gallery_image_fields>(images, 3)
        .map((imgArr: PRISMIC_gallery_image_fields[], index: number) => {
            const imgs = imgArr.map(
                (img: PRISMIC_gallery_image_fields, i: number) => {
                    return (
                        <div
                            className="image-container"
                            key={createKey('key', i)}
                        >
                            <img
                                src={img.image.url}
                                onClick={handleImageClick}
                                data-testid={`gallery-img-${i}`}
                            />
                        </div>
                    )
                }
            )
            return (
                <div key={createKey('key', index)} className="image-column">
                    {imgs}
                </div>
            )
        })
        .filter(i => i)

    const icons = data.allFile.edges.map((node: SVG_Node, index: number) => {
        // set as default
        let style: GridStyle = GridStyle.GRID

        // change only is name matches
        switch (node.node.name) {
            case 'grid-col-svg.inline':
                style = GridStyle.COL
                break
            case 'grid-row-svg.inline':
                style = GridStyle.ROW
                break
            default:
                break
        }

        return (
            <img
                key={createKey('key', index)}
                src={node.node.publicURL}
                alt={node.node.name}
                onClick={() => handleSetGridStyle(style)}
                data-testid="data-test-svg"
                data-checked={style === gridStyle}
                title={`data-${style}`}
            />
        )
    })

    return (
        <div className="gallery-container pb3" data-testid="gallery-container">
            <div className="container panel">{icons}</div>
            {gridStyle === GridStyle.GRID ? grid : null}
            {gridStyle === GridStyle.COL ? col : null}
            {gridStyle === GridStyle.ROW ? row : null}
            <Modal
                src={selected.image.url}
                isOpen={modalOpen}
                handleClose={handleCloseModal}
            />
        </div>
    )
}

export default GalleryContainer
