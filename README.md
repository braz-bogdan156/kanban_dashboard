# 🗂️ Task Manager — Kanban Board with Nested Modals

A task management application featuring a Kanban board, task creation modal, nested modal for assignee selection, file attachments, and persistent state.

This project demonstrates clean React architecture, drag & drop interactions, form validation, and modal composition patterns.

---

## 🚀 Tech Stack

| Feature | Library / Tool |
|--------|----------------|
| UI Framework | **React 19 + TypeScript** |
| Build Tool | **Vite** |
| Styling | **Tailwind CSS** |
| Forms & Validation | **Formik + Yup** |
| Drag & Drop | **@dnd-kit** |
| State Management | **React Context** (local persistence) |
| Modals + Nested Modal Logic | Custom Modal Provider |
| File Upload | FileReader → Base64 preview |
| Code Quality | ESLint + Prettier + Stylelint + Husky + lint-staged |

---

## 🧱 Key Features

### ✅ Kanban Board
- Columns: **Todo → In Progress → Done**
- Tasks can be **dragged between columns**
- Animated & smooth movement using **@dnd-kit**
- State persists via **localStorage**

### ✅ Task Creation Modal (Formik + Yup)
User can set:
- Title
- Description
- Priority
- Deadline
- File attachment (image/pdf preview)
- Assignee

### ✅ Nested Modal (Modal inside Modal) — *Important Part*
When selecting **Assignee**, we open a **new modal on top of the existing modal**.

This is implemented using a **Modal Context**:


This approach:

Avoids prop drilling

Keeps modals independent

Allows stacking multiple modals cleanly

(Comment explaining this approach is included in code.)

✅ File Attachments
Uploaded files are converted to Base64 and previewed directly.

✅ Persistence
All tasks are stored in localStorage, so state remains after refreshing.

📁 Project Structure

src/
├─ components/ # Reusable UI elements

├─ modules/

│ ├─ kanban/ # Kanban board UI 

│ └─ task/ # Task form modal, nested modals, task-related views

├─ hooks/ # Custom hooks 

├─ types/ # Global TypeScript types 

├─ services/ # Business logic services 

├─ providers/ # Context providers

├─ utils/ # Helpers 

├─ store/ # Reducers and state logic 

⚙️ Setup & Run
Clone the repository:

git clone 
https://github.com/braz-bogdan156/kanban_dashboard

cd task-manager

Install dependencies:
npm install

Start the development server:
npm run dev

Open in browser:
http://localhost:5173

💡 Notes on Architecture
The Modal Provider manages global modal state, enabling nested modals.

The Kanban board avoids unnecessary re-renders using stable IDs and minimal state.

Forms are fully controlled via Formik, ensuring validation consistency.

🎥  Demo:



✅ Status

✔️ Required functionality completed

✔️ Nested modal implemented & documented

✔️ Code structured & linted