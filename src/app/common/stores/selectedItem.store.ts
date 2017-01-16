export const selectedItem = (state: any = null, {type, payload}) => {
    switch(type){
        case 'SELECTE_ITEM':
            return payload;
        default:
            return state;
    }
}