**MySQL installation**
```
sudo apt install mysql-server
```

**Check if MySQL is installed**
```
mysql --version
```

**Check if MySQL is running**
```
service mysql status
```

**Start MySQL service**
```
service mysql start
```

**Stop MySQL service**
```
service mysql stop
```

**service mysql start**
```
service mysql restart
```

**Configure user and permissions**
```
sudo mysql_secure_installation
```

**Strong password verification plugin** -> "n" <br>
Note: Recommended "y" to configure a password with more than 12 characters containing numbers, uppercase and lowercase letters and special characters for root and another user for the other operations preferably with the same recommendations for the root password configuration. <br>

**If you do not allow changing the password, use the command** <br>
MySQL terminal to insert SQL statement
```
sudo mysql -u root -p
```

**Set a "root" password for the root user**
```
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password by 'root';
```

**Configure user and permissions**
```
sudo mysql_secure_installation
```
Yes para tudo

**Create a database**
```
CREATE DATABASE APP_DATABASE;
```

**View all databases in MySQL**
```
SHOW DATABASES;
```

**Type "exit" to exit MySQL** <br>

**In the program installer search and install "mysql-workbench-community"** <br>
https://dev.mysql.com/downloads/workbench/

----------------------------------------------------------------------------------------

**Create file package.json**
```
npm init 
```
**Visit expressjs** <br>
https://expressjs.com/pt-br/

**Install express dependencies**
```
npm install express --save
```

**Create file index.js**
```
touch index.js
```

**Copy code Hello World** <br>
https://expressjs.com/pt-br/starter/hello-world.html

**Load Refresh**
```
yarn add -D nodemon
```

**Database integraion** <br>
https://expressjs.com/pt-br/guide/database-integration.html#mysql <br>
Note:Instead of installing the mysql package, install mysql2. It has the most up-to-date and complete tools.

**MySQL 2 package**
```
yarn add mysql2
```
**Route parameters with Express** <br>
https://expressjs.com/en/guide/routing.html

**How to prevent SQL injection attacks in Node.js** <br>
https://planetscale.com/blog/how-to-prevent-sql-injection-attacks-in-node-js

4- 9:50