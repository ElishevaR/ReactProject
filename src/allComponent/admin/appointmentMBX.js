import { observable, action, computed, makeAutoObservable, runInAction, makeObservable } from "mobx";
class AppointmentMBX {
    isAdd = false
    listAppointment = []

    constructor() {
        makeObservable(this, {
            isAdd: observable,
            setIsAdd: action,
            listAppointment: observable,
            addAppointment: action,
            // get: computed
        })
        this.baseUrl = 'http://localhost:8787/appointments'

    }
    setIsAdd = (val) => {
        console.log("setIsAdd: ", val)
        this.isAdd = val
    }
    getAppointments() {
        console.log("---start get appointment---")
        fetch(this.baseUrl).then((res) => {
            res.json().then((data) => {
                runInAction(() => {
                    this.listAppointment = ([...data].sort((x, y) => new Date(x.dateTime) - new Date(y.dateTime)));
                    // this.listAppointment = data


                })
            })
        })
        console.log("---end get appointment---")

    }

    addAppointment = async (meeting) => {

        this.isAdd = false;
        console.log("meeting: ", meeting)
        const response = await fetch('http://localhost:8787/appointment', {
            method: "POST",
            body: JSON.stringify(meeting),
            headers: {
                "Content-Type": "application/json",
            },
        });

        console.log(response.status);
        if (response.status === 200) {
            this.setIsAdd(true)
            console.log("add----------------------")
            // this.listAppointment.push(meeting)
            // console.log("last---------",this.listAppointment[this.listAppointment.length-1])
            // this.listAppointment.sort((x,y)=>new Date(y.dateTime)-new Date(x.dateTime));
            //    alert("add")

            this.getAppointments();
            // this.listAppointment = ([...data].sort((x, y) => new Date(y.dateTime) - new Date(x.dateTime)));
            // this.listAppointment.sort((x,y)=>new Date(y.dateTime)-new Date(x.dateTime));

        }
        else {
            this.setIsAdd(false)
            //alert("not add")

        }

    }
    // get get() {
    //     return this.listAppointment;
    // }
}
export default new AppointmentMBX();