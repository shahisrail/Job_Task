import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { useForm } from "react-hook-form";

const Products = () => {
  const [posts, setPosts] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(5);
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiData = await axios.get("data.json");
        const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
        const combinedData = [...apiData.data, ...storedTasks];
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
    const taskData = {
      Id: posts.length + 1,
      Name: data.Name,
      Price: data.Price,
      ImageUrl: data.ImageUrl,
      IsPopular: data.IsPopular,
    };

    const updatedTasks = [...posts, taskData];
    setPosts(updatedTasks);
  
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    console.log("Task added successfully");
    reset();
    closeModal();
  };

  return (
    <div className="p-3">
      <h2 className="text-2xl font-bold">Popular</h2>
      <div className="flex justify-end mb-3">
        <h2 className="text-2xl flex justify-center items-center ">
          <button className="btn-grad w-[200px] h-[70px]" onClick={openModal}>
            Add More
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
                      <div className="form-control w-full ">
                        <label className="label">
                          <span className="label-text">IsPopular</span>
                        </label>
                        <input
                          type="text"
                          placeholder="IsPopular"
                          defaultValue={true}
                          readOnly
                          {...register("IsPopular", { required: true })}
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
          className="font-bold py-2 px-4 rounded-l"
          onClick={goToPrevPage}
          disabled={startIndex === 0}
        >
          <FaArrowAltCircleLeft />
        </button>
        <button
          className="font-bold py-2 px-4 rounded-r"
          onClick={goToNextPage}
          disabled={startIndex + cardsPerPage >= posts.length}
        >
          <FaArrowAltCircleRight />
        </button>
      </div>
      <div
        className={`grid grid-cols-3 gap-2 sm:grid-cols-${cardsPerPage} lg:grid-cols-5`}
      >
        {posts.slice(startIndex, startIndex + cardsPerPage).map((post) => (
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
  );
};

export default Products;
