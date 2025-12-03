export default function ElementList({
  data,
}: {
  data: { title: string; text: string[] };
}) {
  return (
    <>
      <h2 className="text-4xl font-bold text-left">Hi, I'm Rafał Curzydło.</h2>
      <ul className="border-l border-white pl-4 space-y-6">
        {data.text.map((item, index) => {
          return (
            <li key={index} className="relative flex flex-col space-y-1">
              <span className="absolute -left-6 transform -translate-y-1/2 top-2 w-4 h-4 bg-linear-to-br from-neutral-800 to-neutral-600 rounded-full flex items-center justify-center">
                <span className="bg-yellow-500 w-1.5 h-1.5 rounded-full"></span>
              </span>
              <h4 className="font-medium text-base">{item}</h4>
            </li>
          );
        })}
      </ul>
    </>
  );
}
