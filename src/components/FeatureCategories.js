import React from 'react'

function FeatureCategories({categories}) {
  return (
    <>
        <div className='container mt-3'>
            <div class="row">
                {categories?.map((cat) => (
                    <>
                        <div className='col-lg-3 col-md-4 col-6 m-0 p-1'>
                            <div className='border borderprimary rounded p-0 m-0 d-flex align-items-center' style={{ height: '80px' }}>
                                <div className='w-100 p-3'><img src={"https://eco.best-it.online/" + cat?.banner_image} alt="pic" style={{ width: '50px', height: '50px', borderRadius: '5px' }} /></div>
                                <div className='w-100 p-1 text-center'><span className='w-100 responsive-font p-2' style={{ minWidth: '200px' }}>{cat?.name}</span></div>
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </div>
    </>
  )
}

export default FeatureCategories