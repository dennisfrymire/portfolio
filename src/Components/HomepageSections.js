import React, { useState, useEffect } from 'react';

import { getContentfulHomepage} from '../Queries/index'
import RichText from './RichText';
import ProjectThumbnails from './ProjectThumbnails';
import { GridContainer, PullQuote, Section } from '../Styles/layout';
import { HeaderTwo, BodyText } from '../Styles/type';
import { uuid } from 'uuidv4';

const HomepageSections = () => {
    const [data, setData] = useState({});

    const getData = async () => {
        const theData = await getContentfulHomepage();
        setData(theData);
    }

    useEffect(() => {
        getData();
    }, []);

    console.log(data)

    if (Object.entries(data).length > 0) {
        return (
            <BodyText>
                 {data.fields.homePageSections.map((section) => {
                const { sectionTitle, textContent, projects} = section.fields;
                console.log(textContent)
                return (
                    <Section key={uuid()}>
                    <HeaderTwo align="center">{sectionTitle}
                        </HeaderTwo>
                    {textContent && <RichText content={textContent} />}
                        {projects && 
                            <GridContainer>
                                {projects.map((project, i) => {
                                    return <ProjectThumbnails key={uuid()} project={project} />
                                        
                                    
                                })}
                            </GridContainer>
                        }
                        <hr></hr>
                        
                        
                    </Section>
                )
                    })}

                
                {/* <PullQuote>
                    <RichText content={data.fields.pullQuote} />

                <hr></hr>
                </PullQuote> */}

            </BodyText>
        )
    }

    return <div>loading...</div>
}

export default HomepageSections;