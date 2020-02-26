import React from 'react'

const ResourceTemplate = (props) => {
    const { title } = props.pageContext;
    const { content } = props.pageContext.node;
    console.log(props.pageContext);
    return(
        <>
            <h1>{title}</h1>
            <div dangerouslySetInnerHTML={{ __html: content }}/>
        </>
    )
}

export default ResourceTemplate;