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
    * webapp should create tables in your db
    * a user and give it a ROLE_ADMIN
```
#!sql
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

### Contribution guidelines ###

* Coming soon
### Who do I talk to? ###

* Repo owner or admin
* Other community or team contact