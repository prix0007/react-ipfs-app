
import React from 'react';
import './SearchPage.scss';

import {
    useLocation 
} from 'react-router-dom';

import IconButton from '../widgets/ToolTipIconButton';
import Typography from '@material-ui/core/Typography';
import TuneIcon from '@material-ui/icons/Tune';

import '../components/AnimeRow';
import AnimeRow from '../components/AnimeRow';

const SearchPage = () => {
    let location = useLocation();
    const params = location.pathname.split('/');
    console.log(params[params.length - 1 ]);
    return (
        <div className="searchPage">
            <div className="searchPage__filter_wrapper">
                <IconButton 
                    onClick={null}
                    tooltipText="Filters"
                >
                    <TuneIcon />
                </IconButton>
                <Typography>
                    Filters
                </Typography>
            </div>
            <hr />
            <AnimeRow 
                image="https://m.media-amazon.com/images/M/MV5BZWNiY2IwMGUtYTk1NC00NmE5LWE4NTItYmQyNDJmMGU2MDMwXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_.jpg"
                animeName="Horimiya"
                completed
                episodes={12}
                quality="480p, 720p, 1080p"
                yearOfRelease="November 2020"
                yearOfFinishing="April 2021"
                description="On the surface, the thought of Kyouko Hori and Izumi Miyamura getting along would be the last thing in people's minds. After all, Hori has a perfect combination of beauty and brains, while Miyamura appears meek and distant to his fellow classmates. However, a fateful meeting between the two lays both of their hidden selves bare. Even though she is popular at school, Hori has little time to socialize with her friends due to housework. On the other hand, Miyamura lives under the noses of his peers, his body bearing secret tattoos and piercings that make him look like a gentle delinquent."
            />
        </div>
    )
}

export default SearchPage
