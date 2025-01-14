# Zeotap Bot

Zeotap Bot is a web-based chatbot designed to answer "how-to" questions related to Customer Data Platforms (CDPs), including Segment, mParticle, Lytics, and Zeotap. It extracts relevant information from official documentation to provide users with accurate and helpful responses.

---

## 📚 Table of Contents
- [Overview](#overview)
- [Live Link](#live-link)
- [Demo Video](#demo-video)
- [Screenshots](#screenshots)
- [Features](#features)
- [Setup and Usage](#setup-and-usage)
- [Code Explanation](#code-explanation)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

---

## 📖 Overview
The **Zeotap Bot** aims to simplify interactions with CDP documentation by using natural language processing to fetch and present concise answers to user queries. The bot supports features like handling complex queries, extracting documentation data, and cross-CDP comparisons.

---

## 🌐 Live Link
[**Live Demo**](#)

---

## 🎥 Demo Video
[**Watch the Demo**](#)

---

## 📸 Screenshots
![Screenshot 1](screenshots/screenshot1.png)
![Screenshot 2](screenshots/screenshot2.png)

---

## 🌟 Features

### 🤖 Core Functionalities:
1. **Answer "How-to" Questions**:
   - Guides users on performing specific tasks within Segment, mParticle, Lytics, and Zeotap.
   - Example: "How do I set up a new source in Segment?"

2. **Extract Information from Documentation**:
   - Retrieves instructions or steps from official CDP documentation.

3. **Handle Variations in Questions**:
   - Processes complex or lengthy queries without breaking.

4. **Respond to Irrelevant Questions**:
   - Gracefully responds to questions outside the scope of CDPs.

### 🎁 Bonus Features:
1. **Cross-CDP Comparisons**:
   - Explains differences between functionalities across multiple CDPs.
   - Example: "How does Segment's audience creation compare to Lytics'?"

2. **Advanced "How-to" Questions**:
   - Handles platform-specific configurations and advanced integrations.

---

## 🚀 Setup and Usage

### Prerequisites
- Python 3.9 or above
- Dependencies from `requirements.txt`

### Steps to Run
1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/zeotap-bot.git
    ```
2. Navigate to the project directory:
    ```bash
    cd zeotap-bot
    ```
3. Install the required dependencies:
    ```bash
    pip install -r requirements.txt
    ```
4. Start the Flask server:
    ```bash
    python app.py
    ```
5. Open your browser and go to:
    ```bash
    http://localhost:5000
    ```

---

## 🛠 Code Explanation
- **Web Scraping**: Retrieves data from official CDP documentation using BeautifulSoup.
- *
