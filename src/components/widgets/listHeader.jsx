import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AddIcon from '@mui/icons-material/Add';

import './listHeader.css';

export default function ListHeader(props) {
    return (
        <>
            <div className='fade-in' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: 'auto', width: '25rem', color: '#000000', margin: '10px', }}>

                <div style={{ display: 'flex', ustifyContent: 'space-between', width: 'auto', padding: '1rem 0', }}>

                    <div style={{ padding: '0 1rem 0 0', }}>{props.icon}</div>
                    <div style={{ padding: '0 1rem 0 0', fontWeight: '500', }}>{props.title}</div>
                    <div style={{ color: '#797d83', }}>{props.length}</div>
                    
                </div>
                <div> <AddIcon style={{ color: '94a2b3' }} /> <MoreHorizIcon style={{ color: '94a2b3' }} />  </div>
            </div>
        </>
    )
}