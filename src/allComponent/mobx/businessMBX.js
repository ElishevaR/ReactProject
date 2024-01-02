import { observable, action, runInAction, makeObservable } from "mobx";

class BusinessData {

    isLogin = false

    buisness = {
        name: "",
        adress: "",
        phone: "",
        owner: "",
        logo: "",
        description: ""
    }

    baseUrl = 'http://localhost:8787/businessData'

    constructor() {
        makeObservable(this, {
            isLogin: observable,
            buisness: observable,
            getBusiness: action,
           sendDataToServer:action,
            setIsLogin: action,
            handleLogin:action
        })

        this.getBusiness();
    }

    handleLogin=async(name,password)=>{
        const response = await fetch("http://localhost:8787/login", {
            method: "POST",
            body: JSON.stringify({
                name, password
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (response.status === 200) {
            this.isLogin=true;
        }
    }

    setIsLogin = (val) => {
        this.isLogin = val
    }

    getBusiness() {
        fetch(this.baseUrl,{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }}
           ).then((res) => {
            res.json().then((data) => {
                runInAction(() => {
                    this.buisness = data
                })
            })
        })

    }
    
    sendDataToServer() {
        fetch(this.baseUrl, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(this.buisness)
        }
        ).then((result) => {
            console.log("result",result)
        }).catch(() => {
            console.error(result.status)
        })
    }
}
export default new BusinessData();