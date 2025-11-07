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
 ├ components/        # UI elements (Button, Input, Modal...)
 ├ modules/
 │   ├ kanban/        # Board and task card views
 │   └ task/          # Task form, fields, nested modal
 ├ hooks/             # useTasks, useModal
 ├ types/             # Task types
 ├ services/          # Services
 ├ providers/         # Providers
 ├ utils/             # fileToBase64 helper
 └ store/             # taskReducer store
⚙️ Setup & Run
Clone the repository:

bash
Копировать код
git clone https://github.com/<your-username>/task-manager.git
cd task-manager
Install dependencies:

bash
Копировать код
npm install
Start the development server:

bash
Копировать код
npm run dev
Open in browser:

arduino
Копировать код
http://localhost:5173
💡 Notes on Architecture
The Modal Provider manages global modal state, enabling nested modals.

The Kanban board avoids unnecessary re-renders using stable IDs and minimal state.

Forms are fully controlled via Formik, ensuring validation consistency.

🎥 (Optional) Demo
Add a link to deployed version or short video:

arduino
Копировать код
https://...
✅ Status
✔️ Required functionality completed
✔️ Nested modal implemented & documented
✔️ Code structured & linted