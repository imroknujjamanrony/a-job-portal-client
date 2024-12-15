import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  const {
    title,
    location,
    jobType,
    category,
    applicationDeadline,
    salaryRange,
    description,
    company,
    requirements,
    responsibilities,
    status,
    hr_email,
    hr_name,
    company_logo,
  } = job;

  return (
    <div className="border rounded-lg shadow-lg p-5 max-w-md bg-white">
      {/* Company logo and name */}
      <div className="flex items-center mb-4">
        <img
          src={company_logo}
          alt={company}
          className="w-10 h-10 rounded-full mr-3"
        />
        <div>
          <h3 className="text-lg font-semibold">{company}</h3>

          <div className="flex gap-2 items-center">
            <FaLocationDot />
            <p className="text-sm text-gray-500">{location}</p>
          </div>
        </div>
      </div>

      {/* Job Title and Details */}
      <div className="flex gap-2 items-center">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <div className="badge badge-secondary">NEW</div>
      </div>
      <p className="text-sm text-gray-600 mb-2">{description}</p>

      <div className="flex flex-wrap gap-2 mb-3">
        <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-sm">
          {jobType}
        </span>
        <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-sm">
          {category}
        </span>
        <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-sm">
          Deadline: {applicationDeadline}
        </span>
      </div>

      {/* Salary */}
      <p className="text-lg font-semibold text-blue-500 mb-3">
        {salaryRange.min}-{salaryRange.max} {salaryRange.currency.toUpperCase()}{" "}
        / Month
      </p>

      {/* Requirements */}
      {/* <div className="mb-3">
        <h4 className="text-md font-semibold mb-1">Requirements:</h4>
        <ul className="list-disc pl-5 text-sm text-gray-700">
          {requirements.map((req, index) => (
            <li key={index}>{req}</li>
          ))}
        </ul>
      </div> */}

      {/* Responsibilities */}
      {/* <div className="mb-3">
        <h4 className="text-md font-semibold mb-1">Responsibilities:</h4>
        <ul className="list-disc pl-5 text-sm text-gray-700">
          {responsibilities.map((resp, index) => (
            <li key={index}>{resp}</li>
          ))}
        </ul>
      </div> */}

      {/* Contact and Apply */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-600">
          Contact:{" "}
          <a href={`mailto:${hr_email}`} className="text-blue-500">
            {hr_name}
          </a>
        </p>
        <Link to={`/jobs/${job._id}`}>
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Apply Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
