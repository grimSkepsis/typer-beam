import { createSample } from "@/redux/sampleManagement/thunks";
import { CreateWritingSample } from "@/services/samples";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

// Define the data type for the form
type CreateWritingSampleData = {
  title?: string;
  content?: string;
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
    // dispatch(createSample({ ...data }));
    CreateWritingSample({
      title: String(data.title),
      content: String(data.content),
    });
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        width: "100%",
        maxWidth: "20rem",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            rowGap: "0.5rem",
          }}
        >
          <label>Title:</label>
          <input {...register("title", { required: true })} />
          {errors.title && <span>Title is required.</span>}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            rowGap: "0.5rem",
            marginTop: "1rem",
          }}
        >
          <label>Text:</label>
          <textarea
            {...register("content", { required: true })}
            style={{ width: "20rem" }}
            rows={10}
          />
          {errors.text && <span>Text is required.</span>}
        </div>
      </div>

      <button type="submit" style={{ width: "100%", marginTop: "1rem" }}>
        Submit
      </button>
    </form>
  );
}
