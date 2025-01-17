chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "invertColors") {
      chrome.scripting.executeScript({
        target: { tabId: sender.tab.id },
        files: ["content.js"]
      });
    } else if (message.action === "showRawText") {
      chrome.scripting.executeScript({
        target: { tabId: sender.tab.id },
        func: () => {
          const rawText = document.body.innerText;
          const textWindow = window.open("", "_blank");
          textWindow.document.write(`<pre>${rawText}</pre>`);
          textWindow.document.close();
        }
      });
    } else if (message.action === "tellJoke") {
      const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
      alert(randomJoke);
    } else if (message.action === "rickRoll") {
      chrome.scripting.executeScript({
        target: { tabId: sender.tab.id },
        func: () => {
          window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
        }
      });
    }
  });
  