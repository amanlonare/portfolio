export const submitHandler = (inputValue, setInputValue, addMessage) => {
    if (inputValue.trim() === '') return;

    addMessage({ text: inputValue, sender: 'user' });
    setInputValue('');
};
