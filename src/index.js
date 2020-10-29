import css from "./css/style.css";

class CountdownTimer {
  constructor({selector,targetDate}) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.refs = this.getRefs()
  }
  setInt = setInterval(() => {
    const time = this.targetDate - Date.now(); 
    time < 0?clearInterval(this.setInt):this.updateClockface(time);
  }, 1000)  

  updateClockface(time) {
    const { dayVal, hoursVal, minsVal, secsVal} = this.refs;
    dayVal.textContent = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    hoursVal.textContent = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    minsVal.textContent = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    secsVal.textContent = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    
  }
getRefs() {
const timer = document.querySelector(this.selector);
const dayVal = timer.querySelector('[data-value="days"]');
const hoursVal = timer.querySelector('[data-value="hours"]');
const minsVal = timer.querySelector('[data-value="mins"]');
const secsVal = timer.querySelector('[data-value="secs"]');
    
    return {dayVal,hoursVal,minsVal,secsVal}
}
  pad(value) {
    return String(value).padStart(2, "0");
  }
}
const timer1 = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Dec 31, 2020"),
});

const timer2 = new CountdownTimer({
  selector: "#timer-2",
  targetDate: new Date("Dec 31, 2020"),
});
