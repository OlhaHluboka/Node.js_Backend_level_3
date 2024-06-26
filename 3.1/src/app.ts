type DialogButtonType = "Yes" | "No";

interface FormButton {
    type: "Add" | "Remove" | "Buy"
}

// задача 1: создайте тип AnyButtonType, который описывает все вариации кнопок
type AnyButtonType = DialogButtonType | FormButton["type"]; 

const button1:AnyButtonType = "Yes"
const button2:AnyButtonType = "No"
const button3:AnyButtonType = "Add"
const button4:AnyButtonType = "Buy"
const button5:AnyButtonType = "Remove"

// задача 2: создайте тип ConfirmationHandlingFormButton
// т.е. подтип формовых кнопок, которые ещё содержат поле onConfirm, в котором
// может лежать функция, которая вызывается с параметром типа DialogButtonType
// (и ничего не возвращает)
// Т.е. предполагается что у кнопки такого типа, если поле onConfirm пустое, 
// то при нажатии на эту кнопку сразу происходит действие
// а иначе вызывается диалог Подтверждения, и результат нажатия на кнопку Да или Нет
// в итоге попадет в функцию onConfirm, которая уже дальше решит что делать

type ConfirmationHandlingFormButton = FormButton & {
    onConfirm ?: (dialogButton : DialogButtonType ) => void; 
}

let but1 : ConfirmationHandlingFormButton = {
    type: "Add"
}

let but2 : ConfirmationHandlingFormButton = {
    type: "Remove",

    onConfirm: (button2) => {

        console.log("Don`t remove now.")

    }
}

let but3 : ConfirmationHandlingFormButton = {
    type: "Buy",

    onConfirm: (button1) => {

        console.log("Buy it now.")

    }


}
// .... НЕТ, не надо писать все эти диалоги формы кнопки, 
// мы описываем чисто типы сейчас.