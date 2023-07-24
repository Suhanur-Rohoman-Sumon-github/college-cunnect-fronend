
import { Controller, useForm } from 'react-hook-form';
import admitImge from '../../../assets/login.avif';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import useAutheProvider from '../../../hookes/useAutheProvider';
import { FaExclamation, } from 'react-icons/fa';
import axios from 'axios';
import Swal from 'sweetalert2';

const Admition = () => {

  const { user } = useAutheProvider()
  const { register, handleSubmit, reset, control, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data)
    const {adress,colege,colegeImg,dateOfBirth,email,phoneNumbar,subject,userName } = data
    axios.post('https://colege-cunnect-backends-su44248124.vercel.app/admitonData', {adress,colege,colegeImg,dateOfBirth,email,phoneNumbar,subject,userName })
      .then((response) => {
        console.log(response)
        Swal.fire('admiton sucsses')
      })
    reset()
  };
  

  return (
    <div className='py-20 w-9/12 mx-auto md:flex'>
      <div className=''>
        <img className='w-full ' src={admitImge} alt="" />
      </div>
      <form className='p-4 md:w-[50%] ' onSubmit={handleSubmit(onSubmit)}>
        <h1 className='text-center text-4xl text-teal-500 my-4'>admit your favorite college</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Candidate name</span>
          </label>
          <input className='input input-bordered input-accent w-full' value={user.displayName} type="text" placeholder="user name" {...register("userName", { required: true, maxLength: 80 })} />
        </div>
        {errors.userName?.type === 'required' && <p className="text-red-500 flex items-center "><FaExclamation className='mr-2' /> name  is required</p>}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Candidate phone numbar</span>
          </label>
          <input className='input input-bordered input-accent w-full'  type="numbar" placeholder="user numbar" {...register("phoneNumbar", { required: true, maxLength: 80 })} />
        </div>
        {errors.phoneNumbar?.type === 'required' && <p className="text-red-500 flex items-center "><FaExclamation className='mr-2' /> numbar  is required</p>}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input className='input input-bordered input-accent w-full' value={user.email} type="email" placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
        </div>
        {errors.email?.type === 'required' && <p className="text-red-500 flex items-center "><FaExclamation className='mr-2' />email is required</p>}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date of Birth</span>
          </label>
          <Controller
            control={control}
            name="dateOfBirth"
            render={({ field }) => (
              <DatePicker
                className="input input-bordered input-accent w-full"
                {...field}
                selected={field.value}
                onChange={(date) => field.onChange(date)}
                peekNextMonth
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                placeholderText="Select Date of Birth"
                maxDate={new Date()}
                dateFormat="dd/MM/yyyy"
                isClearable
              />
            )}
          />
        </div>
        {errors.dateOfbirth?.type === 'required' && <p className="text-red-500 flex items-center "><FaExclamation className='mr-2' />Date of Birth  is required</p>}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">chouse a colege</span>
          </label>
          <select className='input input-bordered input-accent w-full' {...register("colege", { required: true })}>

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
        {errors.colege?.type === 'required' && <p className="text-red-500 flex items-center "><FaExclamation className='mr-2' />colege is required</p>}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Adress</span>
          </label>
          <input className='input input-bordered input-accent w-full' type="text" placeholder="Adress" {...register("adress", { required: true })} /> <br />
        </div>
        {errors.adress?.type === 'required' && <p className="text-red-500 flex items-center "><FaExclamation className='mr-2' />adress is required</p>}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Subject</span>
          </label>
          <input className='input input-bordered input-accent w-full' type="text" placeholder="Subject" {...register("subject", { required: true })} /> <br />
        </div>
        {errors.subject?.type === 'required' && <p className="text-red-500 flex items-center "><FaExclamation className='mr-2' />Subject is required</p>}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Colege img</span>
          </label>
          <input className='input input-bordered input-accent w-full' type="text" placeholder="Subject" {...register("colegeImg", { required: true })} /> <br />
        </div>
        {errors.subject?.type === 'required' && <p className="text-red-500 flex items-center "><FaExclamation className='' />Colege img is required</p>}
        <button className='btn btn-primary w-full my-4'>admit now</button>
      </form>
    </div>
  );
};

export default Admition;
