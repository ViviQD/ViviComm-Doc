---
sidebar_position: 12
---

# Frequently Asked Questions (FAQ)

## 1. What is ViviComm Lite Atlas?

**ViviComm Lite Atlas** is a medical AI chatbot designed for children, aimed at providing information and support for various health conditions. It is a simplified version of the full ViviComm platform, tailored for younger users and their families. The ViviComm Lite chatbot offers a user-friendly interface, engaging content, and interactive features to help children understand their health needs and make informed decisions.

## 2. How can I install ViviComm Lite?

To install the project, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ViviQD/ViviComm-Lite-Atlas.git
   ```

2. **Install dependencies**:
   ```bash
   yarn install  # or npm install
   ```

3. **Run the project locally**:
   ```bash
   yarn start  # or npm start
   ```

## 3. How do I deploy the website to GitHub Pages?

To deploy to **GitHub Pages**, follow the steps in the **GitHub Actions** workflow. When you commit to the **main** branch, the website will automatically be deployed to the **gh-pages** branch.

## 4. Why isn't the deployment working on GitHub Pages?

If the deployment isn't working, please check the following:

- **GitHub Pages settings**: Ensure that the **`gh-pages`** branch is set as the source for **GitHub Pages**.
- **GitHub Actions logs**: Check the **GitHub Actions logs** for details on any errors.

## 5. How can I check the status of GitHub Actions?

You can check the status of the **GitHub Actions** workflow in the **Actions** tab of the repository. After a successful run, the website should be updated on **GitHub Pages**.

## 6. How can I manually trigger the GitHub Actions workflow?

To manually trigger the workflow, follow these steps:

1. Create a **pull request** or **push** to the **main** branch.
2. The **GitHub Actions** workflow will automatically detect the changes and run the build and deploy steps.

## 7. How can I add my own questions to the FAQ?

To add your own questions and answers to the FAQ, simply edit the **FAQ.md** file, add your content in the same format, and commit it to the **main** branch. The new answers will automatically update in the documentation.

---

If you have any other questions, please don't hesitate ask it on the **GitHub Issues** page or join the **ViviQD** community on [Reddit](https://www.reddit.com/user/ViviQD/).

