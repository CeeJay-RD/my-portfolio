"use client"

interface linkProps {
    url: string,
    text: string,
};


const LinkButton: React.FC<linkProps> = ({url, text}) => {
    return (
        <>
            <a href={url}>{text}</a>
        
        </>

    )
}