import React,{useState,ChangeEvent} from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import axios, { AxiosResponse } from "axios";
const API_BASE_URL=import.meta.env.VITE_API_BASE_URL;
function Addcourses(){
    const [courseTitle,setCourseTitle]=useState("");
    const [courseDescription,setCourseDescription]=useState("");
    const [coursePrice,setCoursePrice]=useState("");
    const [coursePublished,setCoursePublished]=useState("");
    const [courseImage,setCourseImage]=useState("");
    const [courseOrganiser,setCourseOrganiser]=useState("");
let changeTitle=(event:ChangeEvent<HTMLInputElement>)=>{
setCourseTitle(event.target.value);
}
let changeDescription=(event:ChangeEvent<HTMLInputElement>)=>{
setCourseDescription(event.target.value);
}
let changePrice=(event:ChangeEvent<HTMLInputElement>)=>{
setCoursePrice(event.target.value);
}
let changePublished=(event:ChangeEvent<HTMLInputElement>)=>{
setCoursePublished(event.target.value);
}
let changeImage=(event:ChangeEvent<HTMLInputElement>)=>{
  setCourseImage(event.target.value);
}
let changeOrganiser=(event:ChangeEvent<HTMLInputElement>)=>{
  setCourseOrganiser(event.target.value);
}
return <>

<GrayTopper ></GrayTopper>
    <Card   variant={"outlined"} style={{
       marginLeft:425,
        width:400,
        marginTop:100,
        padding:20}}>
            <TextField fullWidth={true} id="outlined-basic" label="Title" variant="outlined" onChange={changeTitle} />
       <br />
       <br />
       <TextField  fullWidth={true} id="outlined-basic" label="Description" variant="outlined" onChange={changeDescription} />
       <br />
       <br />
       <TextField  fullWidth={true} id="outlined-basic" label="Price" variant="outlined" onChange={changePrice} />
       <br />
       <br />
       <TextField  fullWidth={true} id="outlined-basic" label="Published" variant="outlined" onChange={changePublished} />
       <br />
       <br />
       <TextField  fullWidth={true} id="outlined-basic" label="Image" variant="outlined" onChange={changeImage} />
       <br />
       <br />
       <TextField  fullWidth={true} id="outlined-basic" label="Organiser" variant="outlined" onChange={changeOrganiser} />
       <br />
       <br />
       <Button variant="contained" size="large" onClick={async ()=>{
     
       const resp:AxiosResponse =await axios.post(`${API_BASE_URL}/admin/courses`,{
        'title': courseTitle, 'description': courseDescription, 'price': coursePrice, 'published': coursePublished ,
         'image':courseImage,'organiser':courseOrganiser
      },{
        headers:{
          "Authorization" : "Bearer "+localStorage.getItem("token")
        }
      })
       
       }}>Add Course</Button>
   
       </Card>
</>

}
function GrayTopper(){
  return <div style={{height:200,background:"#212121",top:0,width:"100vw",zIndex:0,marginBottom:-150}}>
  <div style={{height:200,display:"flex",justifyContent:"center",flexDirection:"column"}}>
  <div>
    <Typography style={{color:"white",fontWeight:600}} variant="h3" textAlign="center">Add Course</Typography>
  </div>
  
  </div>
  </div>
  }
export default Addcourses