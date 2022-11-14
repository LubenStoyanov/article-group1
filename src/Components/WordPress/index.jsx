import React from 'react'

function index() {
  return (
	<article style={{textAlign:"left"}}>
		<h1>WordPress - and the headless fuzz about it?</h1>
		<span>Table of Content</span>
		<ul>
			<li><a href="#intro">Introduction</a></li>
			<li><a href="#basics">Basics</a></li>
			<li><a href="#getting-started">Getting started</a></li>
			<li><a href="#post-types">Post Types</a></li>
			<li><a href="#data">Getting Data</a></li>
		</ul>
		<section id="intro">
			<h2>Introduction</h2>
			<p>Well, you've seen WordPress websites or blogs - for sure. Even if you didn't want to.</p>
			<p>In case you've never heard of WordPress, here are the corner stones: It is a so called "Content Management System", based on LAMP-Stack technologies like Linux Apache Server, MySQL Database and PHP, together with our beloved HTML, CSS and Javascript for the frontend.</p>
			<p>It was <strong>founded in May 2003</strong> by Mutt Mullenweg and quickly conquered the World Wide Web due to it's Open Source licence model and things like the theme or plugin architecture.</p>
			<p>With regards to the overall deployment statistics of WordPress, we just have to admit, that there is just an insane number of WordPress instances out there.</p>
			<p>According to this <a href="https://www.manaferra.com/wordpress-statistics/" target="_blank">website</a>, there are more than 800 million total installations of WordPress. That's quiet a lot, isn't it?</p>
		</section>
		<section id="basics">
			<h2>Basics of WordPress</h2>
			<p>You can run WordPress pretty easily, it's free. Many hosting providers do offer pre-packaged installations, which can be deployed in one click. In case you are not a techy person, that might be an option for you. But: be aware, these packages may be outdated (due to it's shipping process) or be restricted in some way.</p>
			<p>Another option is host your installation yourself. All you need is around 1GB of Webspace with PHP suport, a MySQL Database and a domain to connect everything to.</p>
		</section>
		<section id="getting-started">
			<h2>Getting started</h2>
			<p>WordPress, also simply shorthandly descriped as WP, is also easy to install. You <a href="https://wordpress.org/download/" target="_blank">download</a> an installation package from the official website in your language, upload everything to your FTP and kick off the installation by visiting your-domain.xy/wp-install.php and follow the instructions.</p>
			<p>To be honest: there are plenty of tutorials out there to get you started, which are very detailed and of high quality.</p>
			<p>Instead, let's dive deep:</p>
		</section>
		<section id="headless">
			<h2>Headless approach</h2>
			<p>Since many parts of web development have shifted towards Javascript in the past few years, we have to admire that the WordPress Core Team did so too in many ways.</p>
			<p>To give you some orientation in this area:</p>
			<ul>
				<li>The <a href="https://developer.wordpress.org/block-editor/" target="_blank">Gutenberg Project</a> is a block based editing approach (just like WIX for example), which has been going on - and will continue to do so - as we are currently in phase 2 of 4 on the given transition roadmap.</li>
				<li>Themes can now be <a href="https://developer.wordpress.org/themes/classic-themes/"><strong>classic themes</strong></a> or <strong><a href="https://developer.wordpress.org/block-editor/how-to-guides/themes/create-block-theme/" target="_blank">block based</a></strong>.</li>
				<li>WordPress comes with an extensible API out of the box, nice!</li>
			</ul>
			<p>The headless approach follows the idea to disconnect the frontend from the backendend, away from a monolithic architecture.</p>
			<p>Due to the fact that WordPress comes out of the box with a build-in API, we can easily grab some data from it:</p>
			<p>First thing to know: What is the api-endpoint of my WordPress installation?</p>
			<p>It's <strong>https://your-domain.xy/wp-json/wp/v2/content-type</strong></p>
		</section>
		<section id="data">
			<h2>Getting Data</h2>
			<p>To get some data from WordPress - let's say in React - you can simply use the Javascript fetch method query these endpoints to get your posts - as a headless approach.</p>
			<p>Have a look at this example:</p>
			<a href="https://codesandbox.io/s/morning-sea-wukfct?file=/src/App.js">React Data Fetch from WordPress.</a>
			<p>The WordPress-API offeres different endpoints for your so called post-types. These are either pages or posts out of the box (and a couple of others, which would exceed this article).</p>
			<p>As you can see, getting data from WordPress is easy.</p>
		</section>
		<section id="sum-up">
			<h2>Sum Up</h2>
			<p>WordPress can be used as a headless CMS without any hustle. It can be easily set up, and is ready to server your headless content right away.</p>
		</section>
	</article>
  )
}

export default index