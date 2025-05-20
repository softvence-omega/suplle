import { CiTwitter } from "react-icons/ci";
import { FiFacebook } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="mt-24 mx-[180px] mb-12">
      <div className="flex items-center justify-between">
        <div className="text-primary-gradient text-4xl font-bold">Suplle</div>
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-primary p-4 flex items-center justify-center">
            <CiTwitter className="w-6 h-6" />
          </div>
          <div className=" rounded-full bg-primary p-4 flex items-center justify-center">
            <FiFacebook className="w-6 h-6" />
          </div>
          <div className="rounded-full bg-primary p-4 flex items-center justify-center">
            <IoLogoInstagram className="w-6 h-6" />
          </div>
          <div className=" rounded-full bg-primary p-4 flex items-center justify-center">
            <FiGithub className="w-6 h-6" />
          </div>
        </div>
      </div>
      <hr className="mt-12" />
      <div className="text-[#737373] text-center mt-6">
        © Copyright 2025, All Rights Reserved by{" "}
      </div>
    </div>
  );
};

export default Footer;
