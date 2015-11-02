# README #

Java Web Starter Project with Simple AngularJS App

### What is this repository for? ###

* This is a helper project to get you started with an Java Web App 
* 0.1

### How do I get set up? ###

* Download TomEE, MySQL
* Configuration: 
    * add the `DataSource` in  `{tome_home}/conf/tomee.xml`
```
#!xml
    <tomee>
        ...
        <Resource id="jdbc/nope" type="DataSource">
              JdbcDriver  com.mysql.jdbc.Driver
              jdbcUrl  jdbc:mysql://localhost:3306/nope;
              jtaManaged = true
              password =  your_db_password
              userName = your_db_username
        </Resource>
        ...
    </tomee>
```
* drop the mysql jdbc driver in `{tome_home}/bin`
* Dependencies: all dependencies are specified in the `pom.xml`
* Database configuration: Create a database called nope
* Deployment instructions: run `mvn clean install` and drop the war in `{tome_home}/webapps`
    * start TomEE
    * OpenJPA might get cranky because it wants entities to be enhanced, this is
    trivial, just add the following lines of code at the end of the `catalina.properties` file.
    ```
    ...
    openejb.jpa.deploy-time-enhancement=true
    openejb.jar.enhancement.include=com/calderon/javawebstarter/model/*.class
    openejb.jar.enhancement.exclude=com/calderon/javawebstarter/model/listener/*.class
    ...
    ```
    * webapp should create tables in your db
    * a user and give it a ROLE_ADMIN
```
#!sql
    CREATE TABLE nope.user_role
    ( username VARCHAR(100) NOT NULL, role_name VARCHAR(50) NOT NULL);
    SELECT * FROM nope.users;INSERT INTO nope.users
    (username,
    password,
    firstName,
    lastName)
    VALUES
    ('yourusername@email.com',
    'hash256password',
    'First Name',
    'Last Name');
    INSERT INTO nope.user_role
    (username,
    user_role)
    VALUES
    ('yourusername@email.com',
    'ROLE_ADMIN');
```
### Tests ###
* Coming soon -
### Contribution guidelines ###

* Coming soon
### Who do I talk to? ###

* Repo owner or admin (please don't hesitate')
* Other community or team contact