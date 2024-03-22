import React from 'react'
function Drops({ categories, subcategories, childcategories}) {
return (
<div className='container'>
   <ul class="navbar-nav">

{categories?.map((each) => {
    return(

      <li class="nav-item has-child c-1">
         <a class="nav-link" href="desktops.html">{each?.name}</a>
         <ul class="drop-down drop-menu-1">
            {(subcategories?.filter(sub => sub?.category_id == each?.id)?.map((sub) => {
                return (
                <li className={Boolean(childcategories?.filter(child => child?.subcategory_id == sub?.id)?.length) ? 'nav-item has-child' : 'nav-item'}>
                <a class="nav-link" href="star-pc.html">{sub?.name}</a>
                <ul class="drop-down drop-menu-2">
                    {childcategories?.filter(child => child?.subcategory_id == sub?.id)?.map((child) =>{
                        return (
                            <li class="nav-item"><a class="nav-link" href="intel-pc.html">{child?.name}</a></li>
                        )
                    })}
                </ul>
                </li>
                )
            }))}
         </ul>
      </li>
    )
})}


   </ul>
</div>
)
}
export default Drops