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
            <span className="label-text">Candidate first name</span>
          </label>
          <input className='input input-bordered input-accent w-full' type="text" placeholder="First name" {...register("firstName", { required: true, maxLength: 80 })} />
        </div>
        <br />

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

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input className='input input-bordered input-accent w-full' type="text" placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} /> <br />
        </div>

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
          />
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <select className='input input-bordered input-accent w-full' {...register("title", { required: true })}>
            <option value="University of Science">University of Science</option>
            {/* Add more options here */}
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
