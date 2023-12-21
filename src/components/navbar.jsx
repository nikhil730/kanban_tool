import React, { useState, useContext, useEffect, useRef } from 'react'
import { AppContext } from '../App';

//icons
import TuneIcon from '@mui/icons-material/Tune';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


import './navbar.css';


//dropdown menu
function List() {

    const { group, setGroup, order, setOrder } = useContext(AppContext)

    const [openSubList, setOpenSubList] = useState(0);
    // 0 to open none
    // 1 to open group
    // 2 to open order

    return (
        <div className='listBox fade-in-translate-rotate'>

            {/* group list */}

            <div className='listItem '>
                <div className='title'>Grouping</div>
                <div className='subList hilight' onClick={() => setOpenSubList((prevState) => (prevState === 1 ? 0 : 1))}>
                    {group}
                    <i className='orderDropIcon'>
                        <KeyboardArrowDownIcon style={{ position: 'relative', color: 'gray', fontSize: '1.5rem' }} />
                    </i>
                </div>
                {openSubList === 1 ?
                    <div className='subDropDownList fade-in-translate-rotate'
                        style={{ top: '3.5rem', left: 'calc(12rem - 1px)', }}
                        onClick={() => setOpenSubList(0)}>
                        <div className='hilight' onClick={() => setGroup('Status')}>&nbsp;&nbsp;Status</div>
                        <div className='hilight' onClick={() => setGroup('User')}> &nbsp;&nbsp;User</div>
                        <div className='hilight' onClick={() => setGroup('Priority')}> &nbsp;&nbsp;Priority</div>
                    </div>
                    : <></>
                }
            </div>

            {/* order list */}

            <div className='listItem'>
                <div className='title'>Ordering</div>
                <div className='subList hilight' onClick={() => setOpenSubList((prevState) => (prevState === 2 ? 0 : 2))}>
                    {order}
                    <i className='orderDropIcon'>
                        <KeyboardArrowDownIcon style={{ position: 'relative', color: 'gray', fontSize: '1.5rem' }} />
                    </i>
                </div>

                {openSubList === 2 ?
                    <div className='subDropDownList fade-in-translate-rotate' onClick={() => setOpenSubList(0)}
                        style={{ left: 'calc(12rem - 1px)', top: '6.5rem' }}>
                        <div className='hilight' onClick={() => setOrder('Priority')}>&nbsp;&nbsp;Priority</div>
                        <div className='hilight' onClick={() => setOrder('Title')}>&nbsp;&nbsp;Title</div>
                    </div>
                    : <></>
                }

            </div>
        </div>
    )

}

//display button
function DropDownList(props) {

    const [isOpen, setIsOpen] = useState(false);
    const divRef = [useRef(null), useRef(null)];

    // funtion to close the dropdown when clicked outside
    const handleOutsideClick = (event) => {
        // Close the div if clicked outside of it or its sublist
        if (divRef[0].current && !divRef[0].current.contains(event.target) && divRef[1].current && !divRef[1].current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {

        // Attach the event listener to the document
        document.addEventListener('mousedown', handleOutsideClick);

        // Clean up the event listener on component unmount
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    });

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div ref={divRef[0]} className='dropDown hilight' onClick={handleToggle}>
                <TuneIcon style={{ color: '#999999' }} />
                Display
                <i className='dropIcon'>
                    <KeyboardArrowDownIcon style={{ color: '#999999', }} />
                </i>
            </div>
            <div ref={divRef[1]}>
                {isOpen && <List />}
            </div>
        </>

    );
}


const Navbar = (props) => {
    return (
        <div className="navbar" >
            <DropDownList />
        </div>
    )
}

export default Navbar

