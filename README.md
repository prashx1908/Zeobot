Support Agent Chatbot for CDP

Objective

Develop a chatbot that can answer "how-to" questions related to four Customer Data Platforms (CDPs): Segment, mParticle, Lytics, and Zeotap. The chatbot should extract relevant information from the official documentation of these CDPs to guide users on performing tasks or achieving specific outcomes within each platform.

Live and Demo Links

Live Link: [Insert Live Link Here]

Demo Link: [Insert Demo Link Here]

Core Functionalities

1. Answer "How-to" Questions

The chatbot responds to user questions about specific tasks or features within each CDP.

Example Questions:

"How do I set up a new source in Segment?"

"How can I create a user profile in mParticle?"

"How do I build an audience segment in Lytics?"

"How can I integrate my data with Zeotap?"

2. Extract Information from Documentation

Retrieves relevant information from the official documentation to answer user questions.

Navigates through the documentation, identifies relevant sections, and extracts instructions or steps.

3. Handle Variations in Questions

Handles size variations, such as extremely long questions.

Responds appropriately to questions irrelevant to CDPs, such as "Which movie is getting released this week?"

Bonus Features

1. Cross-CDP Comparisons

Answers questions about differences in approaches or functionalities between the four CDPs.

Example Question: "How does Segment's audience creation process compare to Lytics'?"

2. Advanced "How-to" Questions

Handles complex or platform-specific "how-to" questions.

Provides guidance on advanced configurations, integrations, or use cases.

Evaluation Criteria

Accuracy and Completeness: Properly answers "how-to" questions.

Code Quality: Clean and maintainable codebase.

Handling Variations: Ability to manage different question phrasing and irrelevant queries.

Bonus Features: Implementation of cross-CDP comparisons and advanced questions.

User Experience: Smooth and intuitive chatbot interaction.

Data Sources

Segment Documentation

mParticle Documentation

Lytics Documentation

Zeotap Documentation

How It Works

Web Scraping

Extracts data from the official documentation of each CDP.

Uses BeautifulSoup for parsing HTML and extracting relevant content.

Limits scraping depth to navigate only relevant sections.

Semantic Search

Implements SentenceTransformer (all-MiniLM-L6-v2) for semantic similarity.

Encodes user queries and documentation content.

Computes cosine similarity to find the most relevant content.

Flask Application

Login and Signup Pages: Basic user authentication for demo purposes.

Homepage: Provides a user-friendly interface for interacting with the chatbot.

API for Querying: Accepts user queries, processes them, and returns answers.

Setup Instructions

Prerequisites

Python 3.8+

Required libraries (install using pip):

Flask

requests

BeautifulSoup4

sentence-transformers

pytorch

Installation

Clone the repository:

git clone [Repository URL]
cd [Repository Folder]

Install dependencies:

pip install -r requirements.txt

Run the Flask app:

python app.py

Access the application at http://127.0.0.1:5000.

File Structure

app.py: Main application file.

templates/: HTML templates for the application.

index.html: Homepage template.

login.html: Login page template.

documentation.json: Pre-scraped documentation data.

Screenshots

Include screenshots of the following:

Homepage.

Chatbot interface.

Query results.

Login and signup pages.

Future Improvements

Enhanced Error Handling: Improve responses for edge cases and erroneous inputs.

Real-Time Updates: Periodic re-scraping of documentation for up-to-date answers.

Multi-language Support: Expand to handle queries in multiple languages.

Credits

Frameworks and Tools: Flask, BeautifulSoup, SentenceTransformer.

Documentation: Official sources for Segment, mParticle, Lytics, and Zeotap.

License

This project is licensed under the MIT License. See the LICENSE file for details.

](https://github.com/prashx1908/zeosheets/tree/main?tab=readme-ov-file)
