import React,{useState} from "react";
import axios from "axios"
import Spinner from "../../components/spinners"

function CreateQuote(){

    const [loading,setLoading]=useState(false);

    const createQuote =async (e)=>{
        setLoading(true)
        e.preventDefault()
        const address=e.target.address.value;
        const mobile=e.target.mobile.value;
        const email=e.target.email.value;
        const carModel=e.target.carModel.value;
        const problemType=e.target.problemType.value;
        const description=e.target.description.value;
        const pictures=e.target.pictures.files[0];

        // const quote={
        //     address,
        //     mobile,
        //     email,
        //     problemType,
        //     description
        // }

        var formData = new FormData();
        
        formData.append("pictures",pictures);
        formData.set("address",address);
        formData.set("mobile",mobile);
        formData.set("carModel",carModel);

        formData.set("email",email);
        formData.set("problemType",problemType);
        formData.set("description",description);



        var output=await axios.post('/v1/user/create_quote', formData, {
            headers: {
            'Content-Type': 'multipart/form-data'
            }      
        })


        console.log(output)
        setLoading(false)

    }





    return(
        <div className="profileBox">
                        {(loading?(<div className="loadingSpinner"><Spinner/></div>):null)}

            <h3>Quotes Requests</h3>


        <form onSubmit={createQuote} className="createQuote">
                <div className="profile-input-grid">
                    <label htmlFor="adress">Address</label>
                    <input type="text" name="address" />
                </div>

                <div className="profile-input-grid">
                    <label htmlFor="mobile">Mobile No</label>
                    <input type="text" name="mobile" />
                </div>

                <div className="profile-input-grid">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" />
                </div>

                <div className="profile-input-grid">
                    <label htmlFor="problemType">Problem Type</label>
                    <select name="problemType">
                        <option name="repair">Repair</option>
                        <option name="maintenance">Maintenance</option>

                    </select>
                </div>

                <div className="profile-input-grid">
                    <label htmlFor="carModel">Car Model</label>
                    <input type="text" name="carModel" />
                </div>

                <div className="profile-input-grid">
                    <label htmlFor="description">Description</label>
                    <textarea name="description"></textarea>
                </div>

                <div className="profile-input-grid">
                    <label htmlFor="pictures">Picture</label>
                    <input type="file" name="pictures" multiple/>
                </div>
 
 
 
               
                <input type="submit" className="viewButton" value="Create Quote"/>

                </form>
        </div>
    )
}

export default CreateQuote;