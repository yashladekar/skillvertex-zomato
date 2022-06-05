## PREPARING THE DATABASE

setting up MySQL Database and User
---
 - inside terminal
		 `mysql -u root  -p `	
		then enter your pass word for the root user
---
- do the following as root 

  ```sql
    create database zomatodb;
    create user zomatouser identified with mysql_native_password by "zomatopass";
    grant all privileges on zomatodb.* to zomatouser;
    flush privileges;```

**note: sql fetch data is in json format and does not have frontend** 

** contributors **
- frontend:Sudheer Bhati
- backend: Yash Ladekar