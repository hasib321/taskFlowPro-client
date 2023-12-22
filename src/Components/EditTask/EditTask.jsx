import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../CustomHooks/useAuth";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const EditTask = () => {
  const { user } = useAuth();
  const editTasks = useLoaderData();
  const { _id, title, description, deadlines, priority } = editTasks || {};
  const navigate = useNavigate();
  const location = useLocation();

  // React Hook form
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const UpdateNewTasks = {
      title: data.title,
      description: data.description,
      deadlines: data.deadlines,
      priority: data.priority,
      email: user?.email,
      userName: user?.displayName,
      status: "to-do",
    };

    // send data to the server for update
    fetch(` https://taskflowpro-server.vercel.app/newTasks/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(UpdateNewTasks),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          navigate(
            location?.state
              ? location.state
              : "/login/dashboard/dashboardElement"
          );
          Swal.fire("Yahooo!", "Task Updated Successfully", "success");
          reset();
        }
      });
  };

  return (
    <div className="px-14">
      <h2 className="text-3xl font-bold my-6">Edit Task</h2>
      <div className="mt-12">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* form name */}
          <div className="">
            <div className="form-control ">
              <label className="label">
                <span className="label-text text-[#2095AE] font-semibold ">
                  Title
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  {...register("title")}
                  name="title"
                  //   defaultValue={tripTitle}
                  defaultValue={title}
                  placeholder="Task Title"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control  ">
              <label className="label">
                <span className="label-text text-[#2095AE] font-semibold ">
                  Description
                </span>
              </label>
              <label className="input-group">
                <textarea
                  {...register("description")}
                  placeholder="Description"
                  defaultValue={description}
                  className="textarea textarea-bordered textarea-lg w-full"
                ></textarea>
              </label>
            </div>
          </div>

          <div className="mb-10">
            <div className="form-control ">
              <label className="label">
                <span className="label-text text-[#2095AE] font-semibold ">
                  Deadlines
                </span>
              </label>
              <label className="border">
                <input
                  type="date"
                  defaultValue={deadlines}
                  {...register("deadlines")}
                  name="deadlines"
                  id=""
                />
              </label>
            </div>
            <div>
              <div className="flex items-center mt-3">
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Pick the Priority</span>
                  </div>
                  <select
                    defaultValue="default"
                    {...register("priority")}
                    className="select select-bordered"
                  >
                    <option disabled value="default" selected>
                      priority
                    </option>
                    <option>Low</option>
                    <option>Moderate</option>
                    <option>High</option>
                  </select>
                </label>
              </div>
            </div>
          </div>

          <input
            type="submit"
            value="Update Task"
            className="text-white bg-[#2095AE] px-7 py-2  font-semibold w-full cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default EditTask;
