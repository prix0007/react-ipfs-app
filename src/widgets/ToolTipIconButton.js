import React from 'react';

import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';

const ToolTipIconButton = ({
    tooltipText,
    onClick,
    children
}) => {
    return (
        <Tooltip title={tooltipText}>
            <IconButton onClick={onClick}>
                {children}
            </IconButton>
        </Tooltip>
    )
}

export default ToolTipIconButton
