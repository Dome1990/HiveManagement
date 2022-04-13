export class Treatment {
    treatmentName: string = '';
    beginning!: number;
    end!: number;
    status: string = '';

    constructor(obj: any) {
        this.treatmentName = obj ? obj.treatmentName : '';
        this.beginning = obj ? obj.beginning : '';
        this.end = obj ? obj.end : '';
        this.status = obj ? obj.status : '';
    }
}