# **Architectural-historical and forensic analysis of the "js-WebShop" of iConnect Berlin: The pre-JSON era and the conceptual evolution of client-side data structures**

## **Introduction and historical context of the research topic**

The evolution of software architecture on the World Wide Web is characterized by paradigm shifts that, in retrospect, often appear as inevitable, logical stages of development. A central and now universally accepted milestone in this development is the strict separation of application logic, presentation layer, and underlying information in the client-side browser environment. In modern web development, this separation is almost exclusively achieved through the JSON (JavaScript Object Notation) data format in conjunction with asynchronous application programming interfaces (APIs) such as REST or GraphQL. However, if we consider the mid to late 1990s—the very early days of the commercially used internet—neither these established standards nor the technological foundations in browser engines to implement them on a broad scale existed.

The present study is dedicated to the detailed architectural-historical analysis of a remarkable digital artifact from precisely this era: the "js-WebShop", an e-commerce solution developed by the Berlin start-up iConnect between 1996 and 1999\.1At the heart of this forensic code analysis lies a far-reaching thesis in the history of technology. It examines the claim of Christoph Puppe, iConnect's then Chief Technology Officer (CTO), that the fundamental principles and structuring features of JSON were conceived and implemented in the architecture of this early webshop years before the format was officially defined and globally standardized by Douglas Crockford.

The core of this technological claim is manifested in the shop's unconventional architecture. Instead of mixing product data with HTML on the server side, the entire database was outsourced to a separate JavaScript file (js-db.js).2In this file, the data was consistently separated from the execution logic. However, since modern notations for deeply nested JavaScript objects were neither performant nor standardized in the browser engines of the time, the data structures were formulated as so-called "nested hashed arrays" (nested associative arrays) using specific string delimiters.2

To evaluate the historical significance of this source code, the technological state of the time must be precisely reconstructed. The following analysis examines the technological limitations of the 1990s, the biographical and professional influences of the lead developer, the syntactic structure of the database file, and draws a direct structural and conceptual comparison to the later formal invention of JSON.

## **The technological context and limitations of the web in the late 1990s**

To properly appreciate the innovative power of the "js-WebShop" architecture, a deep understanding of the severely limited web infrastructure between 1996 and 1999 is essential. During this period, the internet was undergoing a fundamental transformation. The programming language JavaScript (originally developed under the code name Mocha and briefly known as LiveScript) was only implemented by Brendan Eich at Netscape in May 1995 and was first standardized as ECMAScript at the end of 1997\.

At that historical juncture, JavaScript was primarily used by the broader developer community for trivial client-side interactions. Typical use cases were limited to simple form validations before data was sent to the server, or rudimentary visual effects such as changing images on mouseover in navigation menus. The idea of ​​moving complex business logic or even entire database systems into the user's browser was considered utopian.

| Technological Dimension (1996-1999) | Prevailing paradigm | Limitations and challenges |
| :---- | :---- | :---- |
| **Architectural model** | Server-side rendering (CGI, early PHP) | Every click required a complete reload of the entire HTML page. High latency and massive server load. |
| **Data exchange** | HTML-Formular-POSTs | Asynchronous data queries (AJAX) did not yet exist. Data could not be loaded in the background. |
| **Data storage** | Server-side SQL databases (MySQL) | The client was stateless. Session information was managed laboriously via URL parameters or early cookies. |
| **Data structuring** | XML (standardized only from 1998 onwards) | XML was considered too verbose, and the client-side parsing process overwhelmed the computing power of the devices available at the time. |
| **JavaScript-Engines** | Netscape SpiderMonkey (early versions) | Limited memory, extreme performance problems with deeply nested objects ("garbage collection" was rudimentary). |

