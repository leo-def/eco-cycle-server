import { Response } from 'express';

export class GroupController {
    getGroupParam(response: Response) {
        return response.locals.group
    }
}