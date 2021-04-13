import React from 'react';
import './Sidebar.scss';
import SidebarRow from '../widgets/SidebarRow';

import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionIcon from '@material-ui/icons/Subscriptions';

import WatchLaterIcon from '@material-ui/icons/WatchLater';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OnDemandVideoIcon from '@material-ui/icons/OndemandVideo';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbDownAltOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';

const menuItems = [
    {
        title: "Home",
        icon: <HomeIcon />
    },
    {
        title: "Trending",
        icon: <WhatshotIcon />
    },
    {
        title: "Subscription",
        icon: <SubscriptionIcon />
    },
]

const menuItemsBottom = [
    {
        title: "Library",
        icon: <VideoLibraryIcon />
    },
    {
        title: "History",
        icon: <HistoryIcon />
    },
    {
        title: "Your Videos",
        icon: <OnDemandVideoIcon />
    },
    {
        title: "Watch Later",
        icon: <WatchLaterIcon />
    },
    {
        title: "Liked Videos",
        icon: <ThumbUpAltOutlinedIcon />
    },
    {
        title: "Show More",
        icon: <ExpandMoreOutlinedIcon />
    },
]; 


const Sidebar = () => {
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    return (
        <div className="sidebar">
            {
                menuItems.map((menuItem, index) => {
                    return <SidebarRow 
                        key={menuItem.title+index}
                        title={menuItem.title} 
                        icon={menuItem.icon} 
                        onClick={() => {
                            setSelectedIndex(index)
                        }} 
                        isSelected={index===selectedIndex}/>
                })
            } 
            <hr />
            {
                menuItemsBottom.map((menuItem, index) => {
                    return <SidebarRow 
                            key={menuItem.title+index}
                            title={menuItem.title} 
                            icon={menuItem.icon} 
                            onClick={() => {
                                // setSelectedIndex(index)
                            }} 
                            // isSelected={index===selectedIndex}
                        />
                })
            } 
             <hr />
        </div>
    )
}

export default Sidebar
  