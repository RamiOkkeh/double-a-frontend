// Creates Redux functions that edit the Redux variables to be used by any React connected component
export const list = (x) => { return { type: "list" , list: x } }
export const username = (x) => { return { type: "username" , username: x } }
