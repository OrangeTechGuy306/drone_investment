import { Card, Modal, Table } from "antd";
import AdminLayout from "../layout/layout";
import GroupIcon from '@mui/icons-material/Group';
import { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import useProduct from "./context/context";
import { Toaster } from "sonner";
import { BiTrash } from "react-icons/bi";





const AdminProductsPage = () => {

    const [open, setOpen] = useState(false)
    // const [preview, setPreview] = useState(false)
    const {products, validateUser, total, handleImg, deleteProduct} = useProduct()

    const [info, setInfo] = useState({
      name:"",
      price:"",
      income:"",
      rev:''
    })

    const {name, price, income, rev} = info

    const handleOpen = ()=>{
        setOpen(true)
    }
    
    const handleClose = ()=>{
        setOpen(false)
    }

    const uploadImage= (e)=>{
    //   const file = e.target.files[0];
    //   if (file) {
    //     const reader = new FileReader();
    //     reader.onload = () => {
    //       setPreview(reader.result);
    //     };
    //     reader.readAsDataURL(file);
		// }
        handleImg(e)
    }

    const handleChange= (e)=>{
      setInfo({...info, [e.target.name]:e.target.value})
    }

    const addProduct= (e)=>{
      e.preventDefault()
      validateUser(name, price, income, rev)
    }



  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'product_name',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Income',
      dataIndex: 'income',
      key: 'income',
    },
    {
      title: 'Total Revenue',
      dataIndex: 'revenue',
      key: 'revenue',
    },
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      key: 'actions',
    }
  ];


    return (
        <AdminLayout>

            <div className="my-3 mx-2">
                <h3 className="text-secondary">Products</h3>
            </div>

            <div className="flex justify-between items-center px-3 flex-wrap">

                <Card.Grid
                style={{
                  width: 250,
                  height:100,
                  background:"linear-gradient(to right, #2E3192, #1BFFFF)",
                  color:"black",
                  borderRadius:10,
                }}
                className="p-3"
              >
                <div className="flex justify-between items-center">
                      <div className="">
                          <GroupIcon style={{fontSize:30, color:"white"}}/>
                          <h4 className="text-white">Products</h4>
                      </div>
                      <h4 className="text-white">{Intl.NumberFormat().format(total)}</h4>
                </div>
                </Card.Grid>

                <div className="flex justify-center items-center gap-3">
                    <form className="flex justify-start items-center">
                        <input type="search" className="form-control" name="" placeholder="Search user" style={{width:300}}/>
                        <button className="py-1 px-3 text-white bg-primary">Search</button>
                    </form>
                    <div>
                        <button className="btn btn-success py-1 px-2" onClick={handleOpen}>New Product</button>
                    </div>
                </div>
            </div>

          <div className="my-5">
                <Modal open={open} onCancel={handleClose}>
                <form action="" onSubmit={addProduct} className="mt-5">
                    <Toaster position="top-right" richColors/>
                  <div>
                    <label
                      htmlFor="droneImg"
                      className="flex justify-center items-center gap-3 bg-silver h-[100px] cursor-pointer rounded-xl"
                    >
                      <FaCloudUploadAlt size={40} />
                      <small>Upload Image</small>
                    </label>
                    <input
                      type="file"
                      name="img"
                      id="droneImg"
                      className="hidden"
                      style={{ display: "none" }}
                      onChange={uploadImage}
                    />
                  </div>
           
                <input
                  type="text"
                  name="name"
                  placeholder="Device name"
                  className=" form-control mt-3"
                  onChange={handleChange}
                />

                <input
                  type="number"
                  name="price"
                  placeholder=" Device Price "
                  className="form-control mt-3"
                  onChange={handleChange}
                />

                <input
                  type="number"
                  name="income"
                  placeholder=" Daily Income "
                  className="form-control mt-3"
                  onChange={handleChange}
                />

                <input
                  type="number"
                  name="rev"
                  placeholder="Total Revenue"
                  className="form-control mt-3"
                  onChange={handleChange}
                />

                <input
                  type="submit"
                  value="Add Product"
                  className="btn btn-success py-1 my-3 rounded-sm text-white"
                />
              </form>
                </Modal>
            <Table dataSource={
              products.map((p, i)=>(
               { key: `${i}`,
                name: `${p.product_name}`,
                price: <span>&#8358;{Intl.NumberFormat().format(p.price)}</span>,
                income: `${Intl.NumberFormat().format(p.income)}`,
                revenue: `${Intl.NumberFormat().format(p.revenue)}`,
                image:  <img src={p.image} alt="p" className="" width={50} height={50}/>,
                actions: <button className="btn btn-danger py-1" onClick={()=>{
                  deleteProduct(p.product_id)
                }}><BiTrash/></button>
              }
              ))
            } columns={columns} />
          </div>
        </AdminLayout>
    );
}
 
export default AdminProductsPage;