<div align="center">
  <br />
      <img src="/public/assets/images/logo-connect-hub.png" alt="Project Banner">
  <br />

  <div>
    <img src="https://img.shields.io/badge/-React_JS-black?style=for-the-badge&logoColor=white&logo=react&color=61DAFB" alt="react.js" />
    <img src="https://img.shields.io/badge/-Appwrite-black?style=for-the-badge&logoColor=white&logo=appwrite&color=FD366E" alt="appwrite" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/-React_Query-black?style=for-the-badge&logoColor=white&logo=reactquery&color=FF4154" alt="reactquery" />
    <img src="https://img.shields.io/badge/-Typescript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
  </div>

  <h3 align="center">A Social Media Application</h3>

  <div align="center">
     Discover a user-friendly social media platform that boasts an attractive design and a wealth of features. Effortlessly create and browse posts while benefiting from a robust authentication system and rapid data fetching, thanks to React Query, ensuring a seamless user experience.
    </div>
  </div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🔗 [Links](#links)

## <a name="tech-stack">⚙️ Tech Stack</a>

- React.js
- Appwrite
- React Query
- TypeScript
- Shadcn
- Tailwind CSS

## <a name="features">🔋 Features</a>

👉 **Authentication System**: A strong authentication system that guarantees security and protects user privacy.

👉 **Explore Page**: Home page for users to discover posts, including a highlighted section showcasing other users.

👉 **Like and Save Functionality**: Allow users to like and bookmark posts, featuring dedicated pages to manage their liked and saved content.

👉 **Detailed Post Page**: A comprehensive post page that presents the content along with related posts for a rich user experience.

👉 **Profile Page**: A user profile page that displays liked posts and offers options to edit the profile.

👉 **Browse Other Users**: Enable users to browse and explore profiles and posts of other users.

👉 **Create Post Page**: Create a user-friendly post creation page with seamless file management, storage, and a drag-and-drop feature.

👉 **Edit Post Functionality**: Allow users to edit their post content at any time.

👉 **Responsive UI with Bottom Bar**: Design a responsive UI with a bottom navigation bar, enhancing the mobile app experience for smooth navigation.

👉 **React Query Integration**: Use React Query (Tanstack Query) for efficient data fetching, including auto caching to boost performance, parallel queries for quick data retrieval, and first-class mutations.

👉 **Backend as a Service (BaaS) - Appwrite**: Implement Appwrite as a Backend as a Service solution for streamlined backend development, providing features such as authentication, database, file storage, and more.

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/dotarsojat69/ConnectHub.git
cd ConnectHub
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
VITE_APPWRITE_URL=
VITE_APPWRITE_PROJECT_ID=
VITE_APPWRITE_DATABASE_ID=
VITE_APPWRITE_STORAGE_ID=
VITE_APPWRITE_USER_COLLECTION_ID=
VITE_APPWRITE_POST_COLLECTION_ID=
VITE_APPWRITE_SAVES_COLLECTION_ID=
```

Replace the placeholder values with your actual Appwrite credentials. You can obtain these credentials by signing up on the [Appwrite website](https://appwrite.io/).

## <a name="links">🔗 Links</a>

Here for a [Demo](https://connect-hub-sand.vercel.app/)