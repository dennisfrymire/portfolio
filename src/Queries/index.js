import { ContentfulClient } from 'react-contentful';

export const contentfulClient = new ContentfulClient({
    accessToken: process.env.REACT_APP_API_TOKEN,
    space: process.env.REACT_APP_SPACE_ID
});

export const getContentfulNav = async () => {
    const data = await contentfulClient.getEntry('7xmhMbTg7F8Y72rVn9MOOQ')
    return data;
}

export const getContentfulHomepage = async () => {
    const data = await contentfulClient.getEntry({entryId: '1IqiE8su8xIOS3Kunwj8eG', include: 3});
    return data;
}

