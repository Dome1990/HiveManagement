export class Check {
    dateStamp: any = '';
    queenright: string = '';
    varroa: string = '';
    brood: string = '';
    toDo: string = '';
    comment: string = '';
    checkId: any;

    constructor(obj?: any){
        this.dateStamp = obj ? obj.date : '';
        this.queenright = obj ? obj.queenright : '';
        this.varroa = obj ? obj.varroa : '';
        this.brood = obj ? obj.brood : '';
        this.toDo = obj? obj.toDo : '';
        this.comment = obj ? obj.comment : '';
        this.checkId = obj ? obj.checkId : '';
    }

    public checkToJSON(){
        return {
            dateStamp: this.dateStamp,
            queenright: this.queenright,
            varroa: this.varroa,
            brood: this.brood,
            toDo: this.toDo,
            comment: this.comment,
            checkId: this.checkId,
        }
    }

}