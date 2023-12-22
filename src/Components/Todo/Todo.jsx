import { Link } from "react-router-dom";
import { RxUpdate } from "react-icons/rx";
import { AiFillCloseCircle } from "react-icons/ai";
import { useDrag } from "react-dnd";
import Swal from "sweetalert2";
import useAxiosPublic from "../../CustomHooks/useAxiosPublic";

const Todo = ({ todo, onGoingTask, refetch }) => {
  const axiosPublic = useAxiosPublic();
  const { _id, title, description, deadlines, priority } = todo;

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "todo",
    item: { _id: _id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  //   const [{ isDragging }, drag] = useDrag(
  //     () => ({
  //       type: "todo",
  //       item: { todo },
  //       end: (item, monitor) => {
  //         const dropResult = monitor.getDropResult();
  //         if (item && dropResult) {
  //           alert(`You threw ${item.name} into ${dropResult.name}`);
  //           let tempList = onGoingTask;
  //           tempList.push(item);
  //           localStorage.setItem("onGoingTask", JSON.stringify(tempList));
  //           window.location.reload();
  //         }
  //       },
  //       collect: (monitor) => ({
  //         isDragging: !!monitor.isDragging(),
  //       }),
  //     }),
  //     []
  //   );

  //   DELETE METHOD
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/newTasks/${id}`).then((res) => {
          if (res?.data?.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div>
      <div
        ref={drag}
        className={`max-w-md p-8 sm:flex sm:space-x-6 dark:bg-gray-900 dark:text-gray-100 my-5 ${
          isDragging ? "opacity-25" : "opacity-100"
        }`}
      >
        <div className="flex flex-col space-y-4">
          <div>
            <h2 className="text-xl font-semibold">{title}</h2>
          </div>
          <span className="text-sm dark:text-gray-400 ">{description}</span>
          <div className="space-y-1">
            <span className="flex items-center space-x-2">
              <span className="dark:text-gray-400">Priority: {priority}</span>
            </span>
            <span className="flex items-center space-x-2">
              <span className="dark:text-gray-400">{deadlines}</span>
            </span>
          </div>
          <div className="flex  gap-3">
            <Link to={`/login/dashboard/createTask/v1/${_id}`}>
              <button className="    border-none text-white hover:text-[#0b996f]  mt-4">
                <span className="flex items-center gap-2">
                  Edit <RxUpdate></RxUpdate>
                </span>
              </button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="  border-none text-white hover:text-red-600 mt-4"
            >
              <span className="flex items-center gap-2">
                Delete <AiFillCloseCircle></AiFillCloseCircle>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
