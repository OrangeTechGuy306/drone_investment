import axios from "axios";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { storage } from "../../../utils/firebaseauth";




const useProduct = () => {

    const [products, setProducts] = useState([])
    const [img, setImg] = useState("")
    const [total, setTotal] = useState(0)

    const fetchProducts = async()=>{
        const {data} = await axios.get(`${import.meta.env.VITE_GET_PRODUCT}`)
        if(data.status === true){
            setProducts(data.msg)
        }else{
            console.log(data.msg)
        }
    }

    const handleImg = (e) => {
        const filename = e.target.files[0];
        const storageRef = ref(storage, `${Date.now()}-${filename.name}`);
        const uploadTask = uploadBytesResumable(storageRef, filename);
    
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const prog = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            console.log(prog);
          },
          (e) => {
            console.log(e);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((url) => {
              setImg(url);
            });
          }
        );
      };

      const totalProducts = async () => {
        const { data } = await axios.get(`http://localhost:5000/total/products`);
        console.log(data)
        if (data.status === false) {
          console.log(data)
        } else {
          setTotal(data.msg[0].total);
        }
      };

      const validateUser = async (name, price, income, rev) => {
        if (
          name.trim() === "" ||
          price.trim() === "" ||
          income.trim() === "" ||
          rev.trim() === ""
        ) {
          toast.error("All fields are required!");
        } else {
          const { data } = await axios.post(`${import.meta.env.VITE_ADD_PRODUCT}`, {
            name,
            price,
            income,
            rev,
            img,
          });
          if (data.status === false) {
            toast.error(data.msg);
          } else {
            toast.success(data.msg);
            fetchProducts();
            totalProducts();
          }
        }
      };

      const deleteProduct = async(id)=>{
          const {data} = await axios.delete(`${import.meta.env.VITE_DELETE_PRODUCT}/${id}`)
          totalProducts()
          fetchProducts()
          if(data.status === true){
            toast.success(data.msg)
          }else{
            toast.success(data.msg)
          }
      }

    useEffect(()=>{
        fetchProducts()
        totalProducts()
    },[])

    return {products,validateUser, handleImg, total, deleteProduct};
}
 
export default useProduct;