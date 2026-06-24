# Word Graph Explorer

An interactive semantic graph that lets you explore relationships between words and discover connections through a dynamic network visualization.

Built using Wordnik for linguistic data and Cytoscape.js for graph rendering.


# Features

Word Exploration
Search any English word
Instantly visualize related words as a graph
Click nodes to expand and explore further

Semantic Graph
Words are nodes
Relationships (synonyms, antonyms, etc.) are edges
Color-coded connections for clarity

Shortest Path Finder
Find the shortest semantic path between two words
Uses weighted relationships:
Synonyms = strongest connection
Antonyms = weakest connection

Auto-Expanding Graph
Automatically expands the graph when searching for paths
Ensures deeper connections can be discovered dynamically

# Tech Stack

Frontend
React + TypeScript
Cytoscape.js
Vite
Backend
Node.js + Express
Wordnik

# Project Structure

```
root/
├── backend/
│   └── src/
│       ├── routes/
│       ├── services/
│       ├── clients/
│       └── types/
│
├── frontend/
│   └── src/
│       ├── components/
│       ├── services/
│       └── types/

```

# How It Works

The frontend sends a request to the backend
The backend fetches related words from Wordnik
Data is transformed into a graph structure:
Nodes → words
Edges → relationships
The frontend renders the graph using Cytoscape.js
Shortest path is calculated using Dijkstra’s algorithm

Edge Weights

Relationship	Weight
Synonym	1
Similar	2
Hypernym	3
Hyponym	3
Antonym	5

Lower weight = stronger semantic connection

