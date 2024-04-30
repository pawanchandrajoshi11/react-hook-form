import React from "react";
import "./App.css";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import { Form } from "react-bootstrap";

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm();

  const departments = [
    { value: "Computer-Science", label: "Computer Science" },
    { value: "Physics", label: "Physics" },
    { value: "Chemistry", label: "Chemistry" },
    { value: "Mathematics", label: "Mathematics" },
  ];

  // console.log({...register("email")});
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label>Email</label>
          <input
            type="text"
            name="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Email is not valid",
              },
            })}
          />
          {errors.email && <p className="errorMsg">{errors.email.message}</p>}
        </div>

        {/* PASSWORD */}
        <div className="form-control">
          <label>Password</label>
          <input
            type="password"
            name="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password should be at least 6 characters long.",
              },
            })}
          />
          {errors.password && (
            <p className="errorMsg">{errors.password.message}</p>
          )}
        </div>

        {/*  DROP DOWN  */}
        <div className="form-control">
          <Controller
            name="department"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Select {...field} isMulti options={departments} />
            )}
          />
          {errors.departments && (
            <p className="errorMsg">This is a required field</p>
          )}
        </div>
        <div className="form-control">
          <Form.Group className="mb-3" controlId="gender">
            <Form.Label>Select Gender</Form.Label>
            <Form.Check
              type="radio"
              label="Male"
              value="male"
              {...register("gender", {
                required: "Please select your gender",
              })}
            />
            <Form.Check
              type="radio"
              label="Female"
              value="female"
              {...register("gender")}
            />
            {errors.gender && (
              <p className="errorMsg">{errors.gender.message}</p>
            )}
          </Form.Group>
        </div>
        <div className="form-control">
          <Form.Group className="mb-3" controlId="skills">
            <Form.Label>Select Your Skills</Form.Label>
            <Form.Check
              type="checkbox"
              label="JavaScript"
              value="JavaScript"
              {...register("skills", {
                required: "Please select at-least one skill",
              })}
            />
            <Form.Check
              type="checkbox"
              label="React"
              value="react"
              {...register("skills")}
            />
            <Form.Check
              type="checkbox"
              label="Node.js"
              value="nodejs"
              {...register("skills")}
            />
          </Form.Group>
        </div>

        <div className="form-control">
          <label></label>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

// import React from "react";
// import { useForm, Controller } from "react-hook-form";
// import Select from "react-select";
// // import "./styles.css";

// const departments = [
//   { value: "Computer-Science", label: "Computer Science" },
//   { value: "Physics", label: "Physics" },
//   { value: "Chemistry", label: "Chemistry" },
//   { value: "Mathematics", label: "Mathematics" }
// ];

// export default function App() {
//   const {
//     control,
//     handleSubmit,
//     formState: { errors }
//   } = useForm();

//   const onSubmit = (data) => {
//     console.log(data);
//   };

//   return (
//     <div className="App">
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div className="form-control">
//           <label>Select Department of Interest</label>
//           <Controller
//             name="department"
//             control={control}
//             rules={{ required: true }}
//             render={({ field }) => (
//               <Select {...field} isMulti options={departments} />
//             )}
//           />
//           {errors.department && (
//             <p className="errorMsg">This is a required field.</p>
//           )}
//         </div>
//         <div className="form-control">
//           <label></label>
//           <button type="submit">Submit</button>
//         </div>
//       </form>
//     </div>
//   );
// }
