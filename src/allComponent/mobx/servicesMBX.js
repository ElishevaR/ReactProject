import { observable, action, runInAction, makeObservable } from "mobx";

class ServiceMBX {

    listServices = []

    constructor() {
        makeObservable(this, {
            listServices: observable,
            addService: action,
        })
        this.baseUrl = 'http://localhost:8787/services'
        this.getServices()
    }

    getServices() {

        fetch(this.baseUrl, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        }).then((res) => {
            res.json().then((data) => {
                runInAction(() => {
                    this.listServices = data
                })
            })
        })
    }

    addService = async (service) => {

        console.log("addService: ", service)
        const response = await fetch("http://localhost:8787/service", {
            method: "POST",
            body: JSON.stringify(service),
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (response.status === 200) {
            this.listServices.push(service)

        }
    }

}

export default new ServiceMBX();