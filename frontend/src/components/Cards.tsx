import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { SquarePen, Trash2 } from "lucide-react";
import { useState, useEffect } from "react";
const Cards = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/products") // Replace with your backend URL
      .then((response) => response.json())
      .then((data) => setProducts(data.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/v1/products/${id}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error("Failed to delete");
      }
      setProducts(products.filter((product) => product._id !== id));
      console.log("deleted successfully");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex flex-wrap justify-between gap-10 mt-10 w-[70vw] mx-auto">
      {products.map((prod) => (
        <div key={prod._id} className=" max-w-72 min-w-72 flex flex-col">
          <div className="relative ">
            <img
              src={prod.image}
              alt=""
              className="h-80 -z-10 aspect-square object-fill rounded-xl "
            />
            <div className="absolute bottom-0 left-0 grid px-10 text-slate-100 brightness-100 bg-slate-800 w-full h-20 rounded-b-xl  text-2xl backdrop-blur-3xl opacity-80 font-black">
              <div className="flex justify-between">
                <p className="z-10 truncate w-32 ">{prod.name}</p>
                <p>$ {prod.price}</p>
              </div>
              <div className=" flex justify-between">
                <SquarePen color="green" stroke-width={2.5}/>
                
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Trash2
                      color="#8B0000"
                      stroke-width={2.5}
                      className="cursor-pointer"
                    />
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Are you absolutely sure?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This will permanently
                        delete your photo and remove your data from our servers.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction onClick={() => handleDelete(prod._id)}>
                        Continue
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
