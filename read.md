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


## file directory 
 <pre>
.
└── DATABASE/
    ├── config/
    │   └── dbConfig.js
    ├── models/
    │   ├── customer.js
    │   └── oders.js
    ├── node_modules(node - files)
    ├── public/
    │   ├── 1.jpg
    │   ├── 2.jpg
    │   ├── 3.jpg
    │   ├── 4.jpg
    │   ├── 7.jpg
    │   ├── 8.jpg
    │   ├── 9.jpg
    │   ├── 10.jpg
    │   ├── 11.jpg
    │   ├── a.jpg
    │   ├── a1.jpg
    │   ├── about-us.html
    │   ├── b.jpg
    │   ├── c.jpg
    │   ├── d.jpg
    │   ├── d1.jpg
    │   ├── d2.jpg
    │   ├── d3.jpg
    │   ├── d4.jpg
    │   ├── e.jpg
    │   ├── f.jpg
    │   ├── f1.jpg
    │   ├── f2.jpg
    │   ├── f3.jpg
    │   ├── footerstyle.css
    │   ├── index.html
    │   ├── login.html
    │   ├── preloader.gif
    │   ├── preLoaderstyle.css
    │   ├── s1.jpg
    │   ├── s2.jpg
    │   ├── s3.jpg
    │   ├── s4.jpg
    │   ├── s5.jpg
    │   ├── s6.jpg
    │   ├── script.js
    │   ├── sction-1.css
    │   ├── section.css
    │   └── style.css
    ├── db.js
    ├── index.js
    ├── package-lock.json(npm package)
    ├── package.json
    ├── read.md
    └── server.js
</pre>
** contributors **
- Yash Ladekar
