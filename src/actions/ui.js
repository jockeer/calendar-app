import { types } from "../types/types"

export const uiOpenModal = () => {
    return {
        type: types.uiOpenModal,
    }
}
export const uiCloseModal = () => ({
    type: types.uiCloseModal,
    
})