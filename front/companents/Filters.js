import React from 'react'

const Filters = () => {
  const fromPrice=()=>{

  }
  return (
    <div className="filters">
              <div className="page-sidenav">
                <p className="sidenav-title"> Select MacBook Pro</p>
                <div className="filters-scroll">
                  <div className="ps">
                    <div className="ps-content">
                      <div  className="filter-item">
                        <p className="name"> Price, AZN: </p>
                        <div className="input-group">
                          <input type="number" aria-label="filterPriceFrom" className="form-control" placeholder="From" onChange={(e)=>fromPrice(e.target.value)}/>
                          <input type="number" aria-label="filterPriceTo" className="form-control" placeholder="Till"/>
                        </div>
                        <div className="mat-checkbox">
                          <label className="mat-checkbox-layout" htmlFor="mat-checkbox-1-input">
                            <div className="mat-checkbox-inner-container">
                              <input type="checkbox" className="mat-checkbox-input cdk-visually-hidden" id="mat-checkbox-1-input" tabIndex="0" aria-checked="false"/>
                              <div className="mat-checkbox-frame"></div>
                              <div className="mat-checkbox-background">
                                {/* <CheckboxMark/> */}
                              </div>
                            </div>
                            <span className="mat-checkbox-label">
                              {/* <span style={{display: none}}>{&nbsp;}</span>  */}
                              Only discounted products 
                            </span>

                          </label>
                        </div>
                    
                      </div>
                      <div className="filter-item">
                        <p  class="name"> CPU</p>
                        <ul className='filter-list'>
                          <li className="filter-list-item">
                            <div className="mat-checkbox">
                                <label className="mat-checkbox-layout" htmlFor="mat-checkbox-1-input">
                                    <div className="mat-checkbox-inner-container">
                                        <input type="checkbox" className="mat-checkbox-input cdk-visually-hidden" id="mat-checkbox-100-input" tabIndex="0" aria-checked="false"/>
                                        <div className="mat-checkbox-frame"></div>
                                        <div className="mat-checkbox-background">
                                        {/* <CheckboxMark/> */}
                                        </div>
                                    </div>
                                    <span className="mat-checkbox-label">
                                        {/* <span style={{display: none}}>{&nbsp;}</span>  */}
                                        <div  className="filter-name"> Apple M1 </div>
                                    </span>

                                </label>
                            </div>
                          </li>
                          <li className="filter-list-item">
                            <div className="mat-checkbox">
                                <label className="mat-checkbox-layout" htmlFor="mat-checkbox-1-input">
                                    <div className="mat-checkbox-inner-container">
                                        <input type="checkbox" className="mat-checkbox-input cdk-visually-hidden" id="mat-checkbox-100-input" tabIndex="0" aria-checked="false"/>
                                        <div className="mat-checkbox-frame"></div>
                                        <div className="mat-checkbox-background">
                                        {/* <CheckboxMark/> */}
                                        </div>
                                    </div>
                                    <span className="mat-checkbox-label">
                                        {/* <span style={{display: none}}>{&nbsp;}</span>  */}
                                        <div  className="filter-name">  Apple M1 Max  </div>
                                    </span>

                                </label>
                            </div>
                          </li>
                          <li className="filter-list-item">
                            <div className="mat-checkbox">
                                <label className="mat-checkbox-layout" htmlFor="mat-checkbox-1-input">
                                    <div className="mat-checkbox-inner-container">
                                        <input type="checkbox" className="mat-checkbox-input cdk-visually-hidden" id="mat-checkbox-100-input" tabIndex="0" aria-checked="false"/>
                                        <div className="mat-checkbox-frame"></div>
                                        <div className="mat-checkbox-background">
                                        {/* <CheckboxMark/> */}
                                        </div>
                                    </div>
                                    <span className="mat-checkbox-label">
                                        {/* <span style={{display: none}}>{&nbsp;}</span>  */}
                                        <div  className="filter-name">  Apple M1 Pro </div>
                                    </span>

                                </label>
                            </div>
                          </li>
                          <li className="filter-list-item">
                            <div className="mat-checkbox">
                                <label className="mat-checkbox-layout" htmlFor="mat-checkbox-1-input">
                                    <div className="mat-checkbox-inner-container">
                                        <input type="checkbox" className="mat-checkbox-input cdk-visually-hidden" id="mat-checkbox-100-input" tabIndex="0" aria-checked="false"/>
                                        <div className="mat-checkbox-frame"></div>
                                        <div className="mat-checkbox-background">
                                        {/* <CheckboxMark/> */}
                                        </div>
                                    </div>
                                    <span className="mat-checkbox-label">
                                        {/* <span style={{display: none}}>{&nbsp;}</span>  */}
                                        <div  className="filter-name"> Apple M2 </div>
                                    </span>

                                </label>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="filter-item">
                        <p  class="name">   External Colour </p>
                        <ul className='filter-list'>
                          <li className="filter-list-item">
                            <div className="mat-checkbox">
                                <label className="mat-checkbox-layout" htmlFor="mat-checkbox-1-input">
                                    <div className="mat-checkbox-inner-container">
                                        <input type="checkbox" className="mat-checkbox-input cdk-visually-hidden" id="mat-checkbox-100-input" tabIndex="0" aria-checked="false"/>
                                        <div className="mat-checkbox-frame"></div>
                                        <div className="mat-checkbox-background">
                                        {/* <CheckboxMark/> */}
                                        </div>
                                    </div>
                                    <span className="mat-checkbox-label">
                                        <div className="filter-color silver"></div>
                                        <div  className="filter-name">  Silver  </div>
                                    </span>

                                </label>
                            </div>
                          </li>
                          <li className="filter-list-item">
                            <div className="mat-checkbox">
                                <label className="mat-checkbox-layout" htmlFor="mat-checkbox-1-input">
                                    <div className="mat-checkbox-inner-container">
                                        <input type="checkbox" className="mat-checkbox-input cdk-visually-hidden" id="mat-checkbox-100-input" tabIndex="0" aria-checked="false"/>
                                        <div className="mat-checkbox-frame"></div>
                                        <div className="mat-checkbox-background">
                                        {/* <CheckboxMark/> */}
                                        </div>
                                    </div>
                                    <span className="mat-checkbox-label">
                                        <div className="filter-color gray"></div>
                                        <div  className="filter-name">   Space Gray   </div>
                                    </span>

                                </label>
                            </div>
                          </li>
                          
                        </ul>
                      </div>
                      <div className="filter-item">
                        <p  class="name">   Storage Capacity  </p>
                        <ul className='filter-list'>
                          <li className="filter-list-item">
                            <div className="mat-checkbox">
                                <label className="mat-checkbox-layout" htmlFor="mat-checkbox-1-input">
                                    <div className="mat-checkbox-inner-container">
                                        <input type="checkbox" className="mat-checkbox-input cdk-visually-hidden" id="mat-checkbox-100-input" tabIndex="0" aria-checked="false"/>
                                        <div className="mat-checkbox-frame"></div>
                                        <div className="mat-checkbox-background">
                                        {/* <CheckboxMark/> */}
                                        </div>
                                    </div>
                                    <span className="mat-checkbox-label">
                                        {/* <span style={{display: none}}>{&nbsp;}</span>  */}
                                        <div  className="filter-name">  1 TB  </div>
                                    </span>

                                </label>
                            </div>
                          </li>
                          <li className="filter-list-item">
                            <div className="mat-checkbox">
                                <label className="mat-checkbox-layout" htmlFor="mat-checkbox-1-input">
                                    <div className="mat-checkbox-inner-container">
                                        <input type="checkbox" className="mat-checkbox-input cdk-visually-hidden" id="mat-checkbox-100-input" tabIndex="0" aria-checked="false"/>
                                        <div className="mat-checkbox-frame"></div>
                                        <div className="mat-checkbox-background">
                                        {/* <CheckboxMark/> */}
                                        </div>
                                    </div>
                                    <span className="mat-checkbox-label">
                                        {/* <span style={{display: none}}>{&nbsp;}</span>  */}
                                        <div  className="filter-name">   2 TB   </div>
                                    </span>

                                </label>
                            </div>
                          </li>
                          <li className="filter-list-item">
                            <div className="mat-checkbox">
                                <label className="mat-checkbox-layout" htmlFor="mat-checkbox-1-input">
                                    <div className="mat-checkbox-inner-container">
                                        <input type="checkbox" className="mat-checkbox-input cdk-visually-hidden" id="mat-checkbox-100-input" tabIndex="0" aria-checked="false"/>
                                        <div className="mat-checkbox-frame"></div>
                                        <div className="mat-checkbox-background">
                                        {/* <CheckboxMark/> */}
                                        </div>
                                    </div>
                                    <span className="mat-checkbox-label">
                                        {/* <span style={{display: none}}>{&nbsp;}</span>  */}
                                        <div  className="filter-name">   256 GB  </div>
                                    </span>

                                </label>
                            </div>
                          </li>
                          <li className="filter-list-item">
                            <div className="mat-checkbox">
                                <label className="mat-checkbox-layout" htmlFor="mat-checkbox-1-input">
                                    <div className="mat-checkbox-inner-container">
                                        <input type="checkbox" className="mat-checkbox-input cdk-visually-hidden" id="mat-checkbox-100-input" tabIndex="0" aria-checked="false"/>
                                        <div className="mat-checkbox-frame"></div>
                                        <div className="mat-checkbox-background">
                                        {/* <CheckboxMark/> */}
                                        </div>
                                    </div>
                                    <span className="mat-checkbox-label">
                                        {/* <span style={{display: none}}>{&nbsp;}</span>  */}
                                        <div  className="filter-name">   4 TB   </div>
                                    </span>

                                </label>
                            </div>
                          </li>
                          <li className="filter-list-item">
                            <div className="mat-checkbox">
                                <label className="mat-checkbox-layout" htmlFor="mat-checkbox-1-input">
                                    <div className="mat-checkbox-inner-container">
                                        <input type="checkbox" className="mat-checkbox-input cdk-visually-hidden" id="mat-checkbox-100-input" tabIndex="0" aria-checked="false"/>
                                        <div className="mat-checkbox-frame"></div>
                                        <div className="mat-checkbox-background">
                                        {/* <CheckboxMark/> */}
                                        </div>
                                    </div>
                                    <span className="mat-checkbox-label">
                                        {/* <span style={{display: none}}>{&nbsp;}</span>  */}
                                        <div  className="filter-name">   512 GB  </div>
                                    </span>

                                </label>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="filter-item">
                        <p  class="name">  Diagonal Length </p>
                        <ul className='filter-list'>
                          <li className="filter-list-item">
                            <div className="mat-checkbox">
                                <label className="mat-checkbox-layout" htmlFor="mat-checkbox-1-input">
                                    <div className="mat-checkbox-inner-container">
                                        <input type="checkbox" className="mat-checkbox-input cdk-visually-hidden" id="mat-checkbox-100-input" tabIndex="0" aria-checked="false"/>
                                        <div className="mat-checkbox-frame"></div>
                                        <div className="mat-checkbox-background">
                                        {/* <CheckboxMark/> */}
                                        </div>
                                    </div>
                                    <span className="mat-checkbox-label">
                                        {/* <span style={{display: none}}>{&nbsp;}</span>  */}
                                        <div  className="filter-name"> {` 13.3" `} </div>
                                    </span>

                                </label>
                            </div>
                          </li>
                          <li className="filter-list-item">
                            <div className="mat-checkbox">
                                <label className="mat-checkbox-layout" htmlFor="mat-checkbox-1-input">
                                    <div className="mat-checkbox-inner-container">
                                        <input type="checkbox" className="mat-checkbox-input cdk-visually-hidden" id="mat-checkbox-100-input" tabIndex="0" aria-checked="false"/>
                                        <div className="mat-checkbox-frame"></div>
                                        <div className="mat-checkbox-background">
                                        {/* <CheckboxMark/> */}
                                        </div>
                                    </div>
                                    <span className="mat-checkbox-label">
                                        {/* <span style={{display: none}}>{&nbsp;}</span>  */}
                                        <div  className="filter-name">  {` 14.2" `}  </div>
                                    </span>

                                </label>
                            </div>
                          </li>
                          <li className="filter-list-item">
                            <div className="mat-checkbox">
                                <label className="mat-checkbox-layout" htmlFor="mat-checkbox-1-input">
                                    <div className="mat-checkbox-inner-container">
                                        <input type="checkbox" className="mat-checkbox-input cdk-visually-hidden" id="mat-checkbox-100-input" tabIndex="0" aria-checked="false"/>
                                        <div className="mat-checkbox-frame"></div>
                                        <div className="mat-checkbox-background">
                                        {/* <CheckboxMark/> */}
                                        </div>
                                    </div>
                                    <span className="mat-checkbox-label">
                                        {/* <span style={{display: none}}>{&nbsp;}</span>  */}
                                        <div  className="filter-name">  {` 16.2" `} </div>
                                    </span>

                                </label>
                            </div>
                          </li>
                        </ul>
                      </div>
                      

                    </div>

                  </div>
                
                </div>
              </div>
            </div>
  )
}

export default Filters