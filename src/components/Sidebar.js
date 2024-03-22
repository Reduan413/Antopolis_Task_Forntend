// import axios from "axios";
import { useEffect, useState } from "react";
import SidebarItem from "./SidebarItem";

const SideBar = ({ sidebar,setSidebar }) => {
  const [sidebarDatas, setSidebarDatas] = useState([
    {
      "title": "Groceries items",
      "icon": "jsonImages/icon-1.svg",
  
      "childrens": [
        {
          "title": "Vegitables"
        },
        {
          "title": "Fruits"
        },
        {
          "title": "Banana"
        }
      ]
    },
    {
      "title": "Fruits items",
      "icon": "jsonImages/icon-2.svg",
      "childrens": [
        {
          "title": "Apple"
        },
        {
          "title": "Banana"
        },
        {
          "title": "Orange"
        },
        {
          "title": "Mango"
        }
      ]
    },
    {
      "title": "Food items",
      "icon": "jsonImages/icon-3.svg",
      "childrens": [
        {
          "title": "Berger"
        },
        {
          "title": "Mango",
          "childrens": [
            {
              "title": "Fruits"
            },
            {
              "title": "Foods",
              "childrens": [
                {
                  "title": "Goaba"
                },
                {
                  "title": "Coconat"
                }
              ]
            },
            {
              "title": "Notifications"
            }
          ]
        },
        {
          "title": "Orange"
        },
        {
          "title": "Apple"
        }
      ]
    },
    {
      "title": "Beauty & health",
      "icon": "jsonImages/icon-4.svg",
      "childrens": [
        {
          "title": "Womens care"
        },
        {
          "title": "Mens care"
        },
        {
          "title": "Makeup"
        },
        {
          "title": "Skin care"
        },
        {
          "title": "Hair oil"
        },
        {
          "title": "Tissue & wiper"
        },
        {
          "title": "Handwash"
        }
      ]
    },
  
    {
      "title": "Personal care",
      "icon": "jsonImages/icon-5.svg",
      "childrens": [
        {
          "title": "Womens care"
        },
        {
          "title": "Mens care",
          "childrens": [
            {
              "title": "Bath"
            },
            {
              "title": "Cream & lotion"
            },
            {
              "title": "Beard grooming"
            },
            {
              "title": "Mens facewash"
            },
            {
              "title": "Mens hair care"
            }
          ]
        },
        {
          "title": "Skin care"
        },
        {
          "title": "Makeup"
        },
        {
          "title": "Hair oil"
        },
        {
          "title": "Tissue & wiper"
        },
        {
          "title": "Handwash"
        }
      ]
    },
    {
      "title": "Baby care",
      "icon": "jsonImages/icon-6.svg",
      "childrens": [
        {
          "title": "Womens care"
        },
        {
          "title": "Mens care",
          "childrens": [
            {
              "title": "Bath"
            },
            {
              "title": "Cream & lotion"
            },
            {
              "title": "Beard grooming"
            },
            {
              "title": "Mens facewash"
            },
            {
              "title": "Mens hair care"
            }
          ]
        },
        {
          "title": "Skin care"
        },
        {
          "title": "Makeup"
        },
        {
          "title": "Hair oil"
        },
        {
          "title": "Tissue & wiper"
        },
        {
          "title": "Handwash"
        }
      ]
    },
    {
      "title": "Pet care",
      "icon": "jsonImages/icon-7.svg",
      "childrens": [
        {
          "title": "Womens care"
        },
        {
          "title": "Mens care",
          "childrens": [
            {
              "title": "Bath"
            },
            {
              "title": "Cream & lotion"
            },
            {
              "title": "Beard grooming"
            },
            {
              "title": "Mens facewash"
            },
            {
              "title": "Mens hair care"
            }
          ]
        },
        {
          "title": "Skin care"
        },
        {
          "title": "Makeup"
        },
        {
          "title": "Hair oil"
        },
        {
          "title": "Tissue & wiper"
        },
        {
          "title": "Handwash"
        }
      ]
    },
    {
      "title": "Home & Kitchen",
      "icon": "jsonImages/icon-8.svg",
      "childrens": [
        {
          "title": "Womens care"
        },
        {
          "title": "Mens care",
          "childrens": [
            {
              "title": "Bath"
            },
            {
              "title": "Cream & lotion"
            },
            {
              "title": "Beard grooming"
            },
            {
              "title": "Mens facewash"
            },
            {
              "title": "Mens hair care"
            }
          ]
        },
        {
          "title": "Skin care"
        },
        {
          "title": "Makeup"
        },
        {
          "title": "Hair oil"
        },
        {
          "title": "Tissue & wiper"
        },
        {
          "title": "Handwash"
        }
      ]
    },
    {
      "title": "Cleaning supplies",
      "icon": "jsonImages/icon-9.svg",
      "childrens": [
        {
          "title": "Womens care"
        },
        {
          "title": "Mens care",
          "childrens": [
            {
              "title": "Bath"
            },
            {
              "title": "Cream & lotion"
            },
            {
              "title": "Beard grooming"
            },
            {
              "title": "Mens facewash"
            },
            {
              "title": "Mens hair care"
            }
          ]
        },
        {
          "title": "Skin care"
        },
        {
          "title": "Makeup"
        },
        {
          "title": "Hair oil"
        },
        {
          "title": "Tissue & wiper"
        },
        {
          "title": "Handwash"
        }
      ]
    },
    {
      "title": "Stationery & office",
      "icon": "jsonImages/icon-10.svg",
      "childrens": [
        {
          "title": "Womens care"
        },
        {
          "title": "Mens care",
          "childrens": [
            {
              "title": "Bath"
            },
            {
              "title": "Cream & lotion"
            },
            {
              "title": "Beard grooming"
            },
            {
              "title": "Mens facewash"
            },
            {
              "title": "Mens hair care"
            }
          ]
        },
        {
          "title": "Skin care"
        },
        {
          "title": "Makeup"
        },
        {
          "title": "Hair oil"
        },
        {
          "title": "Tissue & wiper"
        },
        {
          "title": "Handwash"
        }
      ]
    },
    {
      "title": "Toys & sports",
      "icon": "jsonImages/icon-11.svg",
      "childrens": [
        {
          "title": "Womens care"
        },
        {
          "title": "Mens care",
          "childrens": [
            {
              "title": "Bath"
            },
            {
              "title": "Cream & lotion"
            },
            {
              "title": "Beard grooming"
            },
            {
              "title": "Mens facewash"
            },
            {
              "title": "Mens hair care"
            }
          ]
        },
        {
          "title": "Skin care"
        },
        {
          "title": "Makeup"
        },
        {
          "title": "Hair oil"
        },
        {
          "title": "Tissue & wiper"
        },
        {
          "title": "Handwash"
        }
      ]
    },
    {
      "title": "Fashion & lifestyle",
      "icon": "jsonImages/icon-12.svg",
      "childrens": [
        {
          "title": "Womens care"
        },
        {
          "title": "Mens care",
          "childrens": [
            {
              "title": "Bath"
            },
            {
              "title": "Cream & lotion"
            },
            {
              "title": "Beard grooming"
            },
            {
              "title": "Mens facewash"
            },
            {
              "title": "Mens hair care"
            }
          ]
        },
        {
          "title": "Skin care"
        },
        {
          "title": "Makeup"
        },
        {
          "title": "Hair oil"
        },
        {
          "title": "Tissue & wiper"
        },
        {
          "title": "Handwash"
        }
      ]
    }
  ]
  );
  const [activeItem, setActiveItem] = useState("");


  // useEffect(() => {
  //   axios.get(`/sidebarDatas.json`).then((response) => {
  //     setSidebarDatas(response.data);
  //   });
  // }, []);


  return (
    <>
      <div id="active-sticky-2" className="sodainagar-sidemen">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {" "}
              <div
                className={sidebar ? "sidebar toggle" : "sidebar"}
                id="sidebars"
              >
                {sidebarDatas?.map((item, index) => (
                  <SidebarItem
                    key={index}
                    index={index}
                    item={item}
                    activeItem={activeItem}
                    setActiveItem={setActiveItem}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
