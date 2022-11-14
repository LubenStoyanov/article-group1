import React from "react";

export default function MongoArticle() {
    return (
    <>
    <div className="background">
        <div className="text-container 2xl:mx-32 xl:mx-32 lg:mx-16 md:mx-8 sm:mx-4 xs:mx-4 py-8">
            <h1 className="text-4xl font-bold text-center">Working with MongoDB</h1>
                <p className="italic text-center md:mx-8 sm:mx-4 xs:mx-4 my-8">An article on working with the CRUD operations and other utilities of the NoSQL database, the ‘MongoDB’.</p>
                <div className="flex justify-center">
                    <img className="flex" src="./src/assets/mongoPic.bmp" alt="mongo banner" />
                </div>        
            <h3 className="text-2xl font-bold text-center my-8">MongoDB — A NoSQL database</h3>
                <p className="text-left my-8 2xl:mx-44 xl:mx-44 lg:mx-32 md:mx-16 sm:mx-8 xs:mx-4">Before getting to know about MongoDB, we have to know what a NoSQL database is and how it is different from the other popular database type SQL.
                NoSQL databases are called ‘non-relational’ databases whereas SQL databases are called relational databases because a table in the SQL database can be related to another table but in the case of a NoSQL database it doesn’t need to be so because it has its own to achieve what SQL does.
                A database contains multiple tables and a particular table contains columns or fields and every row is a single data. In a SQL table, every data has the same schema, means once a table has been initialized then the data being inserted has to have all the fields depicted in the table, even if values for some fields are not present then those fields are filled in with the ‘NULL’ data. That is the fields are static. But in the case of a NoSQL, a data being inserted doesn’t need to have all the fields, that is the fields are dynamic. This is one of the most important factors that differentiate a NoSQL from a SQL database.
                MongoDB is a widely used popular NoSQL database all over the world. Some of the other NoSQL databases are Redis, Cassandra, Apache CouchDB and the list go on.</p>
            <h3 className="text-2xl font-bold text-center my-8">What this article is about</h3>
                <ol className="font-bold list-decimal list-inside text-left my-8 2xl:mx-44 xl:mx-44 lg:mx-32 md:mx-16 sm:mx-8 xs:mx-4">This article discusses the following:
                    <li className="mt-4">Setting the environment up for the database operations.</li>
                    <li>Creating the database.</li>
                    <li>The CRUD — CREATE READ UPDATE DELETE — operations of the MongoDB database.</li>
                    <li>Embedding & Indexing in MongoDB.</li>
                    <li>Import & Export of data.</li>
                </ol>
                <p className="text-left my-8 2xl:mx-44 xl:mx-44 lg:mx-32 md:mx-16 sm:mx-8 xs:mx-4">Having a basic understanding of database would help to understand this article. So without further due, let’s get started off.</p>
            <h3 className="text-2xl font-bold text-center my-8">Setting the environment up</h3>
                <p className="text-left my-8 2xl:mx-44 xl:mx-44 lg:mx-32 md:mx-16 sm:mx-8 xs:mx-4">MongoDB is available as Enterprise and Community Server, where the former is paid and used for enterprises and the latter is free and downloadable. So for the purpose of the tutorial, we will download and configure the Community Server edition. Please follow the previous link to download the same.
                In this tutorial, the environment is a Windows 64-bit platform and after installing MongoDB. Then the add the MongoDB binary to the user environment variable. Then open the command prompt and type mongo in it and it shows the following result, meaning MongoDB has been successfully installed.</p>
                <div className="flex justify-center">
                    <img className="flex" src="./src/assets/mongoInstall.bmp" alt="mongo install" />
                </div>
                <p className="text-left my-8 2xl:mx-44 xl:mx-44 lg:mx-32 md:mx-16 sm:mx-8 xs:mx-4">In the next section, we will get to know how a database is created in the MongoDB.</p>
            <h3 className="text-2xl font-bold text-center my-8">Creating the Database</h3>
                <p className="textleft my-8 2xl:mx-44 xl:mx-44 lg:mx-32 md:mx-16 sm:mx-8 xs:mx-4">Open the command prompt, run the command mongo to work with MongoDB. After that let’s check what all databases are available by default by typing the show dbs command and it outputs the following databases as in the image. The show dbs command is used to see all the available databases.</p>
                <div className="flex justify-center">
                    <img className="flex" src="./src/assets/mongoDatabase.bmp" alt="mongo database" />
                </div>
                <p className="text-left my-8 2xl:mx-44 xl:mx-44 lg:mx-32 md:mx-16 sm:mx-8 xs:mx-4">So, by default three databases are available they are ‘admin’, ‘config’ and ‘local’.
                We can create a new database by using the use command followed by the name we want it to have. For eg, use database1 creates a new database named ‘database1' only if it has not existed before. What if the database1 is already in there. Then it simply makes it the current working database. So what use does is it switches to the database being called on, if it doesn’t exist then it creates a new database and make it the current working database.
                As I mentioned earlier a database can contain one or more tables. In the case of MongoDB, a table is called a collection and the row data is called a document.
                A document is a set of key-value pairs. Documents have a dynamic schema. Dynamic schema means that documents in the same collection do not need to have the same set of fields or structure, and common fields in a collection’s documents may hold different types of data.
                To know the available collection we can use the show collections command and create a new collection we have to use the db.createCollection() function which takes in two parameters — name & options.
                The name parameter is a string object which specifies the name of the collection being created. The option parameter contains multiple fields and it is a document type where the fields are specified in JSON format. Some of the fields are autoIndexId which is a boolean type if it is set to true then it enables automatic creation of an index in the _id field. Another field is the max field which determines the maximum number of documents can be inserted into the collection. The option parameter is optional.
                So, to create a collection named firstCollection we have to type in db.createCollection("firstCollection").</p>
                <div className="flex justify-center">
                    <img className="flex" src="./src/assets/mongoDatabase2.bmp" alt="mongo database" />
                </div>
                <p className="text-left my-8 2xl:mx-44 xl:mx-44 lg:mx-32 md:mx-16 sm:mx-8 xs:mx-4">The above image shows that our first collection has been created in the database1.
                To drop a database we have to be using that database and just type indb.dropDatabase() . To delete a collection just use the following command — db.{`<colection_name>`}.drop() function where the collection_name represents the collection to be dropped off.</p>
            <h3 className="text-2xl font-bold text-center my-8">CRUD Operations</h3>
                <p className="text-left my-8 2xl:mx-44 xl:mx-44 lg:mx-32 md:mx-16 sm:mx-8 xs:mx-4">CRUD stands for CREATE, READ, UPDATE & DELETE. For every database, we have data to be inserted, read, updated or deleted from a table or collection in the case of MongoDB. CREATE means inserting a document into the collection, READ means retrieve the document from the collection, UPDATE means modifying the existing document in the collection and DELETE means deleting a document from the collection. We will take a look at these operations now.
                We will start off by inserting a document to our collection firstCollection.</p>
            <h3 className="text-2xl font-bold text-center my-8">CREATE</h3>
                <p className="text-left my-8 2xl:mx-44 xl:mx-44 lg:mx-32 md:mx-16 sm:mx-8 xs:mx-4">The document to be inserted should be in the JSON format. The way to insert a document is db.firstCollection.insert{`({"id": 1, "title": "Taming Jaguar", "pageCount": 362, "author": "Michael J. Barlotta"})`}.</p>
                <div className="flex justify-center">
                    <img className="flex" src="./src/assets/mongoCreate.bmp" alt="mongo create" />
                </div>
                <p className="text-left my-8 2xl:mx-44 xl:mx-44 lg:mx-32 md:mx-16 sm:mx-8 xs:mx-4">We can see the document has been successfully written into the database by seeing the output WriteResult{`({"nInserted" : 1 })`} .
                The document consists of four fields id — identity column of a database which is unique for every document, title — the title of the book, pageCount — the number of pages in the book and author — the author of the book.
                If we want to insert multiple documents we wrap the documents in square brackets ([]), each document separated by ‘,’ and use insertMany() function instead of insert(). Later at the end of the article, we will see how we can import data from a JSON file. Now I will add two more documents simultaneously as follows.
                db.firstCollection.insert{`([{"id": 2, "title": "Technology Paradise Lost", "pageCount": 260, "author": "Erik Keller"}, {"id": 3, "title": "Hello! Python", "pageCount": 350, "author": "Anthony Briggs"}])`}</p>
            <h3 className="text-2xl font-bold text-center my-8">READ</h3>
                <p className="text-left my-8 2xl:mx-44 xl:mx-44 lg:mx-32 md:mx-16 sm:mx-8 xs:mx-4">When we need to read a document off MongoDB we can use the find() function as follows.
                db.firstCollection.find() It returns all the documents inside a collection. To print the result in a pretty manner we can use the pretty() function chaining the above function as follows — db.firstCollection.find().pretty()</p>
                <div className="flex justify-center">    
                    <img className="flex" src="./src/assets/mongoRead.bmp" alt="mongo read" />
                </div>
                <p className="text-left my-8 2xl:mx-44 xl:mx-44 lg:mx-32 md:mx-16 sm:mx-8 xs:mx-4">If we want to find one or more particular document we can filter it out by writing one or more field like this.
                db.firstCollection.find{`({"author": "Erik Keller"})`}</p>
                <div className="flex justify-center">
                    <img className="flex" src="./src/assets/mongoRead2.bmp" alt="mongo read" />
                </div>
                <p className="text-left my-8 2xl:mx-44 xl:mx-44 lg:mx-32 md:mx-16 sm:mx-8 xs:mx-4">As we can see it returned only one document that matches our query “author”: “Erik Keller”.</p>
            <h3 className="text-2xl font-bold text-center my-8">UPDATE</h3>
                <p className="text-left my-8 2xl:mx-44 xl:mx-44 lg:mx-32 md:mx-16 sm:mx-8 xs:mx-4">Sometimes we will need to update some fields on the existing documents on the collections. We use the update() and updateMany() functions to update one single document and many documents respectively.
                When we want to update the first document that matches our query we use the update() function.
                db.firstCollection.update()
                The update() method takes in three parameters — query, update & options where options parameter is optional. We find the document to be updated using the query parameter and update it using the update parameter.
                Here is an example of updating the author of the book ‘Taming Jaguar’.
                db.firstCollection.update{`({"author": "Michael J. Barlotta"}, {$set: {"author": "Michael Barlotta"}})`}
                $set is a field update method to set the values of fields. Other such field update methods are $inc, $mul etc.</p>
                <div className="flex justify-center">
                    <img className="flex" src="./src/assets/mongoUpdate.bmp" alt="mongo update" />
                </div>
                <p className="text-left my-8 2xl:mx-44 xl:mx-44 lg:mx-32 md:mx-16 sm:mx-8 xs:mx-4">We can see the name of the author of the first document has successfully been changed from ‘Michael J. Barlotta’ to ‘Michael Barlotta’.
                In the case of updateMany() wherever the query finds a match on the documents it updates the fields.</p>
            <h3 className="text-2xl font-bold text-center my-8">DELETE</h3>
                <p className="text-left my-8 2xl:mx-44 xl:mx-44 lg:mx-32 md:mx-16 sm:mx-8 xs:mx-4">Sometimes we will have to delete the documents. We use remove() method to remove the documents from the database.
                db.firstCollection.remove() deletes all the documents from a database. To delete selected documents we can use query inside the remove method as parameters as follows.
                db.firstCollection.remove("pageCount": 350). In this, we used the field pageCount as the query field to select the documents to be deleted. So, all the documents which have the value 350 for the field pageCount will get deleted.</p>
                <div className="flex justify-center">
                    <img className="flex" src="./src/assets/mongoDelete.bmp" alt="mongo delete" />
                </div>
                <p className="text-left my-8 2xl:mx-44 xl:mx-44 lg:mx-32 md:mx-16 sm:mx-8 xs:mx-4">The remove() method with the query first matches all the documents then deletes all the matched documents.</p>
            <h3 className="text-2xl font-bold text-center my-8">Embedding & Referencing in MongoDB</h3>
                <p className="text-left my-8 2xl:mx-44 xl:mx-44 lg:mx-32 md:mx-16 sm:mx-8 xs:mx-4">MongoDB is a non-relational database which means as in the case of a SQL database one table can be related to another table by the foreign key. It is a good way of having a relationship like this but when data are distributed over multiple tables then it would be tiresome to perform analysis over the tables.
                In MongoDB, to overcome the data relationship over multiple collections it has two ways for relating different kinds of data — Embedding & Referencing.</p>
            <h3 className="text-2xl font-bold text-center my-8">Embedding</h3>
                <p className="text-left my-8 2xl:mx-44 xl:mx-44 lg:mx-32 md:mx-16 sm:mx-8 xs:mx-4">Embedding is the procedure to embed a document within a document. For eg. let’s take the case of an actor. The actor has acted in multiple movies. So to include the fields for the data of movies acted by the actor in the collection we can actually embed the documents of the movies acted by the actor in the actor’s collection. See an example below:</p>
                <div className="flex justify-center">
                    <img className="flex" src="./src/assets/embedding.bmp" alt="embedding code" />
                </div>
                <p className="text-left my-8 2xl:mx-44 xl:mx-44 lg:mx-32 md:mx-16 sm:mx-8 xs:mx-4">In the above documents, we have embedded the movie documents into actor’s documents so within one query we can have the data we needed. So, the main advantage is that we don’t have to repeat the documents for each movie of the actors.</p>
            <h3 className="text-2xl font-bold text-center my-8">Referencing</h3>
                <p className="text-left my-8 2xl:mx-44 xl:mx-44 lg:mx-32 md:mx-16 sm:mx-8 xs:mx-4">Another way of implementing a relationship is referencing. Instead of storing the actual documents we can a have a reference of the other document stored in the fields. For example, in the above case instead of storing the movie documents in the actor’s documents, we only keep references to the movies so that later if we need to make any updates to the movies then changes will be reflected entirely as it is not the case in the case of embedding because we need to update in each actor’s movies’ fields, because multiple actors are there in a movie.</p>
                <div className="flex justify-center">
                    <img className="flex" src="./src/assets/referencing.bmp" alt="referencing code" />
                </div>
                <p className="text-left my-8 2xl:mx-44 xl:mx-44 lg:mx-32 md:mx-16 sm:mx-8 xs:mx-4">Here we keep the references to the movies in the documents for the actors so whenever we need to get the data of a movie played by an actor we just have to refer to the object ‘_ids’ of movies stored in the actors’ fields because the movie data itself are documents stored in the collection.</p>
            <h3 className="text-2xl font-bold text-center my-8">Import & Export of Data</h3>
                <p className="text-left my-8 2xl:mx-44 xl:mx-44 lg:mx-32 md:mx-16 sm:mx-8 xs:mx-4">When we have data stored in some file formats we can import it into our database as collections and also export collections from a database to files. MongoDB supports JSON, CSV and TSV files for importing and JSON and CSV for exporting. Here I will demonstrate importing and exporting in and to JSON format.</p>
            <h4 className="text-2xl font-bold text-center my-8">Import</h4>
                <p className="text-left my-8 2xl:mx-44 xl:mx-44 lg:mx-32 md:mx-16 sm:mx-8 xs:mx-4">The following command has to be executed out of a ‘mongo’ session. So, open a new command prompt and enter in as follows.
                mongoimport --db {`<database_name>`} --collection {`<collection_name>`} --file {`<file path>`}
                ‘mongoimport’ is a utility that comes bundled with MongoDB for importing data from external files.
                The ‘— db’ flag specifies the database to which the data to be imported, it can either be an existing database or a new database will be created ‘— collection’ flag defines the name of the collection in which it is imported and ‘— file’ flag is the path for the file.
                Let’s see it in action. We have data on some restaurants in a file named ‘restaurants.json’.</p>
                <div className="flex justify-center">
                    <img className="flex" src="./src/assets/import.bmp" alt="import" />
                </div>
                <p className="text-left my-8 2xl:mx-44 xl:mx-44 lg:mx-32 md:mx-16 sm:mx-8 xs:mx-4">Here 2548 collections residing in the JSON file has been imported to restaurants collection of database2.</p>
            <h4 className="text-2xl font-bold text-center my-8">Export</h4>
                <p className="text-left my-8 2xl:mx-44 xl:mx-44 lg:mx-32 md:mx-16 sm:mx-8 xs:mx-4">We have ‘mongoexport’ to export collection from a database to a JSON or CSV file.
                The format to export is as follows.
                mongoexport --db {`<database_name>`} --collection {`<collection_name>`} --out {`<output_file_path>`}
                Here ‘ — out’ flag is to specify the path name for the file.</p>
                <div className="flex justify-center">
                    <img className="flex" src="./src/assets/export.bmp" alt="export" />
                </div>
                <p className="text-left 2xl:mx-44 xl:mx-44 lg:mx-32 md:mx-16 sm:mx-8 xs:mx-4">Voila! we have successfully exported our firstCollection collection from database1 to a file name firstCollection.json in the Desktop.
                So far we have had a brief introduction to MongoDB and its working. If you want to know more about MongoDB and its aggregation pipeline check this article out.
                Please drop your comments and share your thoughts.</p>
        </div>
    </div>
    </>
    )
}