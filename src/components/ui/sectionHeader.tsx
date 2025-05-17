import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  showBackButton?: boolean;
  rightContent?: React.ReactNode;
  className?: string;
  titleClassName?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  showBackButton = false,
  rightContent,
  className = "",
  titleClassName = "",
}) => {
  const navigate = useNavigate();

  return (
    <div
      className={`flex items-center justify-between bg-[#E7F6F6] dark:bg-[#161616] p-2 md:p-4 rounded-[8px] border dark:border-[#818486] border-[#E3E9ED] ${className}`}
    >
      <div className="flex items-center gap-2">
        {showBackButton && (
          <button
            onClick={() => navigate(-1)}
            className="text-gray-600 dark:text-gray-50  hover:text-black transition"
          >
            <ArrowLeft size={20} />
          </button>
        )}
      <h2 className={cn("text-lg", "font-semibold", titleClassName)}>{title}</h2>
      </div>
      {rightContent && <div>{rightContent}</div>}
    </div>
  );
};

export default SectionHeader;
