import { useForm } from "react-hook-form";
import login from "../../assets/login-animate.gif";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import SocialLogin from "../SocialLogin/SocialLogin";



const img_hosting_token = import.meta.env.VITE_Image_Upload_token;
const SignUp = () => {
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
  const {  createNewUser, updateUserProfile } =useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

    const onSubmit = (data) => {
      console.log(data);
      
      const image = data.image[0];
      const formData = new FormData();
      formData.append("image", image);

      fetch(img_hosting_url, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((imgResponse) => {
          if (imgResponse.success) {
            const imgURL = imgResponse.data.display_url;


            createNewUser(data.email, data.password)
            .then(result => {

                const loggedUser = result.user;
                console.log(loggedUser);

                updateUserProfile(data.name, imgURL)
                    .then(() => {
                        const saveUser = { name: data.name, email: data.email }
                        fetch('http://localhost:5000/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    // reset();
                                    Swal.fire({
                                        position: 'top-center',
                                        icon: 'success',
                                        title: 'User created successfully.',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    // navigate('/');
                                }
                            })



                    })
                    .catch(error => console.log(error))
            })

            // createNewUser(data.email, data.password)
            //   .then((result) => {
            //     updateUserProfile(data.name, imgURL)
            //       .then(() => {
            //         Swal.fire({
            //           position: "top-center",
            //           icon: "success",
            //           title: "Register Successfully",
            //           showConfirmButton: false,
            //           timer: 1500,
            //         });
            //       })
            //       .catch((err) => {
            //         console.log(err.message);
            //       });
            //   })
            //   .catch((err) => {
            //     console.log(err.message);
            //   });
          }

        });
    };


  // const handleGoogleSignIn = () => {
  //   signInWithGoogle()
  //     .then((result) => {
  //       console.log(result.user);
  //       Swal.fire({
  //         position: "top-center",
  //         icon: "success",
  //         title: "Login Successfully",
  //         showConfirmButton: false,
  //         timer: 1500,
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // };

  return (
    <div className="flex flex-col md:flex-row max-w-3xl mx-auto">
      <div className="md:w-1/2 p-8 flex items-center justify-center">
        <img src={login} alt="Registration" className="w-full h-96" />
      </div>

      <div className="md:w-1/2 p-8">
        <h2 className="text-2xl font-bold mb-6">Register Please</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">
              Name:
            </label>
            <input
              type="text"
              id="name"
              {...register("name", { required: true })}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.name && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              {...register("email", {
                required: true,
                pattern: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i,
              })}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.email && (
              <span className="text-red-500">
                {errors.email.type === "required"
                  ? "This field is required"
                  : "Invalid email address"}
              </span>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block mb-2">
              Password:
            </label>
            <input
              type="password"
              id="password"
              {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 20,
                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/,
              })}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.password?.type === "required" && (
              <p className="text-red-600">Password is required</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-600">Password must be 6 characters</p>
            )}
            {errors.password?.type === "maxLength" && (
              <p className="text-red-600">
                Password must be less than 20 characters
              </p>
            )}
            {errors.password?.type === "pattern" && (
              <p className="text-red-600">
                Password must have one Uppercase and one special character.
              </p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block mb-2">
              Confirm Password:
            </label>
            <input
              type="password"
              id="confirmPassword"
              {...register("confirmPassword", {
                required: true,
                validate: (value) =>
                  value === document.getElementById("password").value,
              })}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.confirmPassword && (
              <span className="text-red-500">Passwords do not match</span>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="image" className="block mb-2">
              Image:
            </label>
            <input
              type="file"
              id="image"
              accept="image/*"
              {...register("image", { required: true })}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.image && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Register
          </button>
        </form>
        {/* <div
          onClick={handleGoogleSignIn}
          className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer"
        >
          <FaGoogle size={32} />

          <p>Continue with Google</p>
        </div> */}
        <SocialLogin></SocialLogin>
        <p className="px-6 text-sm text-center text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="hover:underline hover:text-rose-500 text-gray-600"
          >
            Login
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default SignUp;
