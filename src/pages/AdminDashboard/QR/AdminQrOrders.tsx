import QROrderComponent from "@/components/admin-panel/qr-Orders/QROrderComponen";


const AdminQrOrders = () => {
  return <div>

  <div className="">
      <header>
          <div className="flex items-center space-x-2 ">
            <span className="text-[#333333] text-base ">Admin Panel</span>
            <span className="text-[#333333] ">  &gt;</span>
            <span className="text-[#333333] text-base">Order</span>
          </div>
       
      </header>

      
      
      <main>
   <QROrderComponent/>
      </main>
    </div>

  </div>;
};

export default AdminQrOrders;
