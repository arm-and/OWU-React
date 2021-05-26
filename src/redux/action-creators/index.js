import {INC, DEC, RESET, INC_TWO,  DEC_TWO, RESET_TWO} from '../action-types';

export const incAction = (payload) => ({type: INC, payload});
export const decAction = (payload) => ({type: DEC, payload});
export const resetAction = () => ({type: RESET});

export const incActionTwo = (payload) => ({type: INC_TWO, payload});
export const decActionTwo = (payload) => ({type: DEC_TWO, payload});
export const resetActionTwo = () => ({type: RESET_TWO});
