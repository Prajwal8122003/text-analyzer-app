function analyzeText() {
    let text = document.getElementById("textInput").value.trim();

    let characters = text.length;

    let words = text === "" ? 0 : text.split(/\s+/).length;

    let sentences = text === "" ? 0 : text.split(/[.!?]+/).filter(Boolean).length;

    document.getElementById("wordCount").innerText = words;
    document.getElementById("charCount").innerText = characters;
    document.getElementById("sentenceCount").innerText = sentences;
}