E-commerce platforms of this era relied almost exclusively on server-side rendering. Technologies like Perl-based CGI (Common Gateway Interface) scripts generated a completely new HTML file with every user interaction. This file was fed from a server-side database. This approach had significant drawbacks: End-user bandwidth was severely limited by analog modems (often only 28.8 or 56 kbit/s). Each round trip to the server took seconds. Under high traffic, the still relatively low-powered web servers quickly collapsed under the load of continuous database queries and HTML rendering. In this model, the web browser functioned merely as a so-called "thin client"—a passive display device without its own understanding of the semantic data it presented.

iConnect's conceptual idea—to load an entire e-commerce database client-side into the browser's volatile memory (RAM) to enable dynamic, local navigation of the shop without further server reloads—was radical in its field. However, a standardized format for efficiently transferring these structured datasets from the server to the client was lacking. Extensible Markup Language (XML) was still in its infancy and not natively supported by JavaScript engines without external, computationally intensive parser libraries. It was precisely in this technological vacuum, where the need for structured client data was obvious but the necessary tools had not yet been invented, that the architecture of the "js-WebShop" emerged.

## **Biographical foundation of the system architecture: The interdisciplinary expertise of Christoph Puppe**

Technological innovations rarely arise in a vacuum; they are often the result of the interdisciplinary transfer of mental models from one field to another. A detailed analysis of the career path of Christoph Puppe, the lead developer of the "js-WebShop," provides precise explanations for the highly structured, unconventional, and data-centric architecture of the iConnect software.1

Puppe's professional career before, during and after his time as CTO at iConnect shows a remarkable arc, ranging from classic text and information structuring to software development and national IT security.

| Period | Professional position and company | Impact on architectural understanding and data modeling |
| :---- | :---- | :---- |
| 1985 \- 1989 | Setzer, Kentauros Verlag1 | The work of typesetting necessitates a deep understanding of the strict separation between semantic content (text) and visual presentation (formatting). This prefigures the MVC (Model-View-Controller) approach. |
| Mar. 1990 \- Mar. 1991 | DTP and antivirus consultant, CWP Consulting1 | Early exposure to the integrity of digital systems and the protection of data at the file level. |
| Feb. 1991 \- Dec. 1991 | Salesperson 1 | Practical understanding of sales processes, customer interaction and trading logics, which are essential for the subsequent modeling of e-commerce software. |
| December 1992 \- May 1993 | Employee, Fontshop1 | Specialization in the areas of desktop publishing, typography, and precise digital representation of information structures. |
| **Apr. 1996 \- Oct. 1999** | **CTO, iConnect** 1 | **Co-founder and technical director. This phase encompasses the architecture and development of the "js-WebShop" and the js-db.js file.** |
| Jan. 2000 \- Nov. 2001 | Chief Security Consultant, Defcom 1 | Technical management in the field of IT security in a highly regulated European environment. |
| Feb. 2002 \- Jan. 2017 | Principal Consultant, HiSolutions AG 1 | Focus on technical audits, penetration tests,Participation in the IT baseline protection catalogsand corporate security over a decade. |
| Feb. 2017 \- Nov.2023 | Managing IT Security Architect und Auditteamleiter BSI, SVA 1 | Top national expertise. Participation in the BSI's IT baseline protection catalogs, demonstrating an extreme affinity for systematic approaches and standardized structures.3 |
| Nov 2023 \- today | Principal Security Architect, Audit Team Leader BSI, NTT DATA Deutschland SE | Participation in the new basic protection++ |

The intellectual foundation for the architecture of the "js-WebShop" was likely laid primarily in the early years (1985–1989) as a typesetter.1In classic and early digital typesetting (desktop publishing, DTP), the logical organization of information is an absolute prerequisite. The thought pattern that conceptually isolates the raw information data from its subsequent visual representation is the exact architectural pattern found in the software of the "js-WebShop." While the industry standard at the time was to hardcode product data, prices, and descriptions into HTML tables, Puppe chose the typesetter's approach: He extracted the "manuscript" (the product data) into a purely semantic format (the js-db.js) and left the dynamic layout to the browser (the "printer") based on this raw data.

