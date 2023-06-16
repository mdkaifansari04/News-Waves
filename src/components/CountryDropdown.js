import React, { Component } from 'react'

export default class CountryDropdown extends Component {
    render() {

        let {mode} = this.props
        console.log(mode);
        return (
            <div className="dropdown" style={{ marginTop: '2rem' }}> 
                <select id='countryName' onChange={this.props.setCountry} className={`form-select bg-${mode.mode === 'light' ?'light':'dark'} text-${mode.mode === 'light' ?'dark':'light'}`}  aria-label="Default select example">
                    <option value="in">India</option>
                    <option value="ae">United Arab</option>
                    <option value="ar">Argentina</option>
                    <option value="at">Austria</option>
                    <option value="au">Australia</option>
                    <option value="be">Belgium</option>
                    <option value="bg">Bulgaria</option>
                    <option value="br">Brazil</option>
                    <option value="ca">Canada</option>
                    <option value="ch">Switzerland</option>
                    <option value="cn">China</option>
                    <option value="co">Colombia</option>
                    <option value="cu">Cuba</option>
                    <option value="cz">Czech Republic</option>
                    <option value="de">Germany</option>
                    <option value="eg">Egypt</option>
                    <option value="fr">France</option>
                    <option value="gb">United Kingdom</option>
                    <option value="gr">Greece</option>
                    <option value="hk">Hong Kong</option>
                    <option value="hu">Hungary</option>
                    <option value="id">Indonesia</option>
                    <option value="ie">Ireland</option>
                    <option value="il">Israel</option>
                    <option value="it">Italy</option>
                    <option value="jp">Japan</option>
                    <option value="kr">South Korea</option>
                    <option value="lt">Lithuania</option>
                    <option value="lv">Latvia</option>
                    <option value="ma">Morocco</option>
                    <option value="mx">Mexico</option>
                    <option value="my">Malaysia</option>
                    <option value="ng">Nigeria</option>
                    <option value="nl">Netherlands</option>
                    <option value="no">Norway</option>
                    <option value="nz">New Zealand</option>
                    <option value="ph">Philippines</option>
                    <option value="pl">Poland</option>
                    <option value="pt">Portugal</option>
                    <option value="ro">Romania</option>
                    <option value="rs">Serbia</option>
                    <option value="us">United States</option>
                    <option value="as">American Samoa</option>
                    <option value="es">Spain</option>
                    <option value="gs">South Georgia</option>
                    <option value="is">Iceland</option>
                    <option value="kt">Kuwait</option>
                    <option value="ht">Haiti</option>
                    <option value="rt">Russian Federation</option>
                    <option value="wu">Tuvalu</option>
                    <option value="au">Australia</option>
                    <option value="sv">El Salvador</option>
                    <option value="ez">Equatorial Guinea</option>
                    <option value="a">Zambia</option>
                </select>
            </div>
        )
    }
}

