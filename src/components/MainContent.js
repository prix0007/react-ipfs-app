import React from 'react';
import "./MainContent.scss";

import Grid from '@material-ui/core/Grid'

import VideoCard from './VideoCard';

const videos = [
    {
        image:"https://i.pinimg.com/564x/bd/f7/cb/bdf7cbd62c5b1e52227f2fb23ab99945.jpg",   
        title:"Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long. Ultimately, a paragraph is a sentence or group of sentences that support one main idea. In this handout, we will refer to this as the “controlling idea,” because it controls what happens in the rest of the paragraph.",                          
        uploader:"Animaz",
        // uploaderAvatar:"https://www.gojinshi.com/wp-content/uploads/2020/11/Shy-Female-Anime-Characters.jpg",
        views:"10M Views",
        timeStamp:"2 Days Ago",
    },
    {
        image:"https://i.pinimg.com/564x/bd/f7/cb/bdf7cbd62c5b1e52227f2fb23ab99945.jpg",   
        title:"Your Name",                          
        uploader:"Animaz",
        uploaderAvatar:"https://www.gojinshi.com/wp-content/uploads/2020/11/Shy-Female-Anime-Characters.jpg",
        views:"10M Views",
        timeStamp:"2 Days Ago",
    },
    {
        image:"https://i.pinimg.com/564x/bd/f7/cb/bdf7cbd62c5b1e52227f2fb23ab99945.jpg",   
        title:"Your Name",                          
        uploader:"Animaz",
        uploaderAvatar:"https://www.gojinshi.com/wp-content/uploads/2020/11/Shy-Female-Anime-Characters.jpg",
        views:"10M Views",
        timeStamp:"2 Days Ago",
    },
    {
        image:"https://i.pinimg.com/564x/bd/f7/cb/bdf7cbd62c5b1e52227f2fb23ab99945.jpg",   
        title:"Your Name",                          
        uploader:"Animaz",
        uploaderAvatar:"https://www.gojinshi.com/wp-content/uploads/2020/11/Shy-Female-Anime-Characters.jpg",
        views:"10M Views",
        timeStamp:"2 Days Ago",
    },
    {
        image:"https://i.pinimg.com/564x/bd/f7/cb/bdf7cbd62c5b1e52227f2fb23ab99945.jpg",   
        title:"Your Name",                          
        uploader:"Animaz",
        uploaderAvatar:"https://www.gojinshi.com/wp-content/uploads/2020/11/Shy-Female-Anime-Characters.jpg",
        views:"10M Views",
        timeStamp:"2 Days Ago",
    },
    
    {
        image:"https://i.pinimg.com/564x/bd/f7/cb/bdf7cbd62c5b1e52227f2fb23ab99945.jpg",   
        title:"Your Name",                          
        uploader:"Animaz",
        uploaderAvatar:"https://www.gojinshi.com/wp-content/uploads/2020/11/Shy-Female-Anime-Characters.jpg",
        views:"10M Views",
        timeStamp:"2 Days Ago",
    },
]

const MainContent = () => {
    return (
        <div className="mainContent">
            <Grid container spacing={2}>
            {
                videos.map((video, index) => {
                    return (
                        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={video.title+index}>
                            <VideoCard 
                                image={video.image}
                                title={video.title}
                                uploader={video.uploader}
                                uploaderAvatar={video.uploaderAvatar}
                                views={video.views}
                                timeStamp={video.timeStamp}
                            />
                        </Grid>
                    )
                })
            }
            </Grid>
        </div>
    )
}

export default MainContent