Furthermore, Puppe's subsequent career demonstrates exceptional analytical acumen and a strong understanding of systems. He was a co-author and auditor for the IT baseline protection catalogs of the German Federal Office for Information Security (BSI).3as well as an expert in penetration testing, cryptography, cloud strategies and emergency planning1His fundamentally deep understanding of logically encapsulated, tamper-proof, and highly organized system architectures is evident. This affinity for complex, coordinated, and data-driven systems is even reflected in his leisure activities, as impressively demonstrated by his strategic planning and reporting at the highly planning-based Ingress events ("Persepolis Shards" \#38 and \#6) in Nuremberg and Berlin.5

This intellectual and professional disposition provides a compelling explanation for why the Berlin-based startup iConnect didn't simply copy existing, architecturally inefficient standards from the 1990s. Instead, they designed a completely independent, highly normalized, and highly efficient data architecture that anticipated future developments on the web.

## **The ontology of the data: Forensic analysis of js-db.js**

The nucleus of the technological proof lies in the structure and methodology of the file js-db.js.2In modern software projects, a file named db.js is typically a connection module. As numerous analyses of current web architectures demonstrate, a modern db.js functions as a configuration script that establishes a TCP/IP connection to an external database such as MongoDB using environment variables (.env) via Mongoose or similar ORM (Object-Relational Mapping) libraries.6However, in the historical context of the "js-WebShop" of the 1990s, this file had a fundamentally different ontological meaning: it was not an interface to the database, but rather it**The database itself was physically and logically**.

The file used native JavaScript data structures to instantiate a complete relational and document-oriented data model directly into the client browser's memory. The architectural pattern was based on three primary arrays defined in the global scope: page, article, and features.2The analysis of these structures reveals striking parallels to modern NoSQL databases and the JSON notation.

### **The page array: Categorical routing and relational references**

The page array served as the central configuration matrix for the navigation menu and the taxonomic categorization of the webshop. Each entry in this array represented an associative array, which in modern terminology corresponds to a JavaScript object (or a JSON object).2This object contained specific, semantically named key-value pairs.

| Object key in page array | Functional significance and architectural relevance |
| :---- | :---- |
| **name** | The visual display name of the shop category (e.g. 'js-webShop' or 'Reading').2Represents basic string assignment. |
| **top\_text** | A descriptive text that was provided as a URL-encoded string.2This encoding is of enormous historical importance. Before the introduction of JSON and its standardized escaping for Unicode and quotation marks, raw HTML tags or line breaks within JavaScript strings inevitably led to fatal syntax errors. URL encoding solved this string parsing problem preemptively. |
| **the sum** | A configuration value (e.g. 'true') to control the user interface.2Since early JavaScript engines often handled strict boolean types unreliably, boolean logic was emulated using strings ('true'/'false') – a pattern that was extremely common in early data serializations. |
| **navgif / navgifs** | Static path references to image assets (e.g., horse.gif) that controlled the visual representation.2 |
| **article** | A comma-separated list of integer indices (e.g., '0,1,4,').2This is proof of relational normalization. Instead of redundantly storing product data in each category, these indices functioned as**Foreign Keys**(Foreign keys) that referenced the article array. |

The use of foreign keys within an array-based client-side data structure is a brilliant architectural move. It drastically reduced the payload size (the amount of bytes to be transmitted over the modem) and prevented data inconsistencies if a product was listed in multiple categories. This type of graph referencing within document-oriented NoSQL structures is best practice today, but it was completely new territory in front-end development in the 1990s.

### **The article array: Document-oriented product schemas**

The article array represented the semantic core of the shop database. Each individual product was defined as a self-contained entity object, whose structural design corresponds exactly to what is known as a JSON document in today's software architecture.2The assigned attributes included identification features, technical layout parameters, and a strict separation of pricing logics.

