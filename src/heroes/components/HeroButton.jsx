import { Divider, ListItem, ListItemButton, Typography } from '@mui/material'
import React from 'react'

export const HeroButton = ({ children, text }) => {
    return (
        <>
            <ListItem component="div" disablePadding>
                <ListItemButton>
                    <Typography variant="subtitle1" color="text.secondary" component="div" fontSize={18} fontWeight={600}>
                        {text}
                        <Typography sx={{ display: 'inline' }}>{` ${children}`}</Typography>
                    </Typography>
                </ListItemButton>
            </ListItem>
            <Divider/>
        </>
    )
}
