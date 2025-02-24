import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Register = () => {
  const [error, setError] = useState("");
  const { createUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!/[a-z]/.test(password)) {
      setError("Password should have at least one lowercase letter");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setError("Password should have at least one uppercase letter");
      return;
    }
    if (password.length < 6) {
      setError("Password should be at least 6 characters long");
      return;
    }

    createUser(email, password)
      .then((res) => {
        console.log(res.user);
        // const signInTime = res?.user?.metadata?.lastSignInTime;

        const newUser = { name, email };
        fetch("https://scic-server-ebon.vercel.app/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              console.log("User created successfully", data);
            }
          });
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">Join us today to enjoy our services.</p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />
              {error && <p className="text-red-500">{error}</p>}
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
