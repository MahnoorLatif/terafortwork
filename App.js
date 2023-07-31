import {useState} from "react";

function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Function to toggle the collapse status
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    // <div className='container p-5 my-5 border text-black'>
    //   <h1 className='text-left font-poppins'>Health History</h1>
    // </div>
  <div className='container mt-5  p-4 ' >
  <h1 className='text-black'>Health History</h1>

  <form action='/action-page.php'>

    <div className='d-flex justify-content-between mt-5 border rounded p-2 text-center'>
      
      <label className='form-check-label' for="check1">Have You Ever Been Hospitalized For Any Serious Illness?</label>
      <input type="checkbox" class="form-check-input" id="check1" name="option1" value="something" unchecked/>

    </div>

     <br></br>

    <div className='d-flex justify-content-between border mt-3 rounded p-2 text-center'>
      
      <label className='form-check-label' for="check1">Do You Smoke?</label>
      <input type="checkbox" class="form-check-input" id="check1" name="option1" value="something" unchecked/>
    </div>
  <br></br>
    <div className='d-flex justify-content-between border mt-3 rounded p-2 text-center'>
      
      <label className='form-check-label' for="check1">Do You Use Alcohol Or Any Other Drug?</label>
      <input type="checkbox" className="form-check-input" id="check1" name="option1" value="something" unchecked/>
    </div>
    <br></br> 

  <div className='d-flex justify-content-between border mt-3 rounded p-2 text-center'>
      
      <label className='form-check-label' for="check1">Do You Have Or Have You Ever Had Any Mental Illness?</label>
      <input type="checkbox" className='form-check-input' id='check1' name='option1' value='something' unchecked/>
    </div>
    <br></br>

<div>

<div className='d-flex flex-column border mt-3 rounded '>
          {/* <label className='form-check-label' htmlFor="check1">Other Diseases</label> */}
          <button
            className='btn btn-white'
            style={{textAlign:'left'}}
            type="button"
            onClick={toggleCollapse}
            aria-expanded={isCollapsed ? 'true' : 'false'}
            aria-controls='collapseexample'
          >
            {isCollapsed ? 'Other Diseases' : 'Other Diseases'}
          </button>

          {isCollapsed && (
          <div >

            <div className='form-check d-flex justify-content-between me-2'>
              
              <label className='form-check-label' htmlFor="disease1" >Low/High Blood Pressure (Hypertension)</label>
              <input type="checkbox" className="form-check-input" id="disease1" name="disease" value="Low/High Blood Pressure (Hypertension)" unchecked />
            </div>

            <div className='form-check d-flex justify-content-between me-2'>
              
              <label className='form-check-label' htmlFor="disease1">Diabetes</label>
              <input type="checkbox" className="form-check-input" id="disease1" name="disease" value="Low/High Blood Pressure (Hypertension)" unchecked />
            </div>

            <div className='form-check d-flex justify-content-between me-2'>
              
              <label className='form-check-label' htmlFor="disease1">Hepatitis ABC</label>
              <input type="checkbox" className="form-check-input" id="disease1" name="disease" value="Low/High Blood Pressure (Hypertension)" unchecked />
            </div>
            <div className='form-check d-flex justify-content-between me-2'>
              
              <label className='form-check-label' htmlFor="disease1">Drug Allegies</label>
              <input type="checkbox" className="form-check-input" id="disease1" name="disease" value="Low/High Blood Pressure (Hypertension)" unchecked />
            </div>
            
          </div>
        )}
  </div>
        <br></br>

        {/* Collapsible content */}
        


     
  </div>
</form> 
</div>
  );
}

export default App;
