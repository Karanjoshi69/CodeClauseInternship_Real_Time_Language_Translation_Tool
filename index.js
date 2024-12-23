document.getElementById('translateButton').addEventListener('click', async () => {
    const inputText = document.getElementById('inputText').value;
    const sourceLanguage = document.getElementById('sourceLanguage').value;
    const targetLanguage = document.getElementById('targetLanguage').value;

    if (!inputText) {
        alert('Please enter text to translate.');
        return;
    }

    try {
        const response = await axios.get('https://api.mymemory.translated.net/get', {
            params: {
                q: inputText,
                langpair: `${sourceLanguage}|${targetLanguage}`
            }
        });

        const translation = response.data.responseData.translatedText;
        document.getElementById('outputText').value = translation;
    } catch (error) {
        console.error(error);
        alert('An error occurred while translating. Please try again.');
    }
});

