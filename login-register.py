import pymongo
from pymongo import MongoClient
from fastapi import FastAPI
import nltk
from nltk.tokenize import word_tokenize
from nltk.chunk import ne_chunk

app = FastAPI()

myclient = MongoClient('mongodb+srv://admin:VNoZe9vgMBAh27VS@cluster0.jvgewfr.mongodb.net/ADG-Hack')
ADGHack = myclient["ADG-Hack"]
UserDB = ADGHack["User"]
dastDB = ADGHack["DAST"]
dTrack = ADGHack["dailyTracking"]


def addUser(userid=None,password=None,name=None,age=None,height=None,weight=None,bloodGrp=None,college=None,city=None):
    tempDict = {}
    
    if(userid is not None):
        tempDict["userid"] = userid
    if(password is not None):
        tempDict["password"] = password
    if(name is not None):
        tempDict["name"] = name
    if(age is not None):
        tempDict["age"] = age
    if(height is not None):
        tempDict["height"] = height
    if(weight is not None):
        tempDict["weight"] = weight
    if(bloodGrp is not None):
        tempDict["bloodGrp"] = bloodGrp
    if(college is not None):
        tempDict["college"] = college
    if(city is not None):
        tempDict["city"] = city
    
    res = UserDB.find_one({"userid":userid})
    if res is not None:
        UserDB.update_one({"userid":userid},{"$set":tempDict})
    else:
        UserDB.insert_one(tempDict)

def addAddiction(userid=None,addiction=None,background=None,emergencyName=None,emergencyEmail=None,emergencyContact=None):
    tempDict = {}
    if(userid is not None):
        tempDict["userid"] = userid
    if(addiction is not None):
        tempDict["addiction"] = addiction
    if(background is not None):
        tempDict["background"] = background
    if(emergencyName is not None):
        tempDict["emergencyName"] = emergencyName
    if(emergencyEmail is not None):
        tempDict["emergencyEmail"] = emergencyEmail
    if(emergencyContact is not None):
        tempDict["emergencyContact"] = emergencyContact

    res = UserDB.find_one({"userid":userid})
    if res is not None:
        UserDB.update_one({"userid":userid},{"$set":tempDict})
    else:
        UserDB.insert_one(tempDict)

def addDAST(userid,Q1=None,Q2=None,Q3=None,Q4=None,Q5=None,Q6=None,Q7=None,Q8=None,Q9=None,Q10=None):
    tempDict = {}
    DAST_score = 0;
    if(userid is not None):
        tempDict["userid"] = userid
    if(Q1 is not None):
        tempDict["Q1"] = Q1
        DAST_score = DAST_score + Q1
    if(Q2 is not None):
        tempDict["Q2"] = Q2
        DAST_score = DAST_score + Q2
    if(Q3 is not None):
        tempDict["Q3"] = Q3
        DAST_score = DAST_score + Q3
    if(Q4 is not None):
        tempDict["Q4"] = Q4
        DAST_score = DAST_score + Q4
    if(Q5 is not None):
        tempDict["Q5"] = Q5
        DAST_score = DAST_score + Q5
    if(Q6 is not None):
        tempDict["Q6"] = Q6
        DAST_score = DAST_score + Q6
    if(Q7 is not None):
        tempDict["Q7"] = Q7
        DAST_score = DAST_score + Q7
    if(Q8 is not None):
        tempDict["Q8"] = Q8
        DAST_score = DAST_score + Q8
    if(Q9 is not None):
        tempDict["Q8"] = Q9
        DAST_score = DAST_score + Q9
    if(Q10 is not None):
        tempDict["Q8"] = Q10
        DAST_score = DAST_score + Q10
    if(DAST_score>0):
        tempDict["score"]=DAST_score
    
    res = dastDB.find_one({"userid":userid})
    if res is not None:
        dastDB.update_one({"userid":userid},{"$set":tempDict})
    else:
        dastDB.insert_one(tempDict)
    
    return DAST_score
    
def addTracking(userid,date,status):
    tempDict = {}
    
    tempDict["userid"] = userid
    tempDict[date]=status


    res = dTrack.find_one({"userid":userid})
    if res is not None:
        dTrack.update_one({"userid":userid},{"$set":tempDict})
    else:
        dTrack.insert_one(tempDict)

def redact(text,alias="[REDACTED]"):
    words = word_tokenize(text)
    tree = ne_chunk(nltk.pos_tag(words))
    named_entities = []

    for subtree in tree.subtrees():
        print(subtree)
        if subtree.label() == 'PERSON':
            named_entities.extend([word for word, tag in subtree.leaves()])

    final_arr = [alias if item in named_entities else item for item in words]
    result_text = ' '.join(final_arr)
    #print(named_entities)
    return result_text

def getUser(userid):
    res1 = UserDB.find_one({"userid":userid})
    return res1;

def getUser(userid):
    res2 = dastDB.find_one({"userid":userid})
    return res2;

def getTrack(userid):
    res3 = dTrack.find_one({"userid":userid})
    return res3

def getStats(userid):
    res1 = UserDB.find_one({"userid":userid})
    res2 = dastDB.find_one({"userid":userid})
    res3 = dTrack.find_one({"userid":userid})
    dates = list(res3.keys())
    date = []
    return "hello"

@app.get('/')
def fun():
    usr1 = getUser("1")
    usr2 = getUser("2")
    print(usr1["background"])
    print(usr2["addiction"])
    return "Hello World"

@app.get("/user/")
async def read_user(userid:str, password:str,name:str=None,age:int=None,height:int=None,weight:int=None,bloodGrp:str=None,college:str=None,city:str=None):
    addUser(userid=userid,password=password,name=name,age=age,height=height,weight=weight,bloodGrp=bloodGrp,college=college,city=city)
    return "User Added"

@app.get("/DAST/")
async def read_DAST(userid:str,Q1:bool=None,Q2:bool=None,Q3:bool=None,Q4:bool=None,Q5:bool=None,Q6:bool=None,Q7:bool=None,Q8:bool=None,Q9:bool=None,Q10:bool=None):
    return addDAST(userid=userid,Q1=Q1,Q2=Q2,Q3=Q3,Q4=Q4,Q5=Q5,Q6=Q6,Q7=Q7,Q8=Q8,Q9=Q9,Q10=Q10)

@app.get("/addiction/")
async def add_addiction(userid:str,addiction:str,background:str=None,emergencyName:str=None,emergencyEmail:str=None,emergencyContact:str=None):
    addAddiction(userid=userid,addiction=addiction,background=background,emergencyContact=emergencyContact,emergencyName=emergencyName,emergencyEmail=emergencyEmail)
    return "Addiction Updated"

@app.get("/track/")
def Tracking(userid:str,date:str,status:str):
    addTracking(userid=str(userid),date=str(date),status=str(status))
    return "Tracking Updated"

@app.get("/redact/")
def anonymize(text:str,nickname:str="[REDACTED]"):
    return redact(text=text,alias=nickname)




#addUser(userid="123",age=35)

