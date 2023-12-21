import React, { useContext } from 'react';
import { AppContext } from '../../App';
import Card from '../widgets/card';
import ListHeader from '../widgets/listHeader';


import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import HourglassBottomOutlinedIcon from '@mui/icons-material/HourglassBottomOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import SyncIcon from '@mui/icons-material/Sync';



function List(props) {
    const { tickets, order } = useContext(AppContext);
    const { status } = props;

    const filteredTickets = tickets.filter(ticket => ticket.status === status);

    // Sort the filtered tickets by priority
    const prioritySortedTickets = filteredTickets.sort((a, b) => b.priority - a.priority);

    // Filter the tickets by status
    const titleSortedTickets = tickets.filter(ticket => ticket.status === status)
        .sort((a, b) => a.title.localeCompare(b.title));

    if (order === 'Priority') {
        return (

            <div>
                <ListHeader title={props.title} length={prioritySortedTickets.length} icon={props.icon} />
                {prioritySortedTickets.map((props) => (

                    <Card key={props.id} id={props.id} userId={props.userId} title={props.title} tag={props.tag} headerIcon={true} footerIcon={props.priority} />

                ))}
            </div>

        )
    }
    else if (order === 'Title') {
        return (

            <div>
                <ListHeader title={props.title} length={prioritySortedTickets.length} icon={props.icon} />
                {titleSortedTickets.map((props) => (

                    <Card key={props.id} id={props.id} userId={props.userId} title={props.title} tag={props.tag} headerIcon={true} footerIcon={props.priority} />

                ))}
            </div>

        )
    }


}



export default function ByStatus() {

    return (
        <>
            <List title='Backlog' icon={<SyncIcon style={{ color: 'd84a4a' }} />} status="Backlog" />
            <List title='Todo' icon={<CircleOutlinedIcon style={{ color: 'e4e4e4' }} />} status="Todo" />
            <List title='In Progress' icon={<HourglassBottomOutlinedIcon style={{ color: 'f1ca4a' }} />} status="In progress" />
            <List title='Done' icon={<CheckCircleIcon style={{ color: '5e6ad2' }} />} status="Done" />
            <List title='Canceled' icon={<CancelRoundedIcon style={{ color: '94a2b3' }} />} status="Canceled" />
        </>
    )

}