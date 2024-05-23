import { useEffect, useState } from "react";
import { getAllOrder } from "../../service/OderService";

export const ListOder = () => {
  const [oder, setOder] = useState();

  const getAll = () => {
    getAllOrder().then((data) => {
      setOder(data);
    });
  };
  useEffect(() => {
    getAll();
  }, []);

  if (!oder) {
    return <div>loangding...</div>;
  }

  return (
    <div>
      <h1>Thống kê đơn hàng</h1>

      <a href="/create">create</a>
      <table class="table" border={1}>
        <thead class="table">
          <tr>
            <th>Stt</th>
            <th>mã đơn hàng</th>
            <th>Tên sản phẩm</th>
            <th>giá</th>
            <th>loại sản phẩm</th>
            <th>ngày mua</th>
            <th>số lượng</th>
            <th>tổng tiền</th>
            <th>sửa</th>
          </tr>
        </thead>
        <tbody class="table">
          {oder.map((oder, index) => (
            <tr key={oder.id}>
              <td>{index + 1}</td>
              <td>{oder.ma}</td>
              <td>{oder.sanPham.tenSanPham}</td>
              <td>{oder.sanPham.gia}</td>
              <td>{oder.sanPham.loaiSanPham}</td>
              <td>{oder.ngay}</td>
              <td>{oder.soLuong}</td>
              <td>{oder.tongTien}</td>
              <td>
                <button>sửa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
