import React from 'react';
import RichText from './RichText';
import { uuid } from 'uuidv4';
import { HeaderThree, SmallFlex, ProjectImage } from '../Styles/type';

const ProjectThumbnails = (props) => {
    console.log(props)
    return (
        <div>
            <ProjectImage>
            <img src={props.project.fields.thumbnail.fields.file.url} alt={props.project.fields.thumbnail.fields.title} />
            </ProjectImage>
            <HeaderThree>{props.project.fields.title}</HeaderThree>
            <div>
                <RichText content={props.project.fields.description} />
            </div>
        </div>
    )
}

export default ProjectThumbnails;