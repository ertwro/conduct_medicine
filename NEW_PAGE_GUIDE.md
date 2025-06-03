# Guide: Adding a New Page to Your Site

This guide outlines the steps to create and integrate a new HTML page into your website, utilizing the provided `template.html`.

## Step 1: Create the New HTML File

1.  **Copy the Template:**
    - Find the `template.html` file in your project root.
    - Make a copy of this file.
    - Rename the copied file to reflect its content (e.g., `about-us.html`, `services.html`, `my-topic.html`). Keep the `.html` extension.
    - Place this new file in the project root directory (alongside `index.html` and other pages).

## Step 2: Update Basic Page Information

Open your newly created HTML file in a text editor.

1.  **Modify the Page Title:**

    - Locate the `<title>` tag within the `<head>` section:
      ```html
      <title>Page Title - Your Site Name</title>
      ```
    - Change `"Page Title - Your Site Name"` to a descriptive title for your new page (e.g., `"About Us - My Company"`, `"Our Services - My Company"`). This title appears in browser tabs and search engine results.

2.  **Update the Main Heading:**
    - Find the `<h2>` tag within the `<div class="actual-main-content">` section:
      ```html
      <h2
        id="main-content-header"
        class="text-2xl font-semibold mb-4 text-gray-100"
      >
        Your Page Heading
      </h2>
      ```
    - Change `"Your Page Heading"` to the main heading for your new page's content.

## Step 3: Add Page-Specific Content

1.  **Locate the Content Area:**
    - Still within `<div class="actual-main-content">`, you'll find comments indicating where to add your unique content:
      ```html
      ...
      ```
2.  **Insert Your HTML:**
    - Replace the placeholder paragraphs and example content block with your page's actual text, images, lists, tables, and any other HTML elements.

## Step 4: Add a Presentation (Optional)

If this new page should display a Reveal.js presentation:

1.  **Uncomment Reveal.js CSS Links:**

    - In the `<head>` section, uncomment the CSS links for Reveal.js (remove the `` comment tags surrounding them).

2.  **Uncomment and Configure Presentation Area:**

    - In the `<body>`, uncomment the presentation area block:
      ```html

      ```
    - **Crucially, configure the `data-presentation-src` attribute.** Based on your `assets/js/reveal-loader.js` script, you have three options for its value:

      - **Option A: To load the official Reveal.js GitHub demo slides:**

        - Set the attribute to this exact string:
          ```html
          data-presentation-src="presentations/demo-from-github.html"
          ```
        - This specific string tells `reveal-loader.js` to use the hardcoded URL for the Reveal.js master demo.

      - **Option B: To load a local presentation file from your `presentations/` folder:**

        - Place your presentation file (e.g., `my-custom-slides.md` or `my-local-talk.html`) inside the `presentations/` folder in your project.
        - Set the attribute to the relative path of this file:
          - For a Markdown file:
            ```html
            data-presentation-src="presentations/my-custom-slides.md"
            ```
          - For an HTML file:
            ```html
            data-presentation-src="presentations/my-local-talk.html"
            ```

      - **Option C: To load a presentation from any other direct external URL:**
        - Set the attribute to the full HTTP/HTTPS URL of the presentation file (Markdown or HTML):
          ```html
          data-presentation-src="[https://www.example.com/path/to/your/slides.html](https://www.example.com/path/to/your/slides.html)"
          ```
          or
          ```html
          data-presentation-src="[https://another-site.com/slides.md](https://another-site.com/slides.md)"
          ```
        - `reveal-loader.js` will attempt to fetch and display content from this direct URL.

3.  **Uncomment Reveal.js JavaScript Libraries:**

    - Towards the end of the `<body>`, uncomment the block of `<script>` tags for Reveal.js core and its plugins.

4.  **Uncomment `reveal-loader.js` Script:**
    - At the very end of the `<body>`, uncomment the script link for `reveal-loader.js`:
      ```html

      ```

## Step 5: Make the New Page Searchable

For the site's internal search feature to find your new page, you **must** add its details to `assets/js/search-data.js`.

1.  **Open `assets/js/search-data.js`**.
2.  You will see an array named `sitePages`. Add a new JavaScript object to this array for your new page.
3.  The object should have the following structure:
    ```javascript
    {
        title: "Descriptive Title of Your New Page", // e.g., "About Our Company"
        url: "your-new-page-filename.html",      // e.g., "about-us.html"
        description: "A brief summary of the page content for search result snippets.",
        keywords: "relevant, search, terms, comma, separated" // Keywords to help find this page
    }
    ```
4.  **Example:** If your new page is `services.html`:
    ```javascript
    // In assets/js/search-data.js
    const sitePages = [
      // ... other existing page entries ...
      {
        title: "Our Comprehensive Services",
        url: "services.html",
        description:
          "Discover the wide range of professional services we offer to help your business succeed.",
        keywords: "services, offerings, solutions, professional help",
      }, // Add a comma here if there are more entries after this one
    ];
    ```

## Step 6: Add the New Page to the Navigation Menu

To make your new page accessible from the site's navigation menu, you need to update `assets/data/navigation-menu.json`.

1.  **Open `assets/data/navigation-menu.json`**.
2.  This file contains a JSON structure defining the navigation links. Find the appropriate section (an `items` array, or `subItems` array within an item if it's a dropdown) where you want to add the link to your new page.
3.  Add a new JSON object for your link. The object typically has:
    - `"label"`: The text that will be displayed for the link.
    - `"url"`: The filename of your new HTML page (e.g., `"your-new-page.html"`).
    - `"id"`: (Optional but good for targeting/styling) A unique ID for the link (e.g., `"nav-link-yourpage"`).
4.  **Example:** Adding a top-level link to a page called `portfolio.html`:
    ```json
    // In assets/data/navigation-menu.json
    // Inside a "items" array of a navigation section:
    [
      // ... other items ...
      {
        "label": "Our Portfolio",
        "url": "portfolio.html",
        "id": "nav-link-portfolio"
      } // Add a comma here if there are more entries after this one
    ]
    ```
    **Example:** Adding a sub-item link to `project-alpha.html` under a "Projects" category:
    ```json
    {
      "label": "Projects",
      "id": "nav-cat-projects",
      "subItems": [
        // ... other sub-items ...
        {
          "label": "Project Alpha",
          "url": "project-alpha.html",
          "id": "nav-link-projectalpha"
        } // Add a comma here if there are more entries after this one
      ]
    }
    ```

## Step 7: Test Your New Page

1.  **Open in Browser:**
    - It's best to use a local web server to view your changes (this avoids potential issues with `fetch` API on `file:///` paths).
    - Navigate directly to your new HTML file (e.g., `http://localhost:8000/your-new-page.html`).
2.  **Verify:**
    - Check that the title and main heading are correct.
    - Ensure all your page-specific content is displayed as expected.
    - If you added a presentation, verify it loads and functions correctly.
    - Test the search bar: Try searching for keywords you added for this page in `search-data.js` to ensure it appears in the search results.
    - Check the navigation menu: Verify that the new link appears correctly and navigates to your new page.
    - Check for any errors in the browser's JavaScript console (Right-click > Inspect > Console).

---

By following these steps, you can systematically add new pages to your website, ensuring they are well-integrated into the existing structure, searchable, and accessible via the navigation.
