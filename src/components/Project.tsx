import Button from "./Button";
import ReactiveCard from "./ReactiveCard";

interface projectProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  tools: string[];
  image?: string;
  imageFull?: boolean;
  buttonOnClick?: () => void;
  buttonDisabled?: boolean;
}

function Project({ className, ...props }: projectProps) {
  return (
    <ReactiveCard reactive_coefficient={0.1}>
      <div className="flex items-center">
        <img
          src={props.image}
          className={`ml-8 hidden h-24 w-24 rounded-2xl ${props.imageFull ? "" : "bg-white p-4 outline-1"} outline-gray-200 sm:flex lg:h-36 lg:w-36 dark:outline-gray-700`}
        />
        <div className="mx-8 flex flex-col">
          <div className="flex text-2xl font-semibold">{props.title}</div>
          <p className="text-muted-foreground">{props.description}</p>
        </div>
      </div>
      <div className="inline-block items-center justify-between px-8 md:flex md:flex-row">
        <div className="mb-4 flex flex-wrap gap-4 md:mb-0 md:flex-row">
          {props.tools.map((title, index) => (
            <div
              className="my-auto rounded-[0.5rem] px-3 py-1 text-indigo-600 outline-2 outline-indigo-600 dark:bg-sky-900 dark:text-white dark:outline-sky-500"
              key={index}
            >
              {title}
            </div>
          ))}
        </div>
        <div>
          <Button
            className="rounded-[0.5rem]"
            onClick={props.buttonOnClick}
            disabled={props.buttonDisabled}
          >
            View
          </Button>
        </div>
      </div>
    </ReactiveCard>
  );
}

export default Project;
