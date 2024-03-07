import axios from 'axios'
import { useState } from 'react';
import ConfModal from '../conformModal';
import ErrorModal from '../errorModal';
import SuccessModal from '../successModal';
const PostWanted = () =>{
 const [errStatus, setErrStatus]=useState('500')
 const[errMsg, setErrMsg]=useState('The server might be down, please try again later we will try to solve the problem as soon as possible')
 const[succMsg,setSuccMsg]=useState("sdfsdfsdfsdfsdfsdfsdf")
 const[isLoading,setLoading]=useState(false)
 const [name, setName] = useState('')
 const [age, setAge] = useState(0)
 const [gender, setGender] = useState('')
 const [alias, setAlias] = useState('')
 const [last_known_location, setLast_known_location] = useState('')
 const [nationality, setNationality] = useState('')
 const [criminal_offenses, setCriminal_offenses] = useState('')
 const [reward, setReward] = useState(0.00)
 const [contact_information, setContact_information] = useState('')
 const [description, setDescription] = useState('')
 const [showconfModal, showconformModal] = useState(false);
 const [showerrModal,showerrorModal] = useState(false)
 const [showsccModal, showsuccessModal] = useState(false)
 
const url = 'http://127.0.0.1:8000/police/addwanted'
 const handleSubmit = async (e) =>{
  
  e.preventDefault();
  setLoading(true)
  
    const ages=parseInt(age);
    const rewards = parseInt(reward);
   try{
    
  const resp =await axios.post(url, {name:name,alias:alias,description:description,age:ages,gender:gender,nationality:nationality,criminal_offenses:criminal_offenses,last_known_location:last_known_location,reward:rewards,contact_information:contact_information});
  if(resp.status === 201){
    setSuccMsg(resp.data.success)
    setLoading(false)
    showconformModal(false)
    showsuccessModal(true)
  }
   } catch(error){
    setLoading(false)
    showconformModal(false)
    showerrorModal(true)
   if(error.response.status === 400 ){
    setErrStatus(error.response.status);
    setErrMsg(error.response.data.success);
     }
    
  }
 } 
 const handleOpenModal = () => {
  showconformModal(true); // Open the modal on button click
};

return( 
 <>
 
 <br/>


  <div className="grid  mx-24 lg:mx-auto   bg-sky-50   rounded-lg shadow-xl w-4/5  md:w-9/12 lg:w-1/2">
    <div className="flex justify-center py-4">
      <div className="flex bg-gray-50 rounded-full md:p-4 p-2 border-2 border-sky-800">
      <svg
              className="w-12 text-sky-900"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              stroke="currentColor"
              fill="none"
            >
              <rect x="3" y="1" width="7" height="12" />
              <rect x="3" y="17" width="7" height="6" />
              <rect x="14" y="1" width="7" height="6" />
              <rect x="14" y="11" width="7" height="12" />
            </svg>
      </div>
    </div>

    <div className="flex justify-center">
      <div className="flex">
        <h1 className="text-gray-600 font-bold md:text-2xl text-xl">Post Wanted</h1>
      </div>
    </div>
     <form onSubmit={handleSubmit}>
    <div className="grid grid-cols-1 mt-5 mx-7">
      <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Name</label>
      <input className="py-2 px-3 rounded-lg border-2 border-sky-300 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent" type="text" placeholder="name" value={name} id="name" onChange={(e)=> setName(e.target.value)} />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
      <div className="grid grid-cols-1">
        <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">age</label>
        <input className="py-2 px-3 rounded-lg border-2 border-sky-300 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent" type="number" placeholder="age"  value={age} id="age" onChange={(e)=> setAge(e.target.value)}/>
      </div>
      <div className="grid grid-cols-1">
      <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">gender</label>
      <select className="py-2 px-3 rounded-lg border-2 border-sky-300 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent" value={gender} id="gender" onChange={(e)=> setGender(e.target.value)} placeholder="gender">
        
      <option> </option>
      <option>male</option>
        <option>female</option>
        
      </select>
    </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
      <div className="grid grid-cols-1">
        <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">alias</label>
        <input className="py-2 px-3 rounded-lg border-2 border-sky-300 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent" type="text" placeholder="alias" value={alias} id="alias" onChange={(e)=> setAlias(e.target.value)} />
      </div>
      <div className="grid grid-cols-1">
        <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">nationality</label>
        <input className="py-2 px-3 rounded-lg border-2 border-sky-300 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent" type="text" placeholder="nationality" value={nationality} id="nationality" onChange={(e)=> setNationality(e.target.value)} />
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
      <div className="grid grid-cols-1">
        <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Last seen</label>
        <input className="py-2 px-3 rounded-lg border-2 border-sky-300 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent" type="text" placeholder="Last seen" value={last_known_location} id="last_known_location" onChange={(e)=> setLast_known_location(e.target.value)} />
      </div>
      <div className="grid grid-cols-1">
        <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Reward</label>
        <input className="py-2 px-3 rounded-lg border-2 border-sky-300 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent" type="number" placeholder="reward" value={reward} id="reward" onChange={(e)=> setReward(e.target.value)} />
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
      <div className="grid grid-cols-1">
        <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">criminal offense</label>
        <input className="py-2 px-3 rounded-lg border-2 border-sky-300 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent" type="text" placeholder="offense" value={criminal_offenses} id="criminal_offenses" onChange={(e)=> setCriminal_offenses(e.target.value)}/>
      </div>
      <div className="grid grid-cols-1">
        <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">contact information</label>
        <input className="py-2 px-3 rounded-lg border-2 border-sky-300 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent" type="text" placeholder="contact information" value={contact_information} id="contact_information" onChange={(e)=> setContact_information(e.target.value)} />
      </div>
    </div>

    

    <div className="grid grid-cols-1 mt-5 mx-7">
      <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">description</label>
      <textarea  className="py-2 px-3 rounded-lg border-2 border-sky-300 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent" type="text" placeholder="description" rows="5" value={description} id="description" onChange={(e)=> setDescription(e.target.value)} />
    </div>

    <div className="grid grid-cols-1 mt-5 mx-7">
      <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold mb-1">Upload Photo</label>
        
    </div>

    <div className='flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5'>
      <button className='w-auto bg-gray-500 hover:bg-gray-700 rounded-lg shadow-xl font-medium text-white px-4 py-2'>Cancel</button>
      <div>
      <button className='w-auto bg-sky-500 hover:bg-sky-700 rounded-lg shadow-xl font-medium text-white px-4 py-2' type='button' onClick={handleOpenModal}>Create</button>
      {showconfModal && <ConfModal showconfModal={showconfModal} isLoading={isLoading} message={'you are about to post a wanted criminal please conform by clicking post'} clickbutton={'post'} onClose={() => showconformModal(false)} />}
      {showerrModal && <ErrorModal showerrModal={showerrModal} errMsg={errMsg} errStatus={errStatus} onClose={() => showerrorModal(false)} />}
      {showsccModal && <SuccessModal showsccModal={showsccModal} succMsg={succMsg} onClose={() => showsuccessModal(false)} />}
      </div>
    </div>
    </form>
  </div>

  <br/>
  

 </>

);

}

export default PostWanted;