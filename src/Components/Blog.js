import React from 'react';
import RichText from './RichText';
import { uuid } from 'uuidv4';
import { HeaderThree, SmallFlex } from '../Styles/type';

const BlogThumbnails = (props) => {
    console.log(props)
    return (
        <div >
            
            <img src={props.project.fields.thumbnail.fields.file.url} alt={props.project.fields.thumbnail.fields.title} />
            <HeaderThree>{props.project.fields.title}</HeaderThree>
            <div>
                <RichText content={props.project.fields.description} />
            </div>
        <hr></hr>
        </div>
    )
}

export default BlogThumbnails;