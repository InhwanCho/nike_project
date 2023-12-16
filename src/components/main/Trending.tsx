import { IconicProps } from "../../type/type";

interface TrendingProps{
  title:string;
  items:IconicProps[];
}

export default function Trending({ title, items }: TrendingProps) {
  return (
    <div className="mt-20">
      <div className="mb-10 ml-14">
        <h3 className="font-medium text-2xl">{title}</h3>
      </div>
      <div className="grid grid-cols-1 mx-10 lg:grid-cols-3 gap-4">
        {items.map((data, index) => (
          <div key={index} className="relative">
            <div className="h-[40rem] my-2 lg:h-[20rem] px-2 justify-center">
              <img
                src={data.url}
                alt=""
                className="object-fill w-full h-full"
              />
            </div>
            <div className="absolute bottom-6 left-6 flex flex-col items-start">
              <span className="text-normal px-1 text-white font-semibold opacity-90 rounded-md mb-5">
                {data.title}
              </span>
              <button
                className="
                bg-white text-black
                p-3 text-sm font-semibold
                opacity-90
                hover:opacity-50
                transition-opacity duration-300
                ease-in-out rounded-full"
              >
                구매하기
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
