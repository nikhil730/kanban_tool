import React, { useContext } from "react";
import { AppContext } from "../../App";

//default icons
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CircleIcon from "@mui/icons-material/Circle";

//priority icons
import SignalCellularAlt1BarOutlinedIcon from "@mui/icons-material/SignalCellularAlt1BarOutlined";
import SignalCellularAlt2BarOutlinedIcon from "@mui/icons-material/SignalCellularAlt2BarOutlined";
import SignalCellularAltOutlinedIcon from "@mui/icons-material/SignalCellularAltOutlined";
import PriorityHighRoundedIcon from "@mui/icons-material/PriorityHighRounded";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";

//status icons
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import HourglassBottomOutlinedIcon from "@mui/icons-material/HourglassBottomOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import SyncIcon from "@mui/icons-material/Sync";

import "./card.css";

const bodyIcons = [
  { value: "Backlog", icon: <SyncIcon style={{ color: "d84a4a" }} /> },
  { value: "Todo", icon: <CircleOutlinedIcon style={{ color: "e4e4e4" }} /> },
  {
    value: "In progress",
    icon: <HourglassBottomOutlinedIcon style={{ color: "f1ca4a" }} />,
  },
  { value: "Done", icon: <CheckCircleIcon style={{ color: "5e6ad2" }} /> },
  {
    value: "Canceled",
    icon: <CancelRoundedIcon style={{ color: "94a2b3" }} />,
  },
];

const footerIcons = [
  { value: 0, icon: <MoreHorizRoundedIcon style={{ color: "94a2b3" }} /> },
  {
    value: 1,
    icon: <SignalCellularAlt1BarOutlinedIcon style={{ color: "94a2b3" }} />,
  },
  {
    value: 2,
    icon: <SignalCellularAlt2BarOutlinedIcon style={{ color: "94a2b3" }} />,
  },
  {
    value: 3,
    icon: <SignalCellularAltOutlinedIcon style={{ color: "94a2b3" }} />,
  },
  {
    value: 4,
    icon: (
      <PriorityHighRoundedIcon
        style={{
          fontSize: "medium",
          backgroundColor: "#bec2c8",
          color: "white",
          borderRadius: "2px 2px",
          padding: "1px",
        }}
      />
    ),
  },
];

