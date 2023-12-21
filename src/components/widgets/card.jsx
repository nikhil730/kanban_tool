import React, { useContext } from 'react';
import { AppContext } from '../../App';

//default icons
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CircleIcon from '@mui/icons-material/Circle';

//priority icons
import SignalCellularAlt1BarOutlinedIcon from '@mui/icons-material/SignalCellularAlt1BarOutlined';
import SignalCellularAlt2BarOutlinedIcon from '@mui/icons-material/SignalCellularAlt2BarOutlined';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import PriorityHighRoundedIcon from '@mui/icons-material/PriorityHighRounded';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';

//status icons
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import HourglassBottomOutlinedIcon from '@mui/icons-material/HourglassBottomOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import SyncIcon from '@mui/icons-material/Sync';


import './card.css'

const bodyIcons = [
	{ value: "Backlog", icon: <SyncIcon style={{ color: 'd84a4a' }} /> },
	{ value: "Todo", icon: <CircleOutlinedIcon style={{ color: 'e4e4e4' }} /> },
	{ value: "In progress", icon: <HourglassBottomOutlinedIcon style={{ color: 'f1ca4a' }} /> },
	{ value: "Done", icon: <CheckCircleIcon style={{ color: '5e6ad2' }} /> },
	{ value: "Canceled", icon: <CancelRoundedIcon style={{ color: '94a2b3' }} /> },
];

const footerIcons = [
	{ value: 0, icon: <MoreHorizRoundedIcon style={{ color: '94a2b3' }} /> },
	{ value: 1, icon: <SignalCellularAlt1BarOutlinedIcon style={{ color: '94a2b3' }} /> },
	{ value: 2, icon: <SignalCellularAlt2BarOutlinedIcon style={{ color: '94a2b3' }} /> },
	{ value: 3, icon: <SignalCellularAltOutlinedIcon style={{ color: '94a2b3' }} /> },
	{ value: 4, icon: <PriorityHighRoundedIcon style={{ fontSize: 'medium', backgroundColor: '#bec2c8', color: 'white', borderRadius: '2px 2px', padding: '1px' }} /> },
];


export default function Card({ id, userId, headerIcon, bodyIcon, title, footerIcon, tag, available }) {

	//initialize porps with default values
	const initProps = () => {
		if (!id) id = 'Default Id';

		if (!footerIcon && footerIcon !== 0) footerIcon = -1;
		if (!bodyIcon) bodyIcon = null;

		if (!title) title = 'Default Title';
		if (!available) available = false;
	}

	initProps();

	const { users } = useContext(AppContext);

	//finding if the user is available or not
	const findUserById = (userId) => {
		users.find(user => user.id === userId ? available = user.available : available = false);
	};

	findUserById(userId)

	return (
		<div className='card fade-in-translate-rotate '>
			<div className='cardHeader fade-in-scale  '>
				<div className='cardUser'>
					{id}
				</div>
				{headerIcon &&
					<div className='cardUserPic'>
						{available ? <CircleIcon className='activeIcon' style={{ color: '#01b345' }} /> : <CircleIcon className='activeIcon' style={{ color: '#bec2c8' }} />}
						<AccountCircleIcon />
					</div>}
			</div>
			<div className='cardBody fade-in-scale'>
				{bodyIcon &&
					<div className='cardBodyIcon'>
						{bodyIcons.map((item, index) => (
							bodyIcon === item.value && <div key={index}>{item.icon}</div>
						))}
					</div>
				}
				{title}
			</div>
			<div className='cardFooter'>
				{footerIcon !== -1 ?
					<div className='cardFooterIcon fade-in-scale'>
						{footerIcons.map((item, index) => (
							footerIcon === item.value && <div key={index}>{item.icon}</div>
						))}
					</div>
					:
					<></>
				}
				<div className='cardFooterTitle'>
					{tag ? tag.map((tag, index) => <>

						<div key={index} className='cardFooterTag fade-in-scale' style={{ color: '#797d83', }}>
							<CircleIcon style={{ fontSize: 'medium', color: '#bec2c8', padding: '0 2px' }} />
							{tag}
						</div>
					</>
					)
						:
						<></>
					}
				</div>
			</div>

		</div>
	)
}
