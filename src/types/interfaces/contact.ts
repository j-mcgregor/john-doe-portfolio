// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// >>>>>>>>>>>>>>>>>/  CONTACT   >>>>>>>>>>>>>>>>>>
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

import { PRISMIC_contact_node } from './prismic'

export interface ContactPageProps {
    data: {
        prismic: {
            allContacts: {
                edges: PRISMIC_contact_node[]
            }
        }
    }
}
