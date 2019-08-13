import React,{useContext,useState} from 'react';
import "./profile.css";
import PartnerContext from "../../context/partner/partnerContext";
import axios from "axios"
import Spinner from "../../components/spinners";


function Profile(){
    const partnerContext = useContext(PartnerContext);
    const {profile,loading}=partnerContext;

    const update_profile=async(e)=>{
        partnerContext.SET_LOADING(true)
        e.preventDefault()
        const username=e.target.username.value;
        const workshopName=e.target.workshopName.value;
        const phone=e.target.phone.value;
        const mobile=e.target.mobile.value;
        const description=e.target.description.value;
        const allowEmailSMS=e.target.allowEmailSMS.value;

        var profileData={
            id:profile._id,
            profile:{
                username,
                workshopName,
                phone,
                mobile,
                description,
                allowEmailSMS
            }
        }
        console.log(profileData);
        var updatedProfile=await axios.post("/v1/partner/update",profileData);
        partnerContext.LOAD_PROFILE()
        partnerContext.SET_LOADING(false)

    }

    return(
        <div className="profileBox">
            <h3>Workshop Details</h3>
            <hr/>
            <form onSubmit={update_profile}>
                <div className="profile-input-grid">
                    <label htmlFor="workshopName">Workshop Name</label>
                    <input type="text" name="workshopName"  defaultValue={profile.workshopName} />
                </div>
                <div className="profile-input-grid">
                    <label htmlFor="workshopName">Owner Name</label>
                    <input type="text" name="username" defaultValue={profile.username} />
                </div>
                <div className="profile-input-grid">
                    <label htmlFor="address">Address</label>
                    <input type="text" name="address" defaultValue={profile.address} />
                </div>
                <div className="profile-input-grid">
                    <label htmlFor="mobile">Mobile</label>
                    <input type="text" name="mobile" defaultValue={profile.mobile} />
                </div>
                <div className="profile-input-grid">
                    <label htmlFor="country">Country</label>
                    <input type="text" name="country" defaultValue={profile.country} readOnly />
                </div>

                <div className="profile-input-grid">
                    <label htmlFor="phone">Phone</label>
                    <input type="text" name="phone" defaultValue={profile.phone} />
                </div>



                <div className="profile-input-grid">
                    <label htmlFor="email">Email</label>
                    <input type="text" readOnly  defaultValue={profile.email} />
                </div>

                <div className="profile-input-grid">
                    <label htmlFor="description">Description</label>
                    <div>
                    <textarea name="description" defaultValue={profile.description}></textarea>
                    </div>
                </div>
                <div>
                <input type="checkbox" name="allowEmailSMS"/> I agree to allow RepairKaki to contact me by email and sms. 
                </div>
                <input type="submit" className="viewButton" value="UPDATE PROFILE"/>
                {(loading?(<div className="loadingSpinner"><Spinner/></div>):null)}

            </form>
        </div>
    )

}


export default Profile;
