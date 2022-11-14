import React from "react";

function ArticleHTML() {
  return (
    <div className="html-articles">
      <article id="intro" className="article-intro">
        <h1>Learn HTML basics</h1>

        <h3>So what is HTML?</h3>
        <p>
          HTML is a markup language that defines the structure of your content.
          HTML consists of a series of elements, which you use to enclose, or
          wrap, different parts of the content to make it appear a certain way,
          or act a certain way. The enclosing tags can make a word or image
          hyperlink to somewhere else, can italicize words, can make the font
          bigger or smaller, and so on. For example, take the following line of
          content:
        </p>
        <div id="home">
          <p>
            My cat is very grumpy If we wanted the line to stand by itself, we
            could specify that it is a paragraph by enclosing it in paragraph
            tags:
          </p>

          <h4>Anatomy of an HTML element</h4>
        </div>
        <div className="">
          <img
            className="img1"
            src="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics/grumpy-cat-small.png"
            alt="img"
          />
        </div>

        <div>
          <h3>The main parts of our element are as follows:</h3>

          <p>
            1. The opening tag: This consists of the name of the element (in
            this case, p), wrapped in opening and closing angle brackets. This
            states where the element begins or starts to take effect — in this
            case where the paragraph begins.{" "}
          </p>
          <p>
            {" "}
            2. The closing tag: This is the same as the opening tag, except that
            it includes a forward slash before the element name. This states
            where the element ends — in this case where the paragraph ends.
            Failing to add a closing tag is one of the standard beginner errors
            and can lead to strange results.
          </p>
          <p>
            {" "}
            3.The content: This is the content of the element, which in this
            case, is just text.
          </p>
          <p>
            4. The element: The opening tag, the closing tag, and the content
            together comprise the element. Elements can also have attributes
            that look like the following:
          </p>
          <div className="">
            <img
              className="img2"
              src="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics/grumpy-cat-attribute-small.png"
              alt="img"
            />
          </div>
          <p>
            Attributes contain extra information about the element that you
            don't want to appear in the actual content. Here, class is the
            attribute name and editor-note is the attribute value. The class
            attribute allows you to give the element a non-unique identifier
            that can be used to target it (and any other elements with the same
            class value) with style information and other things. Some
            attributes have no value, such as required. Attributes that set a
            value always have: A space between it and the element name (or the
            previous attribute, if the element already has one or more
            attributes). The attribute name followed by an equal sign. The
            attribute value wrapped by opening and closing quotation marks.
          </p>
          <div className="attribute">
            Note: Simple attribute values that don't contain ASCII whitespace
            (or any of the characters " ' ` = ) can remain unquoted, but it is
            recommended that you quote all attribute values, as it makes the
            code more consistent and understandable.
          </div>
        </div>
        <div>
          <h3></h3>
          You do however need to make sure that your elements are properly
          nested. In the example above, we opened the element first, then the
          element; therefore, we have to close the first, then the element. The
          following is incorrect:
        </div>
        <div>
          <h4>How to View HTML Source</h4>
          <p>
          Have you ever seen a Web page and wondered "Hey! How did they do that?"
          </p>
          <h4>View HTML Source Code:</h4>
          <p>Right-click in an HTML page and select "View Page Source" (in Chrome) or "View Source" (in Edge), or similar in other browsers. This will open a window containing the HTML source code of the page.</p>
          <h4>Inspect an HTML Element:</h4>
          <p>Right-click on an element (or a blank area), and choose "Inspect" or "Inspect Element" to see what elements are made up of (you will see both the HTML and the CSS). You can also edit the HTML or CSS on-the-fly in the Elements or Styles panel that opens.

</p>
        </div>



        <div>

        <details>
          <summary>Multimedia and embedding</summary>
          <ol>
            <li><a href="#intro">introduction</a></li>
            <li><a href="#home">Images in HTML</a></li>
            <li><a href="/en-US/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content">Video and audio content</a></li>
            <li><a href="/en-US/docs/Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies">From object to iframe — other embedding technologies</a></li>
            <li><a href="/en-US/docs/Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web">Adding vector graphics to the web</a></li>
            <li><a href="/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images">Responsive images</a></li>
            <li><a href="/en-US/docs/Learn/HTML/Multimedia_and_embedding/Mozilla_splash_page">Assessment: Mozilla splash page</a></li>
          </ol>
      </details>
      <div>
        <iframe className="iframe" src="https://www.littlewebhut.com" alt="frame" >read more</iframe>
      </div>
      <div>
   <p> <b>Beginner's tutorials</b> 
Our HTML Learning Area features multiple modules that teach HTML from the ground up — no previous knowledge required.</p> 

<p><b>Introduction to HTML</b>
This module sets the stage, getting you used to important concepts and syntax such as looking at applying HTML to text, how to create hyperlinks, and how to use HTML to structure a web page.
</p>
<p>
<b>Multimedia and embedding</b>

This module explores how to use HTML to include multimedia in your web pages, including the different ways that images can be included, and how to embed video, audio, and even entire other webpages.
</p>
<p>
<b>HTML tables</b>
Representing tabular data on a webpage in an understandable, accessible way can be a challenge. This module covers basic table markup, along with more complex features such as implementing captions and summaries.</p>

<p><b>HTML forms</b>
Forms are a very important part of the Web — these provide much of the functionality you need for interacting with websites, e.g. registering and logging in, sending feedback, buying products, and more. This module gets you started with creating the client-side/front-end parts of forms.</p>

<p><b>Use HTML to solve common problems</b>
Provides links to sections of content explaining how to use HTML to solve very common problems when creating a web page: dealing with titles, adding images or videos, emphasizing content, creating a basic form, etc.</p>

      </div>
        </div>
      </article>
    </div>
  );
}

export default ArticleHTML;
