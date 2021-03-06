/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { ListItem, ListItemIcon, Tooltip, Typography } from '@material-ui/core';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import WorkRoundedIcon from '@material-ui/icons/WorkRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import LayersRoundedIcon from '@material-ui/icons/LayersRounded';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import EventNoteRoundedIcon from '@material-ui/icons/EventNoteRounded';
import PeopleRoundedIcon from '@material-ui/icons/PeopleRounded';
import AllInboxRoundedIcon from '@material-ui/icons/AllInboxRounded';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { AssignmentIndRounded } from '@material-ui/icons';

function MainListItems(props) {
    const { history, isAdmin, closeDrawer, page: selectedItem } = props;
    const redirectFunc = (subPath) => () => {
        closeDrawer();
        if (subPath === 'deploy') {
            if (!isAdmin) {
                history.push('/dashboard/home');
            } else {
                history.push(`/dashboard/${subPath}`);
            }
        } else {
            history.push(`/dashboard/${subPath}`);
        }
    };

    return (
        <div>
            <ListItem button onClick={redirectFunc('home')}>
                <ListItemIcon>
                    <HomeRoundedIcon
                        fontSize="large"
                        style={{
                            color:
                                selectedItem === 'home' ? '#61cdff' : 'white',
                        }}
                    />
                </ListItemIcon>
                <Tooltip title="Home">
                    <Typography
                        color={selectedItem === 'home' ? 'secondary' : '#fff'}
                        variant="h5"
                    >
                        Home
                    </Typography>
                </Tooltip>
            </ListItem>
            <ListItem button onClick={redirectFunc('myTasks')}>
                <ListItemIcon>
                    <WorkRoundedIcon
                        fontSize="large"
                        style={{
                            color:
                                selectedItem === 'myTasks'
                                    ? '#61cdff'
                                    : 'white',
                        }}
                    />
                </ListItemIcon>
                <Tooltip title="View your tasks">
                    <Typography
                        color={
                            selectedItem === 'myTasks' ? 'secondary' : '#fff'
                        }
                        variant="h5"
                    >
                        My Tasks
                    </Typography>
                </Tooltip>
            </ListItem>
            {isAdmin ? (
                <ListItem button onClick={redirectFunc('userTasks')}>
                    <ListItemIcon>
                        <AssignmentIndRounded
                            fontSize="large"
                            style={{
                                color:
                                    selectedItem === 'userTasks'
                                        ? '#61cdff'
                                        : 'white',
                            }}
                        />
                    </ListItemIcon>
                    <Tooltip title="View users tasks">
                        <Typography
                            color={
                                selectedItem === 'userTasks'
                                    ? 'secondary'
                                    : '#fff'
                            }
                            variant="h5"
                        >
                            Users Tasks
                        </Typography>
                    </Tooltip>
                </ListItem>
            ) : null}
            <ListItem button onClick={redirectFunc('profile')}>
                <ListItemIcon>
                    <PersonRoundedIcon
                        fontSize="large"
                        style={{
                            color:
                                selectedItem === 'profile'
                                    ? '#61cdff'
                                    : 'white',
                        }}
                    />
                </ListItemIcon>
                <Tooltip title="Profile">
                    <Typography
                        color={
                            selectedItem === 'profile' ? 'secondary' : '#fff'
                        }
                        variant="h5"
                    >
                        Profile
                    </Typography>
                </Tooltip>
            </ListItem>
            <ListItem
                button
                disabled={!isAdmin}
                onClick={redirectFunc('deploy')}
            >
                <ListItemIcon>
                    <LayersRoundedIcon
                        fontSize="large"
                        style={{
                            color:
                                selectedItem === 'deploy' ? '#61cdff' : 'white',
                        }}
                    />
                </ListItemIcon>
                <Tooltip title="Manage project deployments (Only for Admins)">
                    <Typography
                        color={selectedItem === 'deploy' ? 'secondary' : '#fff'}
                        variant="h5"
                    >
                        Deploy
                    </Typography>
                </Tooltip>
            </ListItem>
            <ListItem button onClick={redirectFunc('projects')}>
                <ListItemIcon>
                    <DeveloperModeIcon
                        fontSize="large"
                        style={{
                            color:
                                selectedItem === 'projects'
                                    ? '#61cdff'
                                    : 'white',
                        }}
                    />
                </ListItemIcon>
                <Tooltip title="View club projects">
                    <Typography
                        color={
                            selectedItem === 'projects' ? 'secondary' : '#fff'
                        }
                        variant="h5"
                    >
                        Projects
                    </Typography>
                </Tooltip>
            </ListItem>
            <ListItem button onClick={redirectFunc('events')}>
                <ListItemIcon>
                    <EventNoteRoundedIcon
                        fontSize="large"
                        style={{
                            color:
                                selectedItem === 'events' ? '#61cdff' : 'white',
                        }}
                    />
                </ListItemIcon>
                <Tooltip title="View club events">
                    <Typography
                        color={selectedItem === 'events' ? 'secondary' : '#fff'}
                        variant="h5"
                    >
                        Events
                    </Typography>
                </Tooltip>
            </ListItem>
            <ListItem button onClick={redirectFunc('users')}>
                <ListItemIcon>
                    <PeopleRoundedIcon
                        fontSize="large"
                        style={{
                            color:
                                selectedItem === 'users' ? '#61cdff' : 'white',
                        }}
                    />
                </ListItemIcon>
                <Tooltip title="Club Members">
                    <Typography
                        color={selectedItem === 'users' ? 'secondary' : '#fff'}
                        variant="h5"
                    >
                        Users
                    </Typography>
                </Tooltip>
            </ListItem>
            <ListItem button onClick={redirectFunc('resources')}>
                <ListItemIcon>
                    <AllInboxRoundedIcon
                        fontSize="large"
                        style={{
                            color:
                                selectedItem === 'resources'
                                    ? '#61cdff'
                                    : 'white',
                        }}
                    />
                </ListItemIcon>
                <Tooltip title="View club resources">
                    <Typography
                        color={
                            selectedItem === 'resources' ? 'secondary' : '#fff'
                        }
                        variant="h5"
                    >
                        Resources
                    </Typography>
                </Tooltip>
            </ListItem>
        </div>
    );
}

MainListItems.propTypes = {
    history: PropTypes.any.isRequired,
    isAdmin: PropTypes.bool.isRequired,
    closeDrawer: PropTypes.func.isRequired,
    page: PropTypes.string.isRequired,
};

export default withRouter(MainListItems);
