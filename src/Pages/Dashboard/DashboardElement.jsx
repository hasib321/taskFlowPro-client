import Completed from "../../Components/Completed/Completed";
import Ongoing from "../../Components/Ongoing/Ongoing";
import Todo from "../../Components/Todo/Todo";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import useTodo from "../../CustomHooks/useTodo";
import Loading from "../../Components/Loading/Loading";
import { useEffect, useState } from "react";

const DashboardElement = () => {
  const { data, isLoading, refetch } = useTodo();

  const [onGoingTask, setOnGoingTask] = useState([]);

  useEffect(() => {
    let array = localStorage.getItem("onGoingTask");
    if (array) {
      setOnGoingTask(JSON.parse(array));
      for (let i = 0; i, data?.length; i++) {
        for (let j = 0; j < onGoingTask?.length; j++) {
          if (data[i] === onGoingTask[j]) {
            data.splice(i, 1);
          }
        }
      }
    }
  }, [data, onGoingTask]);

  if (isLoading === true) {
    return <Loading></Loading>;
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="py-8 px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
        <div>
          <div>
            <h1 className="text-center text-3xl font-bold text-black mb-5">
              To Do List({data?.length} )
            </h1>
          </div>
          {data?.map((todo) => (
            <Todo
              todo={todo}
              refetch={refetch}
              onGoingTask={onGoingTask}
              setOnGoingTask={setOnGoingTask}
              key={new Date().getTime() + Math.floor(Math.random() * 1000)}
            ></Todo>
          ))}
        </div>
        <div>
          <div>
            <h1 className="text-center text-3xl font-bold text-black mb-5">
              Ongoing
            </h1>
          </div>
          <Ongoing
            setOnGoingTask={setOnGoingTask}
            onGoingTask={onGoingTask}
          ></Ongoing>
        </div>
        <div>
          <div>
            <h1 className="text-center text-3xl font-bold text-black mb-5">
              Completed
            </h1>
          </div>
          <Completed></Completed>
        </div>
      </div>
    </DndProvider>
  );
};

export default DashboardElement;
