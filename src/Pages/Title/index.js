import "./index.css";
import { useParams } from "react-router-dom";
const Title = () => {
  let { titleId } = useParams();
  console.log(titleId);
  return (
    <div className="title container">
      <h2 className="h2-title">GIẢI TRÍ</h2>
      <h1>Amber Heard không nộp 10,35 triệu USD cho Depp</h1>
      <p className="time">Thứ sáu, 3/6/2022 08:45 (GMT+7)</p>
      <h3>
        Luật sư Elaine Bredehoft - đại diện pháp lý của Heard - nói nữ diễn viên
        gặp khó khăn về tài chính. Cô không đủ tiền để bồi thường cho Johnny
        Depp.
      </h3>
      <img
        src="https://znews-photo.zingcdn.me/w860/Uploaded/opluoaa/2022_06_02/220601_amber_heard_after_verdict.jpg"
        alt=""
      />
      <p className="p-title">
        Amber Heard tại phiên tòa phán quyết Nữ diễn viên Hollywood cho biết cô
        thất vọng khi nghe phán quyết cuối cùng. Cô nói đây là bước lùi đối với
        phụ nữ.
      </p>
      <p className="p-title">
        Theo People, luật sư của Amber Heard - Elaine Bredehoft - vừa có buổi
        trả lời phỏng vấn trên Today sau khi phiên tòa giữa cặp sao khép lại. Mở
        đầu chương trình, MC Savannah Guthrie đặt câu hỏi về việc liệu nữ diễn
        viên có bồi thường khoản tiền 10,35 triệu USD cho Johnny Depp sau khi
        thua kiện, bà Elaine Bredehoft trả lời: "Ồ, không. Hoàn toàn không có
        chuyện đó".
      </p>
      <p className="p-title">
        Luật sư của Amber Heard tiết lộ nữ diễn viên gặp khó khăn về tài chính
        vì phải chi trả cho các loại chi phí pháp lý liên quan đến vụ kiện phỉ
        báng với Depp.
      </p>
      <img
        src="https://znews-photo.zingcdn.me/w660/Uploaded/wpdhnwhnw/2022_06_01/z3459321784464_76412745959bdda5db487b06254983ff.jpg"
        alt=""
      />
      <p>Amber Heard không đủ tiền để bồi thường cho Depp. Ảnh: Reuters</p>
      <p className="p-title">
        Để theo đuổi kiện tụng, Heard đã thuê ba luật sư Elaine Bredehoft, Ben
        Rottenborn và Joshua Treece của công ty Woods Rogers có trụ sở tại
        Virginia. Nữ diễn viên tốn 3 triệu USD tổng cộng, 200 USD/giờ cho mỗi
        luật sư.
      </p>
      <p className="p-title">
        Ngoài ra, theo thống kê của Celebrity Net Worth, giá trị tài sản ròng
        của Heard chỉ còn khoảng 1,5-2,5 triệu USD. Khoản tiền này quá ít ỏi so
        với mức bồi thường mà nữ diễn viên phải trả cho chồng cũ.
      </p>
      <p className="p-title">
        Theo New York Post, lối sống xa hoa với đam mê hàng hiệu cũng là một
        trong số những nguyên nhân khiến Heard đối mặt với bài toán khó khăn tài
        chính. Cô thường xuyên chi số tiền lớn cho các chuyến du lịch sang
        trọng, quần áo, túi xách của các thương hiệu lớn, quà tặng và rượu.
      </p>
      <p className="p-title">
        Ngày 1/6, nữ diễn viên quyết định kháng cáo sau khi tòa án Fairfax,
        Virginia xử cô thua kiện Johnny Depp trong vụ phỉ báng.
      </p>
      <p className="p-title">
        Trên CBS News, luật sư Spurgeon chia sẻ Heard có thể nộp đơn tuyên bố
        phá sản. Khi ấy, cô được miễn khoản 10 triệu USD bồi thường thiệt hại.
        Tuy nhiên, Heard vẫn phải chi trả 350.000 USD bồi thường trừng phạt.
      </p>
      <p className="p-title">
        Spurgeon cũng không loại trừ khả năng Depp có thể đưa ra quyết định
        không thi hành phán quyết (cụ thể là khoản tiền bồi thường) hoặc thương
        lượng cho Heard một con số thấp hơn. "Depp đang ngồi ở vị trí ghế lái",
        Spurgeon nhấn mạnh.
      </p>
      <img
        src="https://znews-photo.zingcdn.me/w860/Uploaded/wpdhnwhnw/2022_06_02/z3461176728096_b17aa81974eb223954f03883b658d1bc.jpg"
        alt=""
      />
    </div>
  );
};
export default Title;
