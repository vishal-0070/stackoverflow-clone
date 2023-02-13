import React from 'react'
import { useState } from 'react'
import { UpdateUsers } from '../../actions/users'
import { useDispatch, useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'


 const EditProfile = () => {
    const [name, setname] = useState('')
    const [about, setabout] = useState('')
    const [tags, settags] = useState('')
    const dispatch=useDispatch();
    const currentUser = useSelector((state) => state.currentUser)
    const navigate=useNavigate();

    const onChangeTags=(e)=>{
       settags(e.target.value.split(' '));
    }

    const UpdateProfile=(e)=>{
        e.preventDefault()
      dispatch(UpdateUsers(currentUser.result._id,name,about,tags));
      navigate(`/Users/${currentUser.result._id}`)
    }

  return (
    <div>
            <h1 className='edit-profile-title'>
                Edit Your Profile
            </h1>
            <h2 className="edit-profile-title-2">
                Public information
            </h2>
            <form className="edit-profile-form" onSubmit={UpdateProfile} >
                <label htmlFor="name">
                    <h3>Display name</h3>
                    <input type="text" onChange={(e)=> setname(e.target.value)}/>
                </label>
                <label htmlFor="about">
                    <h3>About me</h3>
                    <textarea id="about" cols="30" rows="10" onChange={(e)=> setabout(e.target.value)} ></textarea>
                </label>
                <label htmlFor="tags">
                    <h3>Watched tags</h3>
                    <p>Add tags separated by 1 space</p>
                    <input type="text" id= 'tags' onChange={onChangeTags}/>
                </label><br />
                <input type="submit" value='Save profile' className='user-submit-btn'/>
                <button type='button' className='user-cancel-btn'>Cancel</button>
            </form>
        </div>
  )
}

export default EditProfile;