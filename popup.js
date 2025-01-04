const jokes = [
    "Why don't skeletons fight each other? They don't have the guts.",
    "What do you call fake spaghetti? An impasta!",
    "What do you call cheese that isn't yours? Nacho cheese!",
    "Why couldn't the bicycle stand up by itself? It was two-tired.",
    "What do you call a bear with no teeth? A gummy bear!",
    "Why don't scientists trust atoms? Because they make up everything!",
    "How do you organize a space party? You planet.",
    "Why did the scarecrow win an award? He was outstanding in his field!",
    "What do you call an alligator in a vest? An investigator.",
    "Why did the math book look sad? It had too many problems."
  ];
  
  // Helper function to get the active tab
  function getActiveTab() {
    return new Promise((resolve, reject) => {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (chrome.runtime.lastError || tabs.length === 0) {
          reject(chrome.runtime.lastError || new Error("No active tab found"));
        } else {
          resolve(tabs[0]);
        }
      });
    });
  }
  
  document.getElementById('invert-colors').addEventListener('click', async () => {
    try {
      const tab = await getActiveTab();
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: () => {
          document.body.style.filter = document.body.style.filter === 'invert(1)' ? 'invert(0)' : 'invert(1)';
        }
      });
    } catch (error) {
      console.error("Error inverting colors:", error);
    }
  });
  
  document.getElementById('show-raw-text').addEventListener('click', async () => {
    try {
      const tab = await getActiveTab();
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: () => {
          document.body.innerText = document.body.innerText;
        }
      });
    } catch (error) {
      console.error("Error displaying raw text:", error);
    }
  });
  
  document.getElementById('tell-joke').addEventListener('click', () => {
    const joke = jokes[Math.floor(Math.random() * jokes.length)];
    document.getElementById('output').textContent = joke;
  });
  
  document.getElementById('rick-roll').addEventListener('click', async () => {
    try {
      const tab = await getActiveTab();
      chrome.tabs.create({ url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" });
    } catch (error) {
      console.error("Error opening Rick Roll:", error);
    }
  });
  