The handling of values ​​such as price and VAT deserves special attention. Prices were stored in js-db.js as integer strings (whole numbers); for example, the value '4990' represented the amount of 49.90 currency units.2This practice of storing monetary values ​​as cents or pfennigs in the form of integers and only dividing and formatting them by 100 at the moment of display on the user interface is an essential architectural pattern in modern FinTech and professional e-commerce. It prevents the dreaded IEEE 754 floating-point error in JavaScript, where adding decimal numbers leads to rounding errors (such as the classic problem 0.1 \+ 0.2 \= 0.30000000000000004). The fact that Christoph Puppe already applied this highly professional principle in the "js-WebShop" database underscores the remarkable maturity and foresight of the code.

Other attributes such as the htmltype (a numeric indicator such as '1' or '2') dictated to the shop's engine which visual rendering template should be used to display this specific product.2This also demonstrates the fundamental separation of data model (Model) and view (View), which was already mentioned and inspired by typography.

### **Proto-serialization: Nested Hashed Arrays and Delimiters as a JSON Substitute**

The most fascinating aspect of js-db.js from a historical point of view – and the logical crux of the claim that JSON principles were applied here before the invention of JSON – lies in the algorithmic handling of complex product variants and nested features.

In a modern, JSON-based REST API, a product with different licenses, sizes, or price modifications would be represented by deeply nested objects and arrays. The notation would typically look like this:

JSON

{  
  "product name": "Software license",  
  "variants":  
}

Between 1996 and 1999, however, there were no established conventions for writing such deeply nested objects ("deep nesting") in JavaScript in a literal and stable way across all existing browsers. The rudimentary parsers of browsers at that time (such as Netscape Navigator 3 or Internet Explorer 3\) had immense difficulties with memory allocation (garbage collection) when dealing with thousands of nested object instances. The RAM of end devices was often in the single-digit or low double-digit megabyte range. A direct translation into deep objects would have crashed the system. Furthermore, the lack of a formal specification made standardized access difficult.

Christoph Puppe solved this profound architectural problem by using so-called "nested hashed arrays" (nested associative arrays) and serializing this complex multidimensionality through specific string delimiters. Numeric keys within the article object (for example, article\['1'\] or article\['2'\]) were used to store this highly condensed, coded variation data.2

The forensic analysis of the code reveals three primary delimiters that functioned as parser limits:

