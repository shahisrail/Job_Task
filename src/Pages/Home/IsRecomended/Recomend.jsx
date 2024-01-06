import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { useForm } from "react-hook-form";

const Recomend = () => {
  const [posts, setPosts] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(5);
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedTasks = JSON.parse(localStorage.getItem("task")) || [];
        const apiData = await axios.get("data.json");
        const combinedData = [...storedTasks, ...apiData.data];
        setPosts(combinedData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerPage(5);
      } else {
        setCardsPerPage(3);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const convertStringToBoolean = (stringValue) => {
    return stringValue === "true";
  };

  const goToNextPage = () => {
    if (startIndex + cardsPerPage < posts.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const goToPrevPage = () => {
    if (startIndex - 1 >= 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const onSubmit = async (data) => {
    const IsRecommendedValue = convertStringToBoolean(data.IsRecommended);
    const taskData = {
      Id: posts.length + 1,
      Name: data.Name,
      Price: data.Price,
      ImageUrl: data.ImageUrl,
      IsRecommended: IsRecommendedValue,
    };

    const dataFromLocalStorage = JSON.parse(localStorage.getItem("task"));
    let updatedTasks = [];
    if (!dataFromLocalStorage) {
      updatedTasks = [taskData];
    } else if (dataFromLocalStorage?.length > 0) {
      updatedTasks = [...dataFromLocalStorage, taskData];
    }
    setPosts([...posts, taskData]);
    localStorage.setItem("task", JSON.stringify(updatedTasks));

    console.log("Task added successfully");
    reset();
    closeModal();
  };

  return (
    <>
      <div className="p-3 -mt-[30px]">
     
        <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Recommended</h2>
        <div className="flex justify-end mb-3">
          <h2 className="text-2xl flex justify-center items-center ">
            <button className="btn-grad hidden md:block text-[#EE9E1E] h-[70px]" onClick={openModal}>
              AddMore
            </button>
            {modalOpen && (
              <div className="fixed inset-0 z-50 overflow-y-auto">
                <div className="flex items-center justify-center min-h-screen">
                  <div
                    className="fixed inset-0 bg-black opacity-50"
                    onClick={closeModal}
                  ></div>
                  <div className="relative bg-white rounded-lg w-full md:w-1/2 mx-auto p-6">
                    <button
                      className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                      onClick={closeModal}
                    >
                      ✕
                    </button>
                    <div className="w-full mx-auto ">
                      <form onSubmit={handleSubmit(onSubmit)}>
                        {/* name  */}
                        <div className="form-control w-full ">
                          <label className="label">
                            <span className="label-text">Name</span>
                          </label>
                          <input
                            type="text"
                            placeholder="Name"
                            {...register("Name", { required: true })}
                            className="input input-bordered w-full "
                          />
                        </div>
                        {/* price */}
                        <div className="form-control w-full ">
                          <label className="label">
                            <span className="label-text">Price</span>
                          </label>
                          <input
                            type="number"
                            placeholder="Price"
                            {...register("Price", { required: true })}
                            className="input input-bordered w-full "
                          />
                        </div>
                        {/* imageurl */}
                        <div className="form-control w-full ">
                          <label className="label">
                            <span className="label-text">ImageUrl</span>
                          </label>
                          <input
                            type="text"
                            placeholder="ImageUrl"
                            {...register("ImageUrl", { required: true })}
                            className="input input-bordered w-full "
                          />
                        </div>
                        {/* isrecomendede */}
                        <div className="form-control w-full ">
                          <label className="label">
                            <span className="label-text">IsRecommended</span>
                          </label>
                          <input
                            type="text"
                            placeholder="IsRecommended"
                            defaultValue={true}
                            readOnly
                            {...register("IsRecommended", { required: true })}
                            className="input input-bordered w-full "
                          />
                        </div>
                        <button
                          type="submit"
                          className="btn mt-5 w-full text-white bg-[#00CBBD]"
                        >
                          Add Item
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </h2>
          <button
            className={`font-normal py-2 text-2xl rounded-l ${
              startIndex === 0 ? "text-white" : "text-black"
            }`}
            onClick={goToPrevPage}
            disabled={startIndex === 0}
          >
            <IoIosArrowBack />
          </button>
          <button
            className={`font-bold py-2 text-2xl rounded-r ${
              startIndex + cardsPerPage >= posts.length
                ? "text-white"
                : "text-black"
            }`}
            onClick={goToNextPage}
            disabled={startIndex + cardsPerPage >= posts.length}
          >
            <IoIosArrowForward />
          </button>
        </div>
        </div>
        <div
          className={`grid grid-cols-3 gap-2 sm:grid-cols-${cardsPerPage} lg:grid-cols-5`}
        >
          {posts
            .filter((post) => post.IsRecommended === true)
            .slice(startIndex, startIndex + cardsPerPage)
            .map((post) => (
              <div key={post.Id}>
                <div className="card bg-base-100 rounded-lg">
                  <figure>
                    <img
                      className="h-[170px] md:h-[220px] lg:h-[250px] w-full rounded-lg"
                      src={post.ImageUrl}
                      alt={post.Name}
                    />
                  </figure>
                </div>
                <h2 className="text-center">{post.Name}</h2>
                <h2>{post.length}</h2>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Recomend;
