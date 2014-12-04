var data = {
    "_id" : "547524b723f1a10000ddc66f",
    "status" : "shut",
    "capacity" : "cap:70; enroll:69;avail:1",
    "availableSeats" : "0",
    "prop" : "q",
    "courseNum" : "CS121G",
    "crn" : "13418",
    "note" : " LECTURE. STUDENT MUST ALSO REGISTER FOR A RECITATION SECTION ",
    "description" : "Introduction to Information Literacy and Research for Scientists",
    "times" : "1745-1900",
    "days" : "MW",
    "location" : "DIEHN  1103",
    "instructor" : "SYMPSON, W",
    "i_user" : "",
    "unknown1" : "0",
    "unknown2" : "X",
    "unknown3" : "",
    "unknown4" : "dupeven",
    "unknown5" : "A",
    "unknown6" : "N",
    "listing" : {
        "title" : "Introduction to Information Literacy and Research for Scientists",
        "hours" : "3 Credits",
        "description" : "\nLecture 3 hours; 3 credits.  Students will learn to locate, manage, critically evaluate and use information for scientific problem solving and research.  Includes mathematical tools for data analysis and presentation and office and collaborative tools, as well.  Information security, laws and etiquette related to use and access of information are covered.\n",
        "code" : "CS121G"
    },
    "notified" : "2014-12-04T04:47:15.000Z",
    "lastModified" : "2014-11-26T00:54:15.215Z",
    "subscribers" : [ 
        {
            "textPreference" : "true",
            "access" : "student",
            "email" : "oratt001@gmail.com",
            "password" : "$2a$08$ziAqVP9Gvo/p3ULvTufjGuoYr1NG/ha1aF3kodI2ohnV8tNsQn.xW",
            "firstName" : "Lookmai",
            "lastName" : "Rattana",
            "phoneNumber" : "7577739438"
        }
    ],
    "locked" : false,
    "__v" : 1
}
var util = require("./util");

util.notify(data);