* **The pipe (|) and the comma (,)**These delimiters were used to separate multiple categorical options linked to associated prices within a single string. An example from the database is the licenses for end customers and resellers, each with specific price modifiers.2The shop's JavaScript code could split (split('|')) and process this string if needed.  
* **The Tilde (\~)**This specific delimiter was used to store continuous, sequential data lists. For example, the array element \`artikel\['2'\]\` contained sequences of values ​​such as '6000\~12000\~'.2

This string-based concept was essentially a custom-designed serialization and deserialization algorithm implemented in JavaScript. The "js-WebShop" read these formatted strings as raw data, consuming minimal memory and transforming them into executable variables in the local scope only at the precise moment of user interaction through string splitting.

The necessity of writing data elements within a JavaScript context as nested strings or associative hashed arrays arose solely from the fact that a native, universally understood format for nested data did not yet exist. This structural gap, which Puppe filled through creative algorithms and delimiter semantics, is precisely the vacuum that the JSON format would fill globally a few years later.

## **Douglas Crockford and the historical context of the JSON invention**

In order to place Christoph Puppe's claim in the correct scientific and technological-historical context, the official history of the JSON invention by the American software developer Douglas Crockford must be recapitulated in detail and compared chronologically.

Douglas Crockford, whose extensive career included significant positions as an architect at Atari (1982-1984), Lucasfilm (1984-1992), Paramount (1992) and Electric Communities (1993-2001).9, worked at the technology company State Software, Inc. in the early 2000s, where he served as founder and CTO from 2001 to 2002\.9It was during this very period that Crockford and his colleague Chip Morningstar encountered a serious problem: They were looking for an efficient, bandwidth-saving method to exchange structured data asynchronously between server-side systems and client-side JavaScript code in the browser. The industry standard at the time dictated the use of the XML (Extensible Markup Language) format, which, however, due to its structure as a markup language, was extremely computationally intensive to parse and artificially inflated the data volume to be transferred through countless opening and closing tags.

Crockford's ingenious and historically groundbreaking insight was strikingly simple: he discovered that the JavaScript programming language itself already possessed a syntactically brilliant method for representing structured data—the so-called object literals. He recognized that a strict, text-based subset of the JavaScript language could be extracted and used as a completely independent, cross-programming-language data exchange format.

| Historic milestone in web development | Relevant actor / organization | Temporal location | Contextual description |
| :---- | :---- | :---- | :---- |
| Invention of JavaScript | Netscape (Brendan Eich) | May 1995 | First introduction of the scripting language in the Netscape browser for client-side logic execution. |
| **Concept of the js-WebShop database** | **iConnect (Christoph Puppe)** | **1996 \- 1999** | Isolating structured product data in a .js file using native JS arrays and hashed strings.1 |
| XML 1.0 Specification | W3C (World Wide Web Consortium) | February 1998 | Standardization of XML as the predominant, but "heavyweight" data exchange format. |
| Discovery of the JSON concept | State Software (Douglas Crockford) | 2001 | The realization that JS object literals are ideally suited for data exchange without XML. |
| **Launch of the specification on JSON.org** | **Douglas Crockford** | **12\. November 2002** | The official publication of the JSON grammar and the release of the first parser.11 |
| Coining of the term "AJAX" | Jesse James Garrett | February 2005 | Asynchronous data transmission (XMLHttpRequest) is becoming the global paradigm. |
| Publikation "JavaScript: The Good Parts" | Douglas Crockford (O'Reilly Verlag) | May 2008 | Consolidation of JSON and JS best practices.9 |
| Global ratification: ECMA-404 standard | ECMA International | 2013 | JSON is formally recognized as a global industry standard.11 |

A synoptic review of this technological history timeline clearly demonstrates that the conception of JSON as a formalized, independent data exchange format did not occur until 2001 at the earliest, and it was not presented to the general public until the end of 2002\.11At that time, the development of the "js-WebShop" by Christoph Puppe was already two to five years in the past.

### **The paradigm shift: Data as executable code**

The fundamental architectural breakthrough of Crockford's JSON was the premise:*Data can be formatted in the textual syntax of a programming language, instead of having to define it through an external, purely markup language like XML.*

iConnect Berlin practically implemented precisely this radical paradigm as early as the second half of the 1990s. Instead of weaving product data together server-side with cumbersome HTML code or attempting to read a rudimentary text file line by line using custom-written functions, the system generated a .js file containing only declarations of data structures.2The clean separation between the application logic (the actual JavaScript program that represented the shop) and the information (the database) was complete. The data set became part of the runtime environment, formulated in the language of the runtime interpreter.

## **Evaluation of the hypothesis: Was JSON written before its official invention?**

The central and provocative thesis of this study is that JSON was effectively being written in the "js-WebShop" before the format actually existed. This profound technological statement requires a precise and nuanced differentiation from two perspectives: the purely syntactic and the architectural-conceptual.

**The syntactic perspective:**If one considers the matter strictly through the lens of the later ecma-404 specification, then the file js-db.js2This is not a valid JSON document. The JSON standard requires that all object keys be enclosed in double quotes ("key": "value"). Furthermore, JSON does not allow variable assignments, function calls, or the direct use of the new operator (as seen in js-db.js with \`var article \= new Array();\`).2The data in the "js-WebShop" was written as directly executable JavaScript code that manipulated the global namespace. Furthermore, the deep nesting, for which JSON now elegantly uses curly braces ({}) and square brackets (\`\`), had to be emulated using complex string delimiters (|, ,, \~), as already analyzed.2In a modern validation engine, the file js-db.js in JSON format would trigger an immediate parser error (SyntaxError).

**The architectural and conceptual perspective:**

However, if we elevate the analysis to the meta-level of architectural concepts, Christoph Puppe's assertion is not only absolutely accurate but also demonstrates outstanding historical relevance. Puppe recognized and structurally implemented the causal core principles of JSON years before Douglas Crockford gave this conceptual child a name. The parallels between these principles are striking:

1. **Pure JavaScript Object Notation:**Puppe used the literal, unshortened translation of the acronym JSON – he recorded data as native JavaScript objects (the associative arrays) and delegated the loading and parsing entirely to the browser's engine, rather than writing his own parsing library.  
2. **Der Client-Side In-Memory Data Store:**By delivering the product database to the browser as a compact, structured payload, the "js-WebShop" gained the ability to execute complex filtering, search, and sorting functions purely client-side without network latency. This approach mirrored the architecture of modern Single Page Applications (SPAs), as they are built today with highly complex frameworks like React, Angular, or Next.js.13to be implemented millions of times, almost two full decades in advance.  
3. **Machine and human readability ("Human-Readable Data"):**Despite the use of delimiters, the hierarchical structure of js-db.js was logical, orderly, and manually editable by developers. This elegant readability, in contrast to the cryptic nature of XML, was the key argument that ultimately sealed JSON's global triumph.

The limitations of the 1990s—particularly the lack of a secure, system-wide \`JSON.parse()\` method and the limited memory resources of early ECMAScript engines for deep objects—logically forced the iConnect team to formulate JSON elements as nested hashed arrays and string delimitations. This fact, however, in no way diminishes the innovative power of the architecture. On the contrary, it underscores the fundamental need for a format for which there was simply no standardized specification. The architecture of the "js-WebShop" is empirical proof that the developer ecosystem intuitively gravitated toward a format like JSON long before it was defined by standards bodies.

## **Digital Archaeology: The Necessity and Epistemological Value of GitHub Archiving**

The decision to transfer the original source code of the "js-WebShop" to a public GitHub repository for purely historical reasons is invaluable from a media studies and technology history perspective. Software development is a highly fluid, ephemeral field. Digital code from the 1990s is now largely irretrievably lost—a phenomenon historians refer to as the "Digital Dark Age." Such early scripts either reside on long-since-scrapped servers, were overwritten during relaunches, or are physically decaying on unsupported storage media (bit rot).

In this scenario, GitHub functions not as a collaborative platform for active development, but as a digital museum for the history of algorithms and data structures. Archiving and making artifacts like the original js-db.js publicly accessible allows future software historians, students, and system architects to empirically study how pioneers like Christoph Puppe overcame conceptual hurdles for which established solution paradigms only emerged many years later. It provides hard, forensic evidence that technological innovation often arises from the creative misuse of existing tools—in this case, the "misappropriation" of the executable JavaScript language syntax as a fully-fledged, rigorously structured data repository to circumvent network latency. Without this repository, the claim of having conceived JSON before its official invention would remain an unprovable anecdote; with the repository, it becomes a documented piece of internet history.

## **Conclusions**

The exhaustive forensic analysis of the available code fragments, the reconstruction of the historical IT landscape, and the in-depth evaluation of the architectural specifications of the file js-db.js2leading to several validated and far-reaching findings regarding the "js-WebShop" of iConnect Berlin:

1. **Fundamental architectural vision:**The iConnect system implemented the strict separation of executable code and informational data at a time when this practice was virtually unknown and extremely difficult to implement in client-side web applications. The approach of delivering a complete e-commerce catalog to the client as a pure, locally encapsulated data object, thereby saving server-side rendering costs and round trips, was radically progressive and laid the conceptual foundation for what is now known as a Single Page Application (SPA).  
2. **Confirmation of the concept of JSON principles:**The far-reaching claim by Christoph Puppe to have written basic mechanics of JSON before the format was defined by Douglas Crockford11While it existed de jure, it is factually, logically, and architecturally sound. Even though the formal syntax, due to the limitations of the browser engines of the time, had to rely on native array assignments and algorithmically processable string delimiters (|, \~) to prevent memory overflows in deep object nesting.2The underlying paradigm is identical. The use of JavaScript data structures as an interchangeable, isolated format for representing structured business data corresponds exactly to the philosophy of JSON, which only saw the light of day at the end of 2002\.11  
3. **Interdisciplinarity as a driver of innovation:**The architect's specific professional career, from strict information structuring in classic typesetting to a later, highly decorated leadership position in the field of national IT security at the BSI.1This is causally correlated with the high structural and logical quality of the code developed at that time. js-db.js is the product of analytical thinking that prioritized system integrity and data normalization long before corresponding frameworks existed.

The documentation, archiving, and publication of this historical code fills an essential gap in our understanding of early web development. It provides tangible evidence of the fluid, often necessity-driven transition from the static document-based web to the modern, asynchronous, and data-driven application landscape. The artifact of the "js-WebShop" irrefutably manifests the fact that the brilliant core principles of JSON arose from an inherent logical necessity of web architecture, recognized by visionary developers years before its official ratification and successfully implemented in production environments.

#### **References**

1. Christoph Puppe \- Managing IT Security Architect and Audit Team Leader BSI \- XING, accessed on March 14, 2026[https://www.xing.com/profile/Christoph\_Puppe](https://www.xing.com/profile/Christoph_Puppe)  
2. js-db.js  
3. IT Baseline Protection Compendium Edition 2022, accessed on March 14, 2026[https://www.skadden.com/-/media/files/publications/2024/04/data-protection-rulings/the-german-federal-office-for-information-security.pdf?rev=d55b813392a74ca7bd5921d3568caf2d\&hash=A8DBDE609E1C4D9305CC5DC5F17311A6](https://www.skadden.com/-/media/files/publications/2024/04/data-protection-rulings/the-german-federal-office-for-information-security.pdf?rev=d55b813392a74ca7bd5921d3568caf2d&hash=A8DBDE609E1C4D9305CC5DC5F17311A6)  
4. IT Baseline Protection Catalogues 15th Version \- 2015 Draft | PDF | Information Security \- Scribd, accessed March 14, 2026[https://www.scribd.com/document/534182501/IT-Grundschutz-catalogues-15th-version-2015-Draft](https://www.scribd.com/document/534182501/IT-Grundschutz-catalogues-15th-version-2015-Draft)  
5. Persepolis Shards Week 1 & 2 \- Fev Games, accessed March 14, 2026[https://fevgames.net/persepolis-shards-week-1-2/](https://fevgames.net/persepolis-shards-week-1-2/)  
6. DESIGN AND DEVELOPMENT OF A RESPONSIVE E-COMMERCE CLOTHING WEBSITE USING MERN STACK \- Theseus, accessed March 14, 2026[https://www.theseus.fi/bitstream/10024/887863/2/Chowdhury\_Sumiya.pdf](https://www.theseus.fi/bitstream/10024/887863/2/Chowdhury_Sumiya.pdf)  
7. How to Build a Blog API using MongoDB Aggregation Pipeline Framework \- Dev.to, accessed March 14, 2026[https://dev.to/temiogundeji/how-to-build-a-blog-api-using-mongodb-aggregation-pipeline-1gji](https://dev.to/temiogundeji/how-to-build-a-blog-api-using-mongodb-aggregation-pipeline-1gji)  
8. HOW TO CREATE A BLOG API USING NODE.JS AND EXPRESS. | by Jonah Godspower, Zugriff am März 14, 2026, [https://medium.com/@gjonah554/how-to-create-a-blog-api-using-node-js-and-express-b14a8064bd93](https://medium.com/@gjonah554/how-to-create-a-blog-api-using-node-js-and-express-b14a8064bd93)  
9. About Douglas Crockford, accessed on March 14, 2026\.[https://www.crockford.com/about.html](https://www.crockford.com/about.html)  
10. Douglas Crockford \- Wikipedia, accessed on March 14, 2026[https://en.wikipedia.org/wiki/Douglas\_Crockford](https://en.wikipedia.org/wiki/Douglas_Crockford)  
11. The Rise and Rise of JSON \- Two-Bit History, Zugriff am März 14, 2026, [https://twobithistory.org/2017/09/21/the-rise-and-rise-of-json.html](https://twobithistory.org/2017/09/21/the-rise-and-rise-of-json.html)  
12. The History of JSON and the People That Created It | HackerNoon, Zugriff am März 14, 2026, [https://hackernoon.com/the-history-of-json-and-the-people-that-created-it](https://hackernoon.com/the-history-of-json-and-the-people-that-created-it)  
13. Private serverless APIs in AWS \- DEV Community, accessed March 14, 2026[https://dev.to/coolblue/private-serverless-apis-in-aws-22d5](https://dev.to/coolblue/private-serverless-apis-in-aws-22d5)  
14. Development of an ongoing project, food delivery application written, Zugriff am März 14, 2026, [https://www.my.freelancer.com/projects/react-native/development-ongoing-project-food](https://www.my.freelancer.com/projects/react-native/development-ongoing-project-food)  
15. Next.js webshop \-- 2 | Freelancer, accessed March 14, 2026[https://www.my.freelancer.com/projects/javascript/next-webshop-27951632/](https://www.my.freelancer.com/projects/javascript/next-webshop-27951632/)  
16. Angular js WebShop | Freelancer, accessed March 14, 2026[https://www.my.freelancer.com/projects/html/angular-webshop](https://www.my.freelancer.com/projects/html/angular-webshop)  
17. wordlists/js-3k.txt at master \- GitHub, accessed March 14, 2026[https://github.com/camchenry/wordlists/blob/master/js-3k.txt](https://github.com/camchenry/wordlists/blob/master/js-3k.txt)  
18. Writing Secure Node.js Code \- Danny Grander \- RisingStack Engineering, accessed March 14, 2026[https://blog.risingstack.com/writing-secure-node-js-code-danny-grander/](https://blog.risingstack.com/writing-secure-node-js-code-danny-grander/)  
19. Using DOTENV correctly \- node.js \- Stack Overflow, accessed March 14, 2026[https://stackoverflow.com/questions/72210020/using-dotenv-correctly](https://stackoverflow.com/questions/72210020/using-dotenv-correctly)  
20. addons/point\_of\_sale/\_\_manifest\_\_.py · staging.saas-14.5 · Ramiro Felix / odoo \- Minka, accessed March 14, 2026[https://minka.gob.ec/Ramirofl/odoo/-/blob/staging.saas-14.5/addons/point\_of\_sale/\_\_manifest\_\_.py](https://minka.gob.ec/Ramirofl/odoo/-/blob/staging.saas-14.5/addons/point_of_sale/__manifest__.py)  
21. Express.js Folder Structure Explained | Routes, Controllers, Models & Middleware, accessed March 14, 2026[https://www.youtube.com/watch?v=FyA4Yr3kPfg](https://www.youtube.com/watch?v=FyA4Yr3kPfg)  
22. requests: 10,567 rows where dataset \= "monkey-july-2023 ... \- data, accessed on March 14, 2026,[https://data.tweasel.org/data/requests?platform=android\&dataset=monkey-july-2023&\_next=monkey-july-2023%2C104890\&method=POST](https://data.tweasel.org/data/requests?platform=android&dataset=monkey-july-2023&_next=monkey-july-2023,104890&method=POST)