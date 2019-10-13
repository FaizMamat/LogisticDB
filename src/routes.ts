import {LogisticController} from "./controller/LogisticController";

export const Routes = [{
    method: "get",
    route: "/logistics",
    controller:LogisticController ,
    action: "all"
}, {
    method: "get",
    route: "/logistics/:id",
    controller: LogisticController,
    action: "one"
}, {
    method: "post",
    route: "/logistics",
    controller: LogisticController,
    action: "save"
}, {
    method: "delete",
    route: "/logistics/:id",
    controller: LogisticController,
    action: "remove"
}];