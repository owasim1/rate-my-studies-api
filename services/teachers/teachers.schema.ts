import { ObjectId } from "mongodb";

export interface TeachersSchema {
    _id: ObjectId;
    name: string
    associatedColleges: {
        name: string,
        location: string,
        rating?: number
    }[]
    rating?: number
}
