import { Button } from "@/components/ui/button";
import Navbar from "../components/Navbar";
import { useRef } from "react";

const NewProduct = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async () => {
    const postData = {
      name: nameRef.current?.value || "",
      price: priceRef.current?.value || "",
      image: imageRef.current?.value || "",
    };
    console.log(postData);
    try {
      const response = await fetch("http://localhost:5000/api/v1/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json;
      console.log("success", data);
      if (nameRef.current) nameRef.current.value = "";
      if (priceRef.current) priceRef.current.value = "";
      if (imageRef.current) imageRef.current.value = "";
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="pt-4 bg-slate-800 min-h-[100vh] ">
      <Navbar />

      <div className="w-[100vw] mx-auto mt-56  ">
        <div className="w-[55vw]  grid max-w-[600px] min-h-96  rounded-3xl mt bg-blue-300   mx-auto pt-4 pb-4 gap-2">
          <input
            type="text"
            placeholder="Name"
            className="pl-3 text-black font-black bg-white sm:w-80  h-16 rounded-full mx-auto"
            ref={nameRef}
          />
          <input
            type="text"
            placeholder="Price"
            className="pl-3 font-black  bg-white sm:w-80 h-16 rounded-full mx-auto"
            ref={priceRef}
          />
          <input
            type="text"
            placeholder="Image link"
            className="pl-3 text-black font-black bg-white sm:w-80 h-16 rounded-full mx-auto"
            ref={imageRef}
          />
          <Button
            className="sm:w-80 w-[245px] mx-auto rounded-xl h-14"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
