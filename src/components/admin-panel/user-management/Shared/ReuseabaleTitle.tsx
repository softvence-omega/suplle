interface ReusableTitleProps {
  text: string;
}

const ReusableTitle = ({ text }: ReusableTitleProps) => {
  return (
    <div className="space-y-4 mt-7">
      <h1 className="font-rubik text-sm sm:text-[18px]">{text}</h1>
    </div>
  );
};

export default ReusableTitle;
