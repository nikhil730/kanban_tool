import React, { useContext } from 'react';
import { AppContext } from '../../App';
import Card from '../widgets/card';
import ListHeader from '../widgets/listHeader';

//icons
import SignalCellularAlt1BarOutlinedIcon from '@mui/icons-material/SignalCellularAlt1BarOutlined';
import SignalCellularAlt2BarOutlinedIcon from '@mui/icons-material/SignalCellularAlt2BarOutlined';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import PriorityHighRoundedIcon from '@mui/icons-material/PriorityHighRounded';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';



function List({ title, icon, priority }) {
	const { tickets, order } = useContext(AppContext);

	// Filter the tickets by priority
	const prioritySortedTickets = tickets
		.filter(ticket => ticket.priority === priority)
		.sort((a, b) => a.priority - b.priority);

	// Filter the tickets by title (for the 'Title' order)
	const titleSortedTickets = tickets
		.filter(ticket => ticket.priority === priority)
		.sort((a, b) => a.title.localeCompare(b.title));

	if (order === 'Priority') {
		return (
			<div>
				<ListHeader title={title} length={prioritySortedTickets.length} icon={icon} />
				{prioritySortedTickets.map((props) => (
					<Card key={props.id} id={props.id} userId={props.userId} title={props.title} tag={props.tag} headerIcon={true} bodyIcon={props.status} />
				))}
			</div>
		)
	}
	else if (order === 'Title') {
		return (
			<div>
				<ListHeader title={title} length={prioritySortedTickets.length} icon={icon} />
				{titleSortedTickets.map((props) => (
					<Card key={props.id} id={props.id} userId={props.userId} title={props.title} tag={props.tag} headerIcon={true} bodyIcon={props.status} />
				))}
			</div>
		)
	}


}


export default function ByStatus() {

	return (
		<>
			<List title='No priority' icon={<MoreHorizRoundedIcon style={{ color: '94a2b3' }} />} priority={0} />
			<List title='Urgent' icon={<PriorityHighRoundedIcon style={{ color: 'white', backgroundColor: 'fc7a43', borderRadius: '2px 2px' }} />} priority={4} />
			<List title='High' icon={<SignalCellularAltOutlinedIcon style={{ color: '94a2b3' }} />} priority={3} />
			<List title='Medium' icon={<SignalCellularAlt2BarOutlinedIcon style={{ color: '94a2b3' }} />} priority={2} />
			<List title='Low' icon={<SignalCellularAlt1BarOutlinedIcon style={{ color: '94a2b3' }} />} priority={1} />
		</>
	)

}