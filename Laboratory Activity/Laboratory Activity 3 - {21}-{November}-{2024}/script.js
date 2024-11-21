document.getElementById("textInput").addEventListener("input", function () {
    const text = document.getElementById("textInput").value.trim();

    const words = text.split(/\s+/).filter(word => word.length > 0);
    const wordCount = words.length;

    const sentences = text.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0);
    const sentenceCount = sentences.length;


    document.getElementById("wordCount").textContent = wordCount;
    document.getElementById("sentenceCount").textContent = sentenceCount;
});
