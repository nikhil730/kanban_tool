import React, { useContext } from 'react';
import { AppContext } from '../App';

import ByPriority from './display/byPriority';
import ByStatus from './display/byStatus';
import ByUsers from './display/byUsers';

import './workspace.css'

export default function Workspace() {

    const { group } = useContext(AppContext)

    return (
        <div className='dashboard' >
            {group === 'Priority' && <ByPriority />}
            {group === 'Status' && <ByStatus />}
            {group === 'User' && <ByUsers />}
        </div>
    );
}



