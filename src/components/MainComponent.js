import { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Checkbox from "@material-ui/core/Checkbox";

function MainComponent() {
  const [date, setDate] = useState("");
  const [data, setData] = useState(null);

  const FetchData = async () => {
    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=ISsKj7aLX29gd07YmqsSg7n9gy3xpMlJgEVlctFN&date=${date}`
    );
    const json = await response.json();
    console.log(json);
    setData(json);
  };

  useEffect(() => {
    FetchData();
  }, [date]);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (e) => {
    e.preventDefault();
    let inputs = document.querySelectorAll("input");
    let answers = "";
    for (const input of inputs) {
      answers += `
      ${input.getAttribute("id")}: ${input.value}
      `;
    }
    console.log(answers);
    setOpen(false);
  };

  const [state, setState] = useState({
    checked: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  //---------------------date--------------------//
  let maxDate = document.getElementById("date");
  let d = new Date();
  let year = d.getFullYear();
  let month = d.getMonth() + 1;
  let day = d.getDate();
  let actualDate = String(year + "-" + month + "-" + day);
  // maxDate.setAttribute("max", actualDate);
  if (day <= 9) {
    day = String("0" + day);
  }

  // // let dayN = day;
  // // let dateRange = String(year + "-" + month + "-" + (dayN + 20));
  // // reservDate.setAttribute("max", dateRange);

  // document.querySelector("form").addEventListener("change", logRes);

  // function logRes() {
  //   console.log(reservDate.value.length);
  //   if (reservDate.value.length > 0) {
  //     donne.classList.remove("invalid");
  //     console.log(reservDate.value + " " + reservTime.value);
  //   }
  // }

  return (
    <main>
      <br></br>
      <div className="datePicker">
        <Button color="primary" onClick={handleClickOpen}>
          <span className="dialogBtn">SUBSCRIBE TO NASA'S NEWSLETTER</span>
        </Button>
        <br></br>
        <br></br>
        <label htmlFor="date">Pick a date: </label>{" "}
        <TextField
          id="date"
          type="date"
          defaultValue="2021-03-22"
          maxValue={actualDate}
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
        <br></br>
        <br></br>
      </div>
      {data && (
        <div className="container">
          <div className="box">
            {data.media_type === "image" ? (
              <img
                src={data.url}
                alt={data.title}
                width="100%"
                className="image"
              />
            ) : (
              <iframe src={data.url} width="100%" height="100%"></iframe>
            )}
            <br></br>
            {/* <br></br>
            <p className="popular">Popular Images</p>
            <img
              className="image"
              width="100%"
              src={"https://apod.nasa.gov/apod/image/2103/IC1318_Pham_960.jpg"}
            />
            <br></br>
            <br></br>
            <img
              className="image"
              width="100%"
              src={
                "https://apod.nasa.gov/apod/image/2102/M66_HubbleShatz_960.jpg"
              }
            />
            <br></br>
            <br></br>
            <img
              className="image"
              width="100%"
              src={
                "https://apod.nasa.gov/apod/image/2102/rosette_goldman_960.jpg"
              }
            />
            <br></br> */}
          </div>

          <div className="box">
            <div className="textContainer">
              <h2 className="imgTitle">{data.title}</h2>
              <br></br>
              <div className="explanation">
                <p className="explanationContent">{data.explanation}</p>
              </div>
              <br></br>
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
              >
                <DialogTitle id="form-dialog-title">
                  Subscribe to the NASA Newsletter
                </DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    To subscribe to our newsletter, please enter your email
                    address. We will send updates weekly.
                  </DialogContentText>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Name"
                    type="text"
                    fullWidth
                  />
                  <TextField
                    margin="dense"
                    id="email"
                    label="Email Address"
                    type="email"
                    fullWidth
                  />
                  <Checkbox
                    type="checkbox"
                    id="checkbox"
                    checked={state.checked}
                    onChange={handleChange}
                    name="checked"
                    color="primary"
                  ></Checkbox>
                  <label htmlFor="checkbox">Good Luck!</label>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color="primary">
                    CANCEL
                  </Button>
                  <Button onClick={handleClose} color="primary">
                    SUBMIT
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default MainComponent;

// SwiperCore.use([Navigation, Scrollbar]);

// let today = new Date();
// let dd = today.getDate();
// let mm = today.getMonth() + 1; //January is 0!
// let yyyy = today.getFullYear();
// if (dd < 10) {
//   dd = "0" + dd;
// }
// if (mm < 10) {
//   mm = "0" + mm;
// }
// today = yyyy + "-" + mm + "-" + dd;
// document.getElementById("datefield").setAttribute("max", today);

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper.scss";
// import "swiper/components/navigation/navigation.scss";
// import "swiper/components/scrollbar/scrollbar.scss";

{
  /*
             <Swiper
              className="image"
              spaceBetween={50}
              slidesPerView={1}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              // navigation
              scrollbar={{ draggable: true }}
            >
              <SwiperSlide>
                <img
                  className="image"
                  src={
                    "https://apod.nasa.gov/apod/image/2103/IC1318_Pham_960.jpg"
                  }
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  width="100%"
                  className="image"
                  src={
                    "https://apod.nasa.gov/apod/image/2102/M66_HubbleShatz_960.jpg"
                  }
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="image"
                  src={
                    "https://apod.nasa.gov/apod/image/2102/rosette_goldman_960.jpg"
                  }
                />
              </SwiperSlide>
            </Swiper> */
}
