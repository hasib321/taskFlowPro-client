import { useDrop } from "react-dnd";
import { RxUpdate } from "react-icons/rx";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const Ongoing = ({ onGoingTask }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "todo",
    drop: (item) => addItemToSection(item._id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addItemToSection = (_id) => {
    console.log("dropped", _id);
  };
  //   const [{ canDrop, isOver }, drop] = useDrop(
  //     () => ({
  //       accept: "todo",
  //       drop: () => ({ name: "ongoing" }),
  //       collect: (monitor) => ({
  //         isOver: !!monitor.isOver(),
  //         canDrop: !!monitor.canDrop(),
  //       }),
  //     }),
  //     []
  //   );
  return (
    <div>
      <div>
        {onGoingTask?.map((item, i) => (
          <div
            ref={drop}
            className="max-w-md p-8 sm:flex sm:space-x-6 dark:bg-gray-900 dark:text-gray-100 my-5"
            key={i}
          >
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p className="text-sm dark:text-gray-400 ">{item.description}</p>
            <div className="space-y-1">
              <span className="flex items-center space-x-2">
                <span className="dark:text-gray-400">
                  Priority: {item.priority}
                </span>
              </span>
              <span className="flex items-center space-x-2">
                <span className="dark:text-gray-400">
                  Deadline: {item.deadlines}
                </span>
              </span>
            </div>
            <div className="flex  gap-3">
              <Link>
                <button className=" btn w-32 bg-[#0b996f] border-none text-white hover:bg-[#0b996f] mt-4">
                  <span className="flex items-center gap-2">
                    Edit <RxUpdate></RxUpdate>
                  </span>
                </button>
              </Link>
              <button
                // onClick={() => handleDelete(_id)}
                className=" btn w-32 bg-red-500 border-none text-white hover:bg-red-600 mt-4"
              >
                <span className="flex items-center gap-2">
                  Delete <AiFillCloseCircle></AiFillCloseCircle>
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ongoing;
