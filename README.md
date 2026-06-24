# Word Graph Explorer

An interactive semantic graph system that visualizes relationships between English words as a dynamic network.

It enables users to explore linguistic connections such as synonyms, antonyms, hypernyms, and hyponyms, and discover semantic paths using graph-based search algorithms.

Built using **Wordnik API** for lexical data and **Cytoscape.js** for graph visualization.

---

#  Features

##  Word Exploration

* Search any English word
* Instantly generate a semantic graph
* Click nodes to dynamically expand relationships
* Incremental graph growth for deeper exploration

---

##  Semantic Graph Model

* Words are represented as **nodes**

* Relationships are represented as **edges**

* Edge types include:

  * Synonyms
  * Antonyms
  * Hypernyms
  * Hyponyms
  * Similar words

* Color-coded edges for visual clarity

---

##  Shortest Path Finder

Find semantic connections between two words using **Dijkstra’s algorithm**.

* Weighted graph traversal
* Stronger relationships have lower cost
* Path reflects semantic closeness, not just structure

---

##  Auto-Expanding Graph

* Graph expands dynamically during path search
* Automatically fetches missing nodes
* Enables discovery of hidden semantic connections

---

#  Tech Stack

## Frontend

* React
* TypeScript
* Cytoscape.js
* Vite

## Backend

* Node.js
* Express.js
* Wordnik API

---

#  System Architecture

```text id="arch1"
User Input (Word Search)
        ↓
Frontend (React + Cytoscape)
        ↓
Backend API (Express)
        ↓
Wordnik API (Lexical Data Source)
        ↓
Graph Transformation Layer
        ↓
Semantic Graph Response (Nodes + Edges)
        ↓
Frontend Graph Rendering
```

---

#  Project Structure

```bash id="structure1"
root/
│
├── backend/
│   └── src/
│       ├── routes/        # API endpoints
│       ├── services/      # Wordnik integration + logic
│       ├── clients/       # External API wrappers
│       └── types/         # Type definitions
│
├── frontend/
│   └── src/
│       ├── components/    # UI + graph visualization
│       ├── services/      # API calls
│       └── types/         # Graph models
```

---

#  How It Works

1. User searches for a word
2. Frontend sends request to backend API
3. Backend queries Wordnik for lexical relationships
4. Data is transformed into a graph structure
5. Graph is returned as nodes + edges
6. Frontend renders graph using Cytoscape.js
7. User can expand nodes or compute semantic paths

---

#  Edge Weight System

Semantic relationships are weighted based on strength:

| Relationship | Weight |
| ------------ | ------ |
| Synonym      | 1      |
| Similar      | 2      |
| Hypernym     | 3      |
| Hyponym      | 3      |
| Antonym      | 5      |

Lower weight = stronger semantic connection

This allows meaningful shortest-path computation between words.

---

#  Algorithms Used

* Dijkstra’s Shortest Path Algorithm
* Graph expansion (lazy loading)
* Adjacency-based graph modeling
* Weighted semantic traversal

---

#  Key Design Concepts

* Graph-based semantic modeling
* On-demand data loading (lazy expansion)
* External API integration (Wordnik)
* Hybrid frontend + algorithm system
* Interactive knowledge graph exploration

---

#  Future Improvements

* Replace Wordnik with embeddings (word vectors / NLP model)
* Add semantic similarity scoring (cosine similarity)
* Introduce graph clustering for large datasets
* Add backend caching layer (Redis)
* Add persistence (Neo4j or PostgreSQL graph schema)
* Support multi-language word graphs
* Add animation for path traversal visualization

---

#  What This Project Demonstrates

This project showcases:

* Graph theory applied to NLP
* Real-world semantic search systems
* Frontend algorithm visualization
* Backend API integration design
* Dynamic graph expansion systems
* Weighted shortest-path reasoning

---

#  Summary

This is not just a graph visualizer.

It is a:

> **semantic knowledge graph exploration system with algorithmic path reasoning**

It sits at the intersection of:

* search engines
* NLP systems
* knowledge graphs
* interactive data visualization
