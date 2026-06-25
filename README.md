#  Word Graph Explorer

A semantic graph navigation system that finds conceptual paths between words using **ConceptNet** and visualizes them as an interactive graph.

Built with **TypeScript, Node.js, React, and Cytoscape.js**.

---

##  Features

-  Semantic graph built from ConceptNet
-  Shortest path discovery between concepts (Dijkstra-based)
-  Interactive graph visualization (Cytoscape.js)
-  Animated traversal of semantic paths
-  Retry + caching layer for unstable external API calls
-  Fallback-safe backend (never crashes UI)

---

##  How it works

1. User inputs two words (e.g. `dog → car`)
2. Backend queries ConceptNet:
   - expands semantic relationships
   - builds a weighted graph
3. Pathfinding algorithm finds shortest conceptual route
4. Frontend visualizes:
   - full graph
   - animated path traversal step-by-step

---

##  Architecture

Frontend (React + Cytoscape)
        ↓
Backend (Express + TypeScript)
        ↓
ConceptNet API
        ↓
Graph Builder + Dijkstra Pathfinding

---

##  Tech Stack

### Frontend
- React
- Vite
- Cytoscape.js
- TypeScript

### Backend
- Node.js
- Express
- TypeScript
- Axios

### External Data
- ConceptNet Knowledge Graph

---

##  Installation

### 1. Clone repo

```bash
git clone https://github.com/YOUR_USERNAME/word-graph.git
cd word-graph
