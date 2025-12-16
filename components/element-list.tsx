export default function ElementList({ data }: { data: string[] }) {
  return (
    <>
      <ul className="pl-4 space-y-6 border-l border-neutral-900">
        {data.map((item, index) => {
          return (
            <li key={index} className="relative flex flex-col space-y-1">
              <span className="absolute flex items-center justify-center w-4 h-4 transform -translate-y-1/2 rounded-full -left-6 top-2 bg-linear-to-br from-neutral-800 to-neutral-600">
                <span className="bg-yellow-500 w-1.5 h-1.5 rounded-full"></span>
              </span>
              <h4 className="text-base font-medium">{item}</h4>
            </li>
          );
        })}
      </ul>
    </>
  );
}
