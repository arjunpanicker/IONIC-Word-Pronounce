export interface IBoyRoutineList {
    routine: Array<IBoyRoutine>;
}

export interface IBoyRoutine {
    id: number;
    url: string;
    text: string;
}