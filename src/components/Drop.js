import React, { useState } from 'react';
// import './MultiLayerDropdown.css'; // Create this CSS file

const MultiLayerDropdown = ({ categories, subcategories, childcategories}) => {
  const [showSubDropdown, setShowSubDropdown] = useState(false);
  const [showChildDropdown, setShowChildDropdown] = useState(false);

//   console.log(subcategories)
  const [sub, setSub] = useState([]);
  const [child, setChild] = useState([]);

  const handleDropdownEnter = (id) => {
    setSub(subcategories?.length && subcategories?.filter(each => each?.category_id == id))
    setShowSubDropdown(true);
  };

  const handleDropdownLeave = () => {
    setSub([])
    setShowSubDropdown(false);
  };

  const handleSubDropdownEnter = (id) => {
    setChild(childcategories?.length && childcategories?.filter(each => each?.subcategory_id == id))
    setShowChildDropdown(true);
  };

  const handleSubDropdownLeave = () => {
    setChild([])
    setShowChildDropdown(false);
  };


  return (
    <>

    {  categories?.map((each, index) => {
        return (
            <div key={index} className="multi-layer-dropdown m-1" onMouseEnter={ () => handleDropdownEnter(each?.id)} onMouseLeave={handleDropdownLeave}>
            <button className="dropdown-button">{each?.name}</button>
            { Boolean(sub?.length) && (
                <div className="sub-dropdown">
                <ul>
                    {sub?.map((s, i) => {
                        return (
                            <>
                            <li key={index} onMouseEnter={ () => handleSubDropdownEnter(s?.id)} onMouseLeave={handleSubDropdownLeave} >{s?.name}</li>
                         { showChildDropdown && Boolean(child?.length)  && child[0]?.subcategory_id == s?.id && <div className="child-dropdown" style={{ top: i * 42 }}>
                                <ul>
                                    {child?.map((child, ind) => {
                                        return (
                                            <li key={ind}>{child?.name}</li>
                                        )
                                    })}
                                </ul>
                            </div>}
                            </>
                        )
                    })}

                </ul>
                </div>
            )}
            </div>
        )
    }) }

    </>
  );
};

export default MultiLayerDropdown;


export async function getServerSideProps(){

    // const CACHE_KEY = 'allproducts';
  
    // const cachedData = cache.get(CACHE_KEY);
  
    // if (cachedData) {
    //   return {
    //     props: {
    //       data: cachedData
    //     }
    //   };
    // }
  
    //Fetch:
  
      try {
    const res = await fetch ('https://eco.best-it.online/api/category/list',{
      headers: {
        'Authorization': `INEJEUDYSBW7583837NUDD752023`
      }});
    const data = await res.json()
    // cache.put(CACHE_KEY, data, 60 * 1000); // Cache for 5 minute
    return { props: { data } }
      }
  
      catch (error) {
          console.error('Error fetching data:', error);
      
          return {
            props: {
              error: 'Failed to fetch data'
            }
          };
        }
  
  }
  
  
