import { FaTwitter, FaLinkedin } from "react-icons/fa"; // Pastikan untuk menginstal react-icons
import Image from "next/image";
import SocialIcon from "@/components/atoms/icons/SocialIcon";

const OrganiserCard = ({ organiser }) => (
  <div className="flex flex-col items-center">
    <Image src={organiser.image} alt={organiser.name} width={200} height={200} className="mb-2 rounded-full" />
    <div className="text-xl font-semibold">{organiser.name}</div>
    <div className="text-sm text-gray-500 max-w-xs text-center">{organiser.description}</div>
    <div className="flex space-x-2 mt-2">
      <SocialIcon href={organiser.twitter}>
        <FaTwitter className="text-blue-500" />
      </SocialIcon>
      <SocialIcon href={organiser.linkedin}>
        <FaLinkedin className="text-blue-700" />
      </SocialIcon>
    </div>
  </div>
);

export default OrganiserCard;
