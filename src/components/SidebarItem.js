// import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";
import Link from 'next/link'

const SidebarItem = ({
  item,
  activeItem,
  setActiveItem,
}) => {
  const [open, setOpen] = useState(false);

  //console.log(item.icon)
  // console.log(<img src={item.icon} className="sidebarIMG" alt="" />)

  // useEffect(() => {
  //     console.log(activeItem)
  //     if(activeItem === item.title){
  //         console.log("Helow sidebar")
  //         setOpen(!open)
  //     }
  //   }, []);
  
  useEffect(() => {
    if (activeItem === item.title) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [activeItem]);
  if (item.childrens) {
    return (
      <>
        <div
          className={open ? "sidebar-item open" : "sidebar-item"}
          onClick={() => setActiveItem(item.title)}
        >
          <div
            className={
              activeItem === item.title ? "sidebar-title open" : "sidebar-title"
            }
          >
            <Link href="#">
              <span onClick={() => setOpen(!open)}>
                {item.icon && (
                  <img src={item.icon} className="sidebarIMG" alt="" />
                )}
                {item.title}
                {/* <FontAwesomeIcon
                  icon={faChevronRight}
                  className="toggle-btn"
                  onClick={() => setOpen(!open)}
                /> */}
                <span    onClick={() => setOpen(!open)}>X</span>
              </span>
            </Link>
          </div>
          <div className="sidebar-content">
            {item.childrens.map((child, index) => (
              <SidebarItem key={index} item={child} />
            ))}
          </div>
        </div>
        {/* <Accordion>
          <Accordion.Item eventKey={index}>
            <Accordion.Header>
              <Link to="#">
                <span onClick={() => setOpen(!open)}>
                  {item.icon && (
                    <img src={item.icon} className="sidebarIMG" alt="" />
                  )}
                  {item.title}
                 
                </span>
              </Link>
            </Accordion.Header>
            <Accordion.Body>
              {item.childrens.map((child, index) => (
                <SidebarItem key={index} item={child} />
              ))}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion> */}
      </>
    );
  } else {
    return (
      <>
        <Link
          href={item.title}
          className="sidebar-item plain g-3"
          // onClick={() => setSidebar(!sidebar)}
        >
          {item.icon && <img src={item.icon} className="sidebarIMG" alt="" />}
          {item.title}
        </Link>
      </>
    );
  }
};

export default SidebarItem;
