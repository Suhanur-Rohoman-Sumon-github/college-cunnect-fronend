import { useState } from 'react';
import { useForm } from 'react-hook-form';
import admitImge from '../../../assets/login.avif';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Admition = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const { register, handleSubmit,reset, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data)
    reset()
  };
  const [phoneNumber, setPhoneNumber] = useState();

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className='py-20 w-9/12 mx-auto md:flex'>
      <div className='md:w-[50%]'>
        <img className='w-full h-screen' src={admitImge} alt="" />
      </div>
      <form className='p-4 md:w-[50%] border border-teal-500' onSubmit={handleSubmit(onSubmit)}>
        <h1 className='text-center text-4xl text-teal-500 my-4'>admit your favorite college</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Candidate name</span>
          </label>
          <input className='input input-bordered input-accent w-full' type="text" placeholder="user name" {...register("userName", { required: true, maxLength: 80 })} />
        </div>
       {errors.userName?.type === 'required' && <p className="text-red-500">name  is required</p>}

        <div className="form-control">
          <label className="label">
            <span className="label-text">Phone Number</span>
          </label>
          <PhoneInput
            className='input input-bordered input-accent w-full'
            defaultCountry="US"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={setPhoneNumber}
            {...register("phoneNumber", { required: true })} />
        </div>
        {errors.phoneNumber?.type === 'required' && <p className="text-red-500">phone numbar  is required</p>}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input className='input input-bordered input-accent w-full' type="text" placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} /> 
        </div>
        {errors.email?.type === 'required' && <p className="text-red-500">email is required</p>}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date of Birth</span>
          </label>
          <DatePicker
            className='input input-bordered input-accent w-full'
            selected={selectedDate}
            onChange={handleDateChange}
            peekNextMonth
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
            placeholderText="Select Date of Birth"
            maxDate={new Date()}
            dateFormat="dd/MM/yyyy"
            isClearable
            {...register("dateOfbirth", { required: true})}
          />
        </div>
        {errors.dateOfbirth?.type === 'required' && <p className="text-red-500">Date of Birth  is required</p>}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <select className='input input-bordered input-accent w-full' {...register("title", { required: true })}>
            <option value="University of Science">University of Science</option>
            <option value="Arts Academy">Arts Academy</option>
            <option value="Business Institute">Business Institute</option>
            <option value="Ivy University">Ivy University</option>
            <option value="Oakridge College">Oakridge College</option>
            <option value="Sunflower State University">Sunflower State University</option>
            <option value="Coastal Community College">Coastal Community College</option>
            <option value="Central Plains Polytechnic">Central Plains Polytechnic</option>
            <option value="Maplewood College of Engineering">Maplewood College of Engineering</option>
            <option value="Ivy League Academy">Ivy League Academy</option>
            <option value="Emerald College of Business">Emerald College of Business</option>
            <option value="Silverlake Institute of Technology">Silverlake Institute of Technology</option>
            <option value="Pacific Coast University">Pacific Coast University</option>
            <option value="Business Institute">Business Institute</option>
            <option value="Oceanic Maritime University">Oceanic Maritime University</option>
            <option value="Crimson University">Crimson University</option>
            <option value="Lakeside Community College">Lakeside Community College</option>
            <option value="Royal Conservatory of Music">Royal Conservatory of Music</option>
            <option value="Mountainview Technical Institute">Mountainview Technical Institute</option>
            <option value="Evergreen Academy">Evergreen Academy</option>
            <option value="Sapphire College of Arts">Sapphire College of Arts</option>
            
          </select>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Subject</span>
          </label>
          <input className='input input-bordered input-accent w-full' type="text" placeholder="Subject" {...register("subject", { required: true })} /> <br />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input className='input input-bordered input-accent w-full' type="text" placeholder="Image URL" {...register("image", { required: true })} /> <br />
        </div>

        <button className='btn btn-primary w-full my-4'>admit now</button>
      </form>
    </div>
  );
};

export default Admition;
