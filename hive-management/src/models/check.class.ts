export class Check {
    date!:number;
    queenright!: boolean;
    varroa: string = '';
    brood: string = '';
    toDo: string = '';
    comment: string = '';

    constructor(obj: any){
        this.date = obj ? obj.date : '';
        this.queenright = obj ? obj.queenright : undefined;
        this.varroa = obj ? obj.varroa : '';
        this.brood = obj ? obj.brood : '';
        this.toDo = obj? obj.toDo : '';
        this.comment = obj ? obj.comment : '';
    }

}