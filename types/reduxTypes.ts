
export interface IWordListItem  {
  word: string,
  translation: string
}


export interface IIrregularType {
    infinitiv: string,
    mutated: string,
    means : string
}

export interface IWordReducerInitial {
    words: IWordListItem[],
    shuffeledWords : IWordListItem[],
    pace: number,
    correctAnswers: number,
    incorrectAnswers: number,
    isGameStarted: boolean
}

export interface ITodo {
    id : string,
    task: string
}

export interface ITodoInitial {
    todos: ITodo[]
}