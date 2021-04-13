import React from 'react';
import './SidebarRow.scss';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const SidebarRow = ({
    title,
    icon,
    isSelected,
    onClick
}) => {
    return (
        <Button onClick={onClick} fullWidth className={`sideRowMain ${isSelected && "selected"}`}>
            <span className="sideRowMain__icon">{icon}</span>
            <Typography className="sideRowMain__text">{title}</Typography>
        </Button>
    )
}

export default SidebarRow
