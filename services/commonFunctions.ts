import { IWordListItem } from '../types/reduxTypes';


export const randomSorterFunction = (array:IWordListItem[]):Array<IWordListItem> => {
    return [...array].sort(() => Math.random() - 0.5);
}