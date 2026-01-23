import React, { useEffect, useState } from "react";
import {
  UserIcon,
  EnvelopeIcon,
  CalendarIcon,
  MapPinIcon,
  PhoneIcon,
  LockClosedIcon
} from "@heroicons/react/24/outline";

function InfoRow({ icon: Icon, value, tooltip }) {
  return (
    <div className="relative flex items-center gap-3 group py-2">
      {/* Icon */}
      <Icon className="h-6 w-6 text-purple-600 cursor-pointer" />

      {/* Tooltip */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden group-hover:block
                      bg-black text-white text-sm px-3 py-1 rounded shadow-lg whitespace-nowrap z-10">
        {tooltip}
      </div>

      {/* Text */}
      <span className="text-gray-700 truncate">{value}</span>
    </div>
  );
}

function RandomPerson_UI() {
  const [trigger, setTrigger] = useState(0);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((result) => {
        setData(result.results[0]);
        setLoading(false);
      });
  }, [trigger]);

  // Full screen spinner
  if (loading || !data) {
    return (
      <div style={{backgroundColor:"oklch(0.91 0.03 94.89)"}} className="h-screen w-screen flex items-center justify-center">
        <div className="w-14 h-14 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div style={{backgroundColor:"oklch(0.91 0.03 94.89)"}} className="h-screen w-screen flex items-center justify-center">
      <div className="w-[380px] bg-white rounded-2xl shadow-xl overflow-hidden">

        {/* Profile */}
        <div className="flex justify-center bg-purple-600 p-6">
          <img
            src={data.picture.large}
            alt="profile"
            className="w-[120px] h-[120px] rounded-full border-4 border-white"
          />
        </div>

        {/* Name */}
        <h2 className="text-center text-2xl font-bold mt-4">
          {data.name.first} {data.name.last}
        </h2>

        {/* Info List */}
        <div className="px-6 mt-4">
          <InfoRow
            icon={UserIcon}
            value={data.login.username}
            tooltip="Username"
          />

          <InfoRow
            icon={EnvelopeIcon}
            value={data.email}
            tooltip="Email Address"
          />

          <InfoRow
            icon={CalendarIcon}
            value={new Date(data.dob.date).toDateString()}
            tooltip={`Age: ${data.dob.age}`}
          />

          <InfoRow
            icon={MapPinIcon}
            value={`${data.location.city}, ${data.location.country}`}
            tooltip={data.location.street.name}
          />

          <InfoRow
            icon={PhoneIcon}
            value={data.phone}
            tooltip="Phone Number"
          />

          <InfoRow
            icon={LockClosedIcon}
            value={data.login.password}
            tooltip="Temporary Password"
          />
        </div>

        {/* Button */}
        <div className="p-4">
          <button
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl text-lg transition"
            onClick={() => setTrigger(prev => prev + 1)}
          >
            Get Random Person
          </button>
        </div>

      </div>
    </div>
  );
}

export default RandomPerson_UI;







