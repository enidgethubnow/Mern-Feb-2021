Last login: Fri Mar 12 01:30:08 on ttys000
Enid-MBP:~ Joke$ mongo
MongoDB shell version v4.2.0
connecting to: mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb
Implicit session: session { "id" : UUID("58f4586b-cdfc-4bbe-aa44-bd000b997b0a") }
MongoDB server version: 4.2.9
Server has startup warnings: 
2021-03-11T21:07:18.034-0800 I  CONTROL  [initandlisten] 
2021-03-11T21:07:18.034-0800 I  CONTROL  [initandlisten] ** WARNING: Access control is not enabled for the database.
2021-03-11T21:07:18.034-0800 I  CONTROL  [initandlisten] **          Read and write access to data and configuration is unrestricted.
2021-03-11T21:07:18.034-0800 I  CONTROL  [initandlisten] 
2021-03-11T21:07:18.034-0800 I  CONTROL  [initandlisten] 
2021-03-11T21:07:18.034-0800 I  CONTROL  [initandlisten] ** WARNING: soft rlimits too low. Number of files is 256, should be at least 1000
---
Enable MongoDB's free cloud-based monitoring service, which will then receive and display
metrics about your deployment (disk utilization, CPU, operation statistics, etc).

The monitoring data will be available on a MongoDB website with a unique URL accessible to you
and anyone you share the URL with. MongoDB may use this information to make product
improvements and to suggest MongoDB products and deployment options to you.

To enable free monitoring, run the following command: db.enableFreeMonitoring()
To permanently disable this reminder, run the following command: db.disableFreeMonitoring()
---

> use my_first_db
switched to db my_first_db
> db.students.find()
{ "_id" : ObjectId("604b2505648b3e1ae31088e6"), "Luck_Numbere" : 37 }
{ "_id" : ObjectId("604b3105ba7714caf075934c"), "name" : "Porcha", "Home_State" : "California" }
{ "_id" : ObjectId("604b32f9ba7714caf075934d"), "name" : "Porcha", "Home_State" : "California", "Lucky_Number" : 8, "Birthday" : "January 29 1986" }
{ "_id" : ObjectId("604b382ed35b75937fda0c44"), "name" : "Octavia", "Home_State" : "California", "Lucky_Number" : 37, "Birthday" : "March 24 1984" }
{ "_id" : ObjectId("604b38b6d35b75937fda0c45"), "name" : "Verlin", "Home_State" : "Seattle", "Lucky_Number" : 2, "Birthday" : "July 16 1998" }
{ "_id" : ObjectId("604b38f5d35b75937fda0c46"), "name" : "Lazeria", "Home_State" : "Seattle", "Lucky_Number" : 7, "Birthday" : "November 6 2002" }
{ "_id" : ObjectId("604b399ad35b75937fda0c47"), "name" : "Aariona", "Home_State" : "FL", "Lucky_Number" : 8, "Birthday" : "October 23 2000" }
> db.students.find({Home_State:"California"})
{ "_id" : ObjectId("604b3105ba7714caf075934c"), "name" : "Porcha", "Home_State" : "California" }
{ "_id" : ObjectId("604b32f9ba7714caf075934d"), "name" : "Porcha", "Home_State" : "California", "Lucky_Number" : 8, "Birthday" : "January 29 1986" }
{ "_id" : ObjectId("604b382ed35b75937fda0c44"), "name" : "Octavia", "Home_State" : "California", "Lucky_Number" : 37, "Birthday" : "March 24 1984" }
> db.students.find({Lucky_Number:{$gt: 3}})
{ "_id" : ObjectId("604b32f9ba7714caf075934d"), "name" : "Porcha", "Home_State" : "California", "Lucky_Number" : 8, "Birthday" : "January 29 1986" }
{ "_id" : ObjectId("604b382ed35b75937fda0c44"), "name" : "Octavia", "Home_State" : "California", "Lucky_Number" : 37, "Birthday" : "March 24 1984" }
{ "_id" : ObjectId("604b38f5d35b75937fda0c46"), "name" : "Lazeria", "Home_State" : "Seattle", "Lucky_Number" : 7, "Birthday" : "November 6 2002" }
{ "_id" : ObjectId("604b399ad35b75937fda0c47"), "name" : "Aariona", "Home_State" : "FL", "Lucky_Number" : 8, "Birthday" : "October 23 2000" }
> db.students.find({Lucky_Number:{$lte: 10}})
{ "_id" : ObjectId("604b32f9ba7714caf075934d"), "name" : "Porcha", "Home_State" : "California", "Lucky_Number" : 8, "Birthday" : "January 29 1986" }
{ "_id" : ObjectId("604b38b6d35b75937fda0c45"), "name" : "Verlin", "Home_State" : "Seattle", "Lucky_Number" : 2, "Birthday" : "July 16 1998" }
{ "_id" : ObjectId("604b38f5d35b75937fda0c46"), "name" : "Lazeria", "Home_State" : "Seattle", "Lucky_Number" : 7, "Birthday" : "November 6 2002" }
{ "_id" : ObjectId("604b399ad35b75937fda0c47"), "name" : "Aariona", "Home_State" : "FL", "Lucky_Number" : 8, "Birthday" : "October 23 2000" }
> db.students.find({Lucky_Number:{$in: 9}})
Error: error: {
	"ok" : 0,
	"errmsg" : "$in needs an array",
	"code" : 2,
	"codeName" : "BadValue"
}
> 
"ok" : 0,
"errmsg" : "$in needs an array",
"code" : 2,
"codeName" : "BadValue"
}

@(shell):1:68
> db.students.update({ "_id" : ObjectId("604b382ed35b75937fda0c44")}. {$push: {interests: 'Taxes'}})
2021-03-12T02:13:57.824-0800 E  QUERY    [js] uncaught exception: SyntaxError: missing name after . operator :
@(shell):1:68
> db.students.update({QUERY}, {$pull: {Lucky_Number: 8}})
2021-03-12T02:15:35.717-0800 E  QUERY    [js] uncaught exception: ReferenceError: QUERY is not defined :
@(shell):1:21
> 
