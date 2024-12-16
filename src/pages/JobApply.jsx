import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UseAuth from "../context/UseAuth";
import Swal from "sweetalert2";

const JobApply = () => {
  const { id } = useParams();
  const { user } = UseAuth();
  const navigate = useNavigate();
  //   console.log(user);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const LinkedIn = form.LinkedIn.value;
    const GitHub = form.GitHub.value;
    const Resume = form.Resume.value;
    // console.log(LinkedIn, GitHub, Resume);

    const jobApplication = {
      job_id: id,
      applicant_email: user.email,
      LinkedIn,
      GitHub,
      Resume,
    };

    //send data to backend
    fetch("http://localhost:5000/job-applications", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(jobApplication),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/myApplications");
        }
      });
  };
  return (
    <div className="card bg-base-100 mx-auto text-center w-full shrink-0 shadow-2xl">
      <h1 className="text-5xl ml-6 mt-4 font-bold">Apply now!</h1>

      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">LinkedIn</span>
          </label>
          <input
            type="url"
            name="LinkedIn"
            placeholder="LinkedIn url"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">GitHub</span>
          </label>
          <input
            type="url"
            name="GitHub"
            placeholder="GitHub url"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Resume</span>
          </label>
          <input
            type="url"
            name="Resume"
            placeholder="Resume url"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Apply</button>
        </div>
      </form>
    </div>
  );
};

export default JobApply;
