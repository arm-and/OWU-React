import {ON_ADD_TO_BAD, ON_REMOVE_FROM_BAD, ON_USERS_LOADED} from "../action-types";

export const onUsersLoaded = (payload) => ({type: ON_USERS_LOADED, payload});
export const onAddToBad = (payload) => ({type: ON_ADD_TO_BAD, payload});
export const onRemoveFromBad = (payload) => ({type: ON_REMOVE_FROM_BAD, payload});
