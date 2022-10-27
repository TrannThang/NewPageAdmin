import "./index.css";
import { useParams } from "react-router-dom";
const TitleHome = () => {
  let { titleId } = useParams();
  console.log(titleId);
  return (
    <div className="title container">
      <h2 className="h2-title">THỂ THAO</h2>
      <h1>5 ngôi sao chưa xác định được bến đỗ hè này</h1>
      <p className="time">Hiểu Phong Thứ ba, 7/6/2022 22:01 (GMT+7)</p>
      <h3>
      Paul Pogba, Gareth Bale nằm trong số cầu thủ chưa đưa ra quyết định 
      về tương lai trong kỳ chuyển nhượng mùa hè năm nay.
      </h3>
      <img
        src="https://znews-photo.zingcdn.me/w1200/Uploaded/mfnuy/2022_06_07/GettyImages1342442608_16540920_7156_2740_1654092092.jpg"
        alt=""
        className="img-title"
      />
      <p className="p-title">
      Paul Pogba thông báo rời Man Utd dưới dạng dự to. Dù chơi khá hay trong 
       màu áo ĐTQG Pháp, Pogba chưa bao giờ thể hiện được đẳng ở Man Utd. Mùa 
       này, anh chỉ ra sân 27 trận trên mọi đấu trường do trải qua nhiều ca chấn
        thương khác nhau.
      </p>
      <img
        src="https://znews-photo.zingcdn.me/w1200/Uploaded/mfnuy/2022_06_07/sasa_1.jpg"
        alt=""
        className="img-title"
      />
      <p className="p-title">
      Theo Telegraph, Pogba cân nhắc chọn Juventus, Real Madrid hoặc PSG là bến đỗ tiếp 
      theo trong sự nghiệp. Trong số này, Juventus trở thành điểm đến tiềm năng nhất 
      cho ngôi sao người Pháp.
      </p>
      <img
        src="https://znews-photo.zingcdn.me/w1200/Uploaded/mfnuy/2022_06_07/real_madrid_gareth_bale_781.jpg"
        alt=""
        className="img-title"
      />
      <p className="p-title">
      Những tháng cuối sự nghiệp của Gareth Bale ở Tây Ban Nha không suôn sẻ. Bale sẽ ra
       đi trong im lặng sau khi hết hạn hợp đồng và không được Real Madrid lên kế hoạch
        tổ chức một buổi họp báo để nói lời chia tay như Marcelo.
      </p>
      <img
        src="https://znews-photo.zingcdn.me/w1200/Uploaded/mfnuy/2022_06_07/20220223_Bale.jpg"
        alt=""
        className="img-title"
      />
      <p className="p-title">
      Sau khi đóng vai trò quan trọng giúp Xứ Wales dự World Cup 2022, Bale
       bác bỏ thông tin anh sẽ giải nghệ. Ít nhất 10 đội bóng ngỏ lời với Bale,
        truyền thông Anh tiết lộ. Tuy nhiên, Bale chưa vội đưa ra quyết định.
      </p>
      <img
        src="https://znews-photo.zingcdn.me/w1200/Uploaded/mfnuy/2022_06_07/dybala.jpg"
        alt=""
        className="img-title"
      />
      <p className="p-title">
      Paulo Dybala chia tay Juventus dưới dạng tự do sau khi mùa giải này khép lại.
       Việc Dusan Vlahovic xuất hiện tại sân Allianz khiến "Bà đầm già" thành Turin
        không còn muốn gia hạn hợp đồng với chân sút người Argentina.
      </p>
    
      <p className="p-title">
      au khi chia tay nhà vô địch Ligue 1, Di Maria được cho là đồng ý thỏa thuận 
      với Juventus. Thế nhưng Barcelona cũng sẵn sàng cân nhắc ký hợp đồng với tiền 
      vệ người Argentina.
      </p>
      <img
        src="https://znews-photo.zingcdn.me/w1200/Uploaded/mfnuy/2022_06_07/fbl_fra_ligue1_psg_metz_4.jpg"
        alt=""
        className="img-title"
      />
    </div>
  );
};
export default TitleHome;
