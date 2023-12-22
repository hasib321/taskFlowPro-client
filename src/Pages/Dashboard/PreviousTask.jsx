import Loading from "../../Components/Loading/Loading";
import usePreviousTasks from "../../CustomHooks/usePreviousTasks";

const PreviousTask = () => {
  const { data, isLoading, refetch } = usePreviousTasks();
  if (isLoading === true) {
    return <Loading></Loading>;
  }
  return (
    <div className="px-14">
      <h2 className="text-3xl font-bold my-6 ">Create Task</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5">
        {data?.map((prevTask) => (
          <div
            key={prevTask._id}
            className={`max-w-md p-8 sm:flex sm:space-x-6 dark:bg-gray-900 dark:text-gray-100 my-5`}
          >
            <div className="flex flex-col space-y-4">
              <div>
                <h2 className="text-xl font-semibold">{prevTask.title}</h2>
              </div>
              <span className="text-sm dark:text-gray-400 ">
                {prevTask.description}
              </span>
              <div className="space-y-1">
                <span className="flex items-center space-x-2">
                  <span className="dark:text-gray-400">
                    Priority: {prevTask.priority}
                  </span>
                </span>
                <span className="flex items-center space-x-2">
                  <span className="dark:text-gray-400">
                    {prevTask.deadlines}
                  </span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreviousTask;
