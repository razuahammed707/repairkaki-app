import React,{useContext,useState,useEffect} from 'react';
import "./profile.css";
import PartnerContext from "../../context/partner/partnerContext";
import axios from "axios"
import Spinner from "../../components/spinners";
import { Alert } from 'react-bootstrap';


        


function Profile(){

    const partnerContext = useContext(PartnerContext);
    const {profile,loading}=partnerContext;
    const [profileUpdate,setProfileUpdate]=useState(false);
    const [preview,setPreview]=useState();
    const [mobile,setMobile]=useState();

    useEffect(()=>{
        if(profile.country==="Malaysia"){
            setMobile("+60")
        }
        if(profile.country==="Singapore"){
            setMobile("+65")
        }
    })

 
    setTimeout(()=>{
        setProfileUpdate(false)
    },5000)

    const update_profile=async(e)=>{
        partnerContext.SET_LOADING(true)
        e.preventDefault()
        const username=e.target.username.value;
        const workshopName=e.target.workshopName.value;
        const phone=e.target.phone.value;
        const address=e.target.address.value;
        const mobile=e.target.mobile.value;
        const description=e.target.description.value;
        const allowEmailSMS=e.target.allowEmailSMS.value;
        if(allowEmailSMS){
            setProfileUpdate(true)
        }

        var profileData={
            id:profile._id,
            profile:{
                username,
                workshopName,
                phone,
                mobile,
                description,
                allowEmailSMS,
                address
            }
        }
        await axios.post("/v1/partner/update",profileData);
        partnerContext.LOAD_PROFILE()
        partnerContext.SET_LOADING(false)
        setProfileUpdate(true)
        window.scrollTo(0, 0)

    }


// Show Preview 
    const showPreview=(e)=>{
        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            setPreview(reader.result)
        }
        reader.readAsDataURL(file)

    }

    //Update Profile Image
    const updateProfileImage = async(e)=>{
        e.preventDefault();

        if(e.target.partnerProfile.files[0]){
            partnerContext.SET_LOADING(true)
            var formData = new FormData();
        
            formData.append("image", e.target.partnerProfile.files[0]);
            formData.set('_id', profile._id);
    
            var output=await axios.post('/v1/partner/upload', formData, {
                headers: {
                'Content-Type': 'multipart/form-data'
                }      
            })
            partnerContext.LOAD_PROFILE()
            partnerContext.SET_LOADING(false)
            setProfileUpdate(true)
        } 
    }

    return(
        <div className="profileBox">
                            {(loading?(<div className="loadingSpinner"><Spinner/></div>):null)}
                            {(profileUpdate?(<Alert variant="success">Profile Updated</Alert>):null)}


            <h3>Workshop Profile</h3>
            <hr/>
            <div className="profilePhotoUpdate">
                   <img src={(preview?preview:profile.profileURL)}/>

                   <form   onSubmit={updateProfileImage}>
                   <input type="file" name="partnerProfile" onChange={showPreview} className="browseFIle"/>
                   <input type="submit"  value="Upload "/>
                   </form>
            </div>

            <hr/>


            <form onSubmit={update_profile}>

                <div className="profile-input-grid">
                    <label htmlFor="workshopName">Workshop Name</label>
                    <input type="text" name="workshopName"  defaultValue={profile.workshopName} required/>
                </div>
                <div className="profile-input-grid">
                    <label htmlFor="workshopName">Owner Name</label>
                    <input type="text" name="username" defaultValue={profile.username} />
                </div>
                <div className="profile-input-grid">
                    <label htmlFor="address">Address</label>
                    <input type="text" name="address" defaultValue={profile.address} required/>
                </div>
                <div className="profile-input-grid">
                    <label htmlFor="mobile">Mobile</label>
                    <div className="mobile_box">
                        <span style={{position:"absolute",top:"1px"}}>{mobile}</span>
                        <input type="text" name="mobile" defaultValue={profile.mobile} required/>

                    </div>
                </div>
                <div className="profile-input-grid">
                    <label htmlFor="country">Country</label>
                    <input type="text" name="country" defaultValue={profile.country} readOnly />
                </div>

                <div className="profile-input-grid">
                    <label htmlFor="phone">Phone</label>
                    <input type="text" name="phone" defaultValue={profile.phone} required />
                </div>



                <div className="profile-input-grid">
                    <label htmlFor="email">Email</label>
                    <input type="text" readOnly  defaultValue={profile.email} />
                </div>

                <div className="profile-input-grid">
                    <label htmlFor="description">Headline</label>
                    <div>
                    <textarea name="description" defaultValue={profile.description}></textarea>
                    </div>
                </div>
                <div>
                <input type="checkbox" name="allowEmailSMS"  defaultChecked required/> I agree to allow RepairKaki to contact me by email and sms. 
                </div>
                <input type="submit" className="viewButton" value="UPDATE PROFILE"/>

            </form>
        </div>
    )

}


export default Profile;
