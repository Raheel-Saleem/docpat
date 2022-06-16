import React, {useState, useEffect} from 'react'

export default function SearchFilter() {
    const [specialist, setSpecialist] = useState([])


    useEffect(() => {
        const data=['Urology', 'Neurology', 'Dentist', 'Orthopedic']
        setSpecialist(data)
        
    },[])
    

  return (
    <div className="col-md-12 col-lg-4 col-xl-3 theiaStickySidebar"> 
    <div className="card search-filter">
        <div className="card-header">
            <h4 className="card-title mb-0">Search Filter</h4>
        </div>
        <div className="card-body">
            <div className="filter-widget">
            <div className="cal-icon">
                <input type="text" className="form-control datetimepicker" placeholder="Select Date"/>
            </div>
            </div>
            <div className="filter-widget">
            <h4>Gender</h4>
            <div>
                <label className="custom_check">
                <input type="checkbox" name="gender_type"/>
                <span className="checkmark"></span> Male Doctor
                </label>
            </div>
            <div>
                <label className="custom_check">
                <input type="checkbox" name="gender_type"/>
                <span className="checkmark"></span> Female Doctor
                </label>
            </div>
            </div>
            <div className="filter-widget">
            <h4>Select Specialist</h4>
            {
                specialist.map((data, index)=>{
                    return(
                        <div key={index}> 
                            <label className="custom_check">
                            <input type="checkbox" name="select_specialist"/>
                            <span className="checkmark"></span> {data}
                            </label>
                        </div>
                    );
                })
            }
            
            
            </div>
            <div className="btn-search">
            <button type="button" className="btn btn-block">Search</button>
            </div>
        </div>
    </div>
    </div>
  )
}
