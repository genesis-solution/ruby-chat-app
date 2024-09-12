# 📚 ChatRoom - Ruby On Rails 7 

Welcome to **ChatRoom**! This guide will help you get started with setting up and running the application on your local machine. 🚀

## Prerequisites 📋

Before you begin, ensure you have the following installed on your machine:

- **Ruby** (version 3.3.3 or newer)
- **Rails** (version 7.2.1 or newer)
- **Bundler** (a dependency manager for Ruby)
- **Node.js** and **Yarn** (for managing JavaScript dependencies)

## Getting Started 🛠

Follow these steps to get the application up and running:

### 1. Clone the Repository 📦

First, clone the repository to your local machine using git:

```
git clone https://github.com/genesis-solution/ruby-chat-app.git
cd ruby-chat-app
```
## Install Dependencies 📥

Install the necessary Ruby gems and JavaScript packages:

```
bundle install 
yarn install
```

# Set Up the Database 🗄

Set up the database by running the following commands:

```
rails db:create
rails db:migrate
rails db:seed
```

# Start the Rails Server 🌐
Launch the Rails server to run the application locally:

```
rails server
```

You can now access the application by navigating to http://localhost:3000 in your web browser. 🎉
