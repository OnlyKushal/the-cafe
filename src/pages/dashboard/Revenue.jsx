import dollar from "../../assets/images/dollar.png";
import cash from "../../assets/images/flowbite_cash-solid.png";
import table from "../../assets/images/table-1.png";
import frame1 from "../../assets/images/Frame-2.png";
import frame2 from "../../assets/images/Frame-3.png";

export default function Revenue() {
  return (
    <div className="revenue">
      <div className="items">
        <div className="item top">
          <label>Daily Sales</label>
          <div className="icon">
            <img src={dollar} alt="no-image" />
          </div>
        </div>
        <p className="total">$2k</p>
        <div className="item footer">
          <label>9 Feburary 2024</label>
          <img src={frame1} alt="no-image" className="icon" />
        </div>
      </div>
      <div className="items">
        <div className="item top">
          <label>Monthly Revenue</label>
          <div className="icon">
            <img src={cash} alt="no-image" />
          </div>
        </div>
        <p className="total">$52k</p>
        <div className="item footer">
          <label>9 Feburary 2024</label>
          <img src={frame2} alt="no-image" />
        </div>
      </div>
      <div className="items">
        <div className="item top">
          <label>Table Occupacy</label>
          <div className="icon">
            <img src={table} alt="no-image" />
          </div>
        </div>
        <p className="total">10 Tables</p>
        <div className="item footer">
          <label>9 Feburary 2024</label>
          <img src={frame1} alt="no-image" />
        </div>
      </div>
    </div>
  );
}
