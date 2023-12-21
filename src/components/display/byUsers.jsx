import React, { useContext } from 'react';
import { AppContext } from '../../App';
import Card from '../widgets/card';
import ListHeader from '../widgets/listHeader';

//usericon
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CircleIcon from '@mui/icons-material/Circle';

function List(props) {
    const { tickets, order } = useContext(AppContext);
    const { status } = props;

    const filteredTickets = tickets.filter(ticket => ticket.userId === status);

    // Sort the filtered tickets by priority
    const prioritySortedTickets = filteredTickets.sort((a, b) => b.priority - a.priority);

    // Filter the tickets by status
    const titleSortedTickets = tickets.filter(ticket => ticket.userId === status)
        .sort((a, b) => a.title.localeCompare(b.title));

    if (order === 'Priority') {
        return (

            <div>
                <ListHeader title={props.title} length={prioritySortedTickets.length} icon={props.icon} />
                {prioritySortedTickets.map((props) => (

                    <Card key={props.id} id={props.id} title={props.title} tag={props.tag} headerIcon={false} bodyIcon={props.status} footerIcon={props.priority} />

                ))}
            </div>

        )
    }
    else if (order === 'Title') {
        return (

            <div>
                <ListHeader title={props.title} length={prioritySortedTickets.length} icon={props.icon} />
                {titleSortedTickets.map((props) => (

                    <Card key={props.id} id={props.id} title={props.title} tag={props.tag} headerIcon={false} bodyIcon={props.status} footerIcon={props.priority} />

                ))}
            </div>

        )
    }

}



export default function ByUsers() {
    const { users } = useContext(AppContext);

    return (
        <>
            {users.map((user, index) => (
                <List key={index} title={user.name} icon={<>
                    {user.available ? <CircleIcon style={{
                        margin: '0', position: 'relative', top: '2px', left: '1.8rem', border: '0px solid white', borderRadius: '50%', backgroundColor: 'white', fontSize: 'small', color: '#01b345',
                    }} /> : <CircleIcon style={{
                        margin: '0', position: 'relative', top: '2px', left: '1.8rem', border: '0px solid white', borderRadius: '50%', backgroundColor: 'white', fontSize: 'small', color: '#bec2c8',
                    }} />}

                    <AccountCircleIcon />
                </>} status={user.id} />
            ))}
        </>
    )

}