import React from "react";
import { Link } from "react-router-dom";

const Orders = () => {
  const orders = [
    {
      id: "ORD12345",
      name: "Wireless Headphones",
      image: "/images/product1.jpg",
      status: "Delivered",
    },
    {
      id: "ORD67890",
      name: "Smart Watch",
      image: "/images/product2.jpg",
      status: "Shipped",
    },
  ];

  return (
    <section className="section py-10 pb-10">
      <div className="container !w-[80%] !max-w-[80%] flex gap-5">
        <div className="w-[70%] m-auto">

          {/* Header Box */}
          <div className="shadow-md rounded-md bg-white mb-4 mt-4">
            <div className="py-2 px-3 border-b border-[#e4e4e4]">
              <h2 className="!capitalize">My Orders</h2>
              <p className="mt-0 !capitalize">
                There are{" "}
                <span className="font-bold text-[#fa582b]">
                  {orders.length}
                </span>{" "}
                Products in My List
              </p>
            </div>
          </div>

          {/* Orders Table */}
          <div className="shadow-md rounded-md bg-white p-4">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b bg-gray-100 text-left">
                  <th className="py-3 px-4">Order ID</th>
                  <th className="py-3 px-4">Product</th>
                  <th className="py-3 px-4">Image</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4">Action</th>
                </tr>
              </thead>

              <tbody>
                {orders.map((item, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4">{item.id}</td>

                    <td className="py-3 px-4">{item.name}</td>

                    <td className="py-3 px-4">
                      <img src='https://theartment.com/cdn/shop/files/vista-frame-floor-mirror-110712.jpg?v=1745094412&width=1800'
        className='w-full '/>
                    </td>

                    <td className="py-3 px-4">{item.status}</td>

                    <td className="py-3 px-4">
                      <Link
                        to={`/order/${item.id}`}
                        className="text-blue-600 underline underline-offset-2 hover:text-blue-800"
                      >
                        View Details
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Orders;