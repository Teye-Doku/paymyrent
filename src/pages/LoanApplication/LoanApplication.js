import './LoanApplication.css';



const LoanApplication = () =>{
    return (
        <div className='loan__application'>
             <div className='loan__application__requirement'>
                     <h3>Requirements</h3>
                     <div className='requirement__item'>
                         <div className='outer__circle'>
                              <div className='inner__circle'></div>
                         </div>
                         <p>National ID (eg. Voter's card,Ghana card,passport)</p>
                     </div>
                     <div className='requirement__item'>
                         <div className='outer__circle'>
                              <div className='inner__circle'></div>
                         </div>
                         <p>One passport size photograph (Preferably on a white background)</p>
                     </div>
                     <div className='requirement__item'>
                         <div className='outer__circle'>
                              <div className='inner__circle'></div>
                         </div>
                         <p>Proof of Address (eg. Utility Bills,Directional Map,Rent Agreement etc.)</p>
                     </div>
             </div>
             <div className='loan__application__form'>
                 <div className="loan__application__form__years">
                     <p>Enter the number of years you want rent for.</p>
                     <input type="number"  />
                 </div>
                 <div className='loan__application__form__years'>
                    <p>Select the type of structure you are applying loan for.</p>
                    <select>
                        <option value="house">House</option>
                        <option value="office">Office</option>
                        <option value="store">Store</option>
                    </select>
                 </div>
                  <h3>Personal Information</h3>
                  <div className='loan__application__title'>
                      <select>
                          <option value="Mr">Dr</option>
                          <option value="Mrs">Mr</option>
                          <option value="Miss">Miss</option>
                          <option value="Mr">Mrs </option>
                      </select>
                      <input className='input__one' text="text" placeholder='Your title(if other,specify)'/>
                      <input className='input__two' type="text" placeholder='Surname'/>
                  </div>
                  <div className='loan__application__name'>
                      <input type='text' placeholder='Firstname' />
                      <input type='text' placeholder='Middlename' />
                      <input type='text' placeholder='Nicknames(if any)' />    
                  </div>
                  <div className='loan__application__gender'>
                      <select>
                          <option value="Gender">--Gender--</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                      </select>
                      <input type="text" placeholder='Nationality'/>
                  </div>
                  <div className='loan__application__placeofbirth'>
                      <input type="text" placeholder='Place of Birth'/>
                  </div>
                  <div className='loan__application__placeofbirth'>
                      <p>Date of birth</p>
                      <input type="date" placeholder='Date of Birth'/>
                  </div>
                  <div className='loan__application__gender'>
                      <select>
                          <option value="typeofid">--Type of Id--</option>
                          <option value="National">National ID</option>
                          <option value="Password">Passport</option>
                          <option value="Voter">Voter's</option>
                          <option value="Drivers">Drivers's License</option>
                      </select>
                      <input type="text" placeholder='ID Number'/>
                  </div>
                  <div className='loan__application__card_expiry'>
                      <div className='loan__application__card_expiry_date'>
                          <p>Issue date</p>
                          <input type="date"  />
                      </div>
                      <div className='loan__application__card_expiry_date'>
                          <p>Expiry date</p>
                          <input type="date"  />
                      </div>
                  </div>
                  <div className='loan__application__mary__status'>
                      <select>
                          <option value="">--Marital Status--</option>
                          <option value="Single">Single</option>
                          <option value="Married">Married</option>
                      </select>
                      <input type="text" placeholder="if other (specify)" />
                      <input type="text" placeholder="No of dependents" />
                  </div>
                  <div className='loan__application__phone__number'>
                      <input type="text" placeholder='Phone Number' />
                  </div>

                 <div className='loan__application__button__container'>
                 <button> Send </button>
                 </div>
             </div>
        </div>
    )
}

export default LoanApplication;
