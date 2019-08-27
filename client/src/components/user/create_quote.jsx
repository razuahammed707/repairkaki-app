import React,{useState,useContext} from "react";
import axios from "axios"
import Spinner from "../../components/spinners";
import Dropzone from 'react-dropzone'
import UploadIcon from "./uploadIcon.png";
import PartnerContext from "../../context/partner/partnerContext";



function CreateQuote(props){
    

    const [loading,setLoading]=useState(false);
    const [inputFiles,setinputFiles]=useState([]);
    const [fileprevew,setFilePreview]=useState([])

    const partnerContext =useContext(PartnerContext);
    const {_id}=partnerContext.profile; 




    const uploadFile=async (acceptedFiles) =>{

        var formData = new FormData();

        acceptedFiles.map((item)=>{
            // formData.append("pictures",item);
            var OldInputList = inputFiles;
            OldInputList.push(item)
            setinputFiles(OldInputList);

            let reader = new FileReader();
            let file = item;
    
            reader.onloadend = () => {
                var oldPreview= fileprevew;
                oldPreview.push(reader.result)
                setFilePreview(oldPreview)
                console.log(fileprevew)
            }
            reader.readAsDataURL(file)
        });
         console.log(inputFiles);
    } 
   


    const createQuote =async (e)=>{
        setLoading(true)
        e.preventDefault()
        const address=e.target.address.value;
        const mobile=e.target.mobile.value;
        const email=e.target.email.value;
        const carModel=e.target.carModel.value;
        const problemType=e.target.problemType.value;
        const description=e.target.description.value;
        const userId=_id;
        
        var formData = new FormData();
    
        formData.set("address",address);
        formData.set("mobile",mobile);
        formData.set("carModel",carModel);
        formData.set("userId",userId);

        formData.set("email",email);
        formData.set("problemType",problemType);
        formData.set("description",description);

        inputFiles.map(item=>{
            formData.append("pictures",item);

         })

        var output=await axios.post('/v1/user/create_quote', formData, {
            headers: {
            'Content-Type': 'multipart/form-data'
            }      
        })


        console.log(output)
        setLoading(false);
        props.history.push("/user/quote_received")

    };





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

                    <Dropzone onDrop={uploadFile}>
                    {({getRootProps, getInputProps,isDragActive, isDragReject}) => (
                        <section className="uploadQuoteImages" className={(isDragActive?"activeDrag":"notActive")}>
                        <div {...getRootProps()}>
                            <input {...getInputProps()} />
                            <img src={UploadIcon} alt="upload_icon" className="uploadImage"/>

                            <p className="dropTitle">{isDragActive && 'Drop Here'}
                            </p>
                        </div>
                        <div className="previewOption">
                        {fileprevew.map((item,index)=>{
                            return(
                                <img src={item}/>
)
                        })}
                        </div>
                        
                        </section>
                    )}
                    </Dropzone>
                                         
                </div>
 
 
 
               
                <input type="submit" className="viewButton" value="Create Quote"/>

                </form>
        </div>
    )
}

export default CreateQuote;