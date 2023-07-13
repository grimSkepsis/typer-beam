import { createSample } from "@/redux/sampleManagement/thunks";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

// Define the data type for the form
type CreateWritingSampleData = {
  title?: string;
  text?: string;
};

export default function SubmitWritingSample() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateWritingSampleData>();

  const dispatch = useDispatch();

  // Handle form submission
  function onSubmit(data: CreateWritingSampleData) {
    dispatch(createSample({ ...data }));
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Title:</label>
        <input {...register("title", { required: true })} />
        {errors.title && <span>Title is required.</span>}
      </div>

      <div>
        <label>Text:</label>
        <textarea {...register("text", { required: true })} />
        {errors.text && <span>Text is required.</span>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}