export default function Card({
  id,
  userId,
  headerIcon,
  bodyIcon,
  title,
  footerIcon,
  tag,
  available,
  like,
  comm,
}) {
  //initialize porps with default values
  const initProps = () => {
    if (!id) id = "Default Id";

    if (!footerIcon && footerIcon !== 0) footerIcon = -1;
    if (!bodyIcon) bodyIcon = null;

    if (!title) title = "Default Title";
    if (!available) available = false;
  };

  initProps();

  const { users } = useContext(AppContext);

  //finding if the user is available or not
  const findUserById = (userId) => {
    users.find((user) =>
      user.id === userId ? (available = user.available) : (available = false)
    );
  };

  findUserById(userId);

  return (
    <div className="card fade-in-translate-rotate ">
      <div className="cardHeader fade-in-scale  ">
        <div className="cardUser">{id}</div>
        {headerIcon && (
          <div className="cardUserPic">
            {available ? (
              <CircleIcon className="activeIcon" style={{ color: "#01b345" }} />
            ) : (
              <CircleIcon className="activeIcon" style={{ color: "#bec2c8" }} />
            )}
            <AccountCircleIcon />
          </div>
        )}
      </div>
      <div className="cardBody fade-in-scale">
        {bodyIcon && (
          <div className="cardBodyIcon">
            {bodyIcons.map(
              (item, index) =>
                bodyIcon === item.value && <div key={index}>{item.icon}</div>
            )}
          </div>
        )}
        {title}
      </div>
      <div className="cardFooter">
        {footerIcon !== -1 ? (
          <div className="cardFooterIcon fade-in-scale">
            {footerIcons.map(
              (item, index) =>
                footerIcon === item.value && <div key={index}>{item.icon}</div>
            )}
          </div>
        ) : (
          <></>
        )}
        <div className="cardFooterTitle">
          {tag ? (
            tag.map((tag, index) => (
              <>
                <div
                  key={index}
                  className="cardFooterTag fade-in-scale"
                  style={{ color: "#797d83" }}
                >
                  {/* <CircleIcon style={{ fontSize: 'medium', color: '#bec2c8', padding: '0 2px' }} /> */}
                  {/* {tag} */}
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z"
                      fill="black"
                    />
                    <path
                      d="M15.7059 14.2941H20.2941C20.684 14.2941 21 14.6102 21 15C21 15.3898 20.684 15.7059 20.2941 15.7059H15.7059V20.2941C15.7059 20.684 15.3898 21 15 21C14.6102 21 14.2941 20.684 14.2941 20.2941V15.7059H9.70588C9.31604 15.7059 9 15.3898 9 15C9 14.6102 9.31603 14.2941 9.70588 14.2941H14.2941V9.70588C14.2941 9.31604 14.6102 9 15 9C15.3898 9 15.7059 9.31603 15.7059 9.70588V14.2941Z"
                      fill="white"
                    />
                  </svg>
                  <span className="iconssss">
                    {comm}
                    <svg
                      className="msg ico"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.2">
                        <rect
                          opacity="0.01"
                          width="20"
                          height="20"
                          fill="black"
                        />
                        <path
                          d="M10 9.99998C10.4603 9.99998 10.8334 9.62688 10.8334 9.16665C10.8334 8.70641 10.4603 8.33331 10 8.33331C9.53978 8.33331 9.16669 8.70641 9.16669 9.16665C9.16669 9.62688 9.53978 9.99998 10 9.99998Z"
                          fill="black"
                        />
                        <path
                          d="M13.3333 9.99998C13.7936 9.99998 14.1667 9.62688 14.1667 9.16665C14.1667 8.70641 13.7936 8.33331 13.3333 8.33331C12.8731 8.33331 12.5 8.70641 12.5 9.16665C12.5 9.62688 12.8731 9.99998 13.3333 9.99998Z"
                          fill="black"
                        />
                        <path
                          d="M6.66665 9.99998C7.12688 9.99998 7.49998 9.62688 7.49998 9.16665C7.49998 8.70641 7.12688 8.33331 6.66665 8.33331C6.20641 8.33331 5.83331 8.70641 5.83331 9.16665C5.83331 9.62688 6.20641 9.99998 6.66665 9.99998Z"
                          fill="black"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M4.16669 2.5H15.8334C17.2141 2.5 18.3334 3.61929 18.3334 5V13.3333C18.3334 14.714 17.2141 15.8333 15.8334 15.8333H7.12502C6.96418 15.8271 6.80499 15.8677 6.66669 15.95L2.92502 18.2167C2.79639 18.293 2.64959 18.3333 2.50002 18.3333C2.35686 18.3329 2.21623 18.2956 2.09169 18.225C1.82961 18.0777 1.66721 17.8006 1.66669 17.5V5C1.66669 3.61929 2.78598 2.5 4.16669 2.5ZM15.8334 14.1667C16.2936 14.1667 16.6667 13.7936 16.6667 13.3333V5C16.6667 4.53976 16.2936 4.16667 15.8334 4.16667H4.16669C3.70645 4.16667 3.33335 4.53976 3.33335 5V16.025L5.83335 14.525C6.22326 14.2902 6.66987 14.1663 7.12502 14.1667H15.8334Z"
                          fill="black"
                        />
                      </g>
                    </svg>
                    {like}
                    <svg
                      className="heart ico"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.2">
                        <rect
                          opacity="0.01"
                          width="20"
                          height="20"
                          fill="black"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M9.40831 17.2583C9.56557 17.4143 9.77847 17.5013 9.99998 17.5C10.2215 17.5013 10.4344 17.4143 10.5916 17.2583L17.0666 10.775C18.757 9.06698 18.757 6.31639 17.0666 4.60835C15.3624 2.90887 12.6043 2.90887 10.9 4.60835L9.99998 5.50835L9.09998 4.60835C7.39569 2.90887 4.63759 2.90887 2.93331 4.60835C1.24293 6.31639 1.24293 9.06698 2.93331 10.775L9.40831 17.2583ZM4.11664 5.78335C4.61988 5.27887 5.30409 4.99679 6.01664 5.00001C6.7292 4.99679 7.4134 5.27887 7.91664 5.78335L9.40831 7.28335C9.56478 7.44111 9.77778 7.52985 9.99998 7.52985C10.2222 7.52985 10.4352 7.44111 10.5916 7.28335L12.0833 5.78335C13.1497 4.7759 14.817 4.7759 15.8833 5.78335C16.931 6.8366 16.931 8.53842 15.8833 9.59168L9.99998 15.4833L4.11664 9.59168C3.0689 8.53842 3.0689 6.8366 4.11664 5.78335Z"
                          fill="black"
                        />
                      </g>
                    </svg>
                    <svg
                      className="clip ico"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.2">
                        <rect
                          opacity="0.01"
                          width="20"
                          height="20"
                          fill="black"
                        />
                        <path
                          d="M7.74165 17.5C6.35092 17.4933 5.02102 16.9289 4.04998 15.9333C3.08638 15.02 2.52557 13.761 2.49118 12.4338C2.45679 11.1067 2.95164 9.82028 3.86665 8.85832L9.99998 2.66666C10.6618 2.006 11.5651 1.64471 12.5 1.66666C13.5011 1.67006 14.4589 2.0754 15.1583 2.79166C16.5926 4.17257 16.6483 6.45057 15.2833 7.89999L9.11665 14.0917C8.71768 14.4933 8.17444 14.7184 7.60831 14.7167C6.99663 14.7175 6.41059 14.471 5.98331 14.0333C5.10351 13.1815 5.07377 11.78 5.91665 10.8917L11.6083 5.17499C11.9425 4.95303 12.3874 5.00071 12.667 5.28846C12.9466 5.5762 12.9815 6.02231 12.75 6.34999L7.05831 12.0667C6.86085 12.3045 6.89052 12.6568 7.12498 12.8583C7.24224 12.9764 7.40032 13.045 7.56665 13.05C7.69109 13.0518 7.81109 13.0038 7.89998 12.9167L14.0583 6.72499C14.7776 5.92593 14.7219 4.69738 13.9333 3.96666C13.2024 3.20778 12.0057 3.15288 11.2083 3.84166L5.04998 9.99999C4.44514 10.6496 4.12438 11.5137 4.1588 12.4006C4.19321 13.2876 4.57995 14.1242 5.23331 14.725C5.88861 15.4043 6.78948 15.7917 7.73331 15.8C8.54695 15.8066 9.32968 15.4887 9.90831 14.9167L16.0666 8.72499C16.3911 8.39822 16.919 8.39635 17.2458 8.72082C17.5726 9.04529 17.5744 9.57322 17.25 9.89999L11.0916 16.0917C10.2084 16.9905 9.00178 17.4978 7.74165 17.5Z"
                          fill="black"
                        />
                      </g>
                    </svg>
                  </span>
                </div>
              </>
            ))
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
