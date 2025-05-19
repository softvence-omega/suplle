const SuppleCard = ({
  Icon,
  category,
  title,
  description,
}: {
  Icon: React.ElementType;
  category: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="lg:w-[524px] lg:h-[304px] flex flex-col gap-2 text-center border-[2px] border-gray-200/60 hover:border-primary p-5 rounded-2xl">
      <div className="flex justify-center items-center mx-auto text-primary hover:text-white bg-primary-gray hover:bg-primary rounded-full w-24 h-24 transition-all duration-300">
        {
          <Icon
            size={54}
            className="text-primary group-hover:text-white transition-colors duration-300"
          />
        }
      </div>
      <p className="text-gray-500">{category}</p>
      <h1 className="text-3xl font-medium">{title}</h1>
      <p className="text-xl px-5">{description}</p>
    </div>
  );
};

export default SuppleCard;
