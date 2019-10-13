import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Logistic} from "../entity/Logistic";

export class LogisticController {

    private logisticRepository = getRepository(Logistic);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.logisticRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.logisticRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.logisticRepository.save(
            {
                type: request.body.type,
                weight:request.body.weight,
                dimension:request.body.dimension,
                description: request.body.description,
                disclaimer:request.body.disclaimer,
                address: request.body.address,
                state: request.body.state,
                country: request.body.country,
                postalcode: request.body.postalcode,
                contactnum: request.body.contactnum,
                contactname: request.body.contactname,
                day: request.body.day,
                time: request.body.time,
            }
        );
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let logisticToRemove = await this.logisticRepository.findOne(request.params.id);
        await this.logisticRepository.remove(logisticToRemove);
    }

}