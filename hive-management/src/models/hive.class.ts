import { Check } from "./check.class";

export class Hive {
    hiveId: string = '';
    name: string = '';
    type: string = '';
    strength: string = '';
    ageOfQueen: any;
    honeycombs: any;
    status: string = '';
    // check = [];
    // treatment = [];

    constructor(obj?: any) {
        this.hiveId = obj ? obj.hiveId : '';
        this.name = obj ? obj.name : '';
        this.type = obj ? obj.type : '';
        this.strength = obj ? obj.strength : '';
        this.ageOfQueen = obj ? obj.ageOfQueen : '';
        this.honeycombs = obj ? obj.honeycombs : '';
        this.status = obj ? obj.status : '';
        // this.check = obj ? obj.check : [];
        // this.treatment = obj ? obj.treatment : '';
    }

    public toJSON() {
        return {
            hiveId: this.hiveId,
            name: this.name,
            type: this.type,
            strength: this.strength,
            ageOfQueen: this.ageOfQueen,
            honeycombs: this.honeycombs,
            status: this.status,
            // check: this.check,
            // treatment : this.treatment,
        }
    }
